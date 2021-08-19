import {
    CHANGEPASSWORD_REQUEST,
    CHANGEPASSWORD_SUCCESS,
    CHANGEPASSWORD_ERROR
  } from '../constant/type';
  
  const initialState = {
    isLoading: false,
    isSuccess: false,
    isError:false
  };
  
  const changePasswordReducer = (state = initialState, action) => {
    switch (action.type) {
      case CHANGEPASSWORD_REQUEST: {
        return {...initialState, isLoading: true};
      }
      case CHANGEPASSWORD_SUCCESS: {
        return {
          ...initialState,
          isSuccess: true,
        };
      }
      case CHANGEPASSWORD_ERROR: {
        return {...initialState, isError: true};
      }
      default:
        return state;
    }
  };
  
  export default changePasswordReducer;
  