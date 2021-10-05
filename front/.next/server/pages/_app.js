module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
var _jsxFileName = "C:\\Users\\ian07\\Desktop\\react-fake-shop\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const App = ({
  Component
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, " ", __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 16
    }
  }, "Fake-shop")), __jsx(Component, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }));
};

App.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_4__["default"].withRedux(App));

/***/ }),

/***/ "./reducers/cart.js":
/*!**************************!*\
  !*** ./reducers/cart.js ***!
  \**************************/
/*! exports provided: ADD_CART_REQUEST, ADD_CART_SUCCEESS, ADD_CART_FAILURE, REMOVE_CART_REQUEST, REMOVE_CART_SUCCEESS, REMOVE_CART_FAILURE, REMOVE_ALL_CART_REQUEST, REMOVE_ALL_CART_SUCCEESS, REMOVE_ALL_CART_FAILURE, addCartAction, removeCartAction, removeAllCartAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CART_REQUEST", function() { return ADD_CART_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CART_SUCCEESS", function() { return ADD_CART_SUCCEESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CART_FAILURE", function() { return ADD_CART_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_CART_REQUEST", function() { return REMOVE_CART_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_CART_SUCCEESS", function() { return REMOVE_CART_SUCCEESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_CART_FAILURE", function() { return REMOVE_CART_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ALL_CART_REQUEST", function() { return REMOVE_ALL_CART_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ALL_CART_SUCCEESS", function() { return REMOVE_ALL_CART_SUCCEESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ALL_CART_FAILURE", function() { return REMOVE_ALL_CART_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCartAction", function() { return addCartAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCartAction", function() { return removeCartAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAllCartAction", function() { return removeAllCartAction; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  id: 1,
  User: {
    id: 1,
    userId: 'ian'
  },
  Order: [//     {
    //     id: null,
    //     title: null,
    //     price: null,
    //     quantity: 0
    // }
  ],
  LoadOrderLoading: false,
  LoadOrdertDone: false,
  LoadOrderError: null
};
const ADD_CART_REQUEST = 'ADD_CART_REQUEST';
const ADD_CART_SUCCEESS = 'ADD_CART_SUCCEESS';
const ADD_CART_FAILURE = 'ADD_CART_FAILURE';
const REMOVE_CART_REQUEST = 'REMOVE_CART_REQUEST';
const REMOVE_CART_SUCCEESS = 'REMOVE_CART_SUCCEESS';
const REMOVE_CART_FAILURE = 'REMOVE_CART_FAILURE';
const REMOVE_ALL_CART_REQUEST = 'REMOVE_ALL_CART_REQUEST';
const REMOVE_ALL_CART_SUCCEESS = 'REMOVE_ALL_CART_SUCCEESS';
const REMOVE_ALL_CART_FAILURE = 'REMOVE_ALL_CART_FAILURE'; // export const addCart = (data) => {
//     return{
//         type: ADD_CART,
//         data
//     }
// }

const addCartAction = data => {
  return {
    type: ADD_CART_REQUEST,
    data
  };
};
const removeCartAction = data => {
  return {
    type: REMOVE_CART_REQUEST,
    data
  };
};
const removeAllCartAction = () => {
  return {
    type: REMOVE_ALL_CART_REQUEST
  };
}; // const dummyProduct = {
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
  switch (action.type) {
    case ADD_CART_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          LoadOrderLoading: true,
          LoadOrdertDone: false
        });
      }

    case ADD_CART_SUCCEESS:
      {
        console.log(action.data.id);
        console.log(...state.Order, action.data.id);
        let Order = [...state.Order];
        const check = Order.find(order => order.id === action.data.id);

        if (check === undefined) {
          console.log(check, 'check');
          action.data.quantity = 1;
          return _objectSpread(_objectSpread({}, state), {}, {
            Order: [action.data, ...state.Order],
            LoadOrderLoading: false,
            LoadOrdertDone: true
          });
        } else {
          Order.map(order => {
            console.log('중복');
            action.data.quantity = order.quantity + 1;
            return _objectSpread(_objectSpread({}, state), {}, {
              Order: [...state.Order, {
                quantity: action.data.quantity
              }],
              LoadOrderLoading: false,
              LoadOrdertDone: true
            });
          });
        }
      }

    case REMOVE_CART_REQUEST:
      {
        return _objectSpread({}, state);
      }

    case REMOVE_CART_SUCCEESS:
      {
        let Order = [...state.Order];
        Order.filter(order => order.id !== action.data);
        console.log('remove', Order);
        return _objectSpread(_objectSpread({}, state), {}, {
          Order: Order.filter(order => order.id !== action.data)
        });
      }

    case REMOVE_ALL_CART_REQUEST:
      {
        return _objectSpread({}, state);
      }

    case REMOVE_ALL_CART_SUCCEESS:
      {
        console.log('removeALLALL', ...state.Order.splice(0));
        return _objectSpread(_objectSpread({}, state), {}, {
          Order: []
        });
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart */ "./reducers/cart.js");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product */ "./reducers/product.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 //HYDRATE 액션임 리덕스 서버사이드 렌더링을 위한





const initialState = {
  user: {
    isLogin: false,
    user: null
  },
  cart: {
    cartList: []
  }
};
const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_4__["combineReducers"])({
  index: (state = {}, action) => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
        console.log('HYDRATE', action);
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_1__["default"],
  cart: _cart__WEBPACK_IMPORTED_MODULE_2__["default"],
  product: _product__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/product.js":
/*!*****************************!*\
  !*** ./reducers/product.js ***!
  \*****************************/
/*! exports provided: LOAD_PRODUCT_REQUEST, LOAD_PRODUCT_SUCCESS, LOAD_PRODUCT_FAILURE, SEARCH_PRODUCT_REQUEST, SEARCH_PRODUCT_SUCCESS, SEARCH_PRODUCT_FAILURE, LoadProductAction, searchProductAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_PRODUCT_REQUEST", function() { return LOAD_PRODUCT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_PRODUCT_SUCCESS", function() { return LOAD_PRODUCT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_PRODUCT_FAILURE", function() { return LOAD_PRODUCT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_PRODUCT_REQUEST", function() { return SEARCH_PRODUCT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_PRODUCT_SUCCESS", function() { return SEARCH_PRODUCT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_PRODUCT_FAILURE", function() { return SEARCH_PRODUCT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadProductAction", function() { return LoadProductAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchProductAction", function() { return searchProductAction; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  Products: [{
    id: null,
    title: null,
    price: null,
    image: null
  }],
  loadProductLoading: false,
  loadProductDone: false,
  loadProductError: null,
  searchVal: ''
};
const LOAD_PRODUCT_REQUEST = 'LOAD_PRODUCT_REQUEST';
const LOAD_PRODUCT_SUCCESS = 'LOAD_PRODUCT_SUCCESS';
const LOAD_PRODUCT_FAILURE = 'LOAD_PRODUCT_FAILURE';
const SEARCH_PRODUCT_REQUEST = 'SEARCH_PRODUCT_REQUEST';
const SEARCH_PRODUCT_SUCCESS = 'SEARCH_PRODUCT_SUCCESS';
const SEARCH_PRODUCT_FAILURE = 'SEARCH_PRODUCT_FAILURE';
const LoadProductAction = data => {
  return {
    type: LOAD_PRODUCT_REQUEST,
    data
  };
};
const searchProductAction = data => {
  return {
    type: SEARCH_PRODUCT_REQUEST,
    data
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCT_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loadProductLoading: true,
          loadProductDone: false
        });
      }

    case LOAD_PRODUCT_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          Products: action.data,
          loadProductLoading: false,
          loadProductDone: true
        });
      }

    case LOAD_PRODUCT_FAILURE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loadProductLoading: false,
          loadProductDone: false
        });
      }

    case SEARCH_PRODUCT_REQUEST:
      {
        console.log('SEARCH_PRODUCT_REQUEST', action.data);
        return _objectSpread(_objectSpread({}, state), {}, {
          loadProductLoading: false,
          loadProductDone: true,
          searchVal: action.data
        });
      }

    case SEARCH_PRODUCT_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          Products: action.data.filter(item => {
            return item.title.toLocaleUpperCase().includes(...state.searchVal.toLocaleUpperCase());
          }),
          loadProductLoading: false,
          loadProductDone: true
        });
      }

    case SEARCH_PRODUCT_FAILURE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loadProductLoading: false,
          loadProductDone: false
        });
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: LOG_IN_SUCCESS, LOG_IN_REQUEST, LOG_IN_FAILURE, LOG_OUT_SUCCESS, LOG_OUT_REQUEST, LOG_OUT_FAILURE, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  loginLoading: false,
  //로그인 시도중
  loginDone: false,
  //로그아웃 시도중
  loginError: false,
  logoutLoading: false,
  //로그인 시도중
  logoutDone: false,
  logoutError: false,
  //로그아웃 시도중
  me: null
};
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE'; // export const LOG_OUT = 'LOG_OUT';
// export const LOG_IN = 'LOG_IN';

const loginRequestAction = data => {
  return {
    type: LOG_IN_REQUEST,
    data
  };
};
const logoutRequestAction = () => {
  return {
    type: LOG_OUT_REQUEST
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        loginLoading: true
      });

    case LOG_IN_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        loginLoading: false,
        loginDone: true,
        me: action.data
      });

    case LOG_IN_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        loginLoading: false,
        loginDone: false
      });

    case LOG_OUT_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        logoutLoading: true
      });

    case LOG_OUT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        logoutLoading: false,
        logoutDone: true,
        me: null
      });

    case LOG_OUT_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        logoutLoading: false,
        logoutDone: false
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./sagas/cart.js":
/*!***********************!*\
  !*** ./sagas/cart.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cartSaga; });
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/core/effects */ "@redux-saga/core/effects");
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__);

function* cartSaga() {
  function addCartAPI(data) {
    return axios.post('/api/addCart', data); // -> 실제 서버에 요청을 보냄
  }

  function* addCartAction(action) {
    try {
      //yield call해서 로그인 api를 실행함
      //const result =  yield call(addCartAPI, action.data);
      // yield delay(1000);
      yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: 'ADD_CART_SUCCEESS',
        data: action.data
      });
    } catch (err) {
      yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: 'ADD_CART_FAILURE',
        data: err.response.data
      });
    }
  }

  function* removeCartAction(action) {
    try {
      //yield call해서 로그인 api를 실행함
      //const result =  yield call(addCartAPI, action.data);
      // yield delay(1000);
      yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: 'REMOVE_CART_SUCCEESS',
        data: action.data
      });
    } catch (err) {
      yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: 'REMOVE_CART_FAILURE',
        data: err.response.data
      });
    }
  }

  function* removeAllCartAction() {
    try {
      //yield call해서 로그인 api를 실행함
      //const result =  yield call(addCartAPI, action.data);
      // yield delay(1000);
      yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: 'REMOVE_ALL_CART_SUCCEESS'
      });
    } catch (err) {
      yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: 'REMOVE_ALL_CART_FAILURE',
        data: err.response.data
      });
    }
  }

  function* watchAddCart() {
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])('ADD_CART_REQUEST', addCartAction);
  }

  function* watchRemoveCart() {
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])('REMOVE_CART_REQUEST', removeCartAction);
  }

  function* watchRemoveAllCart() {
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])('REMOVE_ALL_CART_REQUEST', removeAllCartAction);
  }

  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddCart), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemoveCart), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemoveAllCart)]);
}

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart */ "./sagas/cart.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./sagas/user.js");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product */ "./sagas/product.js");




 //이벤트 리스너 같은것들 all로 등록

function* rootSaga() {
  //제너레이터도 함수이다.
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(_cart__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(_user__WEBPACK_IMPORTED_MODULE_3__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(_product__WEBPACK_IMPORTED_MODULE_4__["default"])]);
}

/***/ }),

/***/ "./sagas/product.js":
/*!**************************!*\
  !*** ./sagas/product.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return productSaga; });
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/core/effects */ "@redux-saga/core/effects");
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function* productSaga() {
  function loadProductAPI(category) {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`https://fakestoreapi.com/products/${category}`);
  }

  function* loadProduct(action) {
    try {
      const result = yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadProductAPI, action.data);
      yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: 'LOAD_PRODUCT_SUCCESS',
        data: result.data
      });
    } catch (err) {
      console.error(err);
      yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: 'LOAD_PRODUCT_FAILURE',
        error: err.response.data
      });
      s;
    }
  }

  function* searchProduct() {
    try {
      const result = yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadProductAPI, '');
      yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: 'SEARCH_PRODUCT_SUCCESS',
        data: result.data
      });
    } catch (err) {
      console.error(err);
      yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: 'SEARCH_PRODUCT_FAILURE',
        error: err.response.data
      });
    }
  }

  function* sortProduct() {
    try {
      const result = yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadProductAPI);
      yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: 'SEARCH_PRODUCT_SUCCESS',
        data: result.data
      });
    } catch (err) {
      console.error(err);
      yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: 'SEARCH_PRODUCT_FAILURE',
        error: err.response.data
      });
    }
  }

  function* watchLoadProduct() {
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])('LOAD_PRODUCT_REQUEST', loadProduct);
  }

  function* watchSearchProduct() {
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])('SEARCH_PRODUCT_REQUEST', searchProduct);
  }

  function* watchSearchProduct() {
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])('SORT_PRODUCT_REQUEST', sortProduct);
  }

  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadProduct), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSearchProduct)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/core/effects */ "@redux-saga/core/effects");
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__);

function* userSaga() {
  // const l = login({type: 'LOG_IN_REQUEST', data: {id:'ian'}})
  // l.next(); ->  const result =  yield call(loginApi, action.data);여기까지 실행
  // l.next(); yield put 실행
  // generate를 쓰면 테스트하기 쉽다. 
  function logInAPI(data) {
    return axios.post('/api/login', data); // -> 실제 서버에 요청을 보냄
  }

  function* logIn(action) {
    try {
      //yield call해서 로그인 api를 실행함
      //yield call(loginApi, action.data); === loginApi(action.data)
      //const result =  yield call(logInAPI, action.data);
      yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(2000);
      yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: 'LOG_IN_SUCCESS',
        data: action.data
      });
    } catch (err) {
      yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: 'LOG_IN_FAILURE',
        data: err.response.data
      });
    }
  }

  function logOutAPI() {
    return axios.post('/api/logout'); // -> 실제 서버에 요청을 보냄
  }

  function* logOut(action) {
    try {
      //yield call해서 로그인 api를 실행함
      //const result =  yield call(logOutAPI); ->  data: result.data
      yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
      yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: 'LOG_OUT_SUCCESS'
      });
    } catch (err) {
      yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: 'LOG_OUT_FAILURE',
        data: err.response.data
      });
    }
  } //이벤트 리스너 같은 애들


  function* watchLogin() {
    //비동기 액션 크리에이터
    //로그인이라는 액션이 들어오면 로그인 제너레이터를 실행하도록 이벤트 리스너 역할을 한다.
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])('LOG_IN_REQUEST', logIn); //로그인관련 데이터에 대한 액션이 logIn함수에 매개변수로 전달된다.
  }

  function* watchLogout() {
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])('LOG_OUT_REQUEST', logOut);
  }

  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogin), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogout)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/index */ "./reducers/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @redux-saga/core */ "@redux-saga/core");
/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_redux_saga_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");





 //logger

const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  console.log(action);
  return next(action);
}; //configureStore -> store 설정


const configureStore = () => {
  //redux-saga
  const sagaMiddleware = _redux_saga_core__WEBPACK_IMPORTED_MODULE_4___default()();
  const middlewares = [sagaMiddleware, loggerMiddleware];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers_index__WEBPACK_IMPORTED_MODULE_2__["default"], enhancer); // store에 sagaTask 붙이기

  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
}; //두번째 인자 옵션 debug모드 true 추적이 쉬워진다. 


const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: process.env.Node_ENV === ' development'
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@redux-saga/core":
/*!***********************************!*\
  !*** external "@redux-saga/core" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@redux-saga/core");

/***/ }),

/***/ "@redux-saga/core/effects":
/*!*******************************************!*\
  !*** external "@redux-saga/core/effects" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@redux-saga/core/effects");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9jYXJ0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9jYXJ0LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVkdXgtc2FnYS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJlZHV4LXNhZ2EvY29yZS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJpbml0aWFsU3RhdGUiLCJpZCIsIlVzZXIiLCJ1c2VySWQiLCJPcmRlciIsIkxvYWRPcmRlckxvYWRpbmciLCJMb2FkT3JkZXJ0RG9uZSIsIkxvYWRPcmRlckVycm9yIiwiQUREX0NBUlRfUkVRVUVTVCIsIkFERF9DQVJUX1NVQ0NFRVNTIiwiQUREX0NBUlRfRkFJTFVSRSIsIlJFTU9WRV9DQVJUX1JFUVVFU1QiLCJSRU1PVkVfQ0FSVF9TVUNDRUVTUyIsIlJFTU9WRV9DQVJUX0ZBSUxVUkUiLCJSRU1PVkVfQUxMX0NBUlRfUkVRVUVTVCIsIlJFTU9WRV9BTExfQ0FSVF9TVUNDRUVTUyIsIlJFTU9WRV9BTExfQ0FSVF9GQUlMVVJFIiwiYWRkQ2FydEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwicmVtb3ZlQ2FydEFjdGlvbiIsInJlbW92ZUFsbENhcnRBY3Rpb24iLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwiY2hlY2siLCJmaW5kIiwib3JkZXIiLCJ1bmRlZmluZWQiLCJxdWFudGl0eSIsIm1hcCIsImZpbHRlciIsInNwbGljZSIsInVzZXIiLCJpc0xvZ2luIiwiY2FydCIsImNhcnRMaXN0Iiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJpbmRleCIsIkhZRFJBVEUiLCJwYXlsb2FkIiwicHJvZHVjdCIsIlByb2R1Y3RzIiwidGl0bGUiLCJwcmljZSIsImltYWdlIiwibG9hZFByb2R1Y3RMb2FkaW5nIiwibG9hZFByb2R1Y3REb25lIiwibG9hZFByb2R1Y3RFcnJvciIsInNlYXJjaFZhbCIsIkxPQURfUFJPRFVDVF9SRVFVRVNUIiwiTE9BRF9QUk9EVUNUX1NVQ0NFU1MiLCJMT0FEX1BST0RVQ1RfRkFJTFVSRSIsIlNFQVJDSF9QUk9EVUNUX1JFUVVFU1QiLCJTRUFSQ0hfUFJPRFVDVF9TVUNDRVNTIiwiU0VBUkNIX1BST0RVQ1RfRkFJTFVSRSIsIkxvYWRQcm9kdWN0QWN0aW9uIiwic2VhcmNoUHJvZHVjdEFjdGlvbiIsIml0ZW0iLCJ0b0xvY2FsZVVwcGVyQ2FzZSIsImluY2x1ZGVzIiwibG9naW5Mb2FkaW5nIiwibG9naW5Eb25lIiwibG9naW5FcnJvciIsImxvZ291dExvYWRpbmciLCJsb2dvdXREb25lIiwibG9nb3V0RXJyb3IiLCJtZSIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfRkFJTFVSRSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJjYXJ0U2FnYSIsImFkZENhcnRBUEkiLCJheGlvcyIsInBvc3QiLCJwdXQiLCJlcnIiLCJyZXNwb25zZSIsIndhdGNoQWRkQ2FydCIsInRha2VMYXRlc3QiLCJ3YXRjaFJlbW92ZUNhcnQiLCJ3YXRjaFJlbW92ZUFsbENhcnQiLCJhbGwiLCJmb3JrIiwicm9vdFNhZ2EiLCJ1c2VyU2FnYSIsInByb2R1Y3RTYWdhIiwibG9hZFByb2R1Y3RBUEkiLCJjYXRlZ29yeSIsImdldCIsImxvYWRQcm9kdWN0IiwicmVzdWx0IiwiY2FsbCIsImVycm9yIiwicyIsInNlYXJjaFByb2R1Y3QiLCJzb3J0UHJvZHVjdCIsIndhdGNoTG9hZFByb2R1Y3QiLCJ3YXRjaFNlYXJjaFByb2R1Y3QiLCJsb2dJbkFQSSIsImxvZ0luIiwiZGVsYXkiLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJ3YXRjaExvZ2luIiwid2F0Y2hMb2dvdXQiLCJsb2dnZXJNaWRkbGV3YXJlIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsIm5leHQiLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwic2FnYVRhc2siLCJydW4iLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciLCJwcm9jZXNzIiwiZW52IiwiTm9kZV9F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RCxJQUFXN0YsTUFBRCxJQUFVO0FBQ3BFQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWjtBQUNBLFNBQU82RixJQUFJLENBQUM3RixNQUFELENBQVg7QUFDSCxDQUhELEMsQ0FNQTs7O0FBQ0EsTUFBTThGLGNBQWMsR0FBRyxNQUFNO0FBRXpCO0FBQ0EsUUFBTUMsY0FBYyxHQUFHQyx1REFBb0IsRUFBM0M7QUFFQSxRQUFNQyxXQUFXLEdBQUcsQ0FBQ0YsY0FBRCxFQUFpQkwsZ0JBQWpCLENBQXBCO0FBQ0EsUUFBTVEsUUFBUSxHQUFHLFFBQ2ZDLFNBRGUsR0FFZkMsb0ZBQW1CLENBQUNDLDZEQUFlLENBQUMsR0FBR0osV0FBSixDQUFoQixDQUZyQjtBQUlBLFFBQU1LLEtBQUssR0FBR0MseURBQVcsQ0FBQ3pHLHVEQUFELEVBQVVvRyxRQUFWLENBQXpCLENBVnlCLENBV3pCOztBQUNBSSxPQUFLLENBQUNFLFFBQU4sR0FBaUJULGNBQWMsQ0FBQ1UsR0FBZixDQUFtQnJDLDhDQUFuQixDQUFqQjtBQUNBLFNBQU9rQyxLQUFQO0FBQ0gsQ0FkRCxDLENBZ0JBOzs7QUFDQSxNQUFNaEksT0FBTyxHQUFHb0ksd0VBQWEsQ0FBQ1osY0FBRCxFQUFnQjtBQUN6Q2EsT0FBSyxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QjtBQURTLENBQWhCLENBQTdCO0FBSWV4SSxzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcblxyXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQgfSkgPT4ge1xyXG4gICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICA8PlxyXG4gICAgICAgIDxIZWFkPiA8dGl0bGU+RmFrZS1zaG9wPC90aXRsZT48L0hlYWQ+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgLz5cclxuICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5BcHAucHJvcFR5cGVzID0ge1xyXG4gICAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxufVxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChBcHApO1xyXG4iLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlkOjEsXHJcbiAgICAgICAgICAgIFVzZXI6e1xyXG4gICAgICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgICAgICB1c2VySWQ6ICdpYW4nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIE9yZGVyOltcclxuICAgICAgICAgICAgLy8gICAgIHtcclxuICAgICAgICAgICAgLy8gICAgIGlkOiBudWxsLFxyXG4gICAgICAgICAgICAvLyAgICAgdGl0bGU6IG51bGwsXHJcbiAgICAgICAgICAgIC8vICAgICBwcmljZTogbnVsbCxcclxuICAgICAgICAgICAgLy8gICAgIHF1YW50aXR5OiAwXHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIExvYWRPcmRlckxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIExvYWRPcmRlcnREb25lOiBmYWxzZSxcclxuICAgICAgICBMb2FkT3JkZXJFcnJvcjogbnVsbCxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DQVJUX1JFUVVFU1QgPSAnQUREX0NBUlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ0FSVF9TVUNDRUVTUyA9ICdBRERfQ0FSVF9TVUNDRUVTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ0FSVF9GQUlMVVJFID0gJ0FERF9DQVJUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9DQVJUX1JFUVVFU1QgPSAnUkVNT1ZFX0NBUlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQ0FSVF9TVUNDRUVTUyA9ICdSRU1PVkVfQ0FSVF9TVUNDRUVTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQ0FSVF9GQUlMVVJFID0gJ1JFTU9WRV9DQVJUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9BTExfQ0FSVF9SRVFVRVNUID0gJ1JFTU9WRV9BTExfQ0FSVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9BTExfQ0FSVF9TVUNDRUVTUyA9ICdSRU1PVkVfQUxMX0NBUlRfU1VDQ0VFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0FMTF9DQVJUX0ZBSUxVUkUgPSAnUkVNT1ZFX0FMTF9DQVJUX0ZBSUxVUkUnO1xyXG5cclxuXHJcbi8vIGV4cG9ydCBjb25zdCBhZGRDYXJ0ID0gKGRhdGEpID0+IHtcclxuLy8gICAgIHJldHVybntcclxuLy8gICAgICAgICB0eXBlOiBBRERfQ0FSVCxcclxuLy8gICAgICAgICBkYXRhXHJcbi8vICAgICB9XHJcbi8vIH1cclxuZXhwb3J0IGNvbnN0IGFkZENhcnRBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6IEFERF9DQVJUX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlQ2FydEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTogUkVNT1ZFX0NBUlRfUkVRVUVTVCxcclxuICAgICAgICBkYXRhXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVBbGxDYXJ0QWN0aW9uID0gKCkgPT4ge1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6IFJFTU9WRV9BTExfQ0FSVF9SRVFVRVNUXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGNvbnN0IGR1bW15UHJvZHVjdCA9IHtcclxuLy8gICAgIGlkOiAyLFxyXG4vLyAgICAgdGl0bGU6IFwiTWVucyBDYXN1YWwgUHJlbWl1bSBTbGltIEZpdCBULVNoaXJ0c1wiLFxyXG4vLyAgICAgcHJpY2U6IDIyLjMsXHJcbi8vICAgICBpbWFnZTogXCJodHRwczovL2Zha2VzdG9yZWFwaS5jb20vaW1nLzcxLTNIakdORFVMLl9BQ19TWTg3OS5fU1guX1VYLl9TWS5fVVlfLmpwZ1wiXHJcbi8vIH1cclxuLy8gY29uc3QgcmVtb3ZlID0gdXNlQ2FsbGJhY2soXHJcbi8vICAgICAoaWQpID0+IHtcclxuLy8gICAgICAgICBzZXRPcmRlcnMob3JkZXJzID0+IHtcclxuLy8gICAgICAgICAgICAgcmV0dXJuIG9yZGVycy5maWx0ZXIob3JkZXIgPT4gb3JkZXIuaWQgIT09IGlkKVxyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICB9LFxyXG4vLyAgICAgW10sXHJcbi8vIClcclxuLy8gY29uc3QgcmVtb3ZlQWxsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4vLyAgICAgc2V0T3JkZXJzKFtdKTtcclxuLy8gfSxbXSk7XHJcblxyXG4vL09yZGVyID0gT3JkZXIuZmlsdGVyKG9yZGVyID0+IG9yZGVyLmlkICE9PSBhY3Rpb24uZGF0YS5pZClcclxuXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBBRERfQ0FSVF9SRVFVRVNUOntcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBMb2FkT3JkZXJMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgTG9hZE9yZGVydERvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQUREX0NBUlRfU1VDQ0VFU1M6e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YS5pZCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKC4uLnN0YXRlLk9yZGVyLGFjdGlvbi5kYXRhLmlkKTtcclxuICAgICAgICAgICAgbGV0IE9yZGVyID0gWy4uLnN0YXRlLk9yZGVyXTtcclxuICAgICAgICAgICAgY29uc3QgY2hlY2sgPSBPcmRlci5maW5kKG9yZGVyID0+b3JkZXIuaWQgPT09IGFjdGlvbi5kYXRhLmlkKTtcclxuICAgICAgICAgICAgICAgIGlmKGNoZWNrID09PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNoZWNrLCdjaGVjaycpXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmRhdGEucXVhbnRpdHkgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9yZGVyOiBbYWN0aW9uLmRhdGEsIC4uLnN0YXRlLk9yZGVyXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvYWRPcmRlckxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9hZE9yZGVydERvbmU6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBPcmRlci5tYXAoKG9yZGVyKT0+e1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn7KSR67O1JylcclxuICAgICAgICAgICAgICAgICAgYWN0aW9uLmRhdGEucXVhbnRpdHkgPSBvcmRlci5xdWFudGl0eSsxO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgT3JkZXI6IFsuLi5zdGF0ZS5PcmRlciwgeyBxdWFudGl0eTogYWN0aW9uLmRhdGEucXVhbnRpdHl9XSxcclxuICAgICAgICAgICAgICAgICAgICBMb2FkT3JkZXJMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBMb2FkT3JkZXJ0RG9uZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBSRU1PVkVfQ0FSVF9SRVFVRVNUOntcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBSRU1PVkVfQ0FSVF9TVUNDRUVTUzp7XHJcbiAgICAgICAgICAgIGxldCBPcmRlciA9IFsuLi5zdGF0ZS5PcmRlcl07XHJcbiAgICAgICAgICAgIE9yZGVyLmZpbHRlcihvcmRlciA9PiBvcmRlci5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVtb3ZlJyxPcmRlcik7XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgT3JkZXI6T3JkZXIuZmlsdGVyKG9yZGVyID0+IG9yZGVyLmlkICE9PSBhY3Rpb24uZGF0YSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBSRU1PVkVfQUxMX0NBUlRfUkVRVUVTVDp7XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBSRU1PVkVfQUxMX0NBUlRfU1VDQ0VFU1M6e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVtb3ZlQUxMQUxMJywuLi5zdGF0ZS5PcmRlci5zcGxpY2UoMCkpO1xyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIE9yZGVyOiBbXSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG4vL0hZRFJBVEUg7JWh7IWY7J6EIOumrOuNleyKpCDshJzrsoTsgqzsnbTrk5wg66CM642U66eB7J2EIOychO2VnFxyXG5cclxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJ1xyXG5pbXBvcnQgY2FydCBmcm9tICcuL2NhcnQnXHJcbmltcG9ydCBwcm9kdWN0IGZyb20gJy4vcHJvZHVjdCdcclxuXHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIHVzZXI6e1xyXG4gICAgICAgIGlzTG9naW46IGZhbHNlLFxyXG4gICAgICAgIHVzZXI6IG51bGwsXHJcbiAgICB9LFxyXG4gICAgY2FydDp7XHJcbiAgICAgICAgY2FydExpc3Q6IFtdLFxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBpbmRleDooc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0hZRFJBVEUnLCBhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVzZXIsXHJcbiAgICBjYXJ0LFxyXG4gICAgcHJvZHVjdFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyOyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgUHJvZHVjdHM6W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIHByaWNlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbG9hZFByb2R1Y3RMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBsb2FkUHJvZHVjdERvbmU6IGZhbHNlLFxyXG4gICAgICAgIGxvYWRQcm9kdWN0RXJyb3I6IG51bGwsXHJcbiAgICAgICAgc2VhcmNoVmFsOiAnJyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUFJPRFVDVF9SRVFVRVNUID0gJ0xPQURfUFJPRFVDVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUFJPRFVDVF9TVUNDRVNTID0gJ0xPQURfUFJPRFVDVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUFJPRFVDVF9GQUlMVVJFID0gJ0xPQURfUFJPRFVDVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfUFJPRFVDVF9SRVFVRVNUID0gJ1NFQVJDSF9QUk9EVUNUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0VBUkNIX1BST0RVQ1RfU1VDQ0VTUyA9ICdTRUFSQ0hfUFJPRFVDVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9QUk9EVUNUX0ZBSUxVUkUgPSAnU0VBUkNIX1BST0RVQ1RfRkFJTFVSRSc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IExvYWRQcm9kdWN0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOiBMT0FEX1BST0RVQ1RfUkVRVUVTVCxcclxuICAgICAgICBkYXRhXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IHNlYXJjaFByb2R1Y3RBY3Rpb24gPSAoZGF0YSkgPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTogU0VBUkNIX1BST0RVQ1RfUkVRVUVTVCxcclxuICAgICAgICBkYXRhXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIExPQURfUFJPRFVDVF9SRVFVRVNUOntcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkUHJvZHVjdExvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsb2FkUHJvZHVjdERvbmU6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0FEX1BST0RVQ1RfU1VDQ0VTUzp7XHJcbiAgICAgICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgUHJvZHVjdHM6YWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZFByb2R1Y3RMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkUHJvZHVjdERvbmU6IHRydWUsXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExPQURfUFJPRFVDVF9GQUlMVVJFOntcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkUHJvZHVjdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9hZFByb2R1Y3REb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFNFQVJDSF9QUk9EVUNUX1JFUVVFU1Q6e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU0VBUkNIX1BST0RVQ1RfUkVRVUVTVCcsYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRQcm9kdWN0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZFByb2R1Y3REb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFZhbDphY3Rpb24uZGF0YVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFNFQVJDSF9QUk9EVUNUX1NVQ0NFU1M6e1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgUHJvZHVjdHM6IGFjdGlvbi5kYXRhLmZpbHRlcigoaXRlbSk9PntcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS50aXRsZS50b0xvY2FsZVVwcGVyQ2FzZSgpLmluY2x1ZGVzKC4uLnN0YXRlLnNlYXJjaFZhbC50b0xvY2FsZVVwcGVyQ2FzZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBsb2FkUHJvZHVjdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9hZFByb2R1Y3REb25lOiB0cnVlLFxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlICBTRUFSQ0hfUFJPRFVDVF9GQUlMVVJFOntcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkUHJvZHVjdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9hZFByb2R1Y3REb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGxvZ2luTG9hZGluZzogZmFsc2UsIC8v66Gc6re47J24IOyLnOuPhOykkVxyXG4gICAgbG9naW5Eb25lOiBmYWxzZSwgLy/roZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgICBsb2dpbkVycm9yOiBmYWxzZSxcclxuICAgXHJcbiAgICBsb2dvdXRMb2FkaW5nOiBmYWxzZSwgLy/roZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgICBsb2dvdXREb25lOiBmYWxzZSxcclxuICAgIGxvZ291dEVycm9yOiBmYWxzZSwgLy/roZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgICBtZTogbnVsbCxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJztcclxuLy8gZXhwb3J0IGNvbnN0IExPR19PVVQgPSAnTE9HX09VVCc7XHJcbi8vIGV4cG9ydCBjb25zdCBMT0dfSU4gPSAnTE9HX0lOJztcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOiBMT0dfT1VUX1JFUVVFU1RcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9naW5Mb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9naW5Mb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvZ2luRG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1lOmFjdGlvbi5kYXRhXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2dpbkxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9naW5Eb25lOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvZ291dExvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvZ291dExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9nb3V0RG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1lOm51bGxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9nb3V0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBsb2dvdXREb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJpbXBvcnQgeyBhbGwsIGZvcmssIHRha2VMYXRlc3QsIGRlbGF5LCBwdXR9IGZyb20gXCJAcmVkdXgtc2FnYS9jb3JlL2VmZmVjdHNcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIGNhcnRTYWdhKCl7XHJcbiAgICBcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYWRkQ2FydEFQSShkYXRhKXtcclxuICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvYWRkQ2FydCcsIGRhdGEpXHJcbiAgICAgICAgICAgIC8vIC0+IOyLpOygnCDshJzrsoTsl5Ag7JqU7LKt7J2EIOuztOuDhFxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uKiBhZGRDYXJ0QWN0aW9uKGFjdGlvbil7XHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIC8veWllbGQgY2FsbO2VtOyEnCDroZzqt7jsnbggYXBp66W8IOyLpO2Wie2VqFxyXG4gICAgICAgICAgICAgICAgLy9jb25zdCByZXN1bHQgPSAgeWllbGQgY2FsbChhZGRDYXJ0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAvLyB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0FERF9DQVJUX1NVQ0NFRVNTJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnQUREX0NBUlRfRkFJTFVSRScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTplcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uKiByZW1vdmVDYXJ0QWN0aW9uKGFjdGlvbil7XHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIC8veWllbGQgY2FsbO2VtOyEnCDroZzqt7jsnbggYXBp66W8IOyLpO2Wie2VqFxyXG4gICAgICAgICAgICAgICAgLy9jb25zdCByZXN1bHQgPSAgeWllbGQgY2FsbChhZGRDYXJ0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAvLyB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1JFTU9WRV9DQVJUX1NVQ0NFRVNTJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUkVNT1ZFX0NBUlRfRkFJTFVSRScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTplcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgZnVuY3Rpb24qIHJlbW92ZUFsbENhcnRBY3Rpb24oKXtcclxuICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgLy95aWVsZCBjYWxs7ZW07IScIOuhnOq3uOyduCBhcGnrpbwg7Iuk7ZaJ7ZWoXHJcbiAgICAgICAgICAgICAgICAvL2NvbnN0IHJlc3VsdCA9ICB5aWVsZCBjYWxsKGFkZENhcnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIC8vIHlpZWxkIGRlbGF5KDEwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1JFTU9WRV9BTExfQ0FSVF9TVUNDRUVTUycsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdSRU1PVkVfQUxMX0NBUlRfRkFJTFVSRScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTplcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuXHJcbiAgICBmdW5jdGlvbiogd2F0Y2hBZGRDYXJ0KCl7XHJcbiAgICAgICAgeWllbGQgdGFrZUxhdGVzdCgnQUREX0NBUlRfUkVRVUVTVCcsIGFkZENhcnRBY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uKiB3YXRjaFJlbW92ZUNhcnQoKXtcclxuICAgICAgICB5aWVsZCB0YWtlTGF0ZXN0KCdSRU1PVkVfQ0FSVF9SRVFVRVNUJywgcmVtb3ZlQ2FydEFjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24qIHdhdGNoUmVtb3ZlQWxsQ2FydCgpe1xyXG4gICAgICAgIHlpZWxkIHRha2VMYXRlc3QoJ1JFTU9WRV9BTExfQ0FSVF9SRVFVRVNUJywgcmVtb3ZlQWxsQ2FydEFjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoQWRkQ2FydCksXHJcbiAgICAgICAgZm9yayh3YXRjaFJlbW92ZUNhcnQpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVBbGxDYXJ0KSxcclxuICAgIF0pO1xyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgYWxsLCBmb3JrLCBjYWxsLCBwdXQsIHRha2VMYXRlc3QsIGRlbGF5fSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXHJcblxyXG5pbXBvcnQgY2FydFNhZ2EgZnJvbSAnLi9jYXJ0JztcclxuaW1wb3J0IHVzZXJTYWdhIGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCBwcm9kdWN0U2FnYSBmcm9tICcuL3Byb2R1Y3QnO1xyXG5cclxuLy/snbTrsqTtirgg66as7Iqk64SIIOqwmeydgOqyg+uTpCBhbGzroZwg65Ox66GdXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpe1xyXG4gICAgLy/soJzrhIjroIjsnbTthLDrj4Qg7ZWo7IiY7J2064ukLlxyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKGNhcnRTYWdhKSxcclxuICAgICAgICBmb3JrKHVzZXJTYWdhKSxcclxuICAgICAgICBmb3JrKHByb2R1Y3RTYWdhKSxcclxuICAgIF0pO1xyXG59IiwiaW1wb3J0IHsgYWxsLCBmb3JrLCB0YWtlTGF0ZXN0LCBkZWxheSwgcHV0LCBjYWxsIH0gZnJvbSBcIkByZWR1eC1zYWdhL2NvcmUvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcHJvZHVjdFNhZ2EoKXtcclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkUHJvZHVjdEFQSShjYXRlZ29yeSl7XHJcbiAgICAgICAgcmV0dXJuIGF4aW9zLmdldChgaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL3Byb2R1Y3RzLyR7Y2F0ZWdvcnl9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24qIGxvYWRQcm9kdWN0KGFjdGlvbikge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQcm9kdWN0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiAnTE9BRF9QUk9EVUNUX1NVQ0NFU1MnLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogJ0xPQURfUFJPRFVDVF9GQUlMVVJFJyxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgfSk7c1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uKiBzZWFyY2hQcm9kdWN0KCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQcm9kdWN0QVBJLCAnJyk7XHJcbiAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiAnU0VBUkNIX1BST0RVQ1RfU1VDQ0VTUycsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiAnU0VBUkNIX1BST0RVQ1RfRkFJTFVSRScsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiogc29ydFByb2R1Y3QoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFByb2R1Y3RBUEkpO1xyXG4gICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogJ1NFQVJDSF9QUk9EVUNUX1NVQ0NFU1MnLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogJ1NFQVJDSF9QUk9EVUNUX0ZBSUxVUkUnLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFxyXG4gICAgZnVuY3Rpb24qIHdhdGNoTG9hZFByb2R1Y3QoKXtcclxuICAgICAgeWllbGQgdGFrZUxhdGVzdCgnTE9BRF9QUk9EVUNUX1JFUVVFU1QnLCBsb2FkUHJvZHVjdCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiogd2F0Y2hTZWFyY2hQcm9kdWN0KCl7XHJcbiAgICAgIHlpZWxkIHRha2VMYXRlc3QoJ1NFQVJDSF9QUk9EVUNUX1JFUVVFU1QnLCBzZWFyY2hQcm9kdWN0KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uKiB3YXRjaFNlYXJjaFByb2R1Y3QoKXtcclxuICAgICAgeWllbGQgdGFrZUxhdGVzdCgnU09SVF9QUk9EVUNUX1JFUVVFU1QnLCBzb3J0UHJvZHVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZFByb2R1Y3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hTZWFyY2hQcm9kdWN0KVxyXG4gICAgXSk7XHJcbn0iLCJpbXBvcnQgeyBhbGwsIGZvcmssIHRha2VMYXRlc3QsIHB1dCwgZGVsYXl9IGZyb20gXCJAcmVkdXgtc2FnYS9jb3JlL2VmZmVjdHNcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCl7XHJcblxyXG4gICAgLy8gY29uc3QgbCA9IGxvZ2luKHt0eXBlOiAnTE9HX0lOX1JFUVVFU1QnLCBkYXRhOiB7aWQ6J2lhbid9fSlcclxuICAgIC8vIGwubmV4dCgpOyAtPiAgY29uc3QgcmVzdWx0ID0gIHlpZWxkIGNhbGwobG9naW5BcGksIGFjdGlvbi5kYXRhKTvsl6zquLDquYzsp4Ag7Iuk7ZaJXHJcbiAgICAvLyBsLm5leHQoKTsgeWllbGQgcHV0IOyLpO2WiVxyXG4gICAgLy8gZ2VuZXJhdGXrpbwg7JOw66m0IO2FjOyKpO2KuO2VmOq4sCDsib3ri6QuIFxyXG5cclxuICAgIGZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpe1xyXG4gICAgICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ2luJywgZGF0YSlcclxuICAgICAgICAvLyAtPiDsi6TsoJwg7ISc67KE7JeQIOyalOyyreydhCDrs7Trg4RcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24qIGxvZ0luKGFjdGlvbil7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAvL3lpZWxkIGNhbGztlbTshJwg66Gc6re47J24IGFwaeulvCDsi6TtlontlahcclxuICAgICAgICAgICAgLy95aWVsZCBjYWxsKGxvZ2luQXBpLCBhY3Rpb24uZGF0YSk7ID09PSBsb2dpbkFwaShhY3Rpb24uZGF0YSlcclxuICAgICAgICAgICAgLy9jb25zdCByZXN1bHQgPSAgeWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICB5aWVsZCBkZWxheSgyMDAwKTtcclxuICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdMT0dfSU5fU1VDQ0VTUycsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdMT0dfSU5fRkFJTFVSRScsXHJcbiAgICAgICAgICAgICAgICBkYXRhOmVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbG9nT3V0QVBJKCl7XHJcbiAgICAgICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9nb3V0JylcclxuICAgICAgICAvLyAtPiDsi6TsoJwg7ISc67KE7JeQIOyalOyyreydhCDrs7Trg4RcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24qIGxvZ091dChhY3Rpb24pe1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgLy95aWVsZCBjYWxs7ZW07IScIOuhnOq3uOyduCBhcGnrpbwg7Iuk7ZaJ7ZWoXHJcbiAgICAgICAgICAgIC8vY29uc3QgcmVzdWx0ID0gIHlpZWxkIGNhbGwobG9nT3V0QVBJKTsgLT4gIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ0xPR19PVVRfU1VDQ0VTUydcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnTE9HX09VVF9GQUlMVVJFJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6ZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIC8v7J2067Kk7Yq4IOumrOyKpOuEiCDqsJnsnYAg7JWg65OkXHJcbiAgICBmdW5jdGlvbiogd2F0Y2hMb2dpbigpe1xyXG4gICAgICAgIC8v67mE64+Z6riwIOyVoeyFmCDtgazrpqzsl5DsnbTthLBcclxuICAgICAgICAvL+uhnOq3uOyduOydtOudvOuKlCDslaHshZjsnbQg65Ok7Ja07Jik66m0IOuhnOq3uOyduCDsoJzrhIjroIjsnbTthLDrpbwg7Iuk7ZaJ7ZWY64+E66GdIOydtOuypO2KuCDrpqzsiqTrhIgg7Jet7ZWg7J2EIO2VnOuLpC5cclxuICAgICAgICB5aWVsZCB0YWtlTGF0ZXN0KCdMT0dfSU5fUkVRVUVTVCcsIGxvZ0luKTtcclxuICAgICAgICAvL+uhnOq3uOyduOq0gOugqCDrjbDsnbTthLDsl5Ag64yA7ZWcIOyVoeyFmOydtCBsb2dJbu2VqOyImOyXkCDrp6TqsJzrs4DsiJjroZwg7KCE64us65Cc64ukLlxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24qIHdhdGNoTG9nb3V0KCl7XHJcbiAgICAgICAgeWllbGQgdGFrZUxhdGVzdCgnTE9HX09VVF9SRVFVRVNUJywgbG9nT3V0KTtcclxuICAgIH1cclxuXHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dpbiksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ291dClcclxuICAgIF0pO1xyXG59IiwiaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjcmVhdGVTdG9yZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycy9pbmRleCdcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIjtcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gXCJAcmVkdXgtc2FnYS9jb3JlXCI7XHJcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhcyc7XHJcblxyXG4vL2xvZ2dlclxyXG5jb25zdCBsb2dnZXJNaWRkbGV3YXJlID0gKHsgZGlzcGF0Y2gsIGdldFN0YXRlfSkgPT4gKG5leHQpID0+IChhY3Rpb24pPT57XHJcbiAgICBjb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4gICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcclxufVxyXG5cclxuXHJcbi8vY29uZmlndXJlU3RvcmUgLT4gc3RvcmUg7ISk7KCVXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG5cclxuICAgIC8vcmVkdXgtc2FnYVxyXG4gICAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG5cclxuICAgIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlLCBsb2dnZXJNaWRkbGV3YXJlXTtcclxuICAgIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG4gICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgIFxyXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgICAvLyBzdG9yZeyXkCBzYWdhVGFzayDrtpnsnbTquLBcclxuICAgIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICAgIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbi8v65GQ67KI7Ke4IOyduOyekCDsmLXshZggZGVidWfrqqjrk5wgdHJ1ZSDstpTsoIHsnbQg7Ims7JuM7KeE64ukLiBcclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUse1xyXG4gICAgZGVidWc6IHByb2Nlc3MuZW52Lk5vZGVfRU5WID09PSAnIGRldmVsb3BtZW50J1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWR1eC1zYWdhL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4LXNhZ2EvY29yZS9lZmZlY3RzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=