import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import homevideo from "../Images/homevideo.mp4";
import footerimg from "../Images/footerimg.jpeg";
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
      <Box border="1px solid red" height="80vh" width="100%">
        {/* Image */}

        <Box border={"2px solid blue"} boxSize="9lg">
          {/* <Image
            src="https://process.filestackapi.com/resize=w:1920,h:1024/quality=value:70/output=format:webp/cache=expiry:31536000/compress/no_metadata/iNAPLSqgSwnkpID73Mpr"
            alt="#"
            w={"100%"}
            h={"135vh"}
          /> */}

          <video src={homevideo} autoplay loop></video>

          <Box
            //w={"30%"}
            w="40%"
            h="300px"
            position={"absolute"}
            top={60}
            left={40}
            bg={"white"}
            padding={"100px"}
            borderRadius={"5%"}
            border={"1px solid red"}
          >
            <Text fontSize="2xl">Change requires action. Start here.</Text>
            <form>
              <select>
                <option value="">Everything</option>
                <option value="jobs">Jobs</option>
                <option value="internships">Internships</option>
                <option value="volunteeropportunities">
                  Volunteer Opportunities
                </option>
                <option value="organisation">Organisations</option>
              </select>
              <input
                type="text"
                placeholder="Search by keywords, skills or interests"
              />

              <div style={{ display: "flex" }}>
                <button>Search</button>
                <button>SignUp</button>
                <button>Login</button>
              </div>
            </form>
          </Box>
        </Box>
      </Box>

      {/* 2nd */}
      <Box  height={"60vh"} width={"100%"}>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={10}>
          <Box>
            <Center py={12}>
              <Box
                role={"group"}
                p={6}
                maxW={"330px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.800")}
                boxShadow={"2xl"}
                rounded={"lg"}
                pos={"relative"}
                zIndex={1}
              >
                <Flex
                  rounded={"lg"}
                  
                  pos={"relative"}
                  height={"230px"}
                  justify="center"
                  alignItems={"center"}
                >
                  <Image
                    rounded={"lg"}
                    width={"70%"}
                    height={"150px"}
                    src={
                      "https://process.filestackapi.com/output=secure:true/cache=expiry:31536000/compress/no_metadata/rEYQ6k5sRDSXQZVVYB3R"
                    }
                  />
                </Flex>
                <Stack pt={10} align={"center"}>
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
                  <Stack direction={"row"} align={"center"}>
                    <Text>
                      Use our location, experience level, and issue area
                      job-search filters to explore more than 5,000 jobs in the
                      social-impact world.
                    </Text>
                  </Stack>
                </Stack>
              </Box>
            </Center>
          </Box>
          <Box>
            <Center py={12}>
              <Box
                role={"group"}
                p={6}
                maxW={"330px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.800")}
                boxShadow={"2xl"}
                rounded={"lg"}
                pos={"relative"}
                zIndex={1}
              >
                <Flex
                  rounded={"lg"}
                  pos={"relative"}
                  height={"230px"}
                  justify="center"
                  alignItems={"center"}
                >
                  <Image
                    rounded={"lg"}
                    width={"60%"}
                    height={"150px"}
                    src={
                      "https://process.filestackapi.com/output=secure:true/cache=expiry:31536000/compress/no_metadata/Qs4yYmfiSWyPeNdoWqHL"
                    }
                  />
                </Flex>
                <Stack pt={10} align={"center"}>
                  <Text
                    color={"black"}
                    fontSize={"2xl"}
                    textTransform={"uppercase"}
                    _hover={{
                      color: "rgb(15,115,217)",
                    }}
                    fontWeight={"bold"}
                  >
                    Add Organization
                  </Text>
                  <Stack direction={"row"} align={"center"}>
                    <Text>
                      Join over 150,000 organizations using Idealist to post
                      their jobs, internships, events, and volunteer
                      opportunities.
                    </Text>
                  </Stack>
                </Stack>
              </Box>
            </Center>
          </Box>
          <Box >
            <Center py={12}>
              <Box
                role={"group"}
                p={6}
                maxW={"330px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.800")}
                boxShadow={"2xl"}
                rounded={"lg"}
                pos={"relative"}
                zIndex={1}
              >
                <Flex
                  rounded={"lg"}
              
                  pos={"relative"}
                  height={"230px"}
                  justify="center"
                  alignItems={"center"}
                >
                  <Image
                    rounded={"lg"}
                    width={"70%"}
                    height={"150px"}
                    src={
                      "https://process.filestackapi.com/output=secure:true/cache=expiry:31536000/compress/no_metadata/OgXYtU8eSYKi7aj1XwqM"
                    }
                  />
                </Flex>
                <Stack pt={10} align={"center"}>
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
                  <Stack direction={"row"} align={"center"}>
                    <Text>
                      Explore our volunteer, event, and action listings to
                      discover ways to make an impact in your community.
                    </Text>
                  </Stack>
                </Stack>
              </Box>
            </Center>
          </Box>
        </SimpleGrid>
      </Box>

      <Divider marginTop={"10px"} />
      <Spacer />
      <Box border = "1px solid black" fontSize={"4xl"} fontWeight={"bold"} marginTop={20}>
        <Center>
          <h1>The latest from our career experts</h1>
        </Center>
      </Box>
      <SimpleGrid border= "1px solid red" columns={{ lg: 4, sm: 1 }} gap={10} >
        <Box border = "1px solid black">
          <Image
            margin={"auto"}
            borderRadius="full"
            boxSize="150px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
          <Heading size="lg" fontSize="20px">
            Who's Hiring? 10 Organizations Hiring for Director-Level Roles
          </Heading>
        </Box>

        <Box border = "1px solid black">
          <Image
            margin={"auto"}
            borderRadius="full"
            boxSize="150px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
          <Heading size="lg" fontSize="20px">
            Who's Hiring? 10 Organizations Hiring for Director-Level Roles
          </Heading>
        </Box>
        <Box border = "1px solid black">
          <Image
            margin={"auto"}
            borderRadius="full"
            boxSize="150px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
          <Heading size="lg" fontSize="20px">
            Who's Hiring? 10 Organizations Hiring for Director-Level Roles
          </Heading>
        </Box>
        <Box border = "1px solid black">
          <Image
            margin={"auto"}
            borderRadius="full"
            boxSize="150px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
          <Heading size="lg" fontSize="20px">
            Who's Hiring? 10 Organizations Hiring for Director-Level Roles
          </Heading>
        </Box>
      </SimpleGrid>
      <Center>
        {" "}
        <Button>Read More</Button>
      </Center>

      <Box margin={"auto"} marginTop={"100px"} marginBottom={"100px"}>
        {" "}
        <Center>
          {" "}
          <Heading>Recent Jobs</Heading>
        </Center>
      </Box>
      <ImageSlider />
      <Box border={"1px solid red"} h={"80vh"}></Box>
      <ImageSlider />
      <Box border={"1px solid red"} h={"80vh"}></Box>
      <Box
        border="1px solid red"
        height="80vh"
        width="100%"
        objectFit={"fill"}
        backgroundImage={`url(${footerimg})`}
      ></Box>
      <Footer />
    </div>
  );
};

export default Homepage;
