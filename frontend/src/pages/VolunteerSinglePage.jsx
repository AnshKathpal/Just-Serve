import {
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  Icon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
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
  Center,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  AiFillHeart,
  AiOutlineShareAlt,
  AiOutlineEllipsis,
  FaMapMarkerAlt,
} from "react-icons/ai";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
export default function Simple() {
  const [firstname, setFname] = useState("");
  const [lastname, setSname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [applied, setApplied] = useState([]);
  const [sdata, setSdata] = useState({});

  const { id } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstname,
      lastname,
      email,
      contact,
      city,
      country,
    };
    setApplied((prev) => [...prev, data]);
    console.log(applied);
    localStorage.setItem("AppliedData", JSON.stringify(applied));
  };
  const singleData = async () => {
    let singledata = await axios.get(
      `https://justserve.onrender.com/volunteer/${id}`
    );
    console.log(singledata.data);
    setSdata(singledata.data);
  };

  useEffect(() => {
    singleData();
  }, []);
  console.log(id);

  return (
    <>
      <Navbar />
      <br />
      <br />
      <Flex maxW={"7xl"} padding={"40px"} position={"relative"}>
        <Stack flex="0.30">
          <Box
            justifyContent="center"
            alignItems="center"
            padding={"50px"}
            position={"sticky"}
          >
            <img
              src="https://process.filestackapi.com/resize=w:180,h:128/quality=value:70/output=format:webp/cache=expiry:31536000/compress/no_metadata/f6TrfdpnQKGwdp2dTazr"
              alt=""
              width={"100px"}
              marginLeft={"20px"}
            />
            <Box marginTop={"20px"}>
              <Heading
                lineHeight={1.1}
                fontWeight={500}
                fontSize={{ base: "1xl", sm: "3xl", lg: "3xl" }}
                textAlign={"left"}
              >
                {sdata.role} <br />
                <Box
                  marginTop={"20px"}
                  lineHeight={1.1}
                  fontWeight={500}
                  fontSize={"15px"}
                  textAlign={"left"}
                  color={"blue"}
                  textDecoration={"underline"}
                >
                  {sdata.name}
                </Box>
                <Box
                  marginTop={"20px"}
                  lineHeight={1.1}
                  fontWeight={500}
                  fontSize={"15px"}
                  textAlign={"left"}
                  mb={"20px"}
                >
                  {sdata.location}
                </Box>
                <hr />
                <Box padding={"20px"} textAlign={"left"} marginLeft={"-20px"}>
                  <Text fontSize={"16px"}>Posted:&nbsp; {sdata.updated}</Text>
                </Box>
                <hr />
                <Box padding={"20px"} textAlign={"left"} marginLeft={"-20px"}>
                  <Text fontSize={"16px"} color={"blue"} lineHeight={"30px"}>
                    See all listings from this organization About this
                    organization
                  </Text>
                </Box>
              </Heading>
            </Box>
          </Box>
        </Stack>
        <Stack spacing={{ base: 6, md: 10 }} flex="0.70">
          <Box as={"header"}>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"1xl"}
              textAlign={"left"}
            >
              VOLUNTEER OPPORTUNITY
            </Text>
            <Heading
              lineHeight={1.1}
              fontWeight={500}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              textAlign={"left"}
            >
              {sdata.role}
            </Heading>
            <Box mt={50} mb={50}>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"1xl"}
                textAlign={"left"}
              >
                Posted By
              </Text>
              <Heading textAlign={"left"} size="lg">
                {sdata.name} | {sdata.location}, India
              </Heading>
            </Box>
            <Stack direction="row" spacing="50px" mb={"20px"} overflowY="auto">
              <Box
                overflowY="auto"
                as="button"
                borderRadius="md"
                borderWidth="1px"
                borderColor="blue.500"
                bg="white"
                color="black"
                px={4}
                h={10}
              >
                <Flex>
                  <Icon as={AiFillHeart} boxSize={6} color="blue.500" />
                  <Text>Save</Text>
                </Flex>
              </Box>
              <Box
                as="button"
                borderRadius="md"
                borderWidth="1px"
                borderColor="blue.500"
                bg="white"
                color="black"
                px={4}
                h={10}
              >
                <Flex>
                  <Icon as={AiOutlineShareAlt} boxSize={6} color="blue.500" />
                  <Text>Share</Text>
                </Flex>
              </Box>
              <Box
                as="button"
                borderRadius="md"
                borderWidth="1px"
                borderColor="blue.500"
                bg="white"
                color="black"
                px={4}
                h={10}
              >
                <Icon as={AiOutlineEllipsis} boxSize={6} color="blue.500" />
              </Box>
            </Stack>
            <Stack textAlign={"left"}>
              <Image
                rounded={"md"}
                alt={"product image"}
                src={sdata.image}
                fit={"cover"}
                align={"center"}
                w={"70%"}
                h={{ base: "100%", sm: "200px", lg: "300px" }}
              />
              <Heading size="sm">RESPONSIBILITIES:</Heading>
              <Text lineHeight={10} textAlign={"left"} fontSize={20}>
                1. Teaching and mentoring: Volunteers should be willing to teach
                and mentor underprivileged kids in the slums. They should be
                patient, compassionate, and willing to work
              </Text>
            </Stack>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      color={"blue"}
                      as="span"
                      flex="1"
                      textAlign="left"
                      lineHeight={10}
                      fontSize={20}
                    >
                      Read More
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  textAlign="left"
                  lineHeight={10}
                  fontSize={20}
                >
                  2. Developing lesson plans: Volunteers should be able to
                  create engaging lesson plans that are age-appropriate and
                  designed to meet the learning needs of the target audience.{" "}
                  <br /> 3. Organizing learning activities: Volunteers should be
                  able to organize learning activities that promote critical
                  thinking, problem-solving, and creativity. They should also be
                  able to assess the progress of the kids they are working with.{" "}
                  <br /> 4. Providing support: Volunteers should be able to
                  provide emotional support to kids who may come from difficult
                  backgrounds. They should be able to create a safe and
                  welcoming environment that fosters learning and growth.
                  <br /> QUALIFICATIONS: <br /> 1. Knowledge of the subject
                  matter: Volunteers should have a good understanding of the
                  subject matter they are teaching. They should be able to
                  explain concepts in a clear and concise manner. <br /> 2.
                  Communication skills: Volunteers should have excellent
                  communication skills. They should be able to communicate
                  effectively with kids from diverse backgrounds. <br /> 3.
                  Patience and compassion: Volunteers should be patient and
                  compassionate. They should be able to work with kids who may
                  have different learning styles and abilities. <br /> 4.
                  Cultural sensitivity: Volunteers should be culturally
                  sensitive. They should be able to respect and appreciate the
                  cultural differences of the kids they are working with.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <Heading size={"md"} textAlign={"left"} fontSize={25}>
              Details at glance
            </Heading>

            <Flex justifyContent={"space-around"}>
              <Box>
                <Text>Start Date:{sdata.start_date} </Text>
              </Box>
              <Box>
                <Text>End Date :{sdata.end_date}</Text>
              </Box>
            </Flex>
            <Flex justifyContent={"space-around"}>
              <Box>
                <Text>Schedule :{sdata.schedule} </Text>
              </Box>
              <Box>
                <Text>Time commitment : Few hours week</Text>
              </Box>
            </Flex>
            <Box>
              <Heading size={"md"} textAlign={"left"} fontSize={25}>
                location
              </Heading>
              <hr />
              <Heading size={"extra-small"} textAlign={"left"} fontSize={15}>
                &nbsp;{sdata.address}
              </Heading>
            </Box>
            <Box>
              <Text
                fontSize={25}
                textAlign={"left"}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Apply to This Volunteer Opportunity
              </Text>

              <Box maxWidth="400px" mt={8} justifyContent={"left"}>
                <form onSubmit={handleSubmit}>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      onChange={(e) => setFname(e.target.value)}
                      value={firstname}
                      type="text"
                      placeholder="Enter your first name"
                    />
                  </FormControl>

                  <FormControl id="lastName" mt={4} isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      onChange={(e) => setSname(e.target.value)}
                      value={lastname}
                      type="text"
                      placeholder="Enter your last name"
                    />
                  </FormControl>

                  <FormControl id="email" mt={4} isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Enter your email address"
                    />
                  </FormControl>
                  <FormControl id="organization" mt={4} isRequired>
                    <FormLabel>Contact</FormLabel>
                    <Input
                      onChange={(e) => setContact(e.target.value)}
                      value={contact}
                      type="text"
                      placeholder="Enter your contact"
                    />
                  </FormControl>
                  <FormControl id="city" mt={4} isRequired>
                    <FormLabel>City</FormLabel>
                    <Input
                      onChange={(e) => setCity(e.target.value)}
                      value={city}
                      type="text"
                      placeholder="Enter your City name"
                    />
                  </FormControl>
                  <FormControl id="country" mt={4} isRequired>
                    <FormLabel>Country</FormLabel>
                    <Input
                      onChange={(e) => setCountry(e.target.value)}
                      value={country}
                      type="text"
                      placeholder="Enter your Country"
                    />
                  </FormControl>
                  <Box
                    bg={"gray.200"}
                    textAlign={"left"}
                    padding={"30px"}
                    borderLeft={"2px solid blue"}
                  >
                    <Text>
                      I acknowledge that use of the Idealist Applicant Tracking
                      System is subject to Idealist's Privacy Policy and Terms
                      of Service.
                    </Text>
                  </Box>
                  <Button
                    rounded={"none"}
                    w={"full"}
                    mt={8}
                    size={"lg"}
                    py={"7"}
                    bg={useColorModeValue("blue.900", "gray.50")}
                    color={useColorModeValue("white", "blue.900")}
                    textTransform={"uppercase"}
                    _hover={{
                      transform: "translateY(2px)",
                      boxShadow: "lg",
                    }}
                    type="submit"
                  >
                    Apply
                  </Button>
                </form>
              </Box>
            </Box>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent={"center"}
          ></Stack>
        </Stack>
      </Flex>
      <Footer />
    </>
  );
}
