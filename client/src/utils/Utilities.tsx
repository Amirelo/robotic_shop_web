import AddressModel from "../models/AddressModel";

// Screen width and height
export const screenWidth = window.innerWidth;
export const screenHeight = window.innerHeight;

// Convert number to price format
export const priceFormat = (price: number) => {
  var priceString = price.toString();
  var newPrice = "";
  var maxLength = priceString.length;
  while (maxLength > 3) {
    newPrice +=
      "." + priceString.substring(priceString.length - 3, priceString.length);
    maxLength -= 3;
    priceString = priceString.substring(0, maxLength);
  }

  newPrice = priceString + newPrice + "đ";
  return newPrice;
};

export const addressFormat = (address:AddressModel) =>{
  return address.roadNumber + ' ' + address.road +', ' + address.ward +', ' + address.district+', ' + address.city
}