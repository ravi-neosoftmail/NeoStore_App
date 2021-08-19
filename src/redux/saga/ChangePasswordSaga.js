import axios from 'axios';
import {environment} from '../../assets/environment';
import {call, put} from '@redux-saga/core/effects';
import {loginSuccess} from '../action/action';


/**
 *
 * @param {*} param0 action which contains payloads of information.
 * @description This is saga file which is  a middleware library that helps us with API calls or side effects
 * @author Ravi Ranjan
 * @returns the data coming from the API.
 */


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
