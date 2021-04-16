import React, { useCallback } from "react";
import { withRouter } from "react-router";
import firebase from "../../firebase";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";

const Signup = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/menu");
      } catch (error) {
        alert(error);
        history.push("/login");
      }
    },
    [history]
  );

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg="none">
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"white"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <form onSubmit={handleSignUp}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  type="submit"
                  bg={"brand.300"}
                  color={"white"}
                  _hover={{
                    bg: "brand.100",
                  }}
                >
                  Sign Up
                </Button>
              </Stack>
              <Divider />
              <Button
                onClick={() => history.push("/login")}
                bg={"brand.300"}
                color={"white"}
                _hover={{
                  bg: "brand.100",
                }}
              >
                Log in
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};
export default withRouter(Signup);
