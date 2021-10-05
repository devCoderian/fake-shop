import { HYDRATE } from 'next-redux-wrapper';
//HYDRATE 액션임 리덕스 서버사이드 렌더링을 위한

import user from './user'
import cart from './cart'
import product from './product'

import { combineReducers } from 'redux';

const initialState = {
    user:{
        isLogin: false,
        user: null,
    },
    cart:{
        cartList: [],
    }
}

const rootReducer = combineReducers({
    index:(state = {}, action) => {
        switch(action.type){
            case HYDRATE:
                console.log('HYDRATE', action);
                return { ...state, ...action.payload };
            default:
                return state;
        }
    },
    user,
    cart,
    product
});

export default rootReducer;