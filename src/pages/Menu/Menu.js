import firebase from "../../firebase";
import { useContext, useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Card from "../../components/Card/Card";
import { Box, Grid, VStack, Button, Text, Select } from "@chakra-ui/react";
import { StateContext } from "../../State";

const Menu = () => {
  const [data, setData] = useState([]);
  const [type, setType] = useState("starters");
  const [state] = useContext(StateContext)
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
    <Box display={{md: "flex"}}>
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
      <Grid templateColumns={{xs:"repeat(2, 1fr)" , md: "repeat(5, 1fr)"}} gap={6}>
        {data.map((item) => (
          <Card item={item} />
        ))}
      </Grid>
      {console.log(state.order)}
      <Sidebar />
    </Box>
  );
};

export default Menu;
