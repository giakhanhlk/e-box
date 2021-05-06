import * as userConstants from "../constants/userConstants";

const userToken = JSON.parse(localStorage.getItem("user_token"));
const initialState = userToken
  ? { loading: false, loggedIn: true, username: null, userToken }
  : { loading: false };

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loading: true,
      };
    case userConstants.LOGIN_SUCCESS:
      localStorage.setItem(
        "user_token",
        JSON.stringify({ token: action.payload.user.token })
      );

      return {
        ...state,
        loggedIn: true,
        username: action.payload.user.username,
      };
    case userConstants.LOGIN_ERROR:
      const { message } = action.payload.data;

      return {
        ...state,
        loading: false,
        message,
      };
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
};

export default authenticationReducer;
