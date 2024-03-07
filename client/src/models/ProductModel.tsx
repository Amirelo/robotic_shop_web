class ProductModel {
  id: number;
  name: string;
  price: number;
  totalRating: number;
  quantity: number;
  discount: string;
  sold: number;
  images: Array<string>;
  status: boolean;

  constructor(
    id: number,
    name: string,
    price: number,
    totalRating: number,
    quantity: number,
    discount: string,
    sold: number,
    images: Array<string>,
    status: boolean
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.totalRating = totalRating;
    this.quantity = quantity;
    this.discount = discount;
    this.sold = sold;
    this.images = images;
    this.status = status;
  }
}

export default ProductModel;
