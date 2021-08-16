import {
  USERIMAGE_REQUEST,
} from '../constant/type';

const initialState = {
  userImage: '',
};

const changeUserImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERIMAGE_REQUEST: {
      return {...initialState, userImage: action.payload};
    }

    default:
      return state;
  }
};

export default changeUserImageReducer;
