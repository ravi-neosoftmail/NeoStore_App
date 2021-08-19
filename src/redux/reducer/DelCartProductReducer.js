import {
   DELCARTPRODUCT_REQUEST,
   DELCARTPRODUCT_SUCCESS,
   DELCARTPRODUCT_ERROR
  } from '../constant/type';
  
  const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
  };

/**
 *
 * @param {*} param0
 * @description This is reducer which has some basic constraints on how that write logic function should work.
 * @author Ravi Ranjan
 * @returns the new state or update state.
 */
  
  const delCartProductReducer = (state = initialState, action) => {
    switch (action.type) {
      case DELCARTPRODUCT_REQUEST: {
        return {...initialState, isLoading: true};
      }
      case DELCARTPRODUCT_SUCCESS: {
        return {
          ...initialState,
          isSuccess: true,
        };
      }
      case DELCARTPRODUCT_ERROR: {
        return {
          ...initialState,
          isError: true,
        };
      }
      default:
        return state;
    }
  };
  
  export default delCartProductReducer;
  