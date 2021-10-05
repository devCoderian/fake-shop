import { all, fork, takeLatest, delay, put} from "@redux-saga/core/effects";
export default function* cartSaga(){
    

        function addCartAPI(data){
            return axios.post('/api/addCart', data)
            // -> 실제 서버에 요청을 보냄

        }

        function* addCartAction(action){
            try{
                //yield call해서 로그인 api를 실행함
                //const result =  yield call(addCartAPI, action.data);
                // yield delay(1000);
                yield put({
                    type: 'ADD_CART_SUCCEESS',
                    data: action.data
                });
            }catch(err){
                yield put({
                    type: 'ADD_CART_FAILURE',
                    data:err.response.data,
                });
            }
        }
        function* removeCartAction(action){
            try{
                //yield call해서 로그인 api를 실행함
                //const result =  yield call(addCartAPI, action.data);
                // yield delay(1000);
                yield put({
                    type: 'REMOVE_CART_SUCCEESS',
                    data: action.data
                });
            }catch(err){
                yield put({
                    type: 'REMOVE_CART_FAILURE',
                    data:err.response.data,
                });
            }
        }


        function* removeAllCartAction(){
            try{
                //yield call해서 로그인 api를 실행함
                //const result =  yield call(addCartAPI, action.data);
                // yield delay(1000);

                yield put({
                    type: 'REMOVE_ALL_CART_SUCCEESS',
                });
            }catch(err){
                yield put({
                    type: 'REMOVE_ALL_CART_FAILURE',
                    data:err.response.data,
                });
            }
        }

        

    function* watchAddCart(){
        yield takeLatest('ADD_CART_REQUEST', addCartAction);
    }

    function* watchRemoveCart(){
        yield takeLatest('REMOVE_CART_REQUEST', removeCartAction);
    }

    function* watchRemoveAllCart(){
        yield takeLatest('REMOVE_ALL_CART_REQUEST', removeAllCartAction);
    }

    yield all([
        fork(watchAddCart),
        fork(watchRemoveCart),
        fork(watchRemoveAllCart),
    ]);
}