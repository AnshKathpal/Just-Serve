import { Box, Center, Flex, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProductBox from "./ProductBox";
import SidebarBox from "./SidebarBox";
import axios from "axios";
import { getVolunteer } from "../Redux/VolunteerReducer/action";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

const Volunteers = () => {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const volunteers = useSelector(
    (store) => store.volunteerReducer.volunteers.data
  );
  const dispatch = useDispatch();
//   console.log(volunteers);

  let obj = {
    params: {
      location: searchParams.getAll("location"),
      type: searchParams.getAll("type"),
    },
  };

  useEffect(() => {
    dispatch(getVolunteer(obj));
  }, [searchParams]);

  //   console.log(data);

  return (
    <Box w={"90%"} margin={"auto"}>
      <Flex>
        {/* Sidebar */}
        <SidebarBox />

        {/* Main content */}
        <Flex
          gap={"20px"}
        //   border={"1px solid red"}
          p={4}
          w={"100%"}
          flexWrap="wrap"
          flexDirection={"row"}
        >
          {/* <SimpleGrid columns={{ sm: 1, md: 1, lg: 1 }}> */}
          {volunteers?.map((product, index) => (
            <ProductBox key={index} {...product} />
          ))}
          {/* </SimpleGrid> */}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Volunteers;
