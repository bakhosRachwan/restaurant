import { Button } from "@chakra-ui/button";
import { Box, Container, Divider, Flex, VStack, Text, HStack } from "@chakra-ui/layout";
import Selected from "../SelectedList/Selected";

const Sidebar = () => {
    return ( 
        <Container w={["350px", "410px"]} h="835px" borderRadius="10px" color="white" bg="#313236" >
            <Box>
                <Text my="2">Order #212</Text>
                <HStack>
                    <Button bg="brand.300" color="white"  >Dine IN</Button>
                    <Button color="brand.300" variant="outline" >Take Away</Button>
                    <Button color="brand.300" variant="outline" >Delivery</Button>
                </HStack>
                <Flex justifyContent="space-between" mt="4">
                    <Text ml="2">Items</Text>
                    <HStack mr="6">
                        <Text>Qty.</Text>
                        <Text> </Text>
                        <Text>Price</Text>
                    </HStack>
                </Flex>
            </Box>
            <Divider mt="4" mb="4" orientation="horizontal" />
            <Box overflow="hidden">
                <Selected />
            </Box>
            <Divider mb="4" orientation="horizontal" />
            <Box>
                <Flex justifyContent="space-between">
                    <VStack>
                        <Text>Discount:</Text>
                        <Text>Sub Total:</Text>
                    </VStack>
                    <VStack>
                        <Text>0</Text>
                        <Text>12.50</Text>
                    </VStack>
                </Flex>
                <Button bg="brand.300" color="white" >Continue to Payment</Button>
            </Box>
        </Container>
     );
}
 
export default Sidebar;