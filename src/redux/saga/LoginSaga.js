import axios from 'axios';
import {environment} from '../../assets/environment';
import {call, put} from '@redux-saga/core/effects';
import {loginSuccess} from '../action/action';

export function* userLogin(action) {
  try {
    const response = yield call(async () => {
      const result = await axios.post(
        `${environment.apiBase}/api/auth/login`,
        action.payload,
      );
      return result;
    });
    if (response.data.success) {
      alert('Login success');
      action.navigation.navigate('Dashboard');
      yield put(loginSuccess(response.data.data));
    }
  } catch (error) {
    console.log(error, error.response);
    action.getError(error.response.data.message);
  }
}
