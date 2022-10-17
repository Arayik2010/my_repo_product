import { apiInstance } from "../../api/apiInstance";
import { AnyAction, Dispatch } from "redux";
import axios from "axios";
import { action } from "../../components/interface/common";
import { productData } from "../../components/interface/common";

export const FETCH_PRODUCTS_PENDING = "FETCH_PRODUCTS_PENDING";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR";
export const FETCH_ADDPRODUCTS_SUCCESS = "FETCH_ADDPRODUCTS_SUCCESS";

const ProductsPendingAction = () => ({
  type: FETCH_PRODUCTS_PENDING,
  payload: "",
});

const ProductssuccessAction = (product: any[]) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: product,
});

const ProductsErrorAction = (error: string) => {
  return {
    type: FETCH_PRODUCTS_ERROR,
    payload: error,
  };
};
const AddProductsuccessAction = (product: any[]) => ({
  type: FETCH_ADDPRODUCTS_SUCCESS,
  payload: product,
});

export const productsThunk = () => async (dispatch: Dispatch<AnyAction>) => {
  try {
    dispatch(ProductsPendingAction());
    const response = await fetch(apiInstance.baseUrl);
    const data = await response.json();
    dispatch(ProductssuccessAction(data));
  } catch (err) {
    if (err instanceof Error) {
      dispatch(ProductsErrorAction(err.message));
    } else {
      console.log("Unexpected error", err);
    }
  }
};
export const AddproductThunk = () => async (dispatch: Dispatch<AnyAction>) => {
  try {
    dispatch(ProductsPendingAction());
    const response = await axios.post(apiInstance.baseUrl, productData);
    dispatch(AddProductsuccessAction(response.data));
  } catch (err) {
    if (err instanceof Error) {
      dispatch(ProductsErrorAction(err.message));
    } else {
      console.log("Unexpected error", err);
    }
  }
};
