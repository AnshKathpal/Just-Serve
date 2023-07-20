import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Button,
} from "@chakra-ui/react";
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
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";
import Logo from "../../Images/JustServe.png";
import { NavLink } from "react-router-dom";
import React from "react";
import { AddList } from "../../pages/Admin/AddList";
import { createElement } from "react";

const dashboardRoutes = [
  { name: "Home", icon: FiHome, link: "/admindashboard" },
  { name: "Our Volunteers", icon: FiTrendingUp, link: "/ourvolunteers" },
];

const menuRoutes = [
  { name: "VolunteerList", icon: FiList, link: "/volunteerlist" },
  {
    name: "Add Volunteer Opportunities",
    icon: FiEdit2,
    link: "/addvolunteers",
  },
];

const adminRoutes = [
  { name: "Admins", icon: FiUsers, link: "/adminlist" },
  { name: "RegisterAdmin", icon: FiUserPlus, link: "/registeradmin" },
];

export const AdminSidebar = () => {
  return (
    <div>
      <Flex>
        <Box border="1px solid red" width="25%" height="100vh">
          <Box width="45%" margin="auto">
            <img src={Logo} alt="" />
          </Box>
          <VStack p="10">
            <Text color="gray.500" width="90%">
              Dashboard
              <hr />
            </Text>

            <VStack width="90%">
              {dashboardRoutes.map((el) => (
                <NavLink to={el.link}>
                  <Button
                    bg="white"
                    width="100%"
                    leftIcon={createElement(el.icon)}
                  >
                    {el.name}
                  </Button>
                </NavLink>
              ))}
            </VStack>

            <Text color="gray.500" width="90%">
              All Menu
              <hr />
            </Text>
            <VStack width="90%">
              {menuRoutes.map((el) => (
                <NavLink to={el.link}>
                  <Button
                    bg="white"
                    width="100%"
                    leftIcon={createElement(el.icon)}
                  >
                    {el.name}
                  </Button>
                </NavLink>
              ))}
            </VStack>

            <Text color="gray.500" width="90%">
              Employees
              <hr />
            </Text>
            <VStack width="90%">
              {adminRoutes.map((el) => (
                <NavLink to={el.link}>
                  <Button
                    bg="white"
                    width="100%"
                    leftIcon={createElement(el.icon)}
                  >
                    {el.name}
                  </Button>
                </NavLink>
              ))}
            </VStack>
          </VStack>
        </Box>

        <Box
          border="1px solid blue"
          width="70%"
          position={"absolute"}
          top="10%"
          right="2.5%"
        >

        <AddList/>


        </Box>

        <Flex
          border="1px solid red"
          height="80px"
          pr="40px"
          alignItems="center"
          justifyContent="flex-end"
          width="75%"
        >
          <img
            style={{
              border: "1px solid blue",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
            }}
            src=""
            alt=""
          />
        </Flex>
      </Flex>
    </div>
  );
};
