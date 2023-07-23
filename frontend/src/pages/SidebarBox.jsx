import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  Flex,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

const SidebarBox = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let initialLocation = searchParams.getAll("location");
  let initialType = searchParams.getAll("type");
  const [location, setLocation] = useState(initialLocation || []);
  const [type, setType] = useState(initialType || []);

  useEffect(() => {
    let params = {
      type,
      location,
    };
    setSearchParams(params);
  }, [type, location]);

  const handleLocation = (e) => {
    const { value } = e.target;

    let newLocation = [...location];
    if (newLocation.includes(value)) {
      newLocation = newLocation.filter((el) => el !== value);
    } else {
      newLocation.push(value);
    }
    setLocation(newLocation);
  };

  const handleType = (e) => {
    const { value } = e.target;
    let newType = [...type];
    if (newType.includes(value)) {
      newType = newType.filter((el) => el !== value);
    } else {
      newType.push(value);
    }
    setType(newType);
  };

  return (
    <Box
      // border={"3px solid blue"}
      w={"30%"}
      p={4}
      borderRadius="md"
      boxShadow="md"
      minH="100vh"
    >
      <Flex mb={4}>
        <Text fontSize="2xl" color={"gray.600"} as={"b"} align={"center"}>
          Filters
        </Text>
        {/* <Text as='samp'>Filters</Text> */}
      </Flex>

      {/* <Input placeholder="Search" /> */}
      {/* <br /> */}
      <br />
      <Spacer />

      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Locations
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Flex flexDirection={"column"}>
              <br />
              <Checkbox
                value={"Pune"}
                onChange={handleLocation}
                checked={location.includes("Pune")}
              >
                Pune
              </Checkbox>
              <br />
              <Checkbox
                value={"Delhi"}
                onChange={handleLocation}
                checked={location.includes("Delhi")}
              >
                Delhi
              </Checkbox>
              <br />
              <Checkbox
                value={"Mumbai"}
                onChange={handleLocation}
                checked={location.includes("Mumbai")}
              >
                Mumbai
              </Checkbox>
              <br />
              <Checkbox
                value={"Noida"}
                onChange={handleLocation}
                checked={location.includes("Noida")}
              >
                Noida
              </Checkbox>
              <br />
              <Checkbox
                value={"Bangalore"}
                onChange={handleLocation}
                checked={location.includes("Bangalore")}
              >
                Bangalore
              </Checkbox>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <br />
      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Type of Work
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Flex flexDirection={"column"}>
              <br />
              <Checkbox value={"Remote"} onChange={handleType}>
                Remote
              </Checkbox>
              <br />
              <Checkbox value={"Hybrid"} onChange={handleType}>
                Hybrid
              </Checkbox>
              <br />
              <Checkbox value={"Onsite"} onChange={handleType}>
                Onsite
              </Checkbox>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <br />
      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Issue Areas
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Flex flexDirection={"column"}>
              <br />
              <Checkbox value={"Agricultire"}>Agricultire</Checkbox>
              <br />
              <Checkbox value={"Animals"}>Animals</Checkbox>
              <br />
              <Checkbox value={"Climate"}>Climate</Checkbox>
              <br />
              <Checkbox value={"Disability"}>Disability</Checkbox>
              <br />
              <Checkbox value={"Education"}>Education</Checkbox>
              <br />
              <Checkbox value={"Health"}>Health</Checkbox>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <br />
      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Skills
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Flex flexDirection={"column"}>
              <br />
              <Checkbox value={"Arts"}>Arts</Checkbox>
              <br />
              <Checkbox value={"AnimalsCare"}>AnimalsCare</Checkbox>
              <br />
              <Checkbox value={"Design"}>Design</Checkbox>
              <br />
              <Checkbox value={"Food"}>Food</Checkbox>
              <br />
              <Checkbox value={"Tutor"}>Tutor</Checkbox>
              <br />
              <Checkbox value={"Sports"}>Sports</Checkbox>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <br />
      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Listing Languages
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Flex flexDirection={"column"}>
              <br />
              <Checkbox value={"Arts"}>All</Checkbox>
              <br />
              <Checkbox value={"AnimalsCare"}>English</Checkbox>
              <br />
              <Checkbox value={"Design"}>Tamil</Checkbox>
              <br />
              <Checkbox value={"Food"}>Hindi</Checkbox>
              <br />
              <Checkbox value={"Food"}>Marathi</Checkbox>
              <br />
              <Checkbox value={"Food"}>Bengali</Checkbox>
              <br />
              <Checkbox value={"Food"}>Gujrathi</Checkbox>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <br />
      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Opportunity Type
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Flex flexDirection={"column"}>
              <br />
              <Checkbox value={"Arts"}>All</Checkbox>
              <br />
              <Checkbox value={"Volunterring"}>Volunterring</Checkbox>
              <br />
              <Checkbox value={"Events"}>Events</Checkbox>
              <br />
              <Checkbox value={"Loans"}>Loans</Checkbox>
              <br />
              <Checkbox value={"Donations"}>Donations</Checkbox>
              <br />
              <Checkbox value={"Petitions"}>Petitions</Checkbox>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default SidebarBox;
