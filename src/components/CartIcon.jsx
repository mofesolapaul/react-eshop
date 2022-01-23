import { ShoppingOutlined } from "@ant-design/icons/lib/icons";
import { Badge, Button } from "antd";

const CartIcon = ({ count, onClick }) => {
  return (
    <Button
      size="large"
      onClick={onClick}
      icon={
        <Badge count={count}>
          <ShoppingOutlined />
        </Badge>
      }
    />
  );
};

export default CartIcon;
