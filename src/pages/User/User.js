import { Button } from "@chakra-ui/react";
import firebase from "../../firebase";
import { useHistory } from "react-router-dom";

const User = () => {
    const history = useHistory();
    const handleClick = () => {
        firebase.auth().signOut()
        history.push('/');
    }
    return ( 
        <Button onClick={handleClick}>Sign out</Button>
     );
}
 
export default User;