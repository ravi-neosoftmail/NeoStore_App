import axios from 'axios';
import {environment} from '../../assets/environment';
import {call, put} from '@redux-saga/core/effects';
import {registrationSuccess, registrationError} from '../action/action';


/**
 *
 * @param {*} param0 action which contains payloads of information.
 * @description This is saga file which is  a middleware library that helps us with API calls or side effects
 * @author Ravi Ranjan
 * @returns the data coming from the API.
 */


export function* userRegistration(action) {
  try {
    const response = yield call(async () => {
      const result = await axios.post(
        `${environment.apiBase}/api/auth/register`,
        action.payload,
      );
      return result;
    });

    if (response.data.success) {
      alert('Registration success');
      action.navigation.navigate('Login');
      yield put(registrationSuccess(response.data));
    }
  } catch (error) {
    alert(error.response.data.message);
    yield put(registrationError(error));
  }
}
