class ProductModel {
  id: string;
  name: string;
  price: number;
  description: string;
  totalRating: number;
  quantity: number;
  discount: string;
  sold: number;
  images: Array<string>;
  status: boolean;
  categoryID: string;

  constructor(
    id: string,
    name: string,
    price: number,
    description: string,
    totalRating: number,
    quantity: number,
    discount: string,
    sold: number,
    images: Array<string>,
    status: boolean,
    categoryID: string
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.totalRating = totalRating;
    this.quantity = quantity;
    this.discount = discount;
    this.sold = sold;
    this.images = images;
    this.status = status;
    this.categoryID = categoryID;
  }
}

export default ProductModel;
