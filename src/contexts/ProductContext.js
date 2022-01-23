import { createContext, useContext } from "react";

const ProductContext = createContext();

export function useProductContext() {
  return useContext(ProductContext);
}

export default ProductContext;
