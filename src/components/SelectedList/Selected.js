import {  Box } from "@chakra-ui/layout";
import { useContext } from "react";
import { StateContext } from "../../State";
import SelectedItem from "../SelectedItem/SelectedItem";

const Selected = () => {
    const [state] = useContext(StateContext)
    return ( 
        <Box overflowY="scroll" maxH={["55vh", "50vh", "50vh", "65vh"]}  w="100%">
            {state.order.map(item => <SelectedItem item={item} key={item.id} />)}            
        </Box>
     );
}
 
export default Selected;