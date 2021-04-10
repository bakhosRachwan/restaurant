import { Flex } from "@chakra-ui/react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Flex className="App" bg="brand.100" h="100%" flexDirection="column" justifyContent="space-between">
      <Navbar />
      <Hero />
      <Footer />
    </Flex>
  );
}

export default App;
