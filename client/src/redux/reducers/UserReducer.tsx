import { CHANGE_THEME, REMOVE_CARTS, UPDATE_CARTS } from "../../constants/AppConstant";

const initialState = {
  user: {},
  curLang: "vn",
  curTheme: "defaultTheme",
  carts: [],
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_CARTS:
      return {
        ...state,
        carts: [...state.carts, action.payload.data],
      };
    case REMOVE_CARTS: {
      return { ...state, carts: [] };
    }
    case CHANGE_THEME:{
      return {
        ...state,
        curTheme: action.payload.data
      }
    }
    default:
      return state;
  }
};
