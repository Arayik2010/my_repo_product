import { AnyAction } from "redux";
import {
  FETCH_ADDPRODUCTS_PENDING,
  FETCH_ADDPRODUCTS_SUCCESS,
  FETCH_ADDPRODUCTS_ERROR,
} from "../actions/addProductAction";

interface ProductsState {
  createProduct: any[];
  loading: boolean;
  error: null | string;
}

const initialState: ProductsState = {
  createProduct: [],
  loading: false,
  error: null,
};

export const AddproductDataReducer = (state = initialState, action: AnyAction): ProductsState => {
  switch (action.type) {
    case FETCH_ADDPRODUCTS_PENDING:
      return {
        loading: true,
        error: null,
        createProduct: [],
      };
    case FETCH_ADDPRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        createProduct: [...state.createProduct, action.payload],
      };
    case FETCH_ADDPRODUCTS_ERROR:
      return {
        loading: false,
        error: action.payload,
        createProduct: [],
      };
    default:
      return state;
  }
};
