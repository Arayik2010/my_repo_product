import { AnyAction } from "redux";
import {
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_ADDPRODUCTS_SUCCESS,
} from "../actions/productsAction";

interface ProductsState {
  product: any[];
  loading: boolean;
  error: null | string;
  productCount:number
}

const initialState: ProductsState = {
  product: [],
  loading: false,
  error: null,
  productCount: 5,
};

export const productsDataReducer = (state = initialState, action: AnyAction): ProductsState => {
  switch (action.type) {
    case FETCH_PRODUCTS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        product: action.payload,
      };
    case FETCH_ADDPRODUCTS_SUCCESS:
      return {
        ...state,
        product: [...state.product, action.payload],
      };
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
