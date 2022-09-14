import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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
        state.products[itemIdx] = {
          ...state.products[itemIdx],
          quantity: state.products[itemIdx].quantity + 1,
        };
        toast.info("Added to cart", { position: "bottom-left" });
      }
      // if not, add a new product
      else {
        const newProduct = {
          ...action.payload,
          quantity: 1,
        };
        state.products.push(newProduct);
        toast.info("Added to cart", { position: "bottom-left" });
      }
      // state.quantity += action.payload.quantity;
      // state.total += action.payload.price * action.payload.quantity;
    },
    deleteProduct: (state, action) => {
      const itemIdx = state.products.findIndex(
        (item) => item._id === action.payload._id
      );

      if (state.products[itemIdx]?.quantity > 1) {
        state.products[itemIdx].quantity -= 1;
      } else if (state.products[itemIdx]?.quantity === 1) {
        const newCartList = state.products.filter(
          (item) => item._id !== action.payload._id
        );
        state.products = newCartList;
        toast.info("Removed from the cart", { position: "bottom-left" });
        return state;
      }
    },
    removeProduct: (state, action) => {
      const newCartList = state.products.filter(
        (item) => item._id !== action.payload._id
      );
      state.products = newCartList;
      toast.info("Removed from the cart", { position: "bottom-left" });
      return state;
    },
  },
});

export const { addProduct, removeProduct, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
