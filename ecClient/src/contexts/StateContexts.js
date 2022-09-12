import { createContext, useContext, useState } from "react";
import Product from "../pages/Product";

const Contexts = createContext();

export const StateContexts = ({ children }) => {
  // create states for variable manipulation
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  // create reassignable variables to store index and search result
  let foundItem;
  let index;

  // add or delete products

  // change total price

  // change product quantity

  // remove product
  const onRemove = (product) => {
    // foundItem = cartItems.find((item) => item._id === product._id);
    // const newCartItems = cartItems.filter((item) => item._id !== product._id);
    // setCartItems(newCartItems);
    console.log(product.id);
  };

  //return to share context function
  return <Contexts.Provider value={{ onRemove }}>{children}</Contexts.Provider>;
};

export const useStateContext = () => useContext(Contexts);
