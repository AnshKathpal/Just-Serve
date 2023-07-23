import { Box, Center, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProductBox from "./ProductBox";
import SidebarBox from "./SidebarBox";
import axios from "axios";
import { getVolunteer } from "../Redux/VolunteerReducer/action";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Pagination from "../Components/Pagination";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import TopImg from "../Images/slider2.jpg";

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
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <Box w={'100%'} h={"90vh"}> */}
      <Image
        filter={"brightness(75%)"}
        objectFit={"cover"}
        w={"100%"}
        h={"75vh"}
        overflow={"hidden"}
        src={TopImg}
      />
      {/* </Box> */}
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
      <Footer />
    </>
  );
};

export default Volunteers;
