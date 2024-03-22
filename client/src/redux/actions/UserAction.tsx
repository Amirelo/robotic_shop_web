import { REMOVE_CARTS, UPDATE_CARTS } from "../../constants/AppConstant"


export const saveUserCart = (data:any) => {
    return {type: UPDATE_CARTS, payload: {data: data}};
}

export const removeUserCart = () => {
    return {type:REMOVE_CARTS}
}