import axios from "axios";
import { environment } from "../../assets/environment";
import { call, put } from "@redux-saga/core/effects";
import { productListSuccess } from "../action/action";


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