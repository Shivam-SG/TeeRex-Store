import React from 'react';
import { Container } from '@mui/material';
import Cart from '../components/Cart';

const CartPage = ({ cartItems, onRemoveFromCart, onUpdateQuantity }) => {
  return (
    <Container style={{ marginTop: 79 }}>
      <Cart cartItems={cartItems} onRemoveFromCart={onRemoveFromCart} onUpdateQuantity={onUpdateQuantity} />
    </Container>
  );
};

export default CartPage;
