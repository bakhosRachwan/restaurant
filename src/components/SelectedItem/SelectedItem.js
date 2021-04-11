import { Box, Text, Input, Button, HStack, Flex } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";

const SelectedItem = () => {
  return (
    <Box w={["200px", "360px"]} h={["100px", "120px"]}>
      <HStack display="flex" justifyContent="space-evenly" mb="2"color="white" >
        <Text w="64%">Classic Burger</Text>
        <Input type="number" defaultValue={1} min={1} max={20} w="15%" />
        <Text>9000</Text>
      </HStack>
      <Flex justifyContent="space-between">
        <Input
          variant="filled"
          bg="brand.900"
          color="white"
          placeholder="Order Note..."
          size="md"
          w={["70%", "85%"]}
        />
        <Button variant="outline">
          <MdDelete />{" "}
        </Button>
      </Flex>
    </Box>
  );
};

export default SelectedItem;
