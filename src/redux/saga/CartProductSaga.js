import axios from 'axios';
import {environment} from '../../assets/environment';
import {call, put} from '@redux-saga/core/effects';
import {getCartProductSuccess} from '../action/action';


/**
 *
 * @param {*} param0 action which contains payloads of information.
 * @description This is saga file which is  a middleware library that helps us with API calls or side effects
 * @author Ravi Ranjan
 * @returns the data coming from the API.
 */



export function* getCartProductSaga(action) {
  try {
    const response = yield call(async () => {
      const result = await axios.get(`${environment.apiBase}/api/cart`, {
        headers: {
          Authorization: action.payload,
        },
      });
      return result;
    });
    if (response.data.success) {
      yield put(getCartProductSuccess(response.data.data));
    }
  } catch (error) {
    console.log(error, error.response);
  }
}

export function* addCartProductSaga(action) {
  try {
    const response = yield call(async () => {
      const result = await axios.post(
        `${environment.apiBase}/api/cart`,
        action.payload.payload,
        {
          headers: {
            Authorization: action.payload.token,
          },
        },
      );
      return result;
    });
    if (response.data.success) {
      action.payload.getCart(action.payload.type);
    }
  } catch (error) {
    action.payload.errorAlert(error.response.data.message, action.payload.type)
  }
}

export function* delCartProductSaga(action) {
  try {
    const response = yield call(async () => {
      const result = await axios.delete(
        `${environment.apiBase}/api/cart/${action.payload}`,
        {
          headers: {
            Authorization: action.token,
          },
        },
      );
      return result;
    });

    if (response.data.success) {
      action.getCart();
    }
  } catch (error) {
    console.log(error, error.response);
  }
}

export function* updateCartProductQuantitySaga(action) {
  try {
    const response = yield call(async () => {
      const result = await axios.put(
        `${environment.apiBase}/api/cart/${action.id.id}`,
        action.payload,
        {
          headers: {
            Authorization: action.token,
          },
        },
      );
      return result;
    });

    if (response.data.success) {
      action.getCart();
    }
  } catch (error) {
    console.log(error, error.response);
  }
}
