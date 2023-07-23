import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  IconButton,
  Input,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { userDetails } from "../Redux/loginReducer/action";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../Redux/loginReducer/actionTypes";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();

  const handleLogin = () => {
    const loginData = {
      email,
      password,
    };
    dispatch({ type: LOGIN_REQUEST });
    axios
      .post(`https://justserve.onrender.com/users/login`, loginData)
      .then((res) => {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.role });
        toast({
          position: "top",
          title: `${res.data.msg}`,
          status: "success",
          duration: 1000,
          isClosable: true,
        });

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("refreshtoken", res.data.refreshToken);

        if (email.includes("@justserve.com")) {
          navigate("/admin");
        } else {
          navigate("/");
        }
        console.log(res.data);
      })
      .catch((err) => {
        toast({
          position: "top",
          title: `${err.response.data.msg}`,
          status: "error",
          duration: 4000,
          isClosable: true,
        });
        console.log(err);
        dispatch({ type: LOGIN_FAILURE });
      });

    setEmail("");
    setPassword("");
  };


  return (
    <Box
      bg="#f9efef"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      py={10}
    >
      <Box
        w={{ base: "300px", md: "400px", lg: "600px" }}
        m="auto"
        p={50}
        rounded={10}
        bg="white"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      >
        <Heading fontWeight={500} textAlign={"center"}>
          Login
        </Heading>
        <VStack
          m="auto"
          p={{ base: "10px", md: "20px", lg: "50px" }}
          spacing={5}
          mb={5}
        >
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
        </VStack>
        <Center>
          <Button
            bg="rgb(15,115,227)"
            _hover={{
              bg: "rgb(15,115,227)",
            }}
            color="white"
            onClick={handleLogin}
          >
            Login
          </Button>
        </Center>
        <Text mt={5} textAlign={"center"}>
          Or log in with:
        </Text>
        <Flex
          mt={5}
          direction={{ base: "column", md: "row" }}
          gap={5}
          align={"center"}
        >
          <Button mx={"auto"}>
            <IconButton color="blue" fontSize="20px" icon={<FcGoogle />} />
            GOOGLE
          </Button>
          <Button mx={"auto"}>
            <IconButton
              color="blue"
              fontSize="20px"
              icon={<AiOutlineFacebook />}
            />
            FACEBOOK
          </Button>
        </Flex>
        <HStack mt={5} alignItems="center" justifyContent="center">
          <Text>Need an account?</Text>
          <NavLink to="/signup">
            <Text color="rgb(15,115,227)">Signup</Text>
          </NavLink>
        </HStack>
      </Box>
    </Box>
  );
};

export default Login;
