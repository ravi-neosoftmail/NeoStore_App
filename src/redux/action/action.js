import {
  PRODUCTLIST_REQUEST,
  PRODUCTLIST_SUCCESS,
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_REQUEST,
  ADDADDRESS_REQUEST,
  ADDADDRESS_SUCCESS,
  ADDADDRESS_ERROR,
  DELADDRESS_REQUEST,
  DELADDRESS_SUCCESS,
  DELADDRESS_ERROR,
  GETUSERADDRESS_REQUEST,
  GETUSERADDRESS_SUCCESS,
  UPDATEADDRESS_REQUEST,
  UPDATEADDRESS_SUCCESS,
  UPDATEADDRESS_ERROR,
  GETCARTPRODUCT_REQUEST,
  GETCARTPRODUCT_SUCCESS,
  ADDCARTPRODUCT_REQUEST,
  ADDCARTPRODUCT_SUCCESS,
  ADDCARTPRODUCT_ERROR,
  DELCARTPRODUCT_REQUEST,
  DELCARTPRODUCT_SUCCESS,
  DELCARTPRODUCT_ERROR,
  UPDATEPRODUCTQUANTITY_REQUEST,
  UPDATEPRODUCTQUANTITY_SUCCESS,
  SAVEUSERADDRESSREQUEST,
  GETORDERLIST_REQUEST,
  GETORDERLIST_SUCCESS,
  PLACEORDER_REQUEST,
  PLACEORDER_SUCCESS,
  PLACEORDER_ERROR,
  CHANGEPASSWORD_REQUEST,
  CHANGEPASSWORD_SUCCESS,
  CHANGEPASSWORD_ERROR,
  USERIMAGE_REQUEST,
  USERIMAGE_SUCCESS,
  USERIMAGE_ERROR,
} from '../constant/type';

// For getting all product list
export const productListRequest = () => {
  return {
    type: PRODUCTLIST_REQUEST,
  };
};

export const productListSuccess = payload => {
  return {
    type: PRODUCTLIST_SUCCESS,
    payload,
  };
};

//For User Registration
export const registrationRequest = ({payload, navigation}) => {
  return {
    type: REGISTRATION_REQUEST,
    payload,
    navigation,
  };
};

export const registrationSuccess = () => {
  return {
    type: REGISTRATION_SUCCESS,
  };
};

export const registrationError = () => {
  return {
    type: REGISTRATION_ERROR,
  };
};

//For User Login
export const loginRequest = ({payload, navigation, getError}) => {
  return {
    type: LOGIN_REQUEST,
    payload,
    navigation,
    getError,
  };
};

export const loginSuccess = payload => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

export const loginError = () => {
  return {
    type: LOGIN_ERROR,
  };
};

//For User Logout

export const logoutRequest = () => {
  return {
    type: LOGOUT_REQUEST,
  };
};

// For getting user address

export const getUserAddressRequest = payload => {
  return {
    type: GETUSERADDRESS_REQUEST,
    payload,
  };
};

export const getUserAddressSuccess = payload => {
  return {
    type: GETUSERADDRESS_SUCCESS,
    payload,
  };
};

// For Adding User Address

export const addAddressRequest = ({payload, navigation, token, getAddress}) => {
  return {
    type: ADDADDRESS_REQUEST,
    payload,
    navigation,
    token,
    getAddress,
  };
};

export const addAddressSuccess = payload => {
  return {
    type: ADDADDRESS_SUCCESS,
    payload,
  };
};

export const addAddressError = () => {
  return {
    type: ADDADDRESS_ERROR,
  };
};

// For Deleting User Address

export const delAddressRequest = ({payload, token, getAddress}) => {
  return {
    type: DELADDRESS_REQUEST,
    payload,
    token,
    getAddress,
  };
};

export const delAddressSuccess = payload => {
  return {
    type: DELADDRESS_SUCCESS,
    payload,
  };
};

export const delAddressError = () => {
  return {
    type: DELADDRESS_ERROR,
  };
};

// For Update User Address

export const updateAddressRequest = ({
  payload,
  token,
  id,
  navigation,
  getAddress,
}) => {
  return {
    type: UPDATEADDRESS_REQUEST,
    payload,
    token,
    id,
    navigation,
    getAddress,
  };
};

export const updateAddressSuccess = payload => {
  return {
    type: UPDATEADDRESS_SUCCESS,
    payload,
  };
};

export const updateAddressError = () => {
  return {
    type: UPDATEADDRESS_ERROR,
  };
};

// For getting cart product

export const getCartProductRequest = payload => {
  return {
    type: GETCARTPRODUCT_REQUEST,
    payload,
  };
};

export const getCartProductSuccess = payload => {
  return {
    type: GETCARTPRODUCT_SUCCESS,
    payload,
  };
};

// For Add cart product

export const addCartProductRequest = ({
  payload,
  token,
  getCart,
  errorAlert,
}) => {
  return {
    type: ADDCARTPRODUCT_REQUEST,
    payload,
    token,
    getCart,
    errorAlert,
  };
};

export const addCartProductSuccess = payload => {
  return {
    type: ADDCARTPRODUCT_SUCCESS,
    payload,
  };
};

export const addCartProductError = () => {
  return {
    type: ADDCARTPRODUCT_ERROR,
  };
};

// For Delete cart product

export const delCartProductRequest = ({payload, token, getCart}) => {
  return {
    type: DELCARTPRODUCT_REQUEST,
    payload,
    token,
    getCart,
  };
};

export const delCartProductSuccess = () => {
  return {
    type: DELCARTPRODUCT_SUCCESS,
  };
};

export const delCartProductError = () => {
  return {
    type: DELCARTPRODUCT_ERROR,
  };
};

// Updating Cart Product Quantity

export const updateProductQuantityRequest = ({payload, id, token, getCart}) => {
  return {
    type: UPDATEPRODUCTQUANTITY_REQUEST,
    payload,
    id,
    token,
    getCart,
  };
};

export const updateProductQuantitySuccess = () => {
  return {
    type: UPDATEPRODUCTQUANTITY_SUCCESS,
  };
};

//Saving User Address

export const saveUserAddress = payload => {
  return {
    type: SAVEUSERADDRESSREQUEST,
    payload,
  };
};

//GET OREDR LIST

export const getOrderListRequest = token => {
  return {
    type: GETORDERLIST_REQUEST,
    token,
  };
};

export const getOrderListSuccess = payload => {
  return {
    type: GETORDERLIST_SUCCESS,
    payload,
  };
};

// place Order

export const placeOrderRequest = ({payload, token, getOrder}) => {
  return {
    type: PLACEORDER_REQUEST,
    payload,
    token,
    getOrder,
  };
};

export const placeOrderSuccess = () => {
  return {
    type: PLACEORDER_SUCCESS,
  };
};

export const placeOrderError = () => {
  return {
    type: PLACEORDER_ERROR,
  };
};

// Change Password
export const changePasswordRequest = ({payload, token, getMessage}) => {
  return {
    type: CHANGEPASSWORD_REQUEST,
    payload,
    token,
    getMessage,
  };
};

export const changePasswordSuccess = () => {
  return {
    type: CHANGEPASSWORD_SUCCESS,
  };
};

export const changePasswordError = () => {
  return {
    type: CHANGEPASSWORD_ERROR,
  };
};

// Change User Profile Image
export const changeUserImage = payload => {
  return {
    type: USERIMAGE_REQUEST,
    payload,
  };
};
