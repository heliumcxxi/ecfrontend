import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: localStorage.getItem("products")
      ? JSON.parse(localStorage.getItem("products"))
      : [],
    total: 0,
    quantity: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      // check item is in cart, first name the new item and sort if same item with exact attribute is in cart
      const newItem = action.payload;
      const duplicate = state.products.filter(
        (e) =>
          e.title === newItem.title &&
          e.color === newItem.color &&
          e.size === newItem.size
      );
      // if in cart, find the exact attribute product and add quantity
      if (duplicate.length > 0) {
        state.products = state.products.filter(
          (e) =>
            e.title !== newItem.title ||
            e.color !== newItem.color ||
            e.size !== newItem.size
        );
        state.products = [
          ...state.products,
          {
            ...newItem,
            quantity: newItem.quantity + duplicate[0].quantity,
          },
        ];
        toast.success("Added to your cart", { position: "bottom-left" });
        // if not in cart, add new product
      } else {
        state.products.push(newItem);
        toast.success("Added to your cart", { position: "bottom-left" });
      }
      localStorage.setItem(
        "products",
        JSON.stringify(state.products.sort((a, b) => (a.id > b.id ? 1 : 0)))
      );
    },
    plusProduct: (state, action) => {
      const newItem = action.payload;
      const item = state.products.filter(
        (e) =>
          e.title === newItem.title &&
          e.color === newItem.color &&
          e.size === newItem.size
      );
      if (item.length > 0) {
        state.products = state.products.filter(
          (e) =>
            e.title !== newItem.title ||
            e.color !== newItem.color ||
            e.size !== newItem.size
        );
        state.products = [
          ...state.products,
          {
            ...newItem,
            quantity: newItem.quantity + 1,
          },
        ];
      }
      localStorage.setItem(
        "products",
        JSON.stringify(state.products.sort((a, b) => (a.id > b.id ? 1 : 0)))
      );
    },
    deleteProduct: (state, action) => {
      const newItem = action.payload;
      const item = state.products.filter(
        (e) =>
          e.title === newItem.title &&
          e.color === newItem.color &&
          e.size === newItem.size
      );
      if (item.length > 0) {
        state.products = state.products.filter(
          (e) =>
            e.title !== newItem.title ||
            e.color !== newItem.color ||
            e.size !== newItem.size
        );
        state.products = [
          ...state.products,
          {
            ...newItem,
            quantity: newItem.quantity - 1,
          },
        ];
      }
      localStorage.setItem(
        "products",
        JSON.stringify(state.products.sort((a, b) => (a.id > b.id ? 1 : 0)))
      );
    },
    removeProduct: (state, action) => {
      const item = action.payload;
      state.products = state.products.filter(
        (e) =>
          e.title !== item.title ||
          e.color !== item.color ||
          e.size !== item.size
      );
      localStorage.setItem(
        "products",
        JSON.stringify(state.products.sort((a, b) => (a.id > b.id ? 1 : 0)))
      );
    },
    getTotal(state, action) {
      // first extract total price and quantity from the cart
      let { newTotal, newQty } = state.products.reduce(
        (total, product) => {
          const totalPrice = product.price * product.quantity;

          total.newTotal += totalPrice;
          total.newQty += product.quantity;

          return total;
        },
        {
          newTotal: 0,
          newQty: 0,
        }
      );
      // replace cartTotal and cartQty with the new values
      state.total = newTotal;
      state.quantity = newQty;
    },
  },
});

export const {
  addProduct,
  updateProduct,
  removeProduct,
  deleteProduct,
  plusProduct,
  getTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
