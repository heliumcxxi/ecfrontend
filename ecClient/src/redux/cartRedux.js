import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    total: 0,
    quantity: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      // check if product already in cart
      const itemIdx = state.products.findIndex(
        (item) => item._id === action.payload._id
      );
      // if product in cart, add to the same group
      if (itemIdx >= 0) {
        state.products[itemIdx].quantity += 1;
      }
      // if not, add a new product
      else {
        const newProduct = {
          ...action.payload,
          quantity: 1,
        };
        state.products.push(newProduct);
      }
      state.quantity += action.payload.quantity;
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      const newCartList = state.products.filter(
        (item) => item._id !== action.payload._id
      );
      state.products = newCartList;
      return state;
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
