import {  Box } from "@chakra-ui/layout";
import { useContext } from "react";
import { StateContext } from "../../State";
import SelectedItem from "../SelectedItem/SelectedItem";

const Selected = () => {
    const [state] = useContext(StateContext)
    return ( 
        <Box className="contOverflow"  overflowY="scroll" maxH="60vh"  w="410px">
            {state.order.map(item => <SelectedItem item={item} key={item.id} />)}            
        </Box>
     );
}
 
export default Selected;