import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Components/CartSlice'; // Update this path if cartSlice.js is in the Components folder

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
