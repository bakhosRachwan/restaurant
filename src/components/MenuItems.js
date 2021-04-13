import { Box, Button, HStack, Text } from "@chakra-ui/react";
const MenuItems = ({ item, handleDelete }) => {
  return (
    <Box my="2">
      <HStack justifyContent="space-between">
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
      </HStack>
      <Text>{item.ingridient}</Text>
      <Button size="sm" mt="2" onClick={() => handleDelete(item)}>
        DELETE
      </Button>
    </Box>
  );
};

export default MenuItems;
