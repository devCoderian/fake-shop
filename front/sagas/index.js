import axios from 'axios';
import { all, fork, call, put, takeLatest, delay} from 'redux-saga/effects'

import cartSaga from './cart';
import userSaga from './user';
import productSaga from './product';

//이벤트 리스너 같은것들 all로 등록
export default function* rootSaga(){
    //제너레이터도 함수이다.
    yield all([
        fork(cartSaga),
        fork(userSaga),
        fork(productSaga),
    ]);
}