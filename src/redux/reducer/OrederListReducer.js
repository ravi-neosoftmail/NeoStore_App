import {
    GETORDERLIST_REQUEST,
    GETORDERLIST_SUCCESS
  } from '../constant/type';
  
  const initialState = {
    isLoading: false,
    isSuccess: false,
    orderList: '',
  };
  
  const getOrderListReducer = (state = initialState, action) => {
    switch (action.type) {
      case GETORDERLIST_REQUEST: {
        return {...initialState, isLoading: true};
      }
      case GETORDERLIST_SUCCESS: {
        return {
          ...initialState,
          isSuccess: true,
          orderList: action.payload,
        };
      }
      default:
        return state;
    }
  };
  
  export default getOrderListReducer;
  