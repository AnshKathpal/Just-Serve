import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Programs = () => {
  return (
    <Box>
      {/* 1st div */}
      <Box w={"80%"} m={"auto"}>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={"20px"}>
          <Box alignItems={"center"}>
            <Image
              w={"100%"}
              h={"60%"}
              src="https://images.squarespace-cdn.com/content/v1/5c9001be7fdcb89c5f59bc3f/65a535a7-1b32-46c8-b777-891eedcd3ea5/Voly-VolunteerNow-Texas-75204-animals-end-hunger-building-future-northern.jpg?format=1800w"
            />
            <br />
            <Heading color={"blue.500"} fontSize={"xl"} align={"left"}>
              VOLY.ORG
            </Heading>
            <br />
            <Text fontSize={"lg"} align={"left"}>
              Volunteer in your community! VOLY.org, poweblue by VolunteerNow,
              is your 24/7 connection to volunteer needs near you. Create a free
              volunteer profile to track hours, filter your interests, and save
              opportunities you’re interested in.{" "}
            </Text>
            <br />
            <Button
              borderRadius={"50px"}
              p={5}
              colorScheme={"blue"}
              color="white"
            >
              LEARN MORE
            </Button>
          </Box>
          <Box>
            <Image
              w={"100%"}
              h={"60%"}
              src="https://images.squarespace-cdn.com/content/v1/5c9001be7fdcb89c5f59bc3f/ac696720-3942-4662-bebc-ea781977e822/VolunteerNow-Discount-Depot-for-non-profits-DFW-school-staff-firefighters-police-EMTs-Military-Community-Colleges.jpg?format=1800w"
            />
            <br />
            <Heading color={"blue.500"} fontSize={"xl"} align={"left"}>
              DISCOUNT DEPOTS
            </Heading>
            <br />
            <Text fontSize={"lg"} align={"left"}>
              VolunteerNow’s Discount Depots provide nonprofits and other
              organizations with access to items donated by major retailers for
              sale at a fraction of retail cost. We accept new, surplus, and
              gently used items from corporate donors such as JCPenney and many
              more.
            </Text>
            <br />
            <Button
              borderRadius={"50px"}
              p={5}
              colorScheme={"blue"}
              color="white"
            >
              LEARN MORE
            </Button>
          </Box>
          <Box>
            <Image
              w={"100%"}
              h={"60%"}
              src="https://images.squarespace-cdn.com/content/v1/5c9001be7fdcb89c5f59bc3f/82cb4ebc-46f8-425a-9779-17ce28ee52c0/VolunteerNow-training-program-volunteer-managers.jpg?format=1500w"
            />
            <br />
            <Heading color={"blue.500"} fontSize={"xl"} align={"left"}>
              TRAINING FOR VOLUNTEER MANAGERS
            </Heading>
            <br />
            <Text fontSize={"lg"} align={"left"}>
              As a national thought leader in volunteerism, we know that
              organizations can make a greater impact on the community when they
              effectively engage and manage volunteers. To facilitate this
              process, we offer practical, cost-effective training and
              consulting for volunteer engagement and management.
            </Text>
            <br />
            <Button
              borderRadius={"50px"}
              p={5}
              colorScheme={"blue"}
              color="white"
            >
              LEARN MORE
            </Button>
          </Box>
        </SimpleGrid>
      </Box>
      <br />
      <br />
      <br />
      {/* 2nd div */}
      <Box w={"80%"} h={"100vh"} m={"auto"}>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={"20px"}>
          <Box alignItems={"center"}>
            <Image
              w={"100%"}
              h={"60%"}
              src="https://images.squarespace-cdn.com/content/v1/5c9001be7fdcb89c5f59bc3f/94a099a1-1cba-440a-8175-b67c461e29bb/VolunteerNow-young-leader-council-philantrophy-community-impact-non-profit.jpg?format=1500w"
            />
            <br />
            <Heading color={"blue.500"} fontSize={"xl"} align={"left"}>
              YOUNG LEADERS COUNCIL
            </Heading>
            <br />
            <Text fontSize={"lg"} align={"left"}>
              VolunteerNow's Young Leaders Council is designed to train the next
              generation of philanthropists and volunteer leaders to help create
              and lead a stronger North Texas community. This group will
              establish a pipeline of engaged and trained next-generation
              leaders as philanthropists, civic volunteers, nonprofit board
              members and community change-makers in North Texas.
            </Text>
            <br />
            <Button
              borderRadius={"50px"}
              p={5}
              colorScheme={"blue"}
              color="white"
            >
              LEARN MORE
            </Button>
          </Box>
          <Box>
            <Image
              w={"100%"}
              h={"60%"}
              src="https://images.squarespace-cdn.com/content/v1/5c9001be7fdcb89c5f59bc3f/ccd86f6b-65a6-438c-bbf6-e70e716f07de/VolunteerNow-Community-Service-Restitution-Court-community-service-probation.jpg?format=1500w"
            />
            <br />
            <Heading color={"blue.500"} fontSize={"xl"} align={"left"}>
              COMMUNITY SERVICE RESTITUTION
            </Heading>
            <br />
            <Text fontSize={"lg"} align={"left"}>
              This VolunteerNow program places and monitors eligible
              court-mandated individuals in volunteer positions to fulfill
              community service hours assigned as a condition of probation.
            </Text>
            <br />
            <Button
              borderRadius={"50px"}
              p={5}
              colorScheme={"blue"}
              color="white"
            >
              LEARN MORE
            </Button>
          </Box>
          <Box>
            <Image
              w={"100%"}
              h={"60%"}
              src="https://images.squarespace-cdn.com/content/v1/5c9001be7fdcb89c5f59bc3f/176c9e54-cb5c-457d-a772-e2e9cd187c62/VolunteerNow-helping-elderly-nursing-home.jpg?format=1500w9c5f59bc3f/82cb4ebc-46f8-425a-9779-17ce28ee52c0/VolunteerNow-training-program-volunteer-managers.jpg?format=1500w"
            />
            <br />
            <Heading color={"blue.500"} fontSize={"xl"} align={"left"}>
              VERIFYI
            </Heading>
            <br />
            <Text fontSize={"lg"} align={"left"}>
              VolunteerNow provides more than 500 nonprofits with a low-cost,
              in-depth background check for volunteers. The VeriFYI program is
              the most extensive check in the region, with access to Department
              of Public Safety records. Since VeriFYI’s inception in 1994, more
              than 1 million background checks have been performed.
            </Text>
            <br />
            <Button
              borderRadius={"50px"}
              p={5}
              colorScheme={"blue"}
              color="white"
            >
              LEARN MORE
            </Button>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Programs;
