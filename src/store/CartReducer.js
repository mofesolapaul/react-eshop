import { ActionEnum } from "./ActionEnum";
import CartItem from "./CartItem";

export const cartReducer = (state = {}, action) => {
  const { type, payload } = action;
  let changeSet = {};
  const item = state[payload.id]
    ? { ...state[payload.id] }
    : new CartItem(payload);

  switch (type) {
    case ActionEnum.ADD_ITEM:
      item.quantity++;
      changeSet = { [item.id]: item };
      break;
    case ActionEnum.REMOVE_ITEM:
      item.quantity--;
      if (!item.quantity) {
        delete state[item.id];
        return { ...state };
      }
      changeSet = { [item.id]: item };
      break;
    default:
      break;
  }

  return { ...state, ...changeSet };
};
