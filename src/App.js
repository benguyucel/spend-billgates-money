import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import ProductList from './components/ProductList';
import { ChakraProvider } from '@chakra-ui/react'

function App() {


  return (
    <div className="App">
      <Nav />
      <ChakraProvider>
        <ProductList />
      </ChakraProvider>
    </div>
  );
}

export default App;
