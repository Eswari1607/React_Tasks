import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
  cart: [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      quantity: 1,
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts",
      price: 22.3,
      quantity: 1,
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      quantity: 1,
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      quantity: 1,
    },
    {
      id: 5,
      title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      quantity: 1,
    },
    {
      id: 6,
      title: "Solid Gold Petite Micropave",
      price: 168,
      quantity: 1,
    },
    {
      id: 7,
      title: "White Gold Plated Princess",
      price: 9.99,
      quantity: 1,
    },
    {
      id: 8,
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      price: 10.99,
      quantity: 1,
    },
    {
      id: 9,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
      price: 64,
      quantity: 1,
    },
    {
      id: 10,
      title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      price: 109,
      quantity: 1,
    }
  ],
  totalAmount: 0,
  totalQuantity: 10
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        totalAmount: state.totalAmount + action.payload.price,
        totalQuantity: state.totalQuantity + 1
      };
    case 'DECREASE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
        totalAmount: state.totalAmount - action.payload.price,
        totalQuantity: state.totalQuantity - 1
      };
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const increaseQuantity = (id, price) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: { id, price } });
  };

  const decreaseQuantity = (id, price) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: { id, price } });
  };

  return (
    <CartContext.Provider value={{ state, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  return useContext(CartContext);
};

export { CartProvider, useCart };
