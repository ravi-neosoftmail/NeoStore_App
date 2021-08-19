import {
    UPDATEPRODUCTQUANTITY_REQUEST,
    UPDATEPRODUCTQUANTITY_SUCCESS
  } from '../constant/type';
  
  const initialState = {
    isLoading: false,
    isSuccess: false,
  };
  

/**
 *
 * @param {*} param0
 * @description This is reducer which has some basic constraints on how that write logic function should work.
 * @author Ravi Ranjan
 * @returns the new state or update state.
 */


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
  