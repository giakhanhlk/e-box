import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import productReducer from "./productReducer";
import authenticationReducer from "./authReducer";
import registrationReducer from "./registrationReducer";
import userReducer from "./userReducer";

const getReducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth: authenticationReducer,
    reg: registrationReducer,
    user: userReducer,
    product: productReducer,
  });
export default getReducers;
