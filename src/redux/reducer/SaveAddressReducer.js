import {
    SAVEUSERADDRESSREQUEST
  } from '../constant/type';
  
  const initialState = {
    deliveryAddress: {},
  };


/**
 *
 * @param {*} param0
 * @description This is reducer which has some basic constraints on how that write logic function should work.
 * @author Ravi Ranjan
 * @returns the new state or update state.
 */

  
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
  