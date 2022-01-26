import { PageHeader } from "antd";
import { useEffect, useReducer, useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import CartIcon from "./components/CartIcon";
import ProductsList from "./components/ProductsList";
import { CartContext, ProductContext } from "./contexts";
import { ProductActionEnum } from "./enums";
import { Action } from "./models";
import { cartReducer, productsReducer } from "./reducers";

const products = [
  {
    "id": 1,
    "title": "posuere cubilia curae duis faucibus accumsan",
    "description": "In congue. Etiam justo.",
    "price": "€82,69",
    "images": [
      "https://picsum.photos/seed/react-eshop-1/1080/1080",
      "https://picsum.photos/seed/react-eshop-2/1080/1080",
      "https://picsum.photos/seed/react-eshop-3/1080/1080"
    ],
    "quantity": 9
  },
  {
    "id": 2,
    "title": "in sagittis dui vel nisl duis",
    "description": "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
    "price": "€55,04",
    "images": [
      "https://picsum.photos/seed/react-eshop-4/1080/1080",
      "https://picsum.photos/seed/react-eshop-5/1080/1080",
      "https://picsum.photos/seed/react-eshop-6/1080/1080"
    ],
    "quantity": 10
  },
];

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartState, cartDispatch] = useReducer(cartReducer, {});
  const [productsState, productsDispatch] = useReducer(productsReducer, []);

  const cartProviderState = { cartState, cartDispatch };
  const productProviderState = { productsState, productsDispatch };

  const cartItemsCount = () => {
    return Object.keys(cartState).length;
  };

  useEffect(() => {
    productsDispatch(new Action(ProductActionEnum.ADD_PRODUCTS, products));
  }, []);

  return (
    <ProductContext.Provider value={productProviderState}>
      <CartContext.Provider value={cartProviderState}>
        <div style={{ padding: "1rem" }}>
          <PageHeader
            title="React E-shop"
            extra={
              <CartIcon
                count={cartItemsCount()}
                onClick={() => cartItemsCount() && setCartOpen(!cartOpen)}
              />
            }
          />
          <ProductsList products={productsState} />
          <Cart visible={cartOpen} onClose={() => setCartOpen(false)} />
        </div>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;
