import { ProductActionEnum } from "../enums";

export const productsReducer = (state = [], action) => {
  const { type, payload } = action;
  let changeSet;

  switch (type) {
    case ProductActionEnum.ADD_PRODUCTS:
      changeSet = [...payload];
      break;
    default:
      break;
  }

  return [...state, ...changeSet];
};
