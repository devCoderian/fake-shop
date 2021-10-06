webpackHotUpdate_N_E("pages/cart",{

/***/ "./reducers/cart.js":
/*!**************************!*\
  !*** ./reducers/cart.js ***!
  \**************************/
/*! exports provided: ADD_CART_REQUEST, ADD_CART_SUCCEESS, ADD_CART_FAILURE, REMOVE_CART_REQUEST, REMOVE_CART_SUCCEESS, REMOVE_CART_FAILURE, REMOVE_ALL_CART_REQUEST, REMOVE_ALL_CART_SUCCEESS, REMOVE_ALL_CART_FAILURE, addCartAction, removeCartAction, removeAllCartAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CART_REQUEST", function() { return ADD_CART_REQUEST; });
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
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
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
var ADD_CART_REQUEST = 'ADD_CART_REQUEST';
var ADD_CART_SUCCEESS = 'ADD_CART_SUCCEESS';
var ADD_CART_FAILURE = 'ADD_CART_FAILURE';
var REMOVE_CART_REQUEST = 'REMOVE_CART_REQUEST';
var REMOVE_CART_SUCCEESS = 'REMOVE_CART_SUCCEESS';
var REMOVE_CART_FAILURE = 'REMOVE_CART_FAILURE';
var REMOVE_ALL_CART_REQUEST = 'REMOVE_ALL_CART_REQUEST';
var REMOVE_ALL_CART_SUCCEESS = 'REMOVE_ALL_CART_SUCCEESS';
var REMOVE_ALL_CART_FAILURE = 'REMOVE_ALL_CART_FAILURE'; // export const addCart = (data) => {
//     return{
//         type: ADD_CART,
//         data
//     }
// }

var addCartAction = function addCartAction(data) {
  return {
    type: ADD_CART_REQUEST,
    data: data
  };
};
var removeCartAction = function removeCartAction(data) {
  return {
    type: REMOVE_CART_REQUEST,
    data: data
  };
};
var removeAllCartAction = function removeAllCartAction() {
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

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

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
        console.log('처음', action.data); // }

        var check = Order.find(function (order) {
          return order.id === action.data.id;
        });
        console.log('check', check);

        if (check === undefined) {
          console.log('처음'); // action.data.quantity = 1;

          return _objectSpread(_objectSpread({}, state), {}, {
            Order: [action.data].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.Order)),
            LoadOrderLoading: false,
            LoadOrdertDone: true
          });
        } else {
          Order.map(function (order) {
            console.log('중복');
            console.log('quantity', quantity);
            console.log('order.quantity++', order.quantity++);
            return _objectSpread(_objectSpread({}, state), {}, {
              Order: [{
                quantity: order.quantity++
              }].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.Order)),
              LoadOrderLoading: false,
              LoadOrdertDone: true
            });
          });
        } // console.log('중복')
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

    case REMOVE_CART_REQUEST:
      {
        return _objectSpread({}, state);
      }

    case REMOVE_CART_SUCCEESS:
      {
        var _Order = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.Order);

        _Order.filter(function (order) {
          return order.id !== action.data;
        });

        console.log('remove', _Order);
        return _objectSpread(_objectSpread({}, state), {}, {
          Order: _Order.filter(function (order) {
            return order.id !== action.data;
          })
        });
      }

    case REMOVE_ALL_CART_REQUEST:
      {
        return _objectSpread({}, state);
      }

    case REMOVE_ALL_CART_SUCCEESS:
      {
        var _console;

        (_console = console).log.apply(_console, ['removeALLALL'].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.Order.splice(0))));

        return _objectSpread(_objectSpread({}, state), {}, {
          Order: []
        });
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvY2FydC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJpZCIsIlVzZXIiLCJ1c2VySWQiLCJPcmRlciIsIkxvYWRPcmRlckxvYWRpbmciLCJMb2FkT3JkZXJ0RG9uZSIsIkxvYWRPcmRlckVycm9yIiwiQUREX0NBUlRfUkVRVUVTVCIsIkFERF9DQVJUX1NVQ0NFRVNTIiwiQUREX0NBUlRfRkFJTFVSRSIsIlJFTU9WRV9DQVJUX1JFUVVFU1QiLCJSRU1PVkVfQ0FSVF9TVUNDRUVTUyIsIlJFTU9WRV9DQVJUX0ZBSUxVUkUiLCJSRU1PVkVfQUxMX0NBUlRfUkVRVUVTVCIsIlJFTU9WRV9BTExfQ0FSVF9TVUNDRUVTUyIsIlJFTU9WRV9BTExfQ0FSVF9GQUlMVVJFIiwiYWRkQ2FydEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwicmVtb3ZlQ2FydEFjdGlvbiIsInJlbW92ZUFsbENhcnRBY3Rpb24iLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwiY2hlY2siLCJmaW5kIiwib3JkZXIiLCJ1bmRlZmluZWQiLCJtYXAiLCJxdWFudGl0eSIsImZpbHRlciIsInNwbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxZQUFZLEdBQUc7QUFDakJDLElBQUUsRUFBQyxDQURjO0FBRWpCQyxNQUFJLEVBQUM7QUFDREQsTUFBRSxFQUFFLENBREg7QUFFREUsVUFBTSxFQUFFO0FBRlAsR0FGWTtBQU1qQkMsT0FBSyxFQUFDLENBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTk0sR0FOVztBQWNyQkMsa0JBQWdCLEVBQUUsS0FkRztBQWVyQkMsZ0JBQWMsRUFBRSxLQWZLO0FBZ0JyQkMsZ0JBQWMsRUFBRTtBQWhCSyxDQUFyQjtBQW1CTyxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxJQUFNQyxpQkFBaUIsR0FBRyxtQkFB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O0FBRUE7QUFDQTtBQUNBOztBQUVQOztBQUNELFNBQUtLLG1CQUFMO0FBQXlCO0FBQ3JCLGlDQUNPWSxLQURQO0FBR0g7O0FBRUQsU0FBS1gsb0JBQUw7QUFBMEI7QUFDdEIsWUFBSVIsTUFBSyxHQUFHLDZGQUFJbUIsS0FBSyxDQUFDbkIsS0FBYixDQUFUOztBQUNBQSxjQUFLLENBQUM2QixNQUFOLENBQWEsVUFBQUosS0FBSztBQUFBLGlCQUFJQSxLQUFLLENBQUM1QixFQUFOLEtBQWF1QixNQUFNLENBQUNOLElBQXhCO0FBQUEsU0FBbEI7O0FBQ0FPLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBcUJ0QixNQUFyQjtBQUNBLCtDQUNPbUIsS0FEUDtBQUVJbkIsZUFBSyxFQUFDQSxNQUFLLENBQUM2QixNQUFOLENBQWEsVUFBQUosS0FBSztBQUFBLG1CQUFJQSxLQUFLLENBQUM1QixFQUFOLEtBQWF1QixNQUFNLENBQUNOLElBQXhCO0FBQUEsV0FBbEI7QUFGVjtBQUlIOztBQUVELFNBQUtKLHVCQUFMO0FBQTZCO0FBQ3pCLGlDQUNPUyxLQURQO0FBR0g7O0FBQ0QsU0FBS1Isd0JBQUw7QUFBOEI7QUFBQTs7QUFDMUIsb0JBQUFVLE9BQU8sRUFBQ0MsR0FBUixrQkFBWSxjQUFaLHNHQUE4QkgsS0FBSyxDQUFDbkIsS0FBTixDQUFZOEIsTUFBWixDQUFtQixDQUFuQixDQUE5Qjs7QUFDQSwrQ0FDT1gsS0FEUDtBQUVJbkIsZUFBSyxFQUFFO0FBRlg7QUFJSDs7QUFDRDtBQUNJLGFBQU9tQixLQUFQO0FBaEZKO0FBa0ZDLENBbkZEOztBQXFGZUQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FydC44ODNhZTI4MzdhMzBiNmE2NDhjZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgaWQ6MSxcclxuICAgIFVzZXI6e1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIHVzZXJJZDogJ2lhbidcclxuICAgIH0sXHJcbiAgICBPcmRlcjpbXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgIGlkOiBudWxsLFxyXG4gICAgLy8gICAgIHRpdGxlOiBudWxsLFxyXG4gICAgLy8gICAgIHByaWNlOiBudWxsLFxyXG4gICAgLy8gICAgIHF1YW50aXR5OiAwXHJcbiAgICAvLyB9XHJcbl0sXHJcbkxvYWRPcmRlckxvYWRpbmc6IGZhbHNlLFxyXG5Mb2FkT3JkZXJ0RG9uZTogZmFsc2UsXHJcbkxvYWRPcmRlckVycm9yOiBudWxsLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NBUlRfUkVRVUVTVCA9ICdBRERfQ0FSVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9DQVJUX1NVQ0NFRVNTID0gJ0FERF9DQVJUX1NVQ0NFRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DQVJUX0ZBSUxVUkUgPSAnQUREX0NBUlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0NBUlRfUkVRVUVTVCA9ICdSRU1PVkVfQ0FSVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9DQVJUX1NVQ0NFRVNTID0gJ1JFTU9WRV9DQVJUX1NVQ0NFRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9DQVJUX0ZBSUxVUkUgPSAnUkVNT1ZFX0NBUlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0FMTF9DQVJUX1JFUVVFU1QgPSAnUkVNT1ZFX0FMTF9DQVJUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0FMTF9DQVJUX1NVQ0NFRVNTID0gJ1JFTU9WRV9BTExfQ0FSVF9TVUNDRUVTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQUxMX0NBUlRfRkFJTFVSRSA9ICdSRU1PVkVfQUxMX0NBUlRfRkFJTFVSRSc7XHJcblxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGFkZENhcnQgPSAoZGF0YSkgPT4ge1xyXG4vLyAgICAgcmV0dXJue1xyXG4vLyAgICAgICAgIHR5cGU6IEFERF9DQVJULFxyXG4vLyAgICAgICAgIGRhdGFcclxuLy8gICAgIH1cclxuLy8gfVxyXG5leHBvcnQgY29uc3QgYWRkQ2FydEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTogQUREX0NBUlRfUkVRVUVTVCxcclxuICAgICAgICBkYXRhXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVDYXJ0QWN0aW9uID0gKGRhdGEpID0+IHtcclxucmV0dXJue1xyXG50eXBlOiBSRU1PVkVfQ0FSVF9SRVFVRVNULFxyXG5kYXRhXHJcbn1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUFsbENhcnRBY3Rpb24gPSAoKSA9PiB7XHJcbnJldHVybntcclxudHlwZTogUkVNT1ZFX0FMTF9DQVJUX1JFUVVFU1RcclxufVxyXG59XHJcblxyXG4vLyBjb25zdCBkdW1teVByb2R1Y3QgPSB7XHJcbi8vICAgICBpZDogMixcclxuLy8gICAgIHRpdGxlOiBcIk1lbnMgQ2FzdWFsIFByZW1pdW0gU2xpbSBGaXQgVC1TaGlydHNcIixcclxuLy8gICAgIHByaWNlOiAyMi4zLFxyXG4vLyAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL2ltZy83MS0zSGpHTkRVTC5fQUNfU1k4NzkuX1NYLl9VWC5fU1kuX1VZXy5qcGdcIlxyXG4vLyB9XHJcbi8vIGNvbnN0IHJlbW92ZSA9IHVzZUNhbGxiYWNrKFxyXG4vLyAgICAgKGlkKSA9PiB7XHJcbi8vICAgICAgICAgc2V0T3JkZXJzKG9yZGVycyA9PiB7XHJcbi8vICAgICAgICAgICAgIHJldHVybiBvcmRlcnMuZmlsdGVyKG9yZGVyID0+IG9yZGVyLmlkICE9PSBpZClcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgfSxcclxuLy8gICAgIFtdLFxyXG4vLyApXHJcbi8vIGNvbnN0IHJlbW92ZUFsbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuLy8gICAgIHNldE9yZGVycyhbXSk7XHJcbi8vIH0sW10pO1xyXG5cclxuLy9PcmRlciA9IE9yZGVyLmZpbHRlcihvcmRlciA9PiBvcmRlci5pZCAhPT0gYWN0aW9uLmRhdGEuaWQpXHJcblxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbnN3aXRjaChhY3Rpb24udHlwZSl7XHJcbmNhc2UgQUREX0NBUlRfUkVRVUVTVDp7XHJcbiAgIFxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIExvYWRPcmRlckxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgTG9hZE9yZGVydERvbmU6IGZhbHNlLFxyXG4gICAgfVxyXG59XHJcbmNhc2UgQUREX0NBUlRfU1VDQ0VFU1M6e1xyXG4gICAgY29uc29sZS5sb2coJ+yymOydjCcsYWN0aW9uLmRhdGEpO1xyXG4gICAgLy8gfVxyXG4gICAgY29uc3QgY2hlY2sgPSBPcmRlci5maW5kKG9yZGVyID0+b3JkZXIuaWQgPT09IGFjdGlvbi5kYXRhLmlkKTtcclxuICAgIGNvbnNvbGUubG9nKCdjaGVjaycsY2hlY2spO1xyXG4gICAgaWYoY2hlY2sgPT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+yymOydjCcpO1xyXG4gICAgICAgICAgICAvLyBhY3Rpb24uZGF0YS5xdWFudGl0eSA9IDE7XHJcbiAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgT3JkZXI6IFthY3Rpb24uZGF0YSwgLi4uc3RhdGUuT3JkZXJdLFxyXG4gICAgICAgICAgICBMb2FkT3JkZXJMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgTG9hZE9yZGVydERvbmU6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBPcmRlci5tYXAoKG9yZGVyKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn7KSR67O1Jyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdxdWFudGl0eScsIHF1YW50aXR5KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ29yZGVyLnF1YW50aXR5KysnLCBvcmRlci5xdWFudGl0eSsrKTtcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgIE9yZGVyOiBbe3F1YW50aXR5OiBvcmRlci5xdWFudGl0eSsrfSwgLi4uc3RhdGUuT3JkZXIsXSxcclxuICAgICAgICAgICAgICBMb2FkT3JkZXJMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICBMb2FkT3JkZXJ0RG9uZTogdHJ1ZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZygn7KSR67O1JylcclxuICAgICAgICAvLyBsZXQgY29weSA9IFsuLi5zdGF0ZS5PcmRlcl1cclxuICAgICAgICAvLyBjb3B5W2ZvdW5kXS5xdWFudGl0eSs9IGFjdGlvbi5kYXRhLnF1YW50aXR5XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY29weSlcclxuICAgICAgICAvLyByZXR1cm57XHJcbiAgICAgICAgLy8gICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIC8vICAgICAuLi5zdGF0ZS5PcmRlcltmb3VuZF0ucXVhbnRpdHkrKyxcclxuICAgICAgICAvLyAgICAgLy8gT3JkZXI6IFsuLi5zdGF0ZS5PcmRlcl0sXHJcbiAgICAgICAgLy8gICAgIE9yZGVyOiBbLi4uc3RhdGUuT3JkZXJdLFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICBMb2FkT3JkZXJMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAvLyAgICAgTG9hZE9yZGVydERvbmU6IHRydWVcclxuICAgICAgICAvLyB9XHJcbiAgXHJcbn1cclxuY2FzZSBSRU1PVkVfQ0FSVF9SRVFVRVNUOntcclxuICAgIHJldHVybntcclxuICAgICAgICAuLi5zdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5jYXNlIFJFTU9WRV9DQVJUX1NVQ0NFRVNTOntcclxuICAgIGxldCBPcmRlciA9IFsuLi5zdGF0ZS5PcmRlcl07XHJcbiAgICBPcmRlci5maWx0ZXIob3JkZXIgPT4gb3JkZXIuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKCdyZW1vdmUnLE9yZGVyKTtcclxuICAgIHJldHVybntcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBPcmRlcjpPcmRlci5maWx0ZXIob3JkZXIgPT4gb3JkZXIuaWQgIT09IGFjdGlvbi5kYXRhKVxyXG4gICAgfVxyXG59XHJcblxyXG5jYXNlIFJFTU9WRV9BTExfQ0FSVF9SRVFVRVNUOntcclxuICAgIHJldHVybntcclxuICAgICAgICAuLi5zdGF0ZVxyXG4gICAgfVxyXG59XHJcbmNhc2UgUkVNT1ZFX0FMTF9DQVJUX1NVQ0NFRVNTOntcclxuICAgIGNvbnNvbGUubG9nKCdyZW1vdmVBTExBTEwnLC4uLnN0YXRlLk9yZGVyLnNwbGljZSgwKSk7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgT3JkZXI6IFtdLFxyXG4gICAgfVxyXG59XHJcbmRlZmF1bHQ6XHJcbiAgICByZXR1cm4gc3RhdGU7XHJcbn1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==