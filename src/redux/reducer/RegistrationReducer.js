import {
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
} from '../constant/type';

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  resgistrationData: '',
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION_REQUEST: {
      return {...initialState, isLoading: true};
    }
    case REGISTRATION_SUCCESS: {
      return {
        ...initialState,
        isSuccess: true,
        resgistrationData: action.payload,
      };
    }
    case REGISTRATION_ERROR: {
      return {
        ...initialState,
        isError: true,
      };
    }
    default:
      return state;
  }
};

export default registrationReducer;
