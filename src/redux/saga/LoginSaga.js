import axios from 'axios';
import {environment} from '../../assets/environment';
import {call, put} from '@redux-saga/core/effects';
import {loginSuccess} from '../action/action';
import Toast from 'react-native-toast-message';


/**
 *
 * @param {*} param0 action which contains payloads of information.
 * @description This is saga file which is  a middleware library that helps us with API calls or side effects
 * @author Ravi Ranjan
 * @returns the data coming from the API.
 */


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
      Toast.show({
        position: 'bottom',
        text1: 'Login success',
        visibilityTime: 3000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
      });
      action.navigation.navigate('Dashboard');
      yield put(loginSuccess(response.data.data));
    }
  } catch (error) {
    console.log(error, error.response);
    action.getError(error.response.data.message);
  }
}
