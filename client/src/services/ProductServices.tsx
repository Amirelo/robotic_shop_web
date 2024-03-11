import { ProductModel } from "../models";

export const getAllProducts = async () => {
  const response = await (
    await fetch("http://localhost:3001/api/product/")
  )
    .json()
    .then((data: Array<any>) => {
      console.log("SERVICE - Get all products:", data);
      data.map((item) => {
        var formatted: ProductModel = item;
        formatted.id = item._id;
        return formatted;
      });
      return data as Array<ProductModel>;
    })
    .catch((error: any) => {
      console.log("SERVICE - Get all products error:", error);
      return [];
    });
  return response;
};
