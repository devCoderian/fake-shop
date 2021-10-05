import { all, fork, takeLatest, delay, put, call } from "@redux-saga/core/effects";
import axios from "axios";

export default function* productSaga(){

    function loadProductAPI(category){
        return axios.get(`https://fakestoreapi.com/products/${category}`);
    }

    function* loadProduct(action) {
        try {
          const result = yield call(loadProductAPI, action.data);
          yield put({
            type: 'LOAD_PRODUCT_SUCCESS',
            data: result.data,
          });
        } catch (err) {
          console.error(err);
          yield put({
            type: 'LOAD_PRODUCT_FAILURE',
            error: err.response.data,
          });s
        }
      }

    function* searchProduct() {
        try {
          const result = yield call(loadProductAPI, '');
          yield put({
            type: 'SEARCH_PRODUCT_SUCCESS',
            data: result.data
          })
          } catch (err) {
          console.error(err);
          yield put({
            type: 'SEARCH_PRODUCT_FAILURE',
            error: err.response.data,
          });
        }
      }
    
    function* sortProduct() {
        try {
          const result = yield call(loadProductAPI);
          yield put({
            type: 'SEARCH_PRODUCT_SUCCESS',
            data: result.data
          })
          } catch (err) {
          console.error(err);
          yield put({
            type: 'SEARCH_PRODUCT_FAILURE',
            error: err.response.data,
          });
        }
      }

      
    function* watchLoadProduct(){
      yield takeLatest('LOAD_PRODUCT_REQUEST', loadProduct);
    }
    function* watchSearchProduct(){
      yield takeLatest('SEARCH_PRODUCT_REQUEST', searchProduct);
    }
    function* watchSearchProduct(){
      yield takeLatest('SORT_PRODUCT_REQUEST', sortProduct);
    }

    yield all([
        fork(watchLoadProduct),
        fork(watchSearchProduct)
    ]);
}