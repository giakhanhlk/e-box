import * as userConstants from "../constants/userConstants";

const initialState = { loading: false, message: null };

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { ...state, loading: true, message: null };
    case userConstants.REGISTER_SUCCESS:
      return { ...state, loading: false, message: action.payload.message };
    case userConstants.REGISTER_ERROR:
      const { message, error } = action.error;
      return { ...state, loading: false, message: message || error };
    default:
      return state;
  }
};

export default registrationReducer;
