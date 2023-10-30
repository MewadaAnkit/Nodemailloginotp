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
  } from "@chakra-ui/react";
  import React, { useState, useRef } from "react";
  import Alert from "react-bootstrap/Alert";
  import { useNavigate } from "react-router-dom";
  import { Formik, Form, Field } from "formik";
  import * as Yup from "yup";
  
  
  export default function Signup() {
    const [isOtpVerified, setIsOtpVerified] = useState(false);
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [show, setShow] = useState(false);
    const [otpSent, setOtpSent] = useState(false);
    const [verificationMessage, setVerificationMessage] = useState("");
    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const otpInputRef = useRef(null);
    const navigate = useNavigate();
  
    const sendEmail = async (e) => {
      e.preventDefault();
      setVerificationMessage("");
  
      // Check if required fields are filled in
      if (!name || !email || !dob || (!otpSent && !email)) {
        setVerificationMessage(
          <span style={{ color: "red" }}>
            All required fields must be filled in.
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
        } else if (data.status === 400) {
          setVerificationMessage("This email is already registered");
        } else {
          console.log("Error:", data.message);
        }
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
            }),
          });
          const registerData = await registerRes.json();
          navigate("/login");
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
  
    return (
      <>
        {show ? (
          <Alert variant="primary" dismissible>
            {otpSent ? "OTP Sent Successfully" : "This Email"}
          </Alert>
        ) : null}
        <Flex
          minH={"100vh"} // Increase the height
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack
            spacing={4}
            w={["100%", "100%", "80%"]} // Responsive maxW
            maxW={"2xl"} // Increase the maximum width
            py={2}
            px={[4, 6]}
          >
            <Stack align={"center"}>
              <Heading fontSize={["2xl", "4xl"]} textAlign={"center"}>
                {" "}
                {/* Responsive font size */}
                Sign up
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
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter Name here"
                    />
                  </FormControl>
                </HStack>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                  />
                </FormControl>
  
                <FormControl id="dob" isRequired>
                  <FormLabel>DOB</FormLabel>
                  <Input
                    type="Date"
                    name="dob"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    placeholder=""
                  />
                </FormControl>
  
                {otpSent && (
                  <FormControl id="otp" isRequired>
                    <FormLabel>Enter OTP</FormLabel>
                    <Input
                      type="text"
                      name="otp"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="Enter OTP"
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
  