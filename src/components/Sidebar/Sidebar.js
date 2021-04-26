import { Button } from "@chakra-ui/button";
import { Box, Container, Divider, Flex, VStack, Text, HStack } from "@chakra-ui/layout";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { StateContext } from "../../State";
import Selected from "../SelectedList/Selected";

const Sidebar = () => {
    const history = useHistory();
    const [state] = useContext(StateContext);
    let sum = 0;

    return ( 
        <Container w={["100%", "410px"]} h={["785px", "835px"]} borderRadius="10px" color="white" bg="#313236" >
            <Box>
                <Text my="2" pt="2">Your Selected Items:</Text>
                <HStack>
                    <Button bg="brand.300" color="white">Dine IN</Button>
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
                        {state.order !== []? (state.order.map(item => 
                             sum += parseInt(item.price)
                        )) : null}
                        <Text>{sum}</Text>
                    </VStack>
                </Flex>
                <Button bg="brand.300" color="white" onClick={() => history.push("/user")} >Continue to Payment</Button>
            </Box>
        </Container>
     );
}
 
export default Sidebar;