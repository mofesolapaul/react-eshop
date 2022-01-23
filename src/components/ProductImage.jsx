import { Image } from "antd";
import { useState } from "react";

const ProductImage = ({ images }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Image
        preview={{ visible: false }}
        src={images[0]}
        onClick={() => setExpanded(true)}
      />
      <div style={{ display: "none" }}>
        <Image.PreviewGroup
          preview={{
            visible: expanded,
            onVisibleChange: (vis) => setExpanded(vis),
          }}
        >
          {images.map((image, index) => (
            <Image key={index} src={image} />
          ))}
        </Image.PreviewGroup>
      </div>
    </>
  );
};

export default ProductImage;
