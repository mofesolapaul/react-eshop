import { Card, List } from "antd";
import ProductImage from "./ProductImage";
import QuantityControl from "./QuantityControl";

const { Meta } = Card;

const ProductsList = ({ products, loading }) => {
  return (
    <List
      loading={loading}
      grid={{ gutter: 16, column: 4 }}
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
  );
};

export default ProductsList;
