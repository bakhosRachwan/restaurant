import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router-dom";
import firebase from "../../firebase";
import { AuthContext } from "../Authentication/Auth";
import { StateContext } from "../../State";
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
//   useColorModeValue,
} from "@chakra-ui/react";

const Login = ({ history }) => {
  const [, dispatch] = useContext(StateContext);
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        const { user}  = await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        
          console.log(user.uid)
        dispatch({ type: "CURRENT_USER", payload: user.uid})

        history.push("/menu");
      } catch (error) {
        alert(error);
        history.push("/signup");
      }
    },
    //eslint-disable-next-line
    [history]
  );

  // const { currentUser } = useContext(AuthContext);

  // if (currentUser) {
  //   return <Redirect to="/menu" />;
  // }
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg="none"
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Log Into your account</Heading>
          <Text fontSize={"lg"} color={"white"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg="white"
          boxShadow={"lg"}
          p={8}
        >
          <form onSubmit={handleLogin}>
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
                  Log In
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default withRouter(Login);
