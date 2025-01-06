import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { state, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div>
      {state.cart.map(item => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} style={{ width: '50px' }} />
          <h2>{item.title}</h2>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => increaseQuantity(item.id, item.price)}>Increase</button>
          <button onClick={() => decreaseQuantity(item.id, item.price)}>Decrease</button>
        </div>
      ))}
      <h3>Total Quantity: {state.totalQuantity}</h3>
      <h3>Total Amount: ${state.totalAmount.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
