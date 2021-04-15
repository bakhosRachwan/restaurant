import { Text, Heading, Button, Flex, useDisclosure, Link } from "@chakra-ui/react";
import { useContext } from "react";
import { StateContext } from "../../State";
import Modall from "../Modal/Modal";


const Card = ({item}) => {
  const [, dispatch] = useContext(StateContext);
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleClick = () => {
    dispatch({ type: "SET_ORDER", payload: item})
  }
  return (
      <Flex w={[ "180px", "200px", "215px"]} h={[ "180px", "200px", "215px"]} maxW="sm" borderRadius="lg" overflow="hidden" bg="brand.900" flexDirection="column" justifyContent="space-evenly" as="a"  >
        <Heading m="5" mb="0" as="h4" alignSelf="center" size={[ "sm", "md"]} color="white" textAlign="center" >
          {item.name}
        </Heading>
        <Text m="5" mt="0" as="b" color="white" alignSelf="center">
          {item.price}{" L.L"}
        </Text>
        <Link onClick={onOpen} alignSelf="center">See More..</Link>
        <Button onClick={handleClick} colorScheme="orange" color="white" variant="solid" size="lg"  alignSelf="center" >
          ORDER
        </Button>
      <Modall item={item} isOpen={isOpen} onClose={onClose} onOpen={onOpen} handleClick={handleClick} />
      </Flex>
  );
};

export default Card;
