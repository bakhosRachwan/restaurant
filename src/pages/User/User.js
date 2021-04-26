import { Button, Container, HStack, Text, Divider } from "@chakra-ui/react";
import firebase from "../../firebase";
import { useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { StateContext } from "../../State";

const User = () => {
  const [data, setData] = useState([]);
  const history = useHistory();
  const [state] = useContext(StateContext);
  const ref = firebase.firestore().collection("users");

  const handleClick = () => {
    firebase.auth().signOut();
    history.push("/");
  };
  const deleteData = (item) => {
    ref
      .doc(item.id)
      .delete()
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(
    () => {
      ref.onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          if (state.current === doc.data().id) {
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
      {console.log(state)}
      <Divider my="4" />
      <Button w="30%" onClick={handleClick}>
        Sign out
      </Button>
      {data.role === "user" ? (
        <Button w="30%" onClick={() => deleteData(data)}>
          Delete Account
        </Button>
      ) : (
        <Button w="30%" onClick={() => history.push("/admin")}>
          Edit MENU
        </Button>
      )}
    </Container>
  );
};

export default User;
