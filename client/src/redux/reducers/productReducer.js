import {
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FETCH,
  GET_PRODUCT_FAIL,
} from "../constants/product";

const initialState = {
  products: null,
  product: null,
  loading: false,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productReducer;
