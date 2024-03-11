import { CategoryModel } from "../models";

export const getAllCategories = async () => {
  const res = (await fetch("http://localhost:3001/api/category"))
    .json()
    .then((data:Array<any>) => {
      console.log("SERVICE - Get all categories:", data);
      data.map((item) => {
        var formatted: CategoryModel = item;
        formatted.id = item._id
        return formatted
      })
      return data;
    })
    .catch((error: any) =>{
      console.log("SERVICE - Get all categories error:", error)
    return []}
    );
  return res;
};
