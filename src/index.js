import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react"
import  Theme  from "./components/Colors/Colors"
import { StateProvider } from './State';
ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <ChakraProvider theme={Theme}>
        <App />
      </ChakraProvider>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

