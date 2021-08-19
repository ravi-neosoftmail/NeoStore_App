import {
    ADDCARTPRODUCT_REQUEST,
    ADDCARTPRODUCT_SUCCESS,
    ADDCARTPRODUCT_ERROR
  } from '../constant/type';
  
  const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
  };
  
  const addCartProductReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADDCARTPRODUCT_REQUEST: {
        return {...initialState, isLoading: true};
      }
      case ADDCARTPRODUCT_SUCCESS: {
        return {
          ...initialState,
          isSuccess: true,
        };
      }
      case ADDCARTPRODUCT_ERROR: {
        return {...initialState, isError: true};
      }
      default:
        return state;
    }
  };
  
  export default addCartProductReducer;
  