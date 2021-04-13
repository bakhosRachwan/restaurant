import { useEffect, useState } from "react";
import firebase from "../firebase";
import MenuItems from "./MenuItems";
import { uuid } from "uuidv4";
import { Select, Input, Textarea, Box, Button, HStack, Text, Divider } from "@chakra-ui/react";

const Admin = () => {
  const [datas, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("starters");
  const ref = firebase.firestore().collection(type);

  function getData() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setData(items);
      setLoading(false);
    });
  }

  const handleSelect = (e) => {
    e.preventDefault();
    const { types } = e.target;
    setType(types.value);
  };
  const addData = (newItem) => {
    ref
      .doc(newItem.id)
      .set(newItem)
      .catch((err) => {
        console.error(err);
      });
  };
  const deleteData = (item) => {
    ref
      .doc(item.id)
      .delete()
      .catch((err) => {
        console.error(err);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, price, ingridient } = e.target;
    addData({
      name: name.value,
      price: price.value,
      ingridient: ingridient.value.split(","),
      id: uuid(),
    });
    getData();
    e.target.reset();
  };
  useEffect(() => {
    getData();
    //eslint-disable-next-line
  }, [type]);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <Box w="100%" h={[ "50%", "200px"]} px="4" mt="3">
        <form onSubmit={handleSelect}>
          <HStack>
            <Text>Menu Page:</Text>
            <Select name="types" w="200px">
              <option value="starters">Starters</option>
              <option value="beef burger">Beef Burger</option>
              <option value="chicken burger">Chicken Burger</option>
            </Select>
            <Button type="submit">Select</Button>
          </HStack>
        </form>
        <form onSubmit={handleSubmit}>
          <HStack  display={{ md: "flex"}} spacing="2">
            <Text>Name</Text>
            <Input name="name" type="text" />
            <Text>Price</Text>
            <Input name="price" type="text" />
            <Text>Ingridient</Text>
            <Textarea name="ingridient" type="text" />
          </HStack>
          <Button type="submit">Submit</Button>
        </form>
      <Divider  my="3" />
      </Box>
      <Box m="4">
        {datas.map((item) => (
          <MenuItems item={item} handleDelete={deleteData} />
        ))}
      </Box>
    </>
  );
};

export default Admin;
