// import {
//   Flex,
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   HStack,
//   Stack,
//   Button,
//   Heading,
//   useColorModeValue,
//   Alert,
//   AlertIcon,
// } from "@chakra-ui/react";
// import React, { useState, useRef, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function Signup() {
//   const [isOtpVerified, setIsOtpVerified] = useState(false);
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [show, setShow] = useState(false);
//   const [otpSent, setOtpSent] = useState(false);
//   const [verificationMessage, setVerificationMessage] = useState("");
//   const [name, setName] = useState("");
//   const [dob, setDob] = useState("");
//   const [emailRegisteredMessage, setEmailRegisteredMessage] = useState("");
//   const otpInputRef = useRef(null);
//   const navigate = useNavigate();
//   const emailRegex = /^[^\s@]+@[^\s@]+\.(com)$/i;

//   const sendEmail = async (e) => {
//     e.preventDefault();
//     setVerificationMessage("");

//     // Check if required fields are filled in

//     if (
//       !name ||
//       !email ||
//       !dob ||
//       (!otpSent && !email) ||
//       !emailRegex.test(email)
//     ) {
//       setVerificationMessage(
//         <span style={{ color: "red" }}>
//           All required fields must be filled in, or email must be in a valid
//           format.
//         </span>
//       );

//       return;
//     }
//     if (!otpSent) {
//       // Send OTP logic
//       const res = await fetch("http://localhost:7786/send-otp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email,
//         }),
//       });

//       const data = await res.json();

//       if (data.status === 201) {
//         setShow(true);
//         setOtpSent(true);
//         setVerificationMessage("");
//         otpInputRef.current.focus();
//       }
//       if (data.status === 400) {
//         console.log(setEmailRegisteredMessage, "dhgqdgqgdu");
//       } else {
//         setEmailRegisteredMessage("This email is already registered");
//         setEmail("");
//         setName("");
//         setDob("");
//       }
//       // else if (data.status === 400) {
//       //   setVerificationMessage("This email is already registered");
//       // } else {
//       //   console.log("Error:", data.message);
//       // }
//     } else {
//       // Verify OTP logic
//       const res = await fetch("/verify-otp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email,
//           otp,
//         }),
//       });

//       const data = await res.json();

//       if (data.status === 201) {
//         setIsOtpVerified(true);
//         setVerificationMessage("Registered successfully");
//         const registerRes = await fetch("http://localhost:7786/register", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             name,
//             email,
//             dob,
//           }),
//         });
//         const registerData = await registerRes.json();
//         navigate("/login");
//         if (registerData.status === 200) {
//           setVerificationMessage("User registered successfully");
//         }
//         //  else if (registerData.status === 400) {
//         //   console.log("else wala");
//         //   setVerificationMessage("This email is already registered");
//         // }
//       } else if (data.status === 401) {
//         setVerificationMessage("Invalid OTP");
//       } else {
//         console.log("Error:", data.message);
//       }
//     }
//   };
//   useEffect(() => {
//     if (show) {
//       const timer = setTimeout(() => {
//         setShow(false);
//       }, 3000);

//       return () => {
//         clearTimeout(timer);
//       };
//     }
//   }, [show]);

//   // const showAlert = () => {
//   //   setShow(true);
//   //   // Set otpSent based on your logic
//   //   setOtpSent(true);
//   // };

//   return (
//     <>
//       {show ? (
//         <Alert status="success">
//           <AlertIcon />
//           {otpSent ? "OTP Sent Successfully" : "This Email"}
//         </Alert>
//       ) : null}
//       <Flex
//         minH={"100vh"}
//         align={"center"}
//         justify={"center"}
//         bg={useColorModeValue("gray.50", "gray.800")}
//       >
//         <Stack
//           spacing={4}
//           w={["100%", "100%", "80%"]}
//           maxW={"2xl"}
//           py={2}
//           px={[4, 6]}
//         >
//           <Stack align={"center"}>
//             <Heading fontSize={["2xl", "4xl"]} textAlign={"center"}>
//               {" "}
//               Sign up
//             </Heading>
//           </Stack>
//           <Box
//             rounded={"lg"}
//             bg={useColorModeValue("white", "gray.700")}
//             boxShadow={"lg"}
//             p={8}
//           >
//             <Stack spacing={4}>
//               <HStack>
//                 <FormControl id="firstName" isRequired>
//                   <FormLabel>First Name</FormLabel>
//                   <Input
//                     type="text"
//                     name="name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     placeholder="Enter Name here"
//                   />
//                 </FormControl>
//               </HStack>
//               <FormControl id="email" isRequired>
//                 <FormLabel>Email address</FormLabel>
//                 <Input
//                   type="email"
//                   name="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Enter email"
//                 />
//               </FormControl>

//               <FormControl id="dob" isRequired>
//                 <FormLabel>DOB</FormLabel>
//                 <Input
//                   type="Date"
//                   name="dob"
//                   value={dob}
//                   onChange={(e) => setDob(e.target.value)}
//                   placeholder=""
//                 />
//               </FormControl>

//               {otpSent && (
//                 <FormControl id="otp" isRequired>
//                   <FormLabel>Enter OTP</FormLabel>
//                   <Input
//                     type="text"
//                     name="otp"
//                     value={otp}
//                     onChange={(e) => setOtp(e.target.value)}
//                     placeholder="Enter OTP"
//                     ref={otpInputRef}
//                   />
//                 </FormControl>
//               )}
//               <Button colorScheme="blue" type="submit" onClick={sendEmail}>
//                 {otpSent ? "Verify OTP" : "Send OTP"}
//               </Button>
//               {verificationMessage && (
//                 <div className="mt-2">
//                   <Alert
//                     variant={
//                       verificationMessage === "Invalid OTP"
//                         ? "danger"
//                         : "success"
//                     }
//                   >
//                     {verificationMessage}
//                   </Alert>
//                 </div>
//               )}
//               {emailRegisteredMessage && (
//                 <div className="mt-2">
//                   <Alert variant="danger">{emailRegisteredMessage}</Alert>
//                 </div>
//               )}
//               <p>
//                 Already have an account? <Link to="/login"> SignIn</Link>
//               </p>
//               {/* <FormControl id="OTP" isRequired>
//                 <FormLabel>OTP</FormLabel>
//                 <Input type="number" />
//               </FormControl> */}

//               {/* 
//               <Stack spacing={10} pt={2}>
//                 <Button
//                   loadingText="Submitting"
//                   size="lg"
//                   bg={"blue.400"}
//                   color={"white"}
//                   _hover={{
//                     bg: "blue.500",
//                   }}
//                 >
//                   Sent Otp
//                 </Button>
//               </Stack> */}
//               {/* <Stack pt={6}>
//                 <Text align={"center"}>
//                   Already a user? <Link color={"blue.400"}>Login</Link>
//                 </Text>
//               </Stack> */}
//             </Stack>
//           </Box>
//         </Stack>
//       </Flex>
//     </>
//   );
// }


import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Signup() {
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [show, setShow] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState("");
  const [name, setName] = useState("");
  const [fathersname, setFathersname] = useState("");
  const [mothersname, setMothersname] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  const [emailRegisteredMessage, setEmailRegisteredMessage] = useState("");
  const otpInputRef = useRef(null);
  const navigate = useNavigate();
  const emailRegex = /^[^\s@]+@[^\s@]+\.(com)$/i;

  const sendEmail = async (e) => {
    e.preventDefault();
    setVerificationMessage("");

   

    if (
      !name ||
      !email ||
      !dob ||
      !fathersname ||
      !mothersname ||
      !mobile ||
      (!otpSent && !email) ||
      !emailRegex.test(email)
    ) {
      setVerificationMessage(
        <span style={{ color: "red" }}>
          All required fields must be filled in, or email must be in a valid
          format.
        </span>
      );

      return;
    }
    if (!otpSent) {
      // Send OTP logic
      const res = await fetch("http://localhost:7786/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      const data = await res.json();

      if (data.status === 201) {
        setShow(true);
        setOtpSent(true);
        setVerificationMessage("");
        otpInputRef.current.focus();
      }
      if (data.status === 400) {
        console.log(setEmailRegisteredMessage, "dhgqdgqgdu");
      } else {
        setEmailRegisteredMessage("This email is already registered");
        setEmail("");
        setName("");
        setDob("");
      }
      // else if (data.status === 400) {
      //   setVerificationMessage("This email is already registered");
      // } else {
      //   console.log("Error:", data.message);
      // }
    } else {
      // Verify OTP logic
      const res = await fetch("/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          otp,
        }),
      });

      const data = await res.json();

      if (data.status === 201) {
        setIsOtpVerified(true);
        setVerificationMessage("Registered successfully");
        const registerRes = await fetch("http://localhost:7786/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            dob,
            fathersname,
            mothersname,
            mobile,
          }),
        });
        const registerData = await registerRes.json();
        navigate("/studentlogin");
        if (registerData.status === 200) {
          setVerificationMessage("User registered successfully");
        }
        //  else if (registerData.status === 400) {
        //   console.log("else wala");
        //   setVerificationMessage("This email is already registered");
        // }
      } else if (data.status === 401) {
        setVerificationMessage("Invalid OTP");
      } else {
        console.log("Error:", data.message);
      }
    }
  };
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setShow(false);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [show]);

  return (
    <>
      {show ? (
        <Alert status="success">
          <AlertIcon />
          {otpSent ? "OTP Sent Successfully" : "This Email"}
        </Alert>
      ) : null}
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          spacing={4}
          w={["100%", "100%", "80%"]}
          maxW={"2xl"}
          py={2}
          px={[4, 6]}
        >
          <Stack align={"center"}>
            <Heading fontSize={["2xl", "4xl"]} textAlign={"center"}>
              {" "}
              STUDENT SIGN UP
            </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="fathersname" isRequired>
                <FormLabel>Fathers Name</FormLabel>
                <Input
                  type="text"
                  name="fathersname"
                  value={fathersname}
                  autoComplete="off"
                  onChange={(e) => setFathersname(e.target.value)}
                />
              </FormControl>
              <FormControl id="mothersname" isRequired>
                <FormLabel>Mothers Name</FormLabel>
                <Input
                  type="text"
                  name="mothersname"
                  value={mothersname}
                  autoComplete="off"
                  onChange={(e) => setMothersname(e.target.value)}
                />
              </FormControl>
              <FormControl id="mobile" isRequired>
                <FormLabel>Mobile Number</FormLabel>
                <Input
                  type="number"
                  name="mobile"
                  value={mobile}
                  autoComplete="off"
                  onChange={(e) => setMobile(e.target.value)}
                />
              </FormControl>

              <FormControl id="dob" isRequired>
                <FormLabel>DOB</FormLabel>
                <Input
                  type="Date"
                  name="dob"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  autoComplete="off"
                />
              </FormControl>

              {otpSent && (
                <FormControl id="otp" isRequired>
                  <FormLabel>Enter OTP</FormLabel>
                  <Input
                    type="number"
                    name="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    ref={otpInputRef}
                  />
                </FormControl>
              )}
              <Button colorScheme="blue" type="submit" onClick={sendEmail}>
                {otpSent ? "Verify OTP" : "Send OTP"}
              </Button>
              {verificationMessage && (
                <div className="mt-2">
                  <Alert
                    variant={
                      verificationMessage === "Invalid OTP"
                        ? "danger"
                        : "success"
                    }
                  >
                    {verificationMessage}
                  </Alert>
                </div>
              )}
              {emailRegisteredMessage && (
                <div className="mt-2">
                  <Alert variant="danger">{emailRegisteredMessage}</Alert>
                </div>
              )}
              <p>
                Already have an account? <Link to="/studentlogin"> SignIn</Link>
              </p>
              {/* <FormControl id="OTP" isRequired>
                <FormLabel>OTP</FormLabel>
                <Input type="number" />
              </FormControl> */}

              {/* 
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sent Otp
                </Button>
              </Stack> */}
              {/* <Stack pt={6}>
                <Text align={"center"}>
                  Already a user? <Link color={"blue.400"}>Login</Link>
                </Text>
              </Stack> */}
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}