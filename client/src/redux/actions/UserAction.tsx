import { REMOVE_CARTS, UPDATE_CARTS } from "../../constants/AppConstant"
import { ProductModel } from "../../models";

// Action - save cart
export const saveUserCart = (data:ProductModel) => {
    return {type: UPDATE_CARTS, payload: {data: data}};
}

// Action - remove all carts
export const removeUserCart = () => {
    return {type:REMOVE_CARTS}
}