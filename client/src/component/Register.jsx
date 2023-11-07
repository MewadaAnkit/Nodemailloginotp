import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
  import { useFormik } from "formik";
  import * as yup from "yup";
  import { Link } from "react-router-dom";
  import { useState } from "react";
  import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
  
  const validationSchema = yup.object({
    email: yup.string().required("Email is required"),
    Password: yup.string().required("Password is required"),
    mobile: yup.string().required("Mobile number is required"),
    Branch: yup.string().required("Branch is required"),
    Gender: yup.string().required("Gender is required"),
  });
  
export default function Register() {
    const formik = useFormik({
      initialValues: {
        email: "",
        Password: "",
        mobile: "",
        Branch: "",
        Gender: "",
      },
      validationSchema: validationSchema,
      onSubmit: async (values, event) => {
        const data = new FormData(event.currentTarget);
        try {
          const response = await fetch("http://localhost:7786/api/hod/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });
  
          if (response.ok) {
            const data = await response.json();
            const user = data.userResponse;
            localStorage.setItem("AnkitHOD", JSON.stringify(user));
            console.log("Registration successful");
            // Handle successful registration, e.g., navigate to another page
          } else {
            console.error("Registration failed");
            // Handle registration failure, e.g., show an error message
          }
        } catch (error) {
          console.error("An error occurred:", error);
          // Handle any unexpected errors
        }
      },
    });
  
    const [showPassword, setShowPassword] = useState(false);
  
    return (
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
            ADMIN SIGN UP
            </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <form onSubmit={formik.handleSubmit} noValidate>
              <Stack spacing={4}>
                <FormControl id="email" isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.email && formik.errors.email ? true : false
                    }
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </FormControl>
                <FormControl id="Password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      name="Password"
                      value={formik.values.Password}
                      onChange={formik.handleChange}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <FormControl id="mobile" isRequired>
                  <FormLabel>Mobile</FormLabel>
                  <Input
                    type="text"
                    name="mobile"
                    value={formik.values.mobile}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.mobile && formik.errors.mobile ? true : false
                    }
                    helperText={formik.touched.mobile && formik.errors.mobile}
                  />
                </FormControl>
                <HStack>
                  <Box flex="1">
                    <FormControl id="Branch" isRequired>
                      <FormLabel>Branch</FormLabel>
                      <Input
                        type="text"
                        name="Branch"
                        value={formik.values.Branch}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.Branch && formik.errors.Branch
                            ? true
                            : false
                        }
                        helperText={formik.touched.Branch && formik.errors.Branch}
                      />
                    </FormControl>
                  </Box>
                  <Box flex="1">
                    <FormControl id="Gender" isRequired>
                      <FormLabel>Gender</FormLabel>
                      <Input
                        type="text"
                        name="Gender"
                        value={formik.values.Gender}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.Gender && formik.errors.Gender
                            ? true
                            : false
                        }
                        helperText={formik.touched.Gender && formik.errors.Gender}
                      />
                    </FormControl>
                  </Box>
                </HStack>
                <Stack spacing={4}>
                  <Button
                    loadingText="Submitting"
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    type="submit"
                  >
                    Sign up
                  </Button>
                  {/* <Text align={"center"}>
                    Already a user? <Link color={"blue.400"}>Login</Link>
                  </Text> */}
  
                  <p>
                    Already a user?
                    <Link to="/adminlogin">Login</Link>
                  </p>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    );
  }
  