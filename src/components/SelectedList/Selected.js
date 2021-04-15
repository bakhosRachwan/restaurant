import {  Box } from "@chakra-ui/layout";
import { useContext } from "react";
import { StateContext } from "../../State";
import SelectedItem from "../SelectedItem/SelectedItem";

const Selected = () => {
    const [state] = useContext(StateContext)
    return ( 
        <Box overflowY="scroll" maxH="60vh"  w="100%">
            {state.order.map(item => <SelectedItem item={item} key={item.id} />)}            
        </Box>
     );
}
 
export default Selected;