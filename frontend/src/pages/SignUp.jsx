// import {
//   Flex,
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   InputGroup,
//   HStack,
//   InputRightElement,
//   Stack,
//   Button,
//   Heading,
//   Text,
//   useColorModeValue,
//   Link,
// } from "@chakra-ui/react";
// import { useState } from "react";
// import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
// import axios from "axios";

// export default function Signup() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const userData = {
//       username,
//       email,
//       password,
//     };

//     fetch("https://nemclasspractice.onrender.com/user/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userData),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });

//     return (
//       <Flex
//         minH={"100vh"}
//         align={"center"}
//         justify={"center"}
//         bg={useColorModeValue("gray.50", "gray.800")}
//       >
//         <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
//           <Stack align={"center"}>
//             <Heading fontSize={"4xl"} textAlign={"center"}>
//               Sign up here...!
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
//                 <Box>
//                   <FormControl id="firstName" isRequired>
//                     <FormLabel>First Name</FormLabel>
//                     <Input type="text" />
//                   </FormControl>
//                 </Box>
//                 <Box>
//                   <FormControl id="lastName">
//                     <FormLabel>Last Name</FormLabel>
//                     <Input type="text" />
//                   </FormControl>
//                 </Box>
//               </HStack>
//               <FormControl id="email" isRequired>
//                 <FormLabel>Email address</FormLabel>
//                 <Input type="email" />
//               </FormControl>
//               <FormControl id="password" isRequired>
//                 <FormLabel>Password</FormLabel>
//                 <InputGroup>
//                   <Input type={showPassword ? "text" : "password"} />
//                   <InputRightElement h={"full"}>
//                     <Button
//                       variant={"ghost"}
//                       onClick={() =>
//                         setShowPassword((showPassword) => !showPassword)
//                       }
//                     >
//                       {showPassword ? <ViewIcon /> : <ViewOffIcon />}
//                     </Button>
//                   </InputRightElement>
//                 </InputGroup>
//               </FormControl>
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
//                   Sign up
//                 </Button>
//               </Stack>
//               <Stack pt={6}>
//                 <Text align={"center"}>
//                   Already a user? <Link color={"blue.400"}>Login</Link>
//                 </Text>
//               </Stack>
//             </Stack>
//           </Box>
//         </Stack>
//       </Flex>
//     );
//   };
// }

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  IconButton,
  Input,
  SimpleGrid,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { registerUser } from "../Redux/registerReducer/action";
import {
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "../Redux/registerReducer/actionTypes";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [fName, setFname] = useState("");
  const [LName, setLname] = useState("");
  const [password, setPass] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleRegister = () => {
    const regData = {
      email,
      password,
      gender,
      city,
      name: `${fName + " " + LName}`,
    };
    console.log(regData);
    dispatch({ type: REGISTER_REQUEST });

    axios
      .post(`https://justserve.onrender.com/users/register`, regData)
      .then((res) => {
        dispatch({ type: REGISTER_SUCCESS });
        toast({
          position: "top",
          title: `User has been Registered Succesfully`,
          status: "success",
          duration: 1000,
          isClosable: true,
        });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        toast({
          position: "top",
          title: `${err.response.data.error}`,
          status: "success",
          duration: 1000,
          isClosable: true,
        });
        dispatch({ type: REGISTER_FAILURE });
      });
    // dispatch(registerUser(regData));
    setEmail("");
    setFname("");
    setLname("");
    setPass("");
    setGender("");
    setCity("");
    navigate("/");
  };

  return (
    <Box
      // bg="#f9efef"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgImage="url(https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)"
    >
      <Box
        w={{ base: "300px", md: "400px", lg: "600px" }}
        m="auto"
        p={50}
        rounded={10}
        bg="white"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        textAlign="center"
        background={"rgba(0, 0, 0, .2)"}
        _hover={{
          bg: "white",
        }}
      >
        <Heading fontWeight={500}>Signup</Heading>
        <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} spacing={5} mt={10}>
          <FormControl isRequired>
            <FormLabel>First Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter name"
              value={fName}
              onChange={(e) => setFname(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter last name"
              value={LName}
              onChange={(e) => setLname(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPass(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Gender</FormLabel>
            <Input
              type="text"
              placeholder="Enter Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>City</FormLabel>
            <Input
              type="text"
              placeholder="Enter city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </FormControl>
        </SimpleGrid>
        <Button
          mt={10}
          bg="rgb(15,115,227)"
          _hover={{
            bg: "rgb(15,115,227)",
          }}
          color="white"
          onClick={handleRegister}
        >
          Signup
        </Button>
        <Text mt={5}>OR</Text>
        <Flex mt={5}>
          <Box m="auto" alignItems="center">
            <Button mr={5}>
              <IconButton color="blue" fontSize="20px" icon={<FcGoogle />} />
              GOOGLE
            </Button>
            <Button>
              <IconButton
                color="blue"
                fontSize="20px"
                icon={<AiOutlineFacebook />}
              />
              FACEBOOK
            </Button>
          </Box>
        </Flex>

        <HStack mt={5} alignItems="center" justifyContent="center">
          <Text>Already have an account?</Text>
          <NavLink to="/login">
            <Text color="rgb(15,115,227)">Login</Text>
          </NavLink>
        </HStack>
      </Box>
    </Box>
  );
};

export default SignUp;
