import {DELADDRESS_REQUEST,
    DELADDRESS_SUCCESS,
    DELADDRESS_ERROR
  } from '../constant/type';
  
  const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    delAddress: '',
  };

/**
 *
 * @param {*} param0
 * @description This is reducer which has some basic constraints on how that write logic function should work.
 * @author Ravi Ranjan
 * @returns the new state or update state.
 */

  
  const delAddressReducer = (state = initialState, action) => {
    switch (action.type) {
      case DELADDRESS_REQUEST: {
        return {...initialState, isLoading: true};
      }
      case DELADDRESS_SUCCESS: {
        return {
          ...initialState,
          isSuccess: true,
          delAddress: action.payload,
        };
      }
      case DELADDRESS_ERROR: {
        return {
          ...initialState,
          isError: true,
        };
      }
      default:
        return state;
    }
  };
  
  export default delAddressReducer;
  