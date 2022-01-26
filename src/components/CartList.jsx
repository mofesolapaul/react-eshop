import { Avatar, Button, Col, Divider, List, Row } from "antd";

const CartList = ({ products }) => {
  const cartTotal = () => {
    let sum = 0;
    products.forEach((product) => (sum += product.price * product.quantity));
    return sum.toFixed(2);
  };

  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={products}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar shape="square" src={item.images[0]} size="large" />
              }
              title={item.title}
              description={`${item.price} x ${item.quantity}`}
            />
          </List.Item>
        )}
      />
      <Divider />
      <Row>
        <Col flex="auto">
          <strong>Total:</strong>
        </Col>
        <Col>{`€${cartTotal()}`}</Col>
      </Row>
      <div style={{ paddingTop: "1rem" }}>
        <Button type="primary">Checkout</Button>
      </div>
    </>
  );
};

export default CartList;
