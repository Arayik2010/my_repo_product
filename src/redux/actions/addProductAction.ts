import { apiInstance } from "../../api/apiInstance";
import { AnyAction, Dispatch } from "redux";
import axios from "axios";
import { productData } from "../../components/interface/common";


export const FETCH_ADDPRODUCTS_PENDING = "FETCH_ADDPRODUCTS_PENDING";
export const FETCH_ADDPRODUCTS_SUCCESS = "FETCH_ADDPRODUCTS_SUCCESS";
export const FETCH_ADDPRODUCTS_ERROR = "FETCH_ADDPRODUCTS_ERROR";

const AddProductPendingAction = () => ({
  type: FETCH_ADDPRODUCTS_PENDING,
  payload: "",
});

const AddProductsuccessAction = (product: any[]) => ({
  type: FETCH_ADDPRODUCTS_SUCCESS,
  payload: product,
});

const AddProductErrorAction = (error: string) => {
  return {
    type: FETCH_ADDPRODUCTS_ERROR,
    payload: error,
  };
};

export const AddproductThunk = () => async (dispatch: Dispatch<AnyAction>) => {
  try {
    dispatch(AddProductPendingAction());
    const response = await axios.post(apiInstance.baseUrl,productData);
    dispatch(AddProductsuccessAction(response.data));
   
    
  } catch (err) {
    if (err instanceof Error) {
      dispatch(AddProductErrorAction(err.message));
    } else {
      console.log("Unexpected error", err);
    }
  }
};
