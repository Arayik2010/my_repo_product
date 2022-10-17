import { applyMiddleware, createStore } from "redux";

import thunk from "redux-thunk";
import { rootReducer } from "./storeIndex";

const store = createStore(rootReducer, applyMiddleware(thunk));
export type AppDispatch = typeof store.dispatch;

export default store;
