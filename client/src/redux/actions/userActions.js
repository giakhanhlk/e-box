import * as userConstants from "../constants/userConstants";
import * as userServices from "../../services/userServices";
import { history } from "../store";

const login = (req) => {
  console.log(req);

  const request = (user) => {
    return { type: userConstants.LOGIN_REQUEST, user };
  };

  const success = (user) => {
    return { type: userConstants.LOGIN_SUCCESS, payload: user };
  };

  const failure = (error) => {
    return { type: userConstants.LOGIN_ERROR, payload: error };
  };

  return async (dispatch) => {
    dispatch(request());

    try {
      const user = await userServices.login(req);
      const { data } = user;
      dispatch(success(data));
      dispatch({ type: "GET_USER_SUCCESS", payload: data });
      history.push("/");
    } catch (error) {
      console.log("error", error.response);
      dispatch(failure(error.response));
    }
  };
};

const register = (req) => {
  const request = () => {
    return { type: userConstants.REGISTER_REQUEST };
  };

  const success = (data) => {
    return { type: userConstants.REGISTER_SUCCESS, payload: data };
  };

  const failure = (error) => {
    return { type: userConstants.REGISTER_ERROR, error };
  };

  return async (dispatch) => {
    dispatch(request());

    try {
      const res = await userServices.register(req);
      const { data } = res;
      dispatch(success(data));
      history.push("/login");
    } catch (error) {
      dispatch(failure(error.response.data));
    }
  };
};

const getMyData = () => {
  const request = () => {
    return { type: userConstants.GET_USER_REQUEST };
  };

  const success = (data) => {
    return { type: userConstants.GET_USER_SUCCESS, payload: data };
  };

  const failure = (error) => {
    return { type: userConstants.GET_USER_ERROR, payload: error };
  };

  return async (dispatch) => {
    dispatch(request());

    try {
      const res = await userServices.getMyData();
      if (res) {
        const { data } = res;
        dispatch(success(data));
      }
    } catch (error) {
      console.log("error", error);
      dispatch(failure(error.response.data));
    }
  };
};

const logout = () => {
  userServices.logout();
};

export { login, register, getMyData, logout };
