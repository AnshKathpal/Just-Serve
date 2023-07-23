import { ReactNode } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading _hover = {{
      color : "rgb(15,115,217)"
    }} as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>Admins</Heading>
          <Text>
            We have been working together as Team collaboration is the
            cornerstone of building team synergy, because collaborative teams
            work together to brainstormnew ideas, share knowledge, and complete
            ambitious projects.
          </Text>
        </Stack>
        <Stack padding = "40px"
          direction={{ base: "column", md: "column" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Ansh Kathpal</TestimonialHeading>
              <TestimonialText>
                The project journey was characterized by a continuous cycle of
                inspiration, motivation, and accomplishment. The collective
                effort and dedication of the team propelled us forward, creating
                a momentum that drove us to new heights.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://ca.slack-edge.com/T05D44GA3A5-U05D2LPUJCA-1215b48841ed-512"
              }
              name={"Team Leader"}
              title={"Full Stack Web Developer"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Abhishek Raskar</TestimonialHeading>
              <TestimonialText>
                By actively seeking solutions and collaborating with team
                members, I fostered an environment of open communication and
                mutual support, which proved instrumental in achieving our
                project objectives.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://ca.slack-edge.com/T05D44GA3A5-U05D5RFC1RA-018cc643f409-512"
              }
              name={"Team Member"}
              title={"Full Stack Web Developer"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Reddyvari tejeshkumarreddy</TestimonialHeading>
              <TestimonialText>
              By actively seeking solutions and collaborating with team
                members, I fostered an environment of open communication and
                mutual support, which proved instrumental in achieving our
                project objectives.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://ca.slack-edge.com/T05D44GA3A5-U05D2JR14UW-49cadb38fb0c-512"
              }
              name={"Team Member"}
              title={"Full Stack Web Developer"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Saurabh Pandey</TestimonialHeading>
              <TestimonialText>
              My experience in the project has been incredibly rewarding, providing me with a solid foundation for future endeavors.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://ca.slack-edge.com/T05D44GA3A5-U05DNS0M6TB-6dea5c016f5b-512"
              }
              name={"Team Member"}
              title={"Full Stack Web Developer"}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
