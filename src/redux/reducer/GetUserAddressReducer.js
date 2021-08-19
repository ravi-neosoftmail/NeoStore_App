import {
    GETUSERADDRESS_REQUEST,
    GETUSERADDRESS_SUCCESS
  } from '../constant/type';
  
  const initialState = {
    isLoading: false,
    isSuccess: false,
    userAddress: '',
  };
  
  const getUserAddressReducer = (state = initialState, action) => {
    switch (action.type) {
      case GETUSERADDRESS_REQUEST: {
        return {...initialState, isLoading: true};
      }
      case GETUSERADDRESS_SUCCESS: {
        return {
          ...initialState,
          isSuccess: true,
          userAddress: action.payload,
        };
      }
      default:
        return state;
    }
  };
  
  export default getUserAddressReducer;
  