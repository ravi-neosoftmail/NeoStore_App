import {
    UPDATEADDRESS_REQUEST,
    UPDATEADDRESS_SUCCESS,
    UPDATEADDRESS_ERROR,
  } from '../constant/type';
  
  const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    userAddress: '',
  };


/**
 *
 * @param {*} param0
 * @description This is reducer which has some basic constraints on how that write logic function should work.
 * @author Ravi Ranjan
 * @returns the new state or update state.
 */

  
  const updateAddressReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATEADDRESS_REQUEST: {
        return {...initialState, isLoading: true};
      }
      case UPDATEADDRESS_SUCCESS: {
        return {
          ...initialState,
          isSuccess: true,
          userAddress: action.payload,
        };
      }
      case UPDATEADDRESS_ERROR: {
        return {
          ...initialState,
          isError: true,
        };
      }
      default:
        return state;
    }
  };
  
  export default updateAddressReducer;
  