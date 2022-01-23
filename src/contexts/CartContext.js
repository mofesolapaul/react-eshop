import { createContext, useContext } from "react";

const CartContext = createContext();

export function useCartContext() {
  return useContext(CartContext);
}

export default CartContext;
