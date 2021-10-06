const initialState = {
    id:1,
    User:{
        id: 1,
        userId: 'ian'
    },
    Order:[
    //     {
    //     id: null,
    //     title: null,
    //     price: null,
    //     quantity: 0
    // }
],
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


// export const addCart = (data) => {
//     return{
//         type: ADD_CART,
//         data
//     }
// }
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

// const dummyProduct = {
//     id: 2,
//     title: "Mens Casual Premium Slim Fit T-Shirts",
//     price: 22.3,
//     image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
// }
// const remove = useCallback(
//     (id) => {
//         setOrders(orders => {
//             return orders.filter(order => order.id !== id)
//         })
//     },
//     [],
// )
// const removeAll = useCallback(() => {
//     setOrders([]);
// },[]);

//Order = Order.filter(order => order.id !== action.data.id)


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
    // console.log('처음',action.data);
    // }
    let checkList = [...state.Order]
    const check = checkList.find(order =>order.id === action.data.id);
    console.log('check',check);
    if(check === undefined){
        console.log('처음');
            // action.data.quantity = 1;
        return{
            ...state,
            Order: [action.data, ...state.Order],
            LoadOrderLoading: false,
            LoadOrdertDone: true
        }
    }else{
        console.log('중복');
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
        // console.log('중복')
        // let copy = [...state.Order]
        // copy[found].quantity+= action.data.quantity
        // console.log(copy)
        // return{
        //     ...state,
        //     ...state.Order[found].quantity++,
        //     // Order: [...state.Order],
        //     Order: [...state.Order],
           
        //     LoadOrderLoading: false,
        //     LoadOrdertDone: true
        // }
  
}
case REMOVE_CART_REQUEST:{
    return{
        ...state
    }
}

case REMOVE_CART_SUCCEESS:{
    let Order = [...state.Order];
    Order.filter(order => order.id !== action.data);
    console.log('remove',Order);
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