import { CartActionEnum } from "../enums";
import { CartItem } from "../models";

export const cartReducer = (state = {}, action) => {
  const { type, payload } = action;
  let changeSet = {};

  const item = state[payload.id]
    ? { ...state[payload.id] }
    : new CartItem(payload);

  switch (type) {
    case CartActionEnum.ADD_ITEM:
      item.quantity++;
      changeSet = { [item.id]: item };
      break;
    case CartActionEnum.REMOVE_ITEM:
      item.quantity--;
      if (!item.quantity) {
        const newState = { ...state };
        delete newState[item.id];
        return newState;
      }
      changeSet = { [item.id]: item };
      break;
    default:
      break;
  }

  return { ...state, ...changeSet };
};
