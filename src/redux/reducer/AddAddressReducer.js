import {
  ADDADDRESS_REQUEST,
  ADDADDRESS_SUCCESS,
  ADDADDRESS_ERROR,
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

const addAddressReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDADDRESS_REQUEST: {
      return {...initialState, isLoading: true};
    }
    case ADDADDRESS_SUCCESS: {
      return {
        ...initialState,
        isSuccess: true,
        isLoggedIn: true,
        userAddress: action.payload,
      };
    }
    case ADDADDRESS_ERROR: {
      return {
        ...initialState,
        isError: true,
      };
    }
    default:
      return state;
  }
};

export default addAddressReducer;
