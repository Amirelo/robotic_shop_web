import { combineReducers, createStore } from "redux";
import UserReducer from "./reducers/UserReducer";

const rootReducer:any = combineReducers({
    user: UserReducer
})

export const store = createStore(rootReducer)