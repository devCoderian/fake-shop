import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, compose, createStore } from "redux";
import reducer from '../reducers/index'
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from '../sagas';

//logger
const loggerMiddleware = ({ dispatch, getState}) => (next) => (action)=>{
    console.log(action);
    return next(action);
}


//configureStore -> store 설정
const configureStore = () => {

    //redux-saga
    const sagaMiddleware = createSagaMiddleware();

    const middlewares = [sagaMiddleware, loggerMiddleware];
    const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares))
    
    const store = createStore(reducer, enhancer);
    // store에 sagaTask 붙이기
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
};

//두번째 인자 옵션 debug모드 true 추적이 쉬워진다. 
const wrapper = createWrapper(configureStore,{
    debug: process.env.Node_ENV === ' development'
});

export default wrapper;
