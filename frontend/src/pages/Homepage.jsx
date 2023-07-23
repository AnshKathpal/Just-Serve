import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import homevideo from "../Images/homevideo.mp4";
import footerimg from "../Images/footerimg.jpeg";
import painting from "../Images/painting.jpg";
import Login from "./Login";

import {
  Box,
  Button,
  Center,
  Circle,
  Divider,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
  Progress,
  ButtonGroup,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  useColorModeValue,
} from "@chakra-ui/react";
import ImageSlider from "../Components/ImageSlider";

const Homepage = () => {
  return (
    <div>
      <Navbar />

      {/* MainBox Video */}

      <Box width="100%" height="85vh" mt="5%" >
        <video
          opacity=".9"
          style={{
            objectFit: "cover",
            filter: "brightness(70%)",
            width: "100%",
            height: "100%",
          }}
          src={homevideo}
          autoPlay
          muted
          loop
        ></video>

        {/* Form */}

        <Flex
          w="40%"
          position={"absolute"}
          top={"4%"}
          left={40}
          bg={"white"}
          borderRadius={"20px"}
          direction="column"
          justify="center"
          // opacity="0.4"
          background={"rgba(0, 0, 0, .2)"}
          padding={"40px"}
          // _hover={{
          //   opacity: "1",
          // }}
        >
          <Text fontSize="3xl" color = "white" fontWeight="bold">
            Change requires action. Start here.
          </Text>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              width: "70%",
              margin: "10px auto",
              gap: "10px",
            }}
          >
            <select
              style={{
                border: "1px solid grey",
                height: "50px",
                borderRadius: "10px",
                backgroundColor: "white",
                color: "rgb(15,115,217)",
                fontSize: "20px",
                padding: "5px",
              }}
            >
              <option style={{ backgroundColor: "white" }} value="">
                Everything
              </option>
              <option style={{ backgroundColor: "white" }} value="jobs">
                Jobs
              </option>
              <option style={{ backgroundColor: "white" }} value="internships">
                Internships
              </option>
              <option
                style={{ backgroundColor: "white" }}
                value="volunteeropportunities"
              >
                Volunteer Opportunities
              </option>
              <option value="organisation">Organisations</option>
            </select>
            <input
              style={{
                border: "1px solid grey",
                height: "50px",
                borderRadius: "10px",
                backgroundColor: "white",
                fontSize: "20px",
                padding: "5px",
              }}
              type="text"
              placeholder="Search by keywords, skills or interests"
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <button
                style={{
                  backgroundColor: "rgb(15,115,217)",
                  color: "white",
                  width: "40%",
                  height: "40px",
                  borderRadius: "10px",
                  fontSize: "20px",
                }}
              >
                Search
              </button>
              <div
                style={{
                  width: "50%",
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <button
                  style={{
                    color: "rgb(15,115,217)",
                    height: "40px",
                    fontSize: "20px",
                  }}
                >
                  SignUp
                </button>
                <button
                  style={{
                    color: "rgb(15,115,217)",
                    height: "40px",
                    fontSize: "20px",
                  }}
                >
                 < Login/>
                </button>
              </div>
            </div>
          </form>
        </Flex>
      </Box>

      {/* grid */}

      <Box width={"80%"} margin=" auto" padding="30px">
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={10}>
          <Box
            p={6}
            boxShadow={"xl"}
            rounded={"lg"}
            width="100%"
            backgroundColor={"white"}
            position={"relative"}
            top="-40%"
          >
            <Flex
              justify="center"
              alignItems={"center"}
              direction="column"
              gap="10px"
            >
              <Image
                rounded={"lg"}
                width={"50%"}
                src={
                  "https://process.filestackapi.com/output=secure:true/cache=expiry:31536000/compress/no_metadata/rEYQ6k5sRDSXQZVVYB3R"
                }
              />
              <Text
                color={"black"}
                fontSize={"2xl"}
                textTransform={"uppercase"}
                _hover={{
                  color: "rgb(15,115,217)",
                }}
                fontWeight={"bold"}
              >
                Social-Impact Jobs
              </Text>
              <Text>
                Use our location, experience level, and issue area job-search
                filters to explore more than 5,000 jobs in the social-impact
                world.
              </Text>
            </Flex>
          </Box>

          <Box
            p={6}
            boxShadow={"xl"}
            rounded={"lg"}
            width="100%"
            backgroundColor={"white"}
            position={"relative"}
            top="-40%"
          >
            <Flex
              justify="center"
              alignItems={"center"}
              direction="column"
              gap="10px"
            >
              <Image
                rounded={"lg"}
                width={"50%"}
                src={
                  "https://process.filestackapi.com/output=secure:true/cache=expiry:31536000/compress/no_metadata/Qs4yYmfiSWyPeNdoWqHL"
                }
              />
              <Text
                color={"black"}
                fontSize={"2xl"}
                textTransform={"uppercase"}
                _hover={{
                  color: "rgb(15,115,217)",
                }}
                fontWeight={"bold"}
              >
                Add Your Organization
              </Text>
              <Text>
                Join over 150,000 organizations using Idealist to post their
                jobs, internships, events, and volunteer opportunities.
              </Text>
            </Flex>
          </Box>
          <Box
            p={6}
            boxShadow={"xl"}
            rounded={"lg"}
            width="100%"
            backgroundColor={"white"}
            position={"relative"}
            top="-40%"
          >
            <Flex
              justify="center"
              alignItems={"center"}
              direction="column"
              gap="10px"
            >
              <Image
                rounded={"lg"}
                width={"50%"}
                src={
                  "https://process.filestackapi.com/output=secure:true/cache=expiry:31536000/compress/no_metadata/OgXYtU8eSYKi7aj1XwqM"
                }
              />
              <Text
                color={"black"}
                fontSize={"2xl"}
                textTransform={"uppercase"}
                _hover={{
                  color: "rgb(15,115,217)",
                }}
                fontWeight={"bold"}
              >
                Volunteering and Events
              </Text>

              <Text>
                Explore our volunteer, event, and action listings to discover
                ways to make an impact in your community.
              </Text>
            </Flex>
          </Box>
        </SimpleGrid>
      </Box>

      <Flex height="500px" width="80%" margin={"auto"}>
        <Flex justifyContent="center">
          <img
            src="https://process.filestackapi.com/output=secure:true/cache=expiry:31536000/compress/no_metadata/1QeoQXvWQx0RPVzjXROX"
            alt=""
          />
        </Flex>
        <Flex
          padding="40px"
          justifyContent={"center"}
          alignItems="center"
          direction={"column"}
          gap="20px"
          width={"50%"}
        >
          <Text
            _hover={{
              color: "rgb(15,115,217)",
            }}
            fontWeight="bold"
            fontSize="3xl"
          >
            Meet Idealist, the world’s largest social-impact job board
          </Text>
          <Text textAlign="left">
            Our job listings include opportunities spanning a variety of
            nonprofits, social-impact businesses, and corporate social
            responsibility (CSR) initiatives. <br /> <br />
            From entry-level positions to executive roles, explore thousands of
            opportunities to find the perfect fit that aligns with your personal
            and professional values and goals.
          </Text>
          <Button
            _hover={{
              bg: "rgb(15,115,217)",
              color: "white",
            }}
            bg="rgb(15,115,217)"
            color="white"
          >
            Search Volunteerings
          </Button>
        </Flex>
      </Flex>

      <Box fontSize={"4xl"} fontWeight={"bold"} width="80%" margin="50px auto">
        <Center>
          <h1>The latest from our career experts</h1>
        </Center>
      </Box>
      <SimpleGrid
        margin="30px auto"
        width="80%"
        columns={{ lg: 4, sm: 1 }}
        gap={10}
      >
        <Box padding="20px 0px 20px 0px">
          <Image
            margin={"auto"}
            borderRadius="full"
            boxSize="180px"
            src="https://process.filestackapi.com/resize=w:380,h:253/quality=value:70/output=format:webp/cache=expiry:31536000/compress/no_metadata/iQLJvDMIQ1qZL7Xl4aGH"
            alt="Dan Abramov"
            mb="10px"
          />
          <Heading size="lg" fontSize="20px" color="rgb(15,115,217)">
            Who's Hiring? 10 Organizations Hiring for Director-Level Roles
          </Heading>
        </Box>

        <Box padding="20px 0px 20px 0px">
          <Image
            margin={"auto"}
            borderRadius="full"
            boxSize="180px"
            src="https://process.filestackapi.com/resize=w:380,h:199/quality=value:70/output=format:webp/cache=expiry:31536000/compress/no_metadata/v4FLMUcQOGShwtFZgk7Q"
            alt="Dan Abramov"
            mb="10px"
          />
          <Heading size="lg" fontSize="20px" color="rgb(15,115,217)">
            How to Find Organizations Committed to DEI Values
          </Heading>
        </Box>
        <Box padding="20px 0px 20px 0px">
          <Image
            margin={"auto"}
            borderRadius="full"
            boxSize="180px"
            src="https://process.filestackapi.com/resize=w:380,h:216/quality=value:70/output=format:webp/cache=expiry:31536000/compress/no_metadata/cdVfRPL1SSOEAcUpW0uL"
            alt="Dan Abramov"
            mb="10px"
          />
          <Heading size="lg" fontSize="20px" color="rgb(15,115,217)">
            Ask Alexis | Should I List an Unrelated Job on My Resume?
          </Heading>
        </Box>
        <Box padding="20px 0px 20px 0px">
          <Image
            margin={"auto"}
            borderRadius="full"
            boxSize="180px"
            src="https://process.filestackapi.com/resize=w:380,h:253/quality=value:70/output=format:webp/cache=expiry:31536000/compress/no_metadata/DmPMpu97Q4y6ZRILzpvI"
            alt="Dan Abramov"
            mb="10px"
          />
          <Heading size="lg" fontSize="20px" color="rgb(15,115,217)">
            5 Ways to Create an Accessible Work Environment
          </Heading>
        </Box>
      </SimpleGrid>
      <Center>
        {" "}
        <Button
          _hover={{
            bg: "rgb(15,115,217)",
            color: "white",
          }}
          bg="rgb(15,115,217)"
          color="white"
        >
          Read More
        </Button>
      </Center>

      <Flex height="500px" width="80%" margin={"40px auto"}>
        <Flex justifyContent="center">
          <img
            src="https://process.filestackapi.com/output=secure:true/cache=expiry:31536000/compress/no_metadata/lRdmrGXbSfGuaUN5ACeL"
            alt=""
          />
        </Flex>
        <Flex
          padding="40px"
          justifyContent={"center"}
          alignItems="center"
          direction={"column"}
          gap="20px"
          width={"50%"}
        >
          <Text
            _hover={{
              color: "rgb(15,115,217)",
            }}
            fontWeight="bold"
            fontSize="3xl"
          >
            What’s your big idea?
          </Text>
          <Text textAlign="left">
            If you’ve been dreaming up ways to impact your community but are not
            quite sure where to begin (or how to proceed), you’re in the right
            place. <br /> <br />
            The Idealist Action Incubator is a free seven-week virtual program
            designed to help you move forward with your idea for action. Benefit
            from expert insights on how to develop your plan while also
            connecting with other action-takers in a collaborative learning
            space.
          </Text>
          <Button
            _hover={{
              bg: "rgb(15,115,217)",
              color: "white",
            }}
            bg="rgb(15,115,217)"
            color="white"
          >
            Give Ideas
          </Button>
        </Flex>
      </Flex>

      <ImageSlider />

      <Box width="100%" height="90vh" overflow="hidden">
        <img style={{ objectFit: "cover" }} src={painting} alt="" />

        <Flex
          position="absolute"
          width="30%"
          top="83%"
          direction="column"
          bg="white"
          justify="center"
          alignItems="center"
          gap="30px"
          padding="40px"
          borderRadius={"20px"}
          opacity="0.4"
          _hover = {{
            opacity : "1"
          }}
          right = "10%"
                  >
          <Text fontSize="3xl" fontWeight="bold" >
          About Us
          </Text>
          <Text fontSize="xl" textAlign="left">
          We believe that together we can build a world where all people can lead free and dignified lives. Meet our team and see where we came from, what we do, and where we are going.
          </Text>
          <Button bg="rgb(15,115,217)" color="white" _hover={{
            bg : "rgb(15,115,217)" , color : "white"
          }} >
            Load More
          </Button>
        </Flex>
      </Box>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Homepage;