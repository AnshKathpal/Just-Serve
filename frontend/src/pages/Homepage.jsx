import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
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
      <Box border="1px solid red" height="120vh" width="100%">
        {/* Image */}

        <Box boxSize="9lg" h={"120vh"}>
          <Image
            src="https://process.filestackapi.com/resize=w:1920,h:1024/quality=value:70/output=format:webp/cache=expiry:31536000/compress/no_metadata/iNAPLSqgSwnkpID73Mpr"
            alt="#"
            w={"100%"}
            h={"135vh"}
          />

          <Box
            w={"30%"}
            position={"relative"}
            bottom={"800px"}
            left={"200px"}
            bg={"white"}
            padding={"100px"}
            borderRadius={"5%"}
          >
            <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
              Change requires action. Start here.
            </Heading>
            <FormControl as={GridItem} colSpan={[6, 3]}>
              <FormLabel
                htmlFor="Search"
                fontSize="sm"
                fontWeight="md"
                color="gray.700"
                _dark={{
                  color: "gray.50",
                }}
              >
                Search
              </FormLabel>
              <Select
                id="country"
                name="country"
                autoComplete="country"
                placeholder="Select option"
                focusBorderColor="brand.400"
                shadow="sm"
                size="sm"
                w="full"
                rounded="md"
              >
                <option>Job</option>
                <option>Everything</option>
                <option>Internships</option>
                <option>Volunteer Opportunies</option>
              </Select>
            </FormControl>

            <FormControl as={GridItem} colSpan={6}>
              <FormLabel
                htmlFor="street_address"
                fontSize="sm"
                fontWeight="md"
                color="gray.700"
                _dark={{
                  color: "gray.50",
                }}
                mt="2%"
              >
                Street address
              </FormLabel>
              <Input
                type="text"
                name="street_address"
                id="street_address"
                autoComplete="street-address"
                focusBorderColor="brand.400"
                shadow="sm"
                size="sm"
                w="full"
                rounded="md"
              />
            </FormControl>

            <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
              <FormLabel
                htmlFor="city"
                fontSize="sm"
                fontWeight="md"
                color="gray.700"
                _dark={{
                  color: "gray.50",
                }}
                mt="2%"
              >
                City
              </FormLabel>
              <Input
                type="text"
                name="city"
                id="city"
                autoComplete="city"
                focusBorderColor="brand.400"
                shadow="sm"
                size="sm"
                w="full"
                rounded="md"
              />
            </FormControl>

            <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
              <FormLabel
                htmlFor="state"
                fontSize="sm"
                fontWeight="md"
                color="gray.700"
                _dark={{
                  color: "gray.50",
                }}
                mt="2%"
              >
                State / Province
              </FormLabel>
              <Input
                type="text"
                name="state"
                id="state"
                autoComplete="state"
                focusBorderColor="brand.400"
                shadow="sm"
                size="sm"
                w="full"
                rounded="md"
              />
            </FormControl>

            <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
              <FormLabel
                htmlFor="postal_code"
                fontSize="sm"
                fontWeight="md"
                color="gray.700"
                _dark={{
                  color: "gray.50",
                }}
                mt="2%"
              >
                ZIP / Postal
              </FormLabel>
              <Input
                type="text"
                name="postal_code"
                id="postal_code"
                autoComplete="postal-code"
                focusBorderColor="brand.400"
                shadow="sm"
                size="sm"
                w="full"
                rounded="md"
              />
            </FormControl>
            <FormControl
              as={GridItem}
              colSpan={[6, 3, null, 2]}
              margin={"30px 30px 0px 0px"}
            >
              <Button colorScheme="blue">Button</Button>
            </FormControl>
          </Box>
        </Box>
      </Box>
      {/* 2nd */}
      <Box border={"1px solid black"} height={"60vh"} width={"100%"}>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={10}>
          <Box border={"1px solid blue"} >
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
                <Box
                  rounded={"lg"}
                  mt={-12}
                  pos={"relative"}
                  height={"230px"}
                  _after={{
                    transition: "all .3s ease",
                    content: '""',
                    w: "full",
                    h: "full",
                    pos: "absolute",
                    top: 5,
                    left: 0,
                    backgroundImage: `url(${""})`,
                    filter: "blur(15px)",
                    zIndex: -1,
                  }}
                  _groupHover={{
                    _after: {
                      filter: "blur(20px)",
                    },
                  }}
                >
                  <Image
                    rounded={"lg"}
                    height={230}
                    width={282}
                    objectFit={"cover"}
                    src={""}
                  />
                </Box>
                <Stack pt={10} align={"center"}>
                  <Text
                    color={"gray.500"}
                    fontSize={"sm"}
                    textTransform={"uppercase"}
                  >
                    Brand
                  </Text>
                  <Heading
                    fontSize={"2xl"}
                    fontFamily={"body"}
                    fontWeight={500}
                  >
                    Nice Chair, pink
                  </Heading>
                  <Stack direction={"row"} align={"center"}>
                    <Text fontWeight={800} fontSize={"xl"}>
                      $57
                    </Text>
                    <Text textDecoration={"line-through"} color={"gray.600"}>
                      $199
                    </Text>
                  </Stack>
                </Stack>
              </Box>
            </Center>
          </Box>
          <Box border={"1px solid blue"} >
            {" "}
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
                <Box
                  rounded={"lg"}
                  mt={-12}
                  pos={"relative"}
                  height={"230px"}
                  _after={{
                    transition: "all .3s ease",
                    content: '""',
                    w: "full",
                    h: "full",
                    pos: "absolute",
                    top: 5,
                    left: 0,
                    backgroundImage: `url(${""})`,
                    filter: "blur(15px)",
                    zIndex: -1,
                  }}
                  _groupHover={{
                    _after: {
                      filter: "blur(20px)",
                    },
                  }}
                >
                  <Image
                    rounded={"lg"}
                    height={230}
                    width={282}
                    objectFit={"cover"}
                    src={""}
                  />
                </Box>
                <Stack pt={10} align={"center"}>
                  <Text
                    color={"gray.500"}
                    fontSize={"sm"}
                    textTransform={"uppercase"}
                  >
                    Brand
                  </Text>
                  <Heading
                    fontSize={"2xl"}
                    fontFamily={"body"}
                    fontWeight={500}
                  >
                    Nice Chair, pink
                  </Heading>
                  <Stack direction={"row"} align={"center"}>
                    <Text fontWeight={800} fontSize={"xl"}>
                      $57
                    </Text>
                    <Text textDecoration={"line-through"} color={"gray.600"}>
                      $199
                    </Text>
                  </Stack>
                </Stack>
              </Box>
            </Center>
          </Box>
          <Box border={"1px solid blue"}>
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
                <Box
                  rounded={"lg"}
                  mt={-12}
                  pos={"relative"}
                  height={"230px"}
                  _after={{
                    transition: "all .3s ease",
                    content: '""',
                    w: "full",
                    h: "full",
                    pos: "absolute",
                    top: 5,
                    left: 0,
                    backgroundImage: `url(${"https://process.filestackapi.com/output=secure:true/cache=expiry:31536000/compress/no_metadata/Qs4yYmfiSWyPeNdoWqHL"})`,
                    filter: "blur(15px)",
                    zIndex: -1,
                  }}
                  _groupHover={{
                    _after: {
                      filter: "blur(20px)",
                    },
                  }}
                >
                  <Image
                    rounded={"lg"}
                    height={230}
                    width={282}
                    objectFit={"cover"}
                    src={""}
                  />
                </Box>
                <Stack pt={10} align={"center"}>
                  <Text
                    color={"gray.500"}
                    fontSize={"sm"}
                    textTransform={"uppercase"}
                  >
                    Brand
                  </Text>
                  <Heading
                    fontSize={"2xl"}
                    fontFamily={"body"}
                    fontWeight={500}
                  >
                    Nice Chair, pink
                  </Heading>
                  <Stack direction={"row"} align={"center"}>
                    <Text fontWeight={800} fontSize={"xl"}>
                      $57
                    </Text>
                    <Text textDecoration={"line-through"} color={"gray.600"}>
                      $199
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
      <Box fontSize={"4xl"} fontWeight={"bold"} marginTop={20}>
        <Center>
          <h1>The latest from our career experts</h1>
        </Center>
      </Box>
      <SimpleGrid columns={{ lg: 4, sm: 1 }} gap={10} h={"30vh"}>
        <Box>
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

        <Box>
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
        <Box>
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
        <Box>
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
      <Box border="1px solid red" height="80vh" width="100%">
        {/* Image */}
      </Box>
      <Footer />
    </div>
  );
};

export default Homepage;
