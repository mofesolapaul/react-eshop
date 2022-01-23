import { MinusOutlined, PlusOutlined } from "@ant-design/icons/lib/icons";
import { Button } from "antd";
import { useState } from "react";
import Action from "../store/Action";
import { ActionEnum } from "../store/ActionEnum";
import { useCartContext } from "../store/CartContext";

const QuantityControl = ({ item }) => {
  const [quantity, setQuantity] = useState(0);
  const { cartState, cartDispatch } = useCartContext();

  const add = () => {
    if (quantity >= item.quantity) {
      return;
    }
    cartDispatch(new Action(ActionEnum.ADD_ITEM, item));
    setQuantity(quantity + 1);
  };
  const subtract = () => {
    if (quantity < 1) {
      return;
    }
    cartDispatch(new Action(ActionEnum.REMOVE_ITEM, item));
    setQuantity(quantity - 1);
  };

  return (
    <>
      <Button
        onClick={subtract}
        disabled={!quantity}
        icon={<MinusOutlined />}
      />
      <Button disabled={true} style={{ background: "#fff", color: "#000" }}>
        {quantity}
      </Button>
      <Button
        onClick={add}
        disabled={quantity >= item.quantity}
        icon={<PlusOutlined />}
      />
    </>
  );
};

export default QuantityControl;
