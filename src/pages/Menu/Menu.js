import firebase from "../../firebase";
import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Card from "../../components/Card/Card";
import {
  Box,
  SimpleGrid,
  VStack,
  Button,
  Text,
  Select,
} from "@chakra-ui/react";

const Menu = () => {
  const [data, setData] = useState([]);
  const [type, setType] = useState("starters");
  const ref = firebase.firestore().collection(type);

  const getData = () => {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setData(items);
    });
  };
  const handleSelect = (e) => {
    e.preventDefault();
    const { types } = e.target;
    setType(types.value);
  };
  useEffect(() => {
    getData();
    //eslint-disable-next-line
  }, [type]);

  return (
    <Box
      display={{ md: "flex" }}
      flexDir={{ sm: "column", lg: "row" }}
      m={[1, 4]}
      justifyContent={{ lg: "space-evenly" }}
    >
      <Box>
        <form onSubmit={handleSelect}>
          <VStack>
            <Text>Menu Page:</Text>
            <Select name="types" w="200px">
              <option value="starters">Starters</option>
              <option value="beef burger">Beef Burger</option>
              <option value="chicken burger">Chicken Burger</option>
            </Select>
            <Button type="submit">Select</Button>
          </VStack>
        </form>
      </Box>
      <SimpleGrid columns={[2, 3]} spacing={[2, 6]}>
        {data.map((item) => (
          <Card item={item} />
        ))}
      </SimpleGrid>
      <Sidebar />
    </Box>
  );
};

export default Menu;
