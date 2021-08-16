import {
  PLACEORDER_REQUEST,
  PLACEORDER_SUCCESS,
  PLACEORDER_ERROR,
} from '../constant/type';

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const placeOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLACEORDER_REQUEST: {
      return {...initialState, isLoading: true};
    }
    case PLACEORDER_SUCCESS: {
      return {
        ...initialState,
        isSuccess: true,
      };
    }
    case PLACEORDER_ERROR: {
      return {...initialState, isError: true};
    }
    default:
      return state;
  }
};

export default placeOrderReducer;
