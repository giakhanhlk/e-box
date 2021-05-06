import * as userConstants from "../constants/userConstants";

const initialState = {
  loading: false,
  data: { _id: null, username: null, avatar: null },
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case userConstants.GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          ...action.payload.user,
        },
      };

    case userConstants.GET_USER_ERROR:
      const { message } = action.payload;

      return {
        ...state,
        loading: false,
        error: {
          message,
        },
      };

    default:
      return state;
  }
};

export default userReducer;
