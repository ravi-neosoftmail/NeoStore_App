import {
    GETCARTPRODUCT_REQUEST,
    GETCARTPRODUCT_SUCCESS
  } from '../constant/type';
  
  const initialState = {
    isLoading: false,
    isSuccess: false,
    cartProduct: '',
  };
  
  const cartProductReducer = (state = initialState, action) => {
    switch (action.type) {
      case GETCARTPRODUCT_REQUEST: {
        return {...initialState, isLoading: true};
      }
      case GETCARTPRODUCT_SUCCESS: {
        return {
          ...initialState,
          isSuccess: true,
          cartProduct: action.payload,
        };
      }
      default:
        return state;
    }
  };
  
  export default cartProductReducer;
  