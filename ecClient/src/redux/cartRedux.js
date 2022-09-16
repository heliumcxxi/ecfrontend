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
      // check if product already in cart
      const itemIdx = state.products.findIndex(
        (item) => item._id === action.payload._id
      );
      const matchedItem = state.products.find(
        (item) =>
          item.color === action.payload.color &&
          item.size === action.payload.size
      );

      // if product in cart, with same color and size, add to the same group
      // not completed yet
      if (itemIdx >= 0 && matchedItem) {
        state.products[itemIdx] = {
          ...state.products[itemIdx],
          quantity: (state.products[itemIdx].quantity += 1),
        };
        toast.success("Added to your cart", { position: "bottom-left" });
      }
      // if not, add a new product
      else {
        const newProduct = {
          ...action.payload,
          quantity: 1,
        };
        state.products.push(newProduct);
        toast.success("Added to your cart", { position: "bottom-left" });
      }
      localStorage.setItem("products", JSON.stringify(state.products));
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
        toast.error("Removed from your cart", { position: "bottom-left" });
        return state;
      }
    },
    removeProduct: (state, action) => {
      const newCartList = state.products.filter(
        (item) => item._id !== action.payload._id
      );
      state.products = newCartList;
      toast.error("Removed from your cart", { position: "bottom-left" });
      return state;
    },
    getTotal(state, action) {
      // first extract newTotal and newQty from the cart
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

export const { addProduct, removeProduct, deleteProduct, getTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
