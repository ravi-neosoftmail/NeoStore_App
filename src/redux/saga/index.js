import {all, takeLatest} from '@redux-saga/core/effects';
import {
  ADDADDRESS_REQUEST,
  ADDCARTPRODUCT_REQUEST,
  CHANGEPASSWORD_REQUEST,
  DELADDRESS_REQUEST,
  DELCARTPRODUCT_REQUEST,
  GETCARTPRODUCT_REQUEST,
  GETORDERLIST_REQUEST,
  GETUSERADDRESS_REQUEST,
  LOGIN_REQUEST,
  PLACEORDER_REQUEST,
  PRODUCTLIST_REQUEST,
  REGISTRATION_REQUEST,
  UPDATEADDRESS_REQUEST,
  UPDATEPRODUCTQUANTITY_REQUEST,
} from '../constant/type';
import {
  addAddressSaga,
  delAddressSaga,
  getUSerAddressSaga,
  updateAddressSaga,
} from './AddressSaga';
import {getProductList} from './GetProductList';
import {userLogin} from './LoginSaga';
import {userRegistration} from './RegistrationSaga';
import {
  addCartProductSaga,
  delCartProductSaga,
  getCartProductSaga,
  updateCartProductQuantitySaga,
} from './CartProductSaga';
import {getOrderListSaga, placeOrderSaga} from './OrderListSaga';
import { changePasswordSaga } from './ChangePasswordSaga';


/**
 *
 * @param {*} param0 action which contains payloads of information.
 * @description This is saga file which is  a middleware library that helps us with API calls or side effects
 * @author Ravi Ranjan
 * @returns the data coming from the API.
 */


function* watchMan() {
  yield takeLatest(PRODUCTLIST_REQUEST, getProductList);
  yield takeLatest(REGISTRATION_REQUEST, userRegistration);
  yield takeLatest(LOGIN_REQUEST, userLogin);
  yield takeLatest(ADDADDRESS_REQUEST, addAddressSaga);
  yield takeLatest(DELADDRESS_REQUEST, delAddressSaga);
  yield takeLatest(GETUSERADDRESS_REQUEST, getUSerAddressSaga);
  yield takeLatest(UPDATEADDRESS_REQUEST, updateAddressSaga);
  yield takeLatest(GETCARTPRODUCT_REQUEST, getCartProductSaga);
  yield takeLatest(ADDCARTPRODUCT_REQUEST, addCartProductSaga);
  yield takeLatest(DELCARTPRODUCT_REQUEST, delCartProductSaga);
  yield takeLatest(UPDATEPRODUCTQUANTITY_REQUEST, updateCartProductQuantitySaga);
  yield takeLatest(GETORDERLIST_REQUEST, getOrderListSaga);
  yield takeLatest(PLACEORDER_REQUEST, placeOrderSaga);
  yield takeLatest(CHANGEPASSWORD_REQUEST, changePasswordSaga);

}

export default function* rootSaga() {
  yield all([watchMan()]);
}
