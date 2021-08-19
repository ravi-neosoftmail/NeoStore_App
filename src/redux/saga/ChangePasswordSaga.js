import axios from 'axios';
import {environment} from '../../assets/environment';
import {call, put} from '@redux-saga/core/effects';
import {loginSuccess} from '../action/action';

export function* changePasswordSaga(action) {
  console.log(action, 'changePasswordSaga');
  try {
    const response = yield call(async () => {
      const result = await axios.post(
        `${environment.apiBase}/api/user/change-password`,
        action.payload,
        {
          headers: {
            Authorization: action.token,
          },
        },
      );
      return result;
    });
    console.log(response, 'response');
    if (response.data.success) {
        action.getMessage('Password Changed Successfully')
    }
  } catch (error) {
    console.log(error, error.response);
    action.getMessage(error.response.data.message)
  }
}
