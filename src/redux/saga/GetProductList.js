import axios from "axios";
import { environment } from "../../assets/environment";
import { call, put } from "@redux-saga/core/effects";
import { productListSuccess } from "../action/action";


/**
 *
 * @param {*} param0 action which contains payloads of information.
 * @description This is saga file which is  a middleware library that helps us with API calls or side effects
 * @author Ravi Ranjan
 * @returns the data coming from the API.
 */


export function* getProductList() {
    try{
        const response = yield call(async () => {
            const result = await axios.get(`${environment.apiBase}/api/product?limit=9&page=1`)
            return result;
        })
        if(response.data.success){
            yield put(productListSuccess(response.data.data.docs))
        }
    }catch(error){
        console.error(error);
    }
}