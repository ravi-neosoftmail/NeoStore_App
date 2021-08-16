import { PRODUCTLIST_REQUEST, PRODUCTLIST_SUCCESS } from "../constant/type";

const initialState = {
  isLoading: false,
  productListData: "",
};

const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTLIST_REQUEST: {
      return {
        isLoading: true,
      };
    }
    case PRODUCTLIST_SUCCESS: {
      return {
        isLoading: false,
        productListData: action.payload,
      };
    }
    default:
      return state;
  }
};

export default productListReducer;
