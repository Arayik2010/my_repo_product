import { AnyAction } from "redux";
import { FETCH_ABOUT_ERROR, FETCH_ABOUT_PENDING, FETCH_ABOUT_SUCCESS } from "../actions/aboutAction";

interface aboutState {
  aboutData: [];
  loading: boolean;
  error: null | string;
}

const initialState: aboutState = {
  aboutData: [],
  loading: false,
  error: null,
};

export const aboutDataReducer = (state = initialState, action: AnyAction): aboutState => {
  switch (action.type) {
    case FETCH_ABOUT_PENDING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ABOUT_SUCCESS:
      return {
        ...state,
        aboutData: action.payload,
      };
    case FETCH_ABOUT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
      default:
        return state;
  }
};
