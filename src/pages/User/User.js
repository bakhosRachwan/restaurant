import { Button, Container, HStack, Text, Divider } from "@chakra-ui/react";
import firebase from "../../firebase";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

const User = () => {
  const [data, setData] = useState([]);
  const history = useHistory();
  const ref = firebase.firestore().collection("users");

  const handleClick = () => {
    firebase.auth().signOut();
    history.push("/");
  };

  useEffect(
    () => {
      ref.onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          if (firebase.auth().currentUser.uid === doc.data().id) {
            items.push(doc.data());
            console.log("done");
          }
        });
        setData(items[0]);
      });
    },
    //eslint-disable-next-line
    []
  );
  return (
    <Container h="100vh">
      <HStack>
        <Text>Name: </Text>
        <Text>{data.name}</Text>
      </HStack>
      <HStack>
        <Text>Email: </Text>
        <Text>{data.email}</Text>
      </HStack>
      <Divider my="4" />
      <Button w="30%" onClick={handleClick}>
        Sign out
      </Button>
      {data.role === "user" ? (
        null
      ) : (
        <Button w="30%" onClick={() => history.push("/admin")}>
          Edit MENU
        </Button>
      )}
    </Container>
  );
};

export default User;
