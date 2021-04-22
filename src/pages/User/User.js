import {
  Button,
  Container,
  HStack,
  Text,
  Divider
} from "@chakra-ui/react";

import firebase from "../../firebase";
import { useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { StateContext } from "../../State";
const User = () => {
  const [data, setData] = useState([]);
  const history = useHistory();
  const [ state ] = useContext(StateContext);
  const handleClick = () => {
    firebase.auth().signOut();
    history.push("/");
  };
  
  useEffect(() => {
    firebase.firestore().collection("users").onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
         if(state.current === doc.data().id){
            items.push(doc.data()) 
          }
      });
      setData(items[0]);
    })
  }, [])
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
      {console.log(data)}
      <Divider my="4" />
      <Button w="30%" onClick={handleClick}>
        Sign out
      </Button>
      <Button w="30%" onClick={() => console.log(state)}>
        TEST
      </Button>
    </Container>
  );
};

export default User;
