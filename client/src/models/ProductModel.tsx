class ProductModel {
  id: number;
  name: string;
  image:string;
  price: number;
  quantity: number;
  discount: string;
  status: boolean;

  constructor(
    id: number,
    name: string,
    image:string,
    price: number,
    quantity: number,
    discount: string,
    status: boolean
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
    this.quantity = quantity;
    this.discount = discount;
    this.status = status;
  }
}

export default ProductModel;
