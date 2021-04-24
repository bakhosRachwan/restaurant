import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "./Auth";

const PrivateRoute = ({ component: RouteComponent, ...rest}) => {
    const {currentUser} = useContext(AuthContext)
    return (  
        <Route
            {...rest}
            render={routerProps =>
                currentUser !== undefined? (
                    <RouteComponent  />
                ):(
                    <Redirect to={"/signup"} />
                ) 
            }
        />
    );
}
 
export default PrivateRoute;