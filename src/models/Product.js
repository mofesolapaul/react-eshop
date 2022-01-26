const formatPrice = (price) => {
  return parseFloat(
    price
      .toString()
      .replace(/[^0-9.,]/g, "")
      .replace(",", ".")
  );
};

/**
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {number} price
 * @property {number} quantity
 * @property {array} images
 */
export default class Product {
  constructor(item) {
    Object.assign(this, item);
    this.price = formatPrice(item.price);
  }
}
