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
  FiMail,
  FiMessageSquare,
  FiFile
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText, useState } from "react";
import Logo from "../../Images/JustServe.png";
import { NavLink } from "react-router-dom";
import React from "react";
import { AddList } from "../../pages/Admin/AddList";
import { createElement } from "react";
import { OurVolunteer } from "../../pages/Admin/OurVolunteer";
import { VolunteerList } from "../../pages/Admin/VolunteerList";
import AdminList from "../../pages/Admin/AdminList";
import { AdminNew } from "../../pages/Admin/AdminNew";
import { AdminDashboard } from "../../pages/Admin/AdminDashboard";
import { useEffect } from "react";

export const AdminSidebar = () => {
  const [showAddList, setShowAddList] = useState(true);
  const [showOurVolunteer, setShowOurVolunteer] = useState(true);
  const [showVolunteerList, setShowVolunteerList] = useState(true);
  const [showAdminList, setShowAdminList] = useState(true);
  const [showNewAdmin, setShowNewAdmin] = useState(true);
  const [showDashboard, setShowDashboard] = useState(true);

  useEffect(() => {
    handleToggleDashboard();
  }, []);

  const handleToggleAddList = () => {
    setShowAddList(true);
    setShowOurVolunteer(false);
    setShowAdminList(false);
    setShowNewAdmin(false);
    setShowVolunteerList(false);
    setShowDashboard(false);
  };

  const handleToggleOurVolunteer = () => {
    setShowAddList(false);
    setShowVolunteerList(false);
    setShowAdminList(false);
    setShowNewAdmin(false);
    setShowOurVolunteer(true);
    setShowDashboard(false);
  };

  const handleToggleVolunteerList = () => {
    setShowAddList(false);
    setShowOurVolunteer(false);
    setShowAdminList(false);
    setShowNewAdmin(false);
    setShowVolunteerList(true);
    setShowDashboard(false);
  };

  const handleToggleAdminList = () => {
    setShowAddList(false);
    setShowOurVolunteer(false);
    setShowVolunteerList(false);
    setShowNewAdmin(false);
    setShowAdminList(true);
    setShowDashboard(false);
  };

  const handleToggleNewAdmin = () => {
    setShowAddList(false);
    setShowOurVolunteer(false);
    setShowVolunteerList(false);
    setShowAdminList(false);
    setShowNewAdmin(true);
    setShowDashboard(false);
  };

  const handleToggleDashboard = () => {
    setShowAddList(false);
    setShowOurVolunteer(false);
    setShowVolunteerList(false);
    setShowNewAdmin(false);
    setShowAdminList(false);
    setShowDashboard(true);
  };

  return (
    <div style={{ position: "relative" }}>
      <Flex>
        <Box
          bg="white"
          width="25%"
          height="100vh"
          position="fixed"
          boxShadow=" rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;"
        >
          <NavLink to={"/"} >
          <Box width="55%" margin="auto">
            <img src={Logo} alt="" />
          </Box>
          </NavLink>
          <VStack p="10">
            <Text color="gray.500" width="90%">
              Dashboard
              <hr />
            </Text>

            <VStack width="90%">
              <Button
                onClick={handleToggleDashboard}
                bg="white"
                width="100%"
                leftIcon={<FiHome />}
              >
                Home
              </Button>

              <Button
                bg="white"
                width="100%"
                onClick={handleToggleOurVolunteer}
                leftIcon={<FiTrendingUp />}
              >
                Our Volunteer
              </Button>
            </VStack>

            <Text color="gray.500" width="90%">
              All Menu
              <hr />
            </Text>
            <VStack width="90%">
              <Button
                onClick={handleToggleVolunteerList}
                bg="white"
                width="100%"
                leftIcon={<FiList />}
              >
                Volunteer List
              </Button>

              <Button
                onClick={handleToggleAddList}
                bg="white"
                width="100%"
                leftIcon={<FiEdit2 />}
              >
                Add Volunteer Opportunities
              </Button>
            </VStack>

            <Text color="gray.500" width="90%">
              Employees
              <hr />
            </Text>
            <VStack width="90%">
              <Button
                onClick={handleToggleAdminList}
                bg="white"
                width="100%"
                leftIcon={<FiUsers />}
              >
                Admins
              </Button>

              <Button
                onClick={handleToggleNewAdmin}
                bg="white"
                width="100%"
                leftIcon={<FiUserPlus />}
              >
                Register Admins
              </Button>
            </VStack>

            <Text color="gray.500" width="90%">
              Connect
              <hr />
            </Text>

            <VStack width="90%">
              <Button
                bg="white"
                width="100%"
                leftIcon={<FiMail />}
              >
                Mail
              </Button>

              <Button
                bg="white"
                width="100%"
                leftIcon={<FiFile />}
              >
                Feedback
              </Button>
              <Button
                bg="white"
                width="100%"
                leftIcon={<FiMessageSquare />}
              >
                Messages
              </Button>
            </VStack>

          </VStack>
        </Box>

        <Box
          // border="1px solid blue"
          width="70%"
          position={"absolute"}
          top="10%"
          right="2.5%"
          mt="90px"
        >
          {showDashboard && <AdminDashboard />}
          {showAddList && <AddList />}
          {showOurVolunteer && <OurVolunteer />}
          {showVolunteerList && <VolunteerList />}
          {showAdminList && <AdminList />}
          {showNewAdmin && <AdminNew />}
        </Box>

        <Flex
          bg="white"
          height="80px"
          pr="40px"
          alignItems="center"
          justifyContent="flex-end"
          width="75%"
          position="absolute"
          right="0%"
          boxShadow="  rgba(0, 0, 0, 0.18) 0px 2px 1px;"
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
