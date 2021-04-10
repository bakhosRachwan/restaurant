import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
export default function CallToActionWithVideo() {
  return (
    <Container maxW={"7xl"}>
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
              EDENBERG
            </Text>
            <br />
            <Text
              as={"span"}
              color={"brand.300"}
              fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
            >
              EAT stay EAT!
            </Text>
          </Heading>
          <Text color={"white"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat!
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              bg={"brand.300"}
              _hover={{ bg: "orange" }}
            >
              Sign In
            </Button>
            <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6}>
              About Us
            </Button>
          </Stack>
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
                "https://instagram.fkye4-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/65815092_1419972508153401_1293368941653319563_n.jpg?tp=1&_nc_ht=instagram.fkye4-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=3byx9UbDxgAAX8P6KDy&edm=AABBvjUAAAAA&ccb=7-4&oh=f6a94fa40b65abbbb8ea543a2b3f559a&oe=609468B5&_nc_sid=83d603"
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
