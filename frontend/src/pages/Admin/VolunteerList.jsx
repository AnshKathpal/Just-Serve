import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVolunteer } from "../../Redux/AdminReducer/action";
import { deleteVolunteer } from "../../Redux/AdminReducer/action";
import {
  Button,
  Box,
  Flex,
  Text,
  Grid,
  SimpleGrid,
  VStack,
  Tooltip
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiList,
  FiBell,
  FiChevronDown,
  FiEdit2,
  FiUsers,
  FiUserPlus,
  FiTrash,
} from "react-icons/fi";

export const VolunteerList = () => {
  const dispatch = useDispatch();

  const volunteerData = useSelector(
    (store) => store.adminReducer.volunteers.data
  );
  console.log(volunteerData);

  useEffect(() => {
    dispatch(getVolunteer);
  }, []);

  function handleDelete(volunteerId) {
    dispatch(deleteVolunteer(volunteerId))
      .then((res) => {
        console.log(res);
        dispatch(getVolunteer);
      })
      .catch((err) => {
        console.log(err);
      });
  }


  return (
    <>
      <Text fontSize="4xl">All Volunteering Opportunities</Text>

      <SimpleGrid padding="10px" columns={2} gap="10px">
        {volunteerData?.length > 0 &&
          volunteerData.map((el) => (
            <Flex
              bg="white"
              boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;"
              cursor="pointer"
              key={el.id}
            >
              <Flex padding="5px" width="40%">
                <img src={el.image} alt="" />
              </Flex>
              <Box padding="20px" width="60%">
                <Text
                  _hover={{
                    color: "rgb(15,115,217)",
                  }}
                  fontFamily="heading"
                  fontStyle="unset"
                  textAlign="left"
                  fontWeight="bold"
                  fontSize="xl"
                >
                  {el.role}
                </Text>
                <Text fontFamily="heading"
                  fontStyle="unset" fontWeight="bold" textAlign="left">{el.name}</Text>
                <Text textAlign="left">
                  <span style={{ color: "green" }}>{el.typeofwork}</span> -{" "}
                  {el.location}{" "}
                </Text>
                <Text textAlign="left">Posted on {el.updated}</Text>
              </Box>
              <VStack justifyContent="space-evenly">
                <NavLink to={`/editvolunteer/${el._id}`}>
                <Tooltip label='Edit'>
                  <Button
                    width="80%"
                    bg="white"
                    leftIcon={<FiEdit2 />}
                  ></Button>
                  </Tooltip>
                </NavLink>
                <Tooltip label = "Delete">
                <Button onClick={() => handleDelete(el._id)} width="80%" bg="white" leftIcon={<FiTrash />}></Button>
                </Tooltip>
                
              </VStack>
            </Flex>
          ))}
      </SimpleGrid>
    </>
  );
};
