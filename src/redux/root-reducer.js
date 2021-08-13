import { combineReducers } from "redux";
import productsReducer from "./products/products.reducer";
import userReducer from "./user/user.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  drinks: productsReducer,
});

export default rootReducer;
