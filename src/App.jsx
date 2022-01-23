import { Card, List } from "antd";
import { useReducer } from "react";
import "./App.css";
import ProductImage from "./components/ProductImage";
import QuantityControl from "./components/QuantityControl";
import CartContext from "./store/CartContext";
import { cartReducer } from "./store/CartReducer";

const { Meta } = Card;

const products = [
  {
    id: 1,
    title: "posuere cubilia curae duis faucibus accumsan",
    description: "In congue. Etiam justo.",
    price: "€82,69",
    images: [
      "http://dummyimage.com/1080x1080.png/cc0000/ffffff",
      "http://dummyimage.com/1080x1080.png/5fa2dd/ffffff",
      "http://dummyimage.com/1080x1080.png/ff4444/ffffff",
    ],
    quantity: 9,
  },
  {
    id: 2,
    title: "in sagittis dui vel nisl duis",
    description:
      "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
    price: "€55,04",
    images: [
      "http://dummyimage.com/1080x1080.png/5fa2dd/ffffff",
      "http://dummyimage.com/1080x1080.png/ff4444/ffffff",
      "http://dummyimage.com/1080x1080.png/dddddd/000000",
    ],
    quantity: 10,
  },
];

function App() {
  const [cartState, cartDispatch] = useReducer(cartReducer, {});
  const providerState = { cartState, cartDispatch };

  return (
    <CartContext.Provider value={providerState}>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={products}
        renderItem={(item) => (
          <List.Item>
            <Card cover={<ProductImage images={item.images} />}>
              <Meta title={item.title} description={item.price} />
              <div style={{ float: "right" }}>
                <QuantityControl item={item} />
              </div>
            </Card>
          </List.Item>
        )}
      />
    </CartContext.Provider>
  );
}

export default App;
