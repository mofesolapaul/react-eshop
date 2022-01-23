const formatPrce = (price) => {
  return parseFloat(
    price
      .toString()
      .replace(/[^0-9.,]/g, "")
      .replace(",", ".")
  );
};

export default class CartItem {
  constructor(item) {
    this.id = item.id;
    this.price = formatPrce(item.price);
    this.quantity = 0;
  }
}
