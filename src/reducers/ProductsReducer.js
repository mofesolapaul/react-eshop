import { ProductActionEnum } from "../enums";
import Product from "../models/Product";

export const productsReducer = (state = [], action) => {
  const { type, payload } = action;
  let changeSet;

  switch (type) {
    case ProductActionEnum.ADD_PRODUCTS:
      changeSet = payload.map(item => new Product(item));
      break;
    default:
      break;
  }

  return [...state, ...changeSet];
};
