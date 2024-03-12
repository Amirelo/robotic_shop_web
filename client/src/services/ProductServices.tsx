// Models
import { ProductModel } from "../models";

// Get all products
export const getAllProducts = async () => {
  const response = await (
    await fetch("http://localhost:3001/api/product/")
  )
    .json()
    .then((data: Array<any>) => {
      console.log("SERVICE - Get all products:", data);
      // Map data to assign id
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

// Get products by category ID and limit
// default limit = 8
export const getProductsByCategoryID = async (
  categoryID: string,
  limit?: number
) => {
  const data = { categoryID: categoryID, limit: limit };
  // Config for POST method
  const fetchConfig = {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  const response = await (
    await fetch("http://localhost:3001/api/product/getByCateID", fetchConfig)
  )
    .json()
    .then((data: Array<any>) => {
      console.log("SERVICE - Get products by categoryID:", data);
      // Map data to assign id
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
