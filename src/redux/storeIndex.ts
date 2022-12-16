import { combineReducers } from "redux";
import { aboutDataReducer } from "./reducers/aboutReducer";
import { productsDataReducer } from "./reducers/productsReducer";



export const rootReducer = combineReducers({
  products: productsDataReducer,
  abouts:aboutDataReducer,
  
  
});
