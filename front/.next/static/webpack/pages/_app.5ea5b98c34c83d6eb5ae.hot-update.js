webpackHotUpdate_N_E("pages/_app",{

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
        console.log(action.data); // }

        var Order = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.Order);

        var check = Order.find(function (order) {
          return order.id === action.data.id;
        });
        console.log('found', found);

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
            var count = order.quantity++;
            return _objectSpread(_objectSpread({}, state), {}, {
              Order: [{
                quantity: count
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvY2FydC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJpZCIsIlVzZXIiLCJ1c2VySWQiLCJPcmRlciIsIkxvYWRPcmRlckxvYWRpbmciLCJMb2FkT3JkZXJ0RG9uZSIsIkxvYWRPcmRlckVycm9yIiwiQUREX0NBUlRfUkVRVUVTVCIsIkFERF9DQVJUX1NVQ0NFRVNTIiwiQUREX0NBUlRfRkFJTFVSRSIsIlJFTU9WRV9DQVJUX1JFUVVFU1QiLCJSRU1PVkVfQ0FSVF9TVUNDRUVTUyIsIlJFTU9WRV9DQVJUX0ZBSUxVUkUiLCJSRU1PVkVfQUxMX0NBUlRfUkVRVUVTVCIsIlJFTU9WRV9BTExfQ0FSVF9TVUNDRUVTUyIsIlJFTU9WRV9BTExfQ0FSVF9GQUlMVVJFIiwiYWRkQ2FydEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwicmVtb3ZlQ2FydEFjdGlvbiIsInJlbW92ZUFsbENhcnRBY3Rpb24iLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwiY2hlY2siLCJmaW5kIiwib3JkZXIiLCJmb3VuZCIsInVuZGVmaW5lZCIsIm1hcCIsImNvdW50IiwicXVhbnRpdHkiLCJmaWx0ZXIiLCJzcGxpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsWUFBWSxHQUFHO0FBQ2pCQyxJQUFFLEVBQUMsQ0FEYztBQUVqQkMsTUFBSSxFQUFDO0FBQ0RELE1BQUUsRUFBRSxDQURIO0FBRURFLFVBQU0sRUFBRTtBQUZQLEdBRlk7QUFNakJDLE9BQUssRUFBQyxDQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5NLEdBTlc7QUFjckJDLGtCQUFnQixFQUFFLEtBZEc7QUFlckJDLGdCQUFjLEVBQUUsS0FmSztBQWdCckJDLGdCQUFjLEVBQUU7QUFoQkssQ0FBckI7QUFtQk8sSUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsSUFBTUMs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QUFDRCxTQUFLSyxtQkFBTDtBQUF5QjtBQUNyQixpQ0FDT1ksS0FEUDtBQUdIOztBQUVELFNBQUtYLG9CQUFMO0FBQTBCO0FBQ3RCLFlBQUlSLE1BQUssR0FBRyw2RkFBSW1CLEtBQUssQ0FBQ25CLEtBQWIsQ0FBVDs7QUFDQUEsY0FBSyxDQUFDK0IsTUFBTixDQUFhLFVBQUFOLEtBQUs7QUFBQSxpQkFBSUEsS0FBSyxDQUFDNUIsRUFBTixLQUFhdUIsTUFBTSxDQUFDTixJQUF4QjtBQUFBLFNBQWxCOztBQUNBTyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXFCdEIsTUFBckI7QUFDQSwrQ0FDT21CLEtBRFA7QUFFSW5CLGVBQUssRUFBQ0EsTUFBSyxDQUFDK0IsTUFBTixDQUFhLFVBQUFOLEtBQUs7QUFBQSxtQkFBSUEsS0FBSyxDQUFDNUIsRUFBTixLQUFhdUIsTUFBTSxDQUFDTixJQUF4QjtBQUFBLFdBQWxCO0FBRlY7QUFJSDs7QUFFRCxTQUFLSix1QkFBTDtBQUE2QjtBQUN6QixpQ0FDT1MsS0FEUDtBQUdIOztBQUNELFNBQUtSLHdCQUFMO0FBQThCO0FBQUE7O0FBQzFCLG9CQUFBVSxPQUFPLEVBQUNDLEdBQVIsa0JBQVksY0FBWixzR0FBOEJILEtBQUssQ0FBQ25CLEtBQU4sQ0FBWWdDLE1BQVosQ0FBbUIsQ0FBbkIsQ0FBOUI7O0FBQ0EsK0NBQ09iLEtBRFA7QUFFSW5CLGVBQUssRUFBRTtBQUZYO0FBSUg7O0FBQ0Q7QUFDSSxhQUFPbUIsS0FBUDtBQWhGSjtBQWtGQyxDQW5GRDs7QUFxRmVELHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNWVhNWI5OGMzNGM4M2Q2ZWI1YWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGlkOjEsXHJcbiAgICBVc2VyOntcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICB1c2VySWQ6ICdpYW4nXHJcbiAgICB9LFxyXG4gICAgT3JkZXI6W1xyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICBpZDogbnVsbCxcclxuICAgIC8vICAgICB0aXRsZTogbnVsbCxcclxuICAgIC8vICAgICBwcmljZTogbnVsbCxcclxuICAgIC8vICAgICBxdWFudGl0eTogMFxyXG4gICAgLy8gfVxyXG5dLFxyXG5Mb2FkT3JkZXJMb2FkaW5nOiBmYWxzZSxcclxuTG9hZE9yZGVydERvbmU6IGZhbHNlLFxyXG5Mb2FkT3JkZXJFcnJvcjogbnVsbCxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DQVJUX1JFUVVFU1QgPSAnQUREX0NBUlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ0FSVF9TVUNDRUVTUyA9ICdBRERfQ0FSVF9TVUNDRUVTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ0FSVF9GQUlMVVJFID0gJ0FERF9DQVJUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9DQVJUX1JFUVVFU1QgPSAnUkVNT1ZFX0NBUlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQ0FSVF9TVUNDRUVTUyA9ICdSRU1PVkVfQ0FSVF9TVUNDRUVTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQ0FSVF9GQUlMVVJFID0gJ1JFTU9WRV9DQVJUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9BTExfQ0FSVF9SRVFVRVNUID0gJ1JFTU9WRV9BTExfQ0FSVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9BTExfQ0FSVF9TVUNDRUVTUyA9ICdSRU1PVkVfQUxMX0NBUlRfU1VDQ0VFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0FMTF9DQVJUX0ZBSUxVUkUgPSAnUkVNT1ZFX0FMTF9DQVJUX0ZBSUxVUkUnO1xyXG5cclxuXHJcbi8vIGV4cG9ydCBjb25zdCBhZGRDYXJ0ID0gKGRhdGEpID0+IHtcclxuLy8gICAgIHJldHVybntcclxuLy8gICAgICAgICB0eXBlOiBBRERfQ0FSVCxcclxuLy8gICAgICAgICBkYXRhXHJcbi8vICAgICB9XHJcbi8vIH1cclxuZXhwb3J0IGNvbnN0IGFkZENhcnRBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG5yZXR1cm57XHJcbnR5cGU6IEFERF9DQVJUX1JFUVVFU1QsXHJcbmRhdGFcclxufVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlQ2FydEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbnJldHVybntcclxudHlwZTogUkVNT1ZFX0NBUlRfUkVRVUVTVCxcclxuZGF0YVxyXG59XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVBbGxDYXJ0QWN0aW9uID0gKCkgPT4ge1xyXG5yZXR1cm57XHJcbnR5cGU6IFJFTU9WRV9BTExfQ0FSVF9SRVFVRVNUXHJcbn1cclxufVxyXG5cclxuLy8gY29uc3QgZHVtbXlQcm9kdWN0ID0ge1xyXG4vLyAgICAgaWQ6IDIsXHJcbi8vICAgICB0aXRsZTogXCJNZW5zIENhc3VhbCBQcmVtaXVtIFNsaW0gRml0IFQtU2hpcnRzXCIsXHJcbi8vICAgICBwcmljZTogMjIuMyxcclxuLy8gICAgIGltYWdlOiBcImh0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS9pbWcvNzEtM0hqR05EVUwuX0FDX1NZODc5Ll9TWC5fVVguX1NZLl9VWV8uanBnXCJcclxuLy8gfVxyXG4vLyBjb25zdCByZW1vdmUgPSB1c2VDYWxsYmFjayhcclxuLy8gICAgIChpZCkgPT4ge1xyXG4vLyAgICAgICAgIHNldE9yZGVycyhvcmRlcnMgPT4ge1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gb3JkZXJzLmZpbHRlcihvcmRlciA9PiBvcmRlci5pZCAhPT0gaWQpXHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgIH0sXHJcbi8vICAgICBbXSxcclxuLy8gKVxyXG4vLyBjb25zdCByZW1vdmVBbGwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbi8vICAgICBzZXRPcmRlcnMoW10pO1xyXG4vLyB9LFtdKTtcclxuXHJcbi8vT3JkZXIgPSBPcmRlci5maWx0ZXIob3JkZXIgPT4gb3JkZXIuaWQgIT09IGFjdGlvbi5kYXRhLmlkKVxyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG5zd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG5jYXNlIEFERF9DQVJUX1JFUVVFU1Q6e1xyXG4gICBcclxuICAgIHJldHVybntcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBMb2FkT3JkZXJMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIExvYWRPcmRlcnREb25lOiBmYWxzZSxcclxuICAgIH1cclxufVxyXG5jYXNlIEFERF9DQVJUX1NVQ0NFRVNTOntcclxuICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcclxuICAgIC8vIH1cclxuICAgIGxldCBPcmRlciA9IFsuLi5zdGF0ZS5PcmRlcl07XHJcbiAgICBjb25zdCBjaGVjayA9IE9yZGVyLmZpbmQob3JkZXIgPT5vcmRlci5pZCA9PT0gYWN0aW9uLmRhdGEuaWQpO1xyXG4gICAgY29uc29sZS5sb2coJ2ZvdW5kJyxmb3VuZCk7XHJcbiAgICBpZihjaGVjayA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICBjb25zb2xlLmxvZygn7LKY7J2MJyk7XHJcbiAgICAgICAgICAgIC8vIGFjdGlvbi5kYXRhLnF1YW50aXR5ID0gMTtcclxuICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBPcmRlcjogW2FjdGlvbi5kYXRhLCAuLi5zdGF0ZS5PcmRlcl0sXHJcbiAgICAgICAgICAgIExvYWRPcmRlckxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBMb2FkT3JkZXJ0RG9uZTogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICAgIE9yZGVyLm1hcCgob3JkZXIpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfspJHrs7UnKTtcclxuICAgICAgICAgICAgbGV0IGNvdW50ID0gb3JkZXIucXVhbnRpdHkrKztcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgIE9yZGVyOiBbe3F1YW50aXR5OiBjb3VudH0sIC4uLnN0YXRlLk9yZGVyLF0sXHJcbiAgICAgICAgICAgICAgTG9hZE9yZGVyTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgTG9hZE9yZGVydERvbmU6IHRydWVcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ+ykkeuztScpXHJcbiAgICAgICAgLy8gbGV0IGNvcHkgPSBbLi4uc3RhdGUuT3JkZXJdXHJcbiAgICAgICAgLy8gY29weVtmb3VuZF0ucXVhbnRpdHkrPSBhY3Rpb24uZGF0YS5xdWFudGl0eVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNvcHkpXHJcbiAgICAgICAgLy8gcmV0dXJue1xyXG4gICAgICAgIC8vICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAvLyAgICAgLi4uc3RhdGUuT3JkZXJbZm91bmRdLnF1YW50aXR5KyssXHJcbiAgICAgICAgLy8gICAgIC8vIE9yZGVyOiBbLi4uc3RhdGUuT3JkZXJdLFxyXG4gICAgICAgIC8vICAgICBPcmRlcjogWy4uLnN0YXRlLk9yZGVyXSxcclxuICAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgTG9hZE9yZGVyTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgLy8gICAgIExvYWRPcmRlcnREb25lOiB0cnVlXHJcbiAgICAgICAgLy8gfVxyXG4gIFxyXG59XHJcbmNhc2UgUkVNT1ZFX0NBUlRfUkVRVUVTVDp7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgLi4uc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuY2FzZSBSRU1PVkVfQ0FSVF9TVUNDRUVTUzp7XHJcbiAgICBsZXQgT3JkZXIgPSBbLi4uc3RhdGUuT3JkZXJdO1xyXG4gICAgT3JkZXIuZmlsdGVyKG9yZGVyID0+IG9yZGVyLmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZygncmVtb3ZlJyxPcmRlcik7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgT3JkZXI6T3JkZXIuZmlsdGVyKG9yZGVyID0+IG9yZGVyLmlkICE9PSBhY3Rpb24uZGF0YSlcclxuICAgIH1cclxufVxyXG5cclxuY2FzZSBSRU1PVkVfQUxMX0NBUlRfUkVRVUVTVDp7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgLi4uc3RhdGVcclxuICAgIH1cclxufVxyXG5jYXNlIFJFTU9WRV9BTExfQ0FSVF9TVUNDRUVTUzp7XHJcbiAgICBjb25zb2xlLmxvZygncmVtb3ZlQUxMQUxMJywuLi5zdGF0ZS5PcmRlci5zcGxpY2UoMCkpO1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIE9yZGVyOiBbXSxcclxuICAgIH1cclxufVxyXG5kZWZhdWx0OlxyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG59XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=