const initialState = {
    id:1,
    User:{
        id: 1,
        userId: 'ian'
    },
    Order:[],
LoadOrderLoading: false,
LoadOrdertDone: false,
LoadOrderError: null,
}

export const ADD_CART_REQUEST = 'ADD_CART_REQUEST';
export const ADD_CART_SUCCEESS = 'ADD_CART_SUCCEESS';
export const ADD_CART_FAILURE = 'ADD_CART_FAILURE';

export const REMOVE_CART_REQUEST = 'REMOVE_CART_REQUEST';
export const REMOVE_CART_SUCCEESS = 'REMOVE_CART_SUCCEESS';
export const REMOVE_CART_FAILURE = 'REMOVE_CART_FAILURE';

export const REMOVE_ALL_CART_REQUEST = 'REMOVE_ALL_CART_REQUEST';
export const REMOVE_ALL_CART_SUCCEESS = 'REMOVE_ALL_CART_SUCCEESS';
export const REMOVE_ALL_CART_FAILURE = 'REMOVE_ALL_CART_FAILURE';


export const addCartAction = (data) => {
    return{
        type: ADD_CART_REQUEST,
        data
    }
}

export const removeCartAction = (data) => {
    return{
        type: REMOVE_CART_REQUEST,
        data
    }
}

export const removeAllCartAction = () => {
    return{
        type: REMOVE_ALL_CART_REQUEST
    }
}



const reducer = (state = initialState, action) => {
switch(action.type){
    
    case ADD_CART_REQUEST:{
    
        return{
            ...state,
            LoadOrderLoading: true,
            LoadOrdertDone: false,
        }
    }

    case ADD_CART_SUCCEESS:{

        let checkList = [...state.Order];

        const check = checkList.find(order =>order.id === action.data.id);

        if(check === undefined){
            return{
                ...state,
                Order: [action.data, ...state.Order],
                LoadOrderLoading: false,
                LoadOrdertDone: true
            }
        }else{
            checkList.map((order)=>{
                if(check.id === order.id){
                    order.quantity++;
                    return{
                        ...state,
                        Order: [...state.Order],
                        LoadOrderLoading: false,
                        LoadOrdertDone: true
                        }
                }
            })
      }
}

case REMOVE_CART_REQUEST:{
    return{
        ...state
    }
}

case REMOVE_CART_SUCCEESS:{

    let Order = [...state.Order];
    
    Order.filter(order => order.id !== action.data);

    return{
        ...state,
        Order:Order.filter(order => order.id !== action.data)
    }
}

case REMOVE_ALL_CART_REQUEST:{
    return{
        ...state
    }
}
case REMOVE_ALL_CART_SUCCEESS:{
    console.log('removeALLALL',...state.Order.splice(0));
    return{
        ...state,
        Order: [],
    }
}
default:
    return state;
}
};

export default reducer;