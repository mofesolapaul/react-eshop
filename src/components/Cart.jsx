import { Button, Drawer, Space } from "antd";
import { useMemo } from "react";
import { useCartContext } from "../contexts/CartContext";

const Cart = ({ visible, onClose }) => {
  const { cartState: cart, cartDispatch } = useCartContext();
  const productIDs = Object.keys(cart);
  const items = useMemo(
    () =>
      productIDs.map((id) => {
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [productIDs.length]
  );

  return (
    <Drawer
      title="Cart"
      visible={visible}
      onClose={onClose}
      extra={
        <Space>
          <Button type="primary" onClick={onClose}>
            Checkout
          </Button>
        </Space>
      }
    ></Drawer>
  );
};

export default Cart;
