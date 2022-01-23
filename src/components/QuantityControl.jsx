import { MinusOutlined, PlusOutlined } from "@ant-design/icons/lib/icons";
import { Button } from "antd";
import { Action } from "../models";
import { CartActionEnum } from "../enums";
import { useCartContext } from "../contexts";

const QuantityControl = ({ item }) => {
  const { cartState: cart, cartDispatch } = useCartContext();

  const add = () => {
    if (getQuantity() >= item.quantity) return;
    cartDispatch(new Action(CartActionEnum.ADD_ITEM, item));
  };
  const subtract = () => {
    if (getQuantity() < 1) return;
    cartDispatch(new Action(CartActionEnum.REMOVE_ITEM, item));
  };
  const getQuantity = () => cart[item.id]?.quantity || 0;

  return (
    <>
      <Button
        onClick={subtract}
        disabled={!cart[item.id]}
        icon={<MinusOutlined />}
      />
      <Button disabled={true} style={{ background: "#fff", color: "#000" }}>
        {getQuantity()}
      </Button>
      <Button
        onClick={add}
        disabled={getQuantity() >= item.quantity}
        icon={<PlusOutlined />}
      />
    </>
  );
};

export default QuantityControl;
