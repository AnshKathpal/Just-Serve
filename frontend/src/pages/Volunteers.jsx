import { Box, Center, Flex, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProductBox from "./ProductBox";
import SidebarBox from "./SidebarBox";
import axios from "axios";
import { getVolunteer } from "../Redux/VolunteerReducer/action";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Pagination from "../Components/Pagination";

const Volunteers = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);

  const initPage = searchParams.get("page");
  // const [page, setPage] = useState(initpage || 1);
  const [currentPage, setCurrentPage] = useState(1);

  const volunteers = useSelector(
    (store) => store.volunteerReducer.volunteers.data
  );
  const totalVolunteers = useSelector(
    (store) => store.volunteerReducer.volunteers.totalPages
  );
  const dispatch = useDispatch();
  //   console.log(volunteers);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    setSearchParams({ page: newPage.toString() });
  };

  let obj = {
    params: {
      location: searchParams.getAll("location"),
      type: searchParams.getAll("type"),
      page: currentPage,
      limit: 5,
    },
  };

  useEffect(() => {
    const initPage = searchParams.get("page");
    setCurrentPage(initPage ? parseInt(initPage) : 1);
    dispatch(getVolunteer(obj));
  }, [searchParams, currentPage, dispatch]);

  //   console.log(data);

  return (
    <Box w={"90%"} margin={"auto"}>
      <Flex>
        {/* Sidebar */}
        <SidebarBox />

        <Flex
          gap={"20px"}
          //   border={"1px solid red"}
          p={4}
          w={"100%"}
          flexWrap="wrap"
          flexDirection={"row"}
        >
          {/* ProductBox */}
          {volunteers?.map((product, index) => (
            <ProductBox key={index} {...product} />
          ))}
        </Flex>
      </Flex>

      {/* Pagination */}
      <Box>
        <Pagination
          totalPages={totalVolunteers}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </Box>
    </Box>
  );
};

export default Volunteers;
