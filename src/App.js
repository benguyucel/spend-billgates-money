import './App.css';
import Nav from './components/Nav';
import ProductList from './components/ProductList';
import { ChakraProvider } from '@chakra-ui/react'
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Nav />
      <ChakraProvider>
        <ProductList />
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
