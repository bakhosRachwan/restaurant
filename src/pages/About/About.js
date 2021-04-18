import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Divider,
} from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW={"7xl"}>
        <Heading fontSize={["3xl", "6xl"]}>ABOUT US</Heading>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              color="white"
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "brand.300",
                zIndex: -1,
              }}
            >
              WHAT WE DO
            </Text>
            <br />
            <Text
              as={"span"}
              color={"brand.300"}
              fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
            >
              Lorem ipsum dolor sit 
            </Text>
          </Heading>
          <Text color={"white"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat!
          </Text>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            height={"400px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              objectFit="cover"
              src={
                "https://instagram.fkye4-1.fna.fbcdn.net/v/t51.2885-15/e35/36791532_206669896851892_6506823845112971264_n.jpg?tp=1&_nc_ht=instagram.fkye4-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=NpQlI-_WsuMAX8ByXWx&edm=AABBvjUAAAAA&ccb=7-4&oh=c55282d0604db8f5d927b7e8c7de7788&oe=60942EC6&_nc_sid=83d603"
              }
            />
          </Box>
        </Flex>
      </Stack>
      <Divider />
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
              <Flex
                flex={1}
                justify={"center"}
                align={"center"}
                position={"relative"}
                w={"full"}
              >
                <Box
                  position={"relative"}
                  height={"400px"}
                  rounded={"2xl"}
                  boxShadow={"2xl"}
                  width={"full"}
                  overflow={"hidden"}
                >
                  <Image
                    alt={"Hero Image"}
                    fit={"cover"}
                    align={"center"}
                    w={"100%"}
                    h={"100%"}
                    objectFit="cover"
                    src={
                      "https://instagram.fkye4-1.fna.fbcdn.net/v/t51.2885-15/e35/70170482_374444580172602_521046545727201398_n.jpg?tp=1&_nc_ht=instagram.fkye4-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=AWQznIN2S-wAX8vDfnW&edm=AABBvjUAAAAA&ccb=7-4&oh=37545df49a767ee0d5f200285026c755&oe=6094984E&_nc_sid=83d603"
                    }
                  />
                </Box>
              </Flex>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              color="white"
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "brand.300",
                zIndex: -1,
              }}
            >
              WHO WE ARE!!
            </Text>
            <br />
            <Text
              as={"span"}
              color={"brand.300"}
              fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
            >
              Lorem ipsum dolor sit 
            </Text>
          </Heading>
          <Text color={"white"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat!
          </Text>
        </Stack>
      </Stack>
    </Container>
  );
};

export default About;
