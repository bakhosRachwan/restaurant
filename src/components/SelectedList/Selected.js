import {  Box } from "@chakra-ui/layout";
import SelectedItem from "../SelectedItem/SelectedItem";
const Selected = () => {
    return ( 
        <Box className="contOverflow"  overflowY="scroll" maxH="60vh"  w="410px">
            <SelectedItem />
            <SelectedItem />
            <SelectedItem />
            <SelectedItem />
            <SelectedItem />
            <SelectedItem />
            <SelectedItem />
            <SelectedItem />
            <SelectedItem />
        </Box>
     );
}
 
export default Selected;