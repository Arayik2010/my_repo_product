import { combineReducers } from "redux";
// import { AddproductDataReducer } from "./reducers/addProductReducer";
import { productsDataReducer } from "./reducers/productsReducer";



export const rootReducer = combineReducers({
  products: productsDataReducer,
  // addProduct:AddproductDataReducer
  
});
