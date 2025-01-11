import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItems(state, action) {
      state.items = action.payload;
      state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    setQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        state.totalQuantity = state.totalQuantity - item.quantity + quantity;
        state.totalAmount = state.totalAmount - (item.price * item.quantity) + (item.price * quantity);
        item.quantity = quantity;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        state.totalQuantity -= item.quantity;
        state.totalAmount -= item.price * item.quantity;
        state.items = state.items.filter(item => item.id !== id);
      }
    },
  },
});

export const { setCartItems, setQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
