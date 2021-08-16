import {
    UPDATEPRODUCTQUANTITY_REQUEST,
    UPDATEPRODUCTQUANTITY_SUCCESS
  } from '../constant/type';
  
  const initialState = {
    isLoading: false,
    isSuccess: false,
  };
  
  const updateProductQuantityReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATEPRODUCTQUANTITY_REQUEST: {
        return {...initialState, isLoading: true};
      }
      case UPDATEPRODUCTQUANTITY_SUCCESS: {
        return {
          ...initialState,
          isSuccess: true,
        };
      }
      default:
        return state;
    }
  };
  
  export default updateProductQuantityReducer;
  