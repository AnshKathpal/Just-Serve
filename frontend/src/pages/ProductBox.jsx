import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const ProductBox = ({ ...product }) => {
  const {
    image,
    name,
    role,
    description,
    location,
    schedule,
    updated,
    address,
    start_date,
    end_date,
    typeofwork,
  } = product;
  return (
    <Box
      w={"90%"}
      // maxW="200px"
      bg="white"
      p={4}
      borderRadius="md"
      boxShadow="md"
      textAlign="center"
      // border={"1px solid red"}
    >
      <Flex alignItems={"center"} p={2} flexDirection={"row"} flexWrap="wrap">
        {/* <Box> */}
        <Image
          src={image}
          alt={name}
          w={"30%"}
          maxH="30%"
          marginRight={"10px"}
        />
        {/* </Box> */}
        <Box>
          <Heading
            textAlign={"left"}
            p={"3px"}
            color={"gray.500"}
            fontSize={"12px"}
          >
            VOLUNTEER OPPORTUNITY
          </Heading>
          <Heading
            p={"3px"}
            textAlign={"left"}
            fontWeight="bold"
            fontSize="15px"
          >
            {name}
          </Heading>

          <Text p={"3px"} fontSize={"15px"} textAlign={"left"}>
            {role}
          </Text>

          <Heading p={"3px"} textAlign={"left"} fontSize={"12px"}>
            <Text as="mark">{typeofwork}</Text>&nbsp;{address}
          </Heading>

          <Text p={"3px"} textAlign={"left"} fontWeight={"3px"} fontSize={"xs"}>
            Date : {start_date} - {end_date}
          </Text>

          <Text p={"3px"} textAlign={"left"} fontSize={"xs"}>
            Posted {updated}
          </Text>

          {/* <Text fontSize={"xs"} textAlign={"left"} noOfLines={1}>
            {description}
          </Text> */}
        </Box>
        <Box margin={"auto"}>
          <NavLink to={"/volunteers/:id"}>
            <Button colorScheme="blue" bgColor="rgb(15,115,217)" size="md">
              Apply
            </Button>
          </NavLink>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductBox;
