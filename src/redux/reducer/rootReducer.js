import { combineReducers } from "redux";
import productListReducer from "./ProductListReducer"
import registrationReducer from "./RegistrationReducer";
import loginReducer from "./LoginReducer";
import addAddressReducer from "./AddAddressReducer";
import getUserAddressReducer from "./GetUserAddressReducer";
import updateAddressReducer from "./UpdateAddressReducer";
import cartProductReducer from "./CartProductReducer";
import addCartProductReducer from "./AddCartProductReducer";
import delCartProductReducer from "./DelCartProductReducer";
import updateProductQuantityReducer from "./UpdateProductQuantityReducer";
import saveAddressReducer from "./SaveAddressReducer";
import getOrderListReducer from "./OrederListReducer";
import placeOrderReducer from "./PlaceOrderReducer";
import changeUserImageReducer from "./UserImageReducer";

const rootReducer = combineReducers({
    productList  : productListReducer,
    registerData : registrationReducer,
    userData  : loginReducer,
    addressData  : addAddressReducer,
    userAddress : getUserAddressReducer,
    updateAddress : updateAddressReducer,
    cartProduct: cartProductReducer,
    addCartProduct: addCartProductReducer,
    delCartProduct: delCartProductReducer,
    updateProductQuantity: updateProductQuantityReducer,
    deliveryAddress: saveAddressReducer,
    orderList: getOrderListReducer,
    placeOrder: placeOrderReducer,
    userImage: changeUserImageReducer
})

export default rootReducer;
