import { REMOVE_CARTS, UPDATE_CARTS } from "../../constants/AppConstant";

const initialState = {
  user: "some",
  curLang: "vn",
  curTheme: "defaultTheme",
  carts: "thing",
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_CARTS:
      return {
        ...state,
        carts: [state.carts, action.payload.data],
      };
    case REMOVE_CARTS: {
      return { ...state, carts: [] };
    }
    default:
      return state;
  }
};
