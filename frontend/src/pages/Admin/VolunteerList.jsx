import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVolunteer } from "../../Redux/AdminReducer/action";
import {Button,Box } from "@chakra-ui/react"
import { NavLink } from "react-router-dom";

export const VolunteerList = () => {
  const dispatch = useDispatch();

  const volunteerData = useSelector((store) => store.adminReducer.volunteers.data);
  console.log(volunteerData);

  useEffect(() => {
    dispatch(getVolunteer);
  }, []);

  return (
    <>
      {volunteerData?.length > 0 &&
        volunteerData.map((el) => (
          <Box border="1px solid red" key={el.id}>
            {el.name} <br />
            {el.description} <br />
            {el.location} <br />
            {el.role} <br />
            {el.updated} <br />
            {el.start_date} <br />
            <NavLink to="/editvolunteer" >
            <Button>
              Edit
            </Button>
            </NavLink>
            
          </Box>
        ))}
    </>
  );
};
