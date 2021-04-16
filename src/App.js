import { Flex } from "@chakra-ui/react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Admin from "./components/Admin";
import Footer from "./components/Footer/Footer";
import Menu from "./pages/Menu/Menu";
import { AuthProvider } from "./pages/Authentication/Auth";
import { Route, BrowserRouter as Router } from "react-router-dom";
import PrivateRoute from "./pages/Authentication/PrivateRoute";
import Login from "./pages/Authentication/Login";
import Signup from "./pages/Authentication/Signup";
import User from "./pages/User/User";

function App() {
  return (
    <AuthProvider>
      <Router>
    <Flex className="App" bg="brand.100" h="100%" flexDirection="column" justifyContent="space-between">
      <Navbar />
      <PrivateRoute exact path="/menu" component={ Menu } />
      <Route exact path="/signup" component={ Signup } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/admin" component={ Admin } />
      <Route exact path="/user" component={ User } />
      <Route exact path="/" component={ Hero } />
      <Footer />
    </Flex>
      </Router>
    </AuthProvider>
  );
}

export default App;
