import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_REQUEST,
} from '../constant/type';

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  isLoggedIn: false,
  user: '',
};


/**
 *
 * @param {*} param0
 * @description This is reducer which has some basic constraints on how that write logic function should work.
 * @author Ravi Ranjan
 * @returns the new state or update state.
 */


const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {...initialState, isLoading: true};
    }
    case LOGIN_SUCCESS: {
      return {
        ...initialState,
        isSuccess: true,
        isLoggedIn: true,
        user: action.payload,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...initialState,
        isError: true,
      };
    }

    case LOGOUT_REQUEST: {
      return {
        ...initialState,
        isLoggedIn: false,
      };
    }
    default:
      return state;
  }
};

export default loginReducer;
