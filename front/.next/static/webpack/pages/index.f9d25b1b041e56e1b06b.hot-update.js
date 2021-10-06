webpackHotUpdate_N_E("pages/index",{

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
        // console.log('처음',action.data);
        // }
        var checkList = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.Order);

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

            if (check.id === order.id) {
              order.quantity++;
              return _objectSpread(_objectSpread({}, state), {}, {
                Order: Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.Order),
                LoadOrderLoading: false,
                LoadOrdertDone: true
              });
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvY2FydC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJpZCIsIlVzZXIiLCJ1c2VySWQiLCJPcmRlciIsIkxvYWRPcmRlckxvYWRpbmciLCJMb2FkT3JkZXJ0RG9uZSIsIkxvYWRPcmRlckVycm9yIiwiQUREX0NBUlRfUkVRVUVTVCIsIkFERF9DQVJUX1NVQ0NFRVNTIiwiQUREX0NBUlRfRkFJTFVSRSIsIlJFTU9WRV9DQVJUX1JFUVVFU1QiLCJSRU1PVkVfQ0FSVF9TVUNDRUVTUyIsIlJFTU9WRV9DQVJUX0ZBSUxVUkUiLCJSRU1PVkVfQUxMX0NBUlRfUkVRVUVTVCIsIlJFTU9WRV9BTExfQ0FSVF9TVUNDRUVTUyIsIlJFTU9WRV9BTExfQ0FSVF9GQUlMVVJFIiwiYWRkQ2FydEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwicmVtb3ZlQ2FydEFjdGlvbiIsInJlbW92ZUFsbENhcnRBY3Rpb24iLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJjaGVja0xpc3QiLCJjaGVjayIsImZpbmQiLCJvcmRlciIsImNvbnNvbGUiLCJsb2ciLCJ1bmRlZmluZWQiLCJtYXAiLCJxdWFudGl0eSIsImZpbHRlciIsInNwbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxZQUFZLEdBQUc7QUFDakJDLElBQUUsRUFBQyxDQURjO0FBRWpCQyxNQUFJLEVBQUM7QUFDREQsTUFBRSxFQUFFLENBREg7QUFFREUsVUFBTSxFQUFFO0FBRlAsR0FGWTtBQU1qQkMsT0FBSyxFQUFDLENBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTk0sR0FOVztBQWNyQkMsa0JBQWdCLEVBQUUsS0FkRztBQWVyQkMsZ0JBQWMsRUFBRSxLQWZLO0FBZ0JyQkMsZ0JBQWMsRUFBRTtBQWhCSyxDQUFyQjtBQW1CTyxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxJQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFFQSxJQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxJQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxJQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFFQSxJQUFNQyx1QkFBdUIsR0FBRyx5QkFBaEM7QUFDQSxJQUFNQyx3QkFBd0IsR0FBRywwQkFBakM7QUFDQSxJQUFNQyx1QkFBdUIsR0FBRyx5QkFBaEMsQyxDQUdQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLElBQUQsRUFBVTtBQUNuQyxTQUFNO0FBQ0ZDLFFBQUksRUFBRVgsZ0JBREo7QUFFRlUsUUFBSSxFQUFKQTtBQUZFLEdBQU47QUFJSCxDQUxNO0FBT0EsSUFBTUUsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDRixJQUFELEVBQVU7QUFDMUMsU0FBTTtBQUNOQyxRQUFJLEVBQUVSLG1CQURBO0FBRU5PLFFBQUksRUFBSkE7QUFGTSxHQUFOO0FBSUMsQ0FMTTtBQU9BLElBQU1HLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUN6QyxTQUFNO0FBQ05GLFFBQUksRUFBRUw7QUFEQSxHQUFOO0FBR0MsQ0FKTSxDLENBTVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUdBLElBQU1RLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQWtDO0FBQUEsTUFBakNDLEtBQWlDLHVFQUF6QnZCLFlBQXlCO0FBQUEsTUFBWHdCLE1BQVc7O0FBQ2xELFVBQU9BLE1BQU0sQ0FBQ0wsSUFBZDtBQUNBLFNBQUtYLGdCQUFMO0FBQXNCO0FBRWxCLCtDQUNPZSxLQURQO0FBRUlsQiwwQkFBZ0IsRUFBRSxJQUZ0QjtBQUdJQyx3QkFBYyxFQUFFO0FBSHBCO0FBS0g7O0FBQ0QsU0FBS0csaUJBQUw7QUFBdUI7QUFDbkI7QUFDQTtBQUNBLFlBQUlnQixTQUFTLEdBQUcsNkZBQUlGLEtBQUssQ0FBQ25CLEtBQWIsQ0FBYjs7QUFDQSxZQUFNc0IsS0FBSyxHQUFHdEIsS0FBSyxDQUFDdUIsSUFBTixDQUFXLFVBQUFDLEtBQUs7QUFBQSxpQkFBR0EsS0FBSyxDQUFDM0IsRUFBTixLQUFhdUIsTUFBTSxDQUFDTixJQUFQLENBQVlqQixFQUE1QjtBQUFBLFNBQWhCLENBQWQ7QUFDQTRCLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBb0JKLEtBQXBCOztBQUNBLFlBQUdBLEtBQUssS0FBS0ssU0FBYixFQUF1QjtBQUNuQkYsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVosRUFEbUIsQ0FFZjs7QUFDSixpREFDT1AsS0FEUDtBQUVJbkIsaUJBQUssR0FBR29CLE1BQU0sQ0FBQ04sSUFBVixzR0FBbUJLLEtBQUssQ0FBQ25CLEtBQXpCLEVBRlQ7QUFHSUMsNEJBQWdCLEVBQUUsS0FIdEI7QUFJSUMsMEJBQWMsRUFBRTtBQUpwQjtBQU1ILFNBVEQsTUFTSztBQUNERixlQUFLLENBQUM0QixHQUFOLENBQVUsVUFBQ0osS0FBRCxFQUFTO0FBQ2ZDLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaOztBQUNBLGdCQUFHSixLQUFLLENBQUN6QixFQUFOLEtBQWEyQixLQUFLLENBQUMzQixFQUF0QixFQUF5QjtBQUNyQjJCLG1CQUFLLENBQUNLLFFBQU47QUFDQSxxREFDT1YsS0FEUDtBQUVJbkIscUJBQUssRUFBRSw2RkFBSW1CLEtBQUssQ0FBQ25CLEtBQVosQ0FGVDtBQUdJQyxnQ0FBZ0IsRUFBRSxLQUh0QjtBQUlJQyw4QkFBYyxFQUFFO0FBSnBCO0FBTUg7QUFDRixXQVhIO0FBWUQsU0E1QmdCLENBNkJmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFUDs7QUFDRCxTQUFLSyxtQkFBTDtBQUF5QjtBQUNyQixpQ0FDT1ksS0FEUDtBQUdIOztBQUVELFNBQUtYLG9CQUFMO0FBQTBCO0FBQ3RCLFlBQUlSLE1BQUssR0FBRyw2RkFBSW1CLEtBQUssQ0FBQ25CLEtBQWIsQ0FBVDs7QUFDQUEsY0FBSyxDQUFDOEIsTUFBTixDQUFhLFVBQUFOLEtBQUs7QUFBQSxpQkFBSUEsS0FBSyxDQUFDM0IsRUFBTixLQUFhdUIsTUFBTSxDQUFDTixJQUF4QjtBQUFBLFNBQWxCOztBQUNBVyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXFCMUIsTUFBckI7QUFDQSwrQ0FDT21CLEtBRFA7QUFFSW5CLGVBQUssRUFBQ0EsTUFBSyxDQUFDOEIsTUFBTixDQUFhLFVBQUFOLEtBQUs7QUFBQSxtQkFBSUEsS0FBSyxDQUFDM0IsRUFBTixLQUFhdUIsTUFBTSxDQUFDTixJQUF4QjtBQUFBLFdBQWxCO0FBRlY7QUFJSDs7QUFFRCxTQUFLSix1QkFBTDtBQUE2QjtBQUN6QixpQ0FDT1MsS0FEUDtBQUdIOztBQUNELFNBQUtSLHdCQUFMO0FBQThCO0FBQUE7O0FBQzFCLG9CQUFBYyxPQUFPLEVBQUNDLEdBQVIsa0JBQVksY0FBWixzR0FBOEJQLEtBQUssQ0FBQ25CLEtBQU4sQ0FBWStCLE1BQVosQ0FBbUIsQ0FBbkIsQ0FBOUI7O0FBQ0EsK0NBQ09aLEtBRFA7QUFFSW5CLGVBQUssRUFBRTtBQUZYO0FBSUg7O0FBQ0Q7QUFDSSxhQUFPbUIsS0FBUDtBQWxGSjtBQW9GQyxDQXJGRDs7QUF1RmVELHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmY5ZDI1YjFiMDQxZTU2ZTFiMDZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBpZDoxLFxyXG4gICAgVXNlcjp7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgdXNlcklkOiAnaWFuJ1xyXG4gICAgfSxcclxuICAgIE9yZGVyOltcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgaWQ6IG51bGwsXHJcbiAgICAvLyAgICAgdGl0bGU6IG51bGwsXHJcbiAgICAvLyAgICAgcHJpY2U6IG51bGwsXHJcbiAgICAvLyAgICAgcXVhbnRpdHk6IDBcclxuICAgIC8vIH1cclxuXSxcclxuTG9hZE9yZGVyTG9hZGluZzogZmFsc2UsXHJcbkxvYWRPcmRlcnREb25lOiBmYWxzZSxcclxuTG9hZE9yZGVyRXJyb3I6IG51bGwsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ0FSVF9SRVFVRVNUID0gJ0FERF9DQVJUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NBUlRfU1VDQ0VFU1MgPSAnQUREX0NBUlRfU1VDQ0VFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NBUlRfRkFJTFVSRSA9ICdBRERfQ0FSVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQ0FSVF9SRVFVRVNUID0gJ1JFTU9WRV9DQVJUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0NBUlRfU1VDQ0VFU1MgPSAnUkVNT1ZFX0NBUlRfU1VDQ0VFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0NBUlRfRkFJTFVSRSA9ICdSRU1PVkVfQ0FSVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQUxMX0NBUlRfUkVRVUVTVCA9ICdSRU1PVkVfQUxMX0NBUlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQUxMX0NBUlRfU1VDQ0VFU1MgPSAnUkVNT1ZFX0FMTF9DQVJUX1NVQ0NFRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9BTExfQ0FSVF9GQUlMVVJFID0gJ1JFTU9WRV9BTExfQ0FSVF9GQUlMVVJFJztcclxuXHJcblxyXG4vLyBleHBvcnQgY29uc3QgYWRkQ2FydCA9IChkYXRhKSA9PiB7XHJcbi8vICAgICByZXR1cm57XHJcbi8vICAgICAgICAgdHlwZTogQUREX0NBUlQsXHJcbi8vICAgICAgICAgZGF0YVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcbmV4cG9ydCBjb25zdCBhZGRDYXJ0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOiBBRERfQ0FSVF9SRVFVRVNULFxyXG4gICAgICAgIGRhdGFcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNhcnRBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG5yZXR1cm57XHJcbnR5cGU6IFJFTU9WRV9DQVJUX1JFUVVFU1QsXHJcbmRhdGFcclxufVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlQWxsQ2FydEFjdGlvbiA9ICgpID0+IHtcclxucmV0dXJue1xyXG50eXBlOiBSRU1PVkVfQUxMX0NBUlRfUkVRVUVTVFxyXG59XHJcbn1cclxuXHJcbi8vIGNvbnN0IGR1bW15UHJvZHVjdCA9IHtcclxuLy8gICAgIGlkOiAyLFxyXG4vLyAgICAgdGl0bGU6IFwiTWVucyBDYXN1YWwgUHJlbWl1bSBTbGltIEZpdCBULVNoaXJ0c1wiLFxyXG4vLyAgICAgcHJpY2U6IDIyLjMsXHJcbi8vICAgICBpbWFnZTogXCJodHRwczovL2Zha2VzdG9yZWFwaS5jb20vaW1nLzcxLTNIakdORFVMLl9BQ19TWTg3OS5fU1guX1VYLl9TWS5fVVlfLmpwZ1wiXHJcbi8vIH1cclxuLy8gY29uc3QgcmVtb3ZlID0gdXNlQ2FsbGJhY2soXHJcbi8vICAgICAoaWQpID0+IHtcclxuLy8gICAgICAgICBzZXRPcmRlcnMob3JkZXJzID0+IHtcclxuLy8gICAgICAgICAgICAgcmV0dXJuIG9yZGVycy5maWx0ZXIob3JkZXIgPT4gb3JkZXIuaWQgIT09IGlkKVxyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICB9LFxyXG4vLyAgICAgW10sXHJcbi8vIClcclxuLy8gY29uc3QgcmVtb3ZlQWxsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4vLyAgICAgc2V0T3JkZXJzKFtdKTtcclxuLy8gfSxbXSk7XHJcblxyXG4vL09yZGVyID0gT3JkZXIuZmlsdGVyKG9yZGVyID0+IG9yZGVyLmlkICE9PSBhY3Rpb24uZGF0YS5pZClcclxuXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuY2FzZSBBRERfQ0FSVF9SRVFVRVNUOntcclxuICAgXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgTG9hZE9yZGVyTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICBMb2FkT3JkZXJ0RG9uZTogZmFsc2UsXHJcbiAgICB9XHJcbn1cclxuY2FzZSBBRERfQ0FSVF9TVUNDRUVTUzp7XHJcbiAgICAvLyBjb25zb2xlLmxvZygn7LKY7J2MJyxhY3Rpb24uZGF0YSk7XHJcbiAgICAvLyB9XHJcbiAgICBsZXQgY2hlY2tMaXN0ID0gWy4uLnN0YXRlLk9yZGVyXVxyXG4gICAgY29uc3QgY2hlY2sgPSBPcmRlci5maW5kKG9yZGVyID0+b3JkZXIuaWQgPT09IGFjdGlvbi5kYXRhLmlkKTtcclxuICAgIGNvbnNvbGUubG9nKCdjaGVjaycsY2hlY2spO1xyXG4gICAgaWYoY2hlY2sgPT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+yymOydjCcpO1xyXG4gICAgICAgICAgICAvLyBhY3Rpb24uZGF0YS5xdWFudGl0eSA9IDE7XHJcbiAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgT3JkZXI6IFthY3Rpb24uZGF0YSwgLi4uc3RhdGUuT3JkZXJdLFxyXG4gICAgICAgICAgICBMb2FkT3JkZXJMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgTG9hZE9yZGVydERvbmU6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBPcmRlci5tYXAoKG9yZGVyKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn7KSR67O1Jyk7XHJcbiAgICAgICAgICAgIGlmKGNoZWNrLmlkID09PSBvcmRlci5pZCl7XHJcbiAgICAgICAgICAgICAgICBvcmRlci5xdWFudGl0eSsrO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIE9yZGVyOiBbLi4uc3RhdGUuT3JkZXJdLFxyXG4gICAgICAgICAgICAgICAgICAgIExvYWRPcmRlckxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIExvYWRPcmRlcnREb25lOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ+ykkeuztScpXHJcbiAgICAgICAgLy8gbGV0IGNvcHkgPSBbLi4uc3RhdGUuT3JkZXJdXHJcbiAgICAgICAgLy8gY29weVtmb3VuZF0ucXVhbnRpdHkrPSBhY3Rpb24uZGF0YS5xdWFudGl0eVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNvcHkpXHJcbiAgICAgICAgLy8gcmV0dXJue1xyXG4gICAgICAgIC8vICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAvLyAgICAgLi4uc3RhdGUuT3JkZXJbZm91bmRdLnF1YW50aXR5KyssXHJcbiAgICAgICAgLy8gICAgIC8vIE9yZGVyOiBbLi4uc3RhdGUuT3JkZXJdLFxyXG4gICAgICAgIC8vICAgICBPcmRlcjogWy4uLnN0YXRlLk9yZGVyXSxcclxuICAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgTG9hZE9yZGVyTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgLy8gICAgIExvYWRPcmRlcnREb25lOiB0cnVlXHJcbiAgICAgICAgLy8gfVxyXG4gIFxyXG59XHJcbmNhc2UgUkVNT1ZFX0NBUlRfUkVRVUVTVDp7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgLi4uc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuY2FzZSBSRU1PVkVfQ0FSVF9TVUNDRUVTUzp7XHJcbiAgICBsZXQgT3JkZXIgPSBbLi4uc3RhdGUuT3JkZXJdO1xyXG4gICAgT3JkZXIuZmlsdGVyKG9yZGVyID0+IG9yZGVyLmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZygncmVtb3ZlJyxPcmRlcik7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgT3JkZXI6T3JkZXIuZmlsdGVyKG9yZGVyID0+IG9yZGVyLmlkICE9PSBhY3Rpb24uZGF0YSlcclxuICAgIH1cclxufVxyXG5cclxuY2FzZSBSRU1PVkVfQUxMX0NBUlRfUkVRVUVTVDp7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgLi4uc3RhdGVcclxuICAgIH1cclxufVxyXG5jYXNlIFJFTU9WRV9BTExfQ0FSVF9TVUNDRUVTUzp7XHJcbiAgICBjb25zb2xlLmxvZygncmVtb3ZlQUxMQUxMJywuLi5zdGF0ZS5PcmRlci5zcGxpY2UoMCkpO1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIE9yZGVyOiBbXSxcclxuICAgIH1cclxufVxyXG5kZWZhdWx0OlxyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG59XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=