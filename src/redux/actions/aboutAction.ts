import { Dispatch, AnyAction } from "redux";

import { apiAboutIstance } from "../../api/apiInstance";

export const FETCH_ABOUT_PENDING = "FETCH_ABOUT_PENDING";
export  const FETCH_ABOUT_SUCCESS ="FETCH_ABOUT_SUCCESS";
export const FETCH_ABOUT_ERROR = "FETCH_ABOUT_ERROR";

const AboutPendingAction = () =>({
    type:FETCH_ABOUT_PENDING,
    payload:'',
});

const AboutSuccessAction = (aboutData: any[]) => ({
  type: FETCH_ABOUT_SUCCESS,
  payload: aboutData,
});

const AboutErrorAction = (error: string) => ({
  type: FETCH_ABOUT_ERROR,
  payload:error,
});

export  const aboutThunk =()=> async (dispatch: Dispatch<AnyAction>) => {
    try{
        dispatch(AboutPendingAction())
        const response = await fetch(apiAboutIstance.baseAboutUrl)
        const data =  await response.json()
        dispatch(AboutSuccessAction(data))
    }catch (err){
        if(err instanceof Error){
            dispatch(AboutErrorAction(err.message));
        }

    }
};