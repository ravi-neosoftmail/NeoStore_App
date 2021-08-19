import axios from "axios";
import { environment } from "../../assets/environment";
import { call, put } from "@redux-saga/core/effects";
import { getOrderListSuccess } from "../action/action";



/**
 *
 * @param {*} param0 action which contains payloads of information.
 * @description This is saga file which is  a middleware library that helps us with API calls or side effects
 * @author Ravi Ranjan
 * @returns the data coming from the API.
 */


export function* getOrderListSaga(action) {
    try{
        const response = yield call(async () => {
            const result = await axios.get(`${environment.apiBase}/api/order`,{
                headers: {
                    Authorization: action.token,
                  },
            })
            return result;
        })
        if(response.data.success){
            yield put(getOrderListSuccess(response.data.data.orders))
        }
    }catch(error){
        console.log(error, error.response);
    }
}


export function* placeOrderSaga(action) {
    try{
        const response = yield call(async () => {
            const result = await axios.post(`${environment.apiBase}/api/order/place`, action.payload,
            {
                headers: {
                    Authorization: action.token,
                  },
            })
            return result;
        })
        if(response.data.success){
            action.getOrder()
        }
    }catch(error){
        console.log(error, error.response);
    }
}

