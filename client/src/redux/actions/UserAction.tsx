import { CHANGE_THEME, REMOVE_CARTS, UPDATE_CARTS } from "../../constants/AppConstant"
import { ProductModel } from "../../models";
import themes from "../../preferences/theme/themes";

// Action - save cart
export const saveUserCart = (data:ProductModel) => {
    return {type: UPDATE_CARTS, payload: {data: data}};
}

// Action - remove all carts
export const removeUserCart = () => {
    return {type:REMOVE_CARTS}
}

export const updateTheme = (data: keyof typeof themes) => {
    return {type: CHANGE_THEME, payload:{data:data}}
}