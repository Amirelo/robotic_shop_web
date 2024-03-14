import { BannerModel } from "../models";

export const getActiveBanner = async () => {
  const res = (await fetch("http://localhost:3001/api/banner"))
    .json()
    .then((data: Array<any>) => {
      data.map((item) => {
        var formatted: BannerModel = item;
        formatted.id = item._id;
        return formatted;
      });
      return data;
    })
    .catch((error: any) => {
      console.log("SERVICE - Get Active Banner - Error:", error);
      return []
    });
    return res
};
