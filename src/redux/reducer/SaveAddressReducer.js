import {
    SAVEUSERADDRESSREQUEST
  } from '../constant/type';
  
  const initialState = {
    deliveryAddress: {},
  };
  
  const saveAddressReducer = (state = initialState, action) => {
    switch (action.type) {
      case SAVEUSERADDRESSREQUEST: {
        return {...initialState, deliveryAddress: action.payload};
      }
      default:
        return state;
    }
  };
  
  export default saveAddressReducer;
  