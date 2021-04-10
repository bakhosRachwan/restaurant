import { Text, Heading, Button, Flex } from "@chakra-ui/react";

const Card = () => {
  return (
      <Flex w={[ "180px", "200px", "215px"]} h={[ "180px", "200px", "215px"]} maxW="sm" borderRadius="lg" overflow="hidden" bg="brand.900" flexDirection="column" justifyContent="space-evenly"  m="5" as="a"  >
        <Heading m="5" mb="0" as="h4" alignSelf="center" size={[ "sm", "md"]} color="white" >
          Classic Burger
        </Heading>
        <Text m="5" mt="0" as="b" color="white" alignSelf="center">
          18 000 L.L
        </Text>
        <Button colorScheme="orange" color="white" variant="solid" size="lg"  alignSelf="center" >
          ORDER
        </Button>
      </Flex>
  );
};

export default Card;
