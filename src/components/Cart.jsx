import { Button, Drawer, Space } from "antd";
import { useProductContext } from "../contexts";
import { useCartContext } from "../contexts/CartContext";
import CartList from "./CartList";

const Cart = ({ visible, onClose }) => {
  const { cartState: cart } = useCartContext();
  const { productsState } = useProductContext();

  const getProduct = (id) => {
    return productsState.filter((product) => id === product.id).shift();
  };
  const buildItemsList = () => {
    return Object.values(cart).map((item) => ({
      ...getProduct(item.id),
      ...item,
    }));
  };

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
    >
      <CartList products={buildItemsList()} />
    </Drawer>
  );
};

export default Cart;
