import { REMOVE_CARTS, UPDATE_CARTS } from "../../constants/AppConstant"
import { ProductModel } from "../../models";


export const saveUserCart = (data:ProductModel) => {
    return {type: UPDATE_CARTS, payload: {data: data}};
}

export const removeUserCart = () => {
    return {type:REMOVE_CARTS}
}