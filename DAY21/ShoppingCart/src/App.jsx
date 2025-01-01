import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ShopBanner from './components/ShopBanner';
import Navbar from './components/Navbar';
import { Container, Box } from '@mui/material';
import './index.css';  
import './App.css'

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (id) => setCart([...cart, id]);
  const removeFromCart = (id) => setCart(cart.filter((item) => item !== id));

  return (
    <div>
      <Navbar cart={cart} />
      <ShopBanner />
      <Container maxWidth="md">
        <Box my={5} textAlign="center">
          <Cart cart={cart} />
          <ProductList addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} />
        </Box>
      </Container>
    </div>
  );
};

export default App;
