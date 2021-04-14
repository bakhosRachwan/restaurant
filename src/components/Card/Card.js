import { Text, Heading, Button, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { StateContext } from "../../State";

const Card = ({item}) => {
  const [state, dispatch] = useContext(StateContext);

  const handleClick = () => {
    dispatch({ type: "SET_ORDER", payload: item})
  }
  return (
      <Flex w={[ "180px", "200px", "215px"]} h={[ "180px", "200px", "215px"]} maxW="sm" borderRadius="lg" overflow="hidden" bg="brand.900" flexDirection="column" justifyContent="space-evenly"  m="5" as="a"  >
        <Heading m="5" mb="0" as="h4" alignSelf="center" size={[ "sm", "md"]} color="white" >
          {item.name}
        </Heading>
        <Text m="5" mt="0" as="b" color="white" alignSelf="center">
          {item.price}{" L.L"}
        </Text>
        <Button onClick={handleClick} colorScheme="orange" color="white" variant="solid" size="lg"  alignSelf="center" >
          ORDER
        </Button>
      </Flex>
  );
};

export default Card;
