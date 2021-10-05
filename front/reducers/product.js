const initialState = {
        
            Products:[
                {
                id: null,
                title: null,
                price: null,
                image: null
            }
        ],
        loadProductLoading: false,
        loadProductDone: false,
        loadProductError: null,
        searchVal: '',
}

export const LOAD_PRODUCT_REQUEST = 'LOAD_PRODUCT_REQUEST';
export const LOAD_PRODUCT_SUCCESS = 'LOAD_PRODUCT_SUCCESS';
export const LOAD_PRODUCT_FAILURE = 'LOAD_PRODUCT_FAILURE';

export const SEARCH_PRODUCT_REQUEST = 'SEARCH_PRODUCT_REQUEST';
export const SEARCH_PRODUCT_SUCCESS = 'SEARCH_PRODUCT_SUCCESS';
export const SEARCH_PRODUCT_FAILURE = 'SEARCH_PRODUCT_FAILURE';


export const LoadProductAction = (data) => {
    return{
        type: LOAD_PRODUCT_REQUEST,
        data
    }
}
export const searchProductAction = (data) =>{
    return{
        type: SEARCH_PRODUCT_REQUEST,
        data
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_PRODUCT_REQUEST:{
            return{
                ...state,
                loadProductLoading: true,
                loadProductDone: false
            }
        }
        case LOAD_PRODUCT_SUCCESS:{
                return{
                    ...state,
                    Products:action.data,
                    loadProductLoading: false,
                    loadProductDone: true,

                }
        }
        case LOAD_PRODUCT_FAILURE:{
            return{
                ...state,
                loadProductLoading: false,
                loadProductDone: false,
            }
        }
        case SEARCH_PRODUCT_REQUEST:{
            console.log('SEARCH_PRODUCT_REQUEST',action.data);
        
                return{
                    ...state,
                    loadProductLoading: false,
                    loadProductDone: true,
                    searchVal:action.data
                }
        }
        case SEARCH_PRODUCT_SUCCESS:{
          
            return{
                ...state,
                Products: action.data.filter((item)=>{
                    return item.title.toLocaleUpperCase().includes(...state.searchVal.toLocaleUpperCase())
                   }),
                loadProductLoading: false,
                loadProductDone: true,

            }
        }
        case  SEARCH_PRODUCT_FAILURE:{
            return{
                ...state,
                loadProductLoading: false,
                loadProductDone: false,
            }
        }
        default:
            return state;
    }
};

export default reducer;