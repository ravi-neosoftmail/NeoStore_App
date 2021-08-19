import {
    GETORDERLIST_REQUEST,
    GETORDERLIST_SUCCESS
  } from '../constant/type';
  
  const initialState = {
    isLoading: false,
    isSuccess: false,
    orderList: '',
  };
  

/**
 *
 * @param {*} param0
 * @description This is reducer which has some basic constraints on how that write logic function should work.
 * @author Ravi Ranjan
 * @returns the new state or update state.
 */


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
  