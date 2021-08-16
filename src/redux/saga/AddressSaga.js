import axios from 'axios';
import {environment} from '../../assets/environment';
import {call, put} from '@redux-saga/core/effects';
import {addAddressSuccess, getUserAddressSuccess} from '../action/action';

export function* getUSerAddressSaga(action) {
  try {
    const response = yield call(async () => {
      const result = await axios.get(
        `${environment.apiBase}/api/user/address`,
        {
          headers: {
            Authorization: action.payload,
          },
        },
      );
      return result;
    });
    if (response.data.success) {
      yield put(getUserAddressSuccess(response.data.data));
    }
  } catch (error) {
    console.log(error, error.response);
  }
}

export function* addAddressSaga(action) {
  try {
    const response = yield call(async () => {
      const result = await axios.post(
        `${environment.apiBase}/api/user/address`,
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
      action.navigation.navigate('Shipping Address');
      yield put(addAddressSuccess(response.data.data));
      action.getAddress();
    }
  } catch (error) {
    console.log(error, error.response);
  }
}

export function* delAddressSaga(action) {
  try {
    const response = yield call(async () => {
      const result = await axios.delete(
        `${environment.apiBase}/api/user/address/${action.payload}`,
        {
          headers: {
            Authorization: action.token,
          },
        },
      );
      return result;
    });
    if (response.data.success) {
      action.getAddress();
    }
  } catch (error) {
    console.log(error, error.response);
  }
}

export function* updateAddressSaga(action) {
  try {
    const response = yield call(async () => {
      const result = await axios.put(
        `${environment.apiBase}/api/user/address/${action.id}`,
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
      action.navigation.navigate('Shipping Address');
      action.getAddress();
    }
  } catch (error) {
    console.log(error, error.response);
  }
}
