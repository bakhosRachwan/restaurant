import firebase from "../../firebase";
import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Card from "../../components/Card/Card";
import {
  Box,
  SimpleGrid,
  HStack,
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
      p="4"
      justifyContent={{ lg: "space-between" }}
    >
      <Box>
        <form onSubmit={handleSelect}>
          <HStack mb="4">
            <Text>Menu Page:</Text>
            <Select name="types" w="200px" borderColor="brand.900">
              <option value="starters">Starters</option>
              <option value="beef burger">Beef Burger</option>
              <option value="chicken burger">Chicken Burger</option>
            </Select>
            <Button type="submit" bg="brand.300" color="white" >Select</Button>
          </HStack>
        </form>
        <SimpleGrid columns={[1, 3, 3, 4]} spacing={[2, 6]}>
          {data.map((item) => (
            <Card item={item} />
          ))}
        </SimpleGrid>
      </Box>
      <Box w={["95%", "26%"]}>
        <Sidebar />
      </Box>
    </Box>
  );
};

export default Menu;
