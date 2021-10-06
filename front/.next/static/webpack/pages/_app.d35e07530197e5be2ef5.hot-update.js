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
        // console.log('처음',action.data);
        // }
        var checkList = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.Order);

        var check = checkList.find(function (order) {
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
          console.log('중복');
          Order.map(function (order) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvY2FydC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJpZCIsIlVzZXIiLCJ1c2VySWQiLCJPcmRlciIsIkxvYWRPcmRlckxvYWRpbmciLCJMb2FkT3JkZXJ0RG9uZSIsIkxvYWRPcmRlckVycm9yIiwiQUREX0NBUlRfUkVRVUVTVCIsIkFERF9DQVJUX1NVQ0NFRVNTIiwiQUREX0NBUlRfRkFJTFVSRSIsIlJFTU9WRV9DQVJUX1JFUVVFU1QiLCJSRU1PVkVfQ0FSVF9TVUNDRUVTUyIsIlJFTU9WRV9DQVJUX0ZBSUxVUkUiLCJSRU1PVkVfQUxMX0NBUlRfUkVRVUVTVCIsIlJFTU9WRV9BTExfQ0FSVF9TVUNDRUVTUyIsIlJFTU9WRV9BTExfQ0FSVF9GQUlMVVJFIiwiYWRkQ2FydEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwicmVtb3ZlQ2FydEFjdGlvbiIsInJlbW92ZUFsbENhcnRBY3Rpb24iLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJjaGVja0xpc3QiLCJjaGVjayIsImZpbmQiLCJvcmRlciIsImNvbnNvbGUiLCJsb2ciLCJ1bmRlZmluZWQiLCJtYXAiLCJxdWFudGl0eSIsImZpbHRlciIsInNwbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxZQUFZLEdBQUc7QUFDakJDLElBQUUsRUFBQyxDQURjO0FBRWpCQyxNQUFJLEVBQUM7QUFDREQsTUFBRSxFQUFFLENBREg7QUFFREUsVUFBTSxFQUFFO0FBRlAsR0FGWTtBQU1qQkMsT0FBSyxFQUFDLENBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTk0sR0FOVztBQWNyQkMsa0JBQWdCLEVBQUUsS0FkRztBQWVyQkMsZ0JBQWMsRUFBRSxLQWZLO0FBZ0JyQkMsZ0JBQWMsRUFBRTtBQWhCSyxDQUFyQjtBQW1CTyxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxJQUFNQyxpQkFB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QURQO0FBR0g7O0FBRUQsU0FBS1gsb0JBQUw7QUFBMEI7QUFDdEIsWUFBSVIsTUFBSyxHQUFHLDZGQUFJbUIsS0FBSyxDQUFDbkIsS0FBYixDQUFUOztBQUNBQSxjQUFLLENBQUM4QixNQUFOLENBQWEsVUFBQU4sS0FBSztBQUFBLGlCQUFJQSxLQUFLLENBQUMzQixFQUFOLEtBQWF1QixNQUFNLENBQUNOLElBQXhCO0FBQUEsU0FBbEI7O0FBQ0FXLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBcUIxQixNQUFyQjtBQUNBLCtDQUNPbUIsS0FEUDtBQUVJbkIsZUFBSyxFQUFDQSxNQUFLLENBQUM4QixNQUFOLENBQWEsVUFBQU4sS0FBSztBQUFBLG1CQUFJQSxLQUFLLENBQUMzQixFQUFOLEtBQWF1QixNQUFNLENBQUNOLElBQXhCO0FBQUEsV0FBbEI7QUFGVjtBQUlIOztBQUVELFNBQUtKLHVCQUFMO0FBQTZCO0FBQ3pCLGlDQUNPUyxLQURQO0FBR0g7O0FBQ0QsU0FBS1Isd0JBQUw7QUFBOEI7QUFBQTs7QUFDMUIsb0JBQUFjLE9BQU8sRUFBQ0MsR0FBUixrQkFBWSxjQUFaLHNHQUE4QlAsS0FBSyxDQUFDbkIsS0FBTixDQUFZK0IsTUFBWixDQUFtQixDQUFuQixDQUE5Qjs7QUFDQSwrQ0FDT1osS0FEUDtBQUVJbkIsZUFBSyxFQUFFO0FBRlg7QUFJSDs7QUFDRDtBQUNJLGFBQU9tQixLQUFQO0FBbEZKO0FBb0ZDLENBckZEOztBQXVGZUQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kMzVlMDc1MzAxOTdlNWJlMmVmNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgaWQ6MSxcclxuICAgIFVzZXI6e1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIHVzZXJJZDogJ2lhbidcclxuICAgIH0sXHJcbiAgICBPcmRlcjpbXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgIGlkOiBudWxsLFxyXG4gICAgLy8gICAgIHRpdGxlOiBudWxsLFxyXG4gICAgLy8gICAgIHByaWNlOiBudWxsLFxyXG4gICAgLy8gICAgIHF1YW50aXR5OiAwXHJcbiAgICAvLyB9XHJcbl0sXHJcbkxvYWRPcmRlckxvYWRpbmc6IGZhbHNlLFxyXG5Mb2FkT3JkZXJ0RG9uZTogZmFsc2UsXHJcbkxvYWRPcmRlckVycm9yOiBudWxsLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NBUlRfUkVRVUVTVCA9ICdBRERfQ0FSVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9DQVJUX1NVQ0NFRVNTID0gJ0FERF9DQVJUX1NVQ0NFRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DQVJUX0ZBSUxVUkUgPSAnQUREX0NBUlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0NBUlRfUkVRVUVTVCA9ICdSRU1PVkVfQ0FSVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9DQVJUX1NVQ0NFRVNTID0gJ1JFTU9WRV9DQVJUX1NVQ0NFRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9DQVJUX0ZBSUxVUkUgPSAnUkVNT1ZFX0NBUlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0FMTF9DQVJUX1JFUVVFU1QgPSAnUkVNT1ZFX0FMTF9DQVJUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0FMTF9DQVJUX1NVQ0NFRVNTID0gJ1JFTU9WRV9BTExfQ0FSVF9TVUNDRUVTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQUxMX0NBUlRfRkFJTFVSRSA9ICdSRU1PVkVfQUxMX0NBUlRfRkFJTFVSRSc7XHJcblxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGFkZENhcnQgPSAoZGF0YSkgPT4ge1xyXG4vLyAgICAgcmV0dXJue1xyXG4vLyAgICAgICAgIHR5cGU6IEFERF9DQVJULFxyXG4vLyAgICAgICAgIGRhdGFcclxuLy8gICAgIH1cclxuLy8gfVxyXG5leHBvcnQgY29uc3QgYWRkQ2FydEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTogQUREX0NBUlRfUkVRVUVTVCxcclxuICAgICAgICBkYXRhXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVDYXJ0QWN0aW9uID0gKGRhdGEpID0+IHtcclxucmV0dXJue1xyXG50eXBlOiBSRU1PVkVfQ0FSVF9SRVFVRVNULFxyXG5kYXRhXHJcbn1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUFsbENhcnRBY3Rpb24gPSAoKSA9PiB7XHJcbnJldHVybntcclxudHlwZTogUkVNT1ZFX0FMTF9DQVJUX1JFUVVFU1RcclxufVxyXG59XHJcblxyXG4vLyBjb25zdCBkdW1teVByb2R1Y3QgPSB7XHJcbi8vICAgICBpZDogMixcclxuLy8gICAgIHRpdGxlOiBcIk1lbnMgQ2FzdWFsIFByZW1pdW0gU2xpbSBGaXQgVC1TaGlydHNcIixcclxuLy8gICAgIHByaWNlOiAyMi4zLFxyXG4vLyAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL2ltZy83MS0zSGpHTkRVTC5fQUNfU1k4NzkuX1NYLl9VWC5fU1kuX1VZXy5qcGdcIlxyXG4vLyB9XHJcbi8vIGNvbnN0IHJlbW92ZSA9IHVzZUNhbGxiYWNrKFxyXG4vLyAgICAgKGlkKSA9PiB7XHJcbi8vICAgICAgICAgc2V0T3JkZXJzKG9yZGVycyA9PiB7XHJcbi8vICAgICAgICAgICAgIHJldHVybiBvcmRlcnMuZmlsdGVyKG9yZGVyID0+IG9yZGVyLmlkICE9PSBpZClcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgfSxcclxuLy8gICAgIFtdLFxyXG4vLyApXHJcbi8vIGNvbnN0IHJlbW92ZUFsbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuLy8gICAgIHNldE9yZGVycyhbXSk7XHJcbi8vIH0sW10pO1xyXG5cclxuLy9PcmRlciA9IE9yZGVyLmZpbHRlcihvcmRlciA9PiBvcmRlci5pZCAhPT0gYWN0aW9uLmRhdGEuaWQpXHJcblxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbnN3aXRjaChhY3Rpb24udHlwZSl7XHJcbmNhc2UgQUREX0NBUlRfUkVRVUVTVDp7XHJcbiAgIFxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIExvYWRPcmRlckxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgTG9hZE9yZGVydERvbmU6IGZhbHNlLFxyXG4gICAgfVxyXG59XHJcbmNhc2UgQUREX0NBUlRfU1VDQ0VFU1M6e1xyXG4gICAgLy8gY29uc29sZS5sb2coJ+yymOydjCcsYWN0aW9uLmRhdGEpO1xyXG4gICAgLy8gfVxyXG4gICAgbGV0IGNoZWNrTGlzdCA9IFsuLi5zdGF0ZS5PcmRlcl1cclxuICAgIGNvbnN0IGNoZWNrID0gY2hlY2tMaXN0LmZpbmQob3JkZXIgPT5vcmRlci5pZCA9PT0gYWN0aW9uLmRhdGEuaWQpO1xyXG4gICAgY29uc29sZS5sb2coJ2NoZWNrJyxjaGVjayk7XHJcbiAgICBpZihjaGVjayA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICBjb25zb2xlLmxvZygn7LKY7J2MJyk7XHJcbiAgICAgICAgICAgIC8vIGFjdGlvbi5kYXRhLnF1YW50aXR5ID0gMTtcclxuICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBPcmRlcjogW2FjdGlvbi5kYXRhLCAuLi5zdGF0ZS5PcmRlcl0sXHJcbiAgICAgICAgICAgIExvYWRPcmRlckxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBMb2FkT3JkZXJ0RG9uZTogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfspJHrs7UnKTtcclxuICAgICAgICBPcmRlci5tYXAoKG9yZGVyKT0+e1xyXG4gICAgICAgICAgICBpZihjaGVjay5pZCA9PT0gb3JkZXIuaWQpe1xyXG4gICAgICAgICAgICAgICAgb3JkZXIucXVhbnRpdHkrKztcclxuICAgICAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBPcmRlcjogWy4uLnN0YXRlLk9yZGVyXSxcclxuICAgICAgICAgICAgICAgICAgICBMb2FkT3JkZXJMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBMb2FkT3JkZXJ0RG9uZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCfspJHrs7UnKVxyXG4gICAgICAgIC8vIGxldCBjb3B5ID0gWy4uLnN0YXRlLk9yZGVyXVxyXG4gICAgICAgIC8vIGNvcHlbZm91bmRdLnF1YW50aXR5Kz0gYWN0aW9uLmRhdGEucXVhbnRpdHlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjb3B5KVxyXG4gICAgICAgIC8vIHJldHVybntcclxuICAgICAgICAvLyAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgLy8gICAgIC4uLnN0YXRlLk9yZGVyW2ZvdW5kXS5xdWFudGl0eSsrLFxyXG4gICAgICAgIC8vICAgICAvLyBPcmRlcjogWy4uLnN0YXRlLk9yZGVyXSxcclxuICAgICAgICAvLyAgICAgT3JkZXI6IFsuLi5zdGF0ZS5PcmRlcl0sXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIExvYWRPcmRlckxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIC8vICAgICBMb2FkT3JkZXJ0RG9uZTogdHJ1ZVxyXG4gICAgICAgIC8vIH1cclxuICBcclxufVxyXG5jYXNlIFJFTU9WRV9DQVJUX1JFUVVFU1Q6e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIC4uLnN0YXRlXHJcbiAgICB9XHJcbn1cclxuXHJcbmNhc2UgUkVNT1ZFX0NBUlRfU1VDQ0VFU1M6e1xyXG4gICAgbGV0IE9yZGVyID0gWy4uLnN0YXRlLk9yZGVyXTtcclxuICAgIE9yZGVyLmZpbHRlcihvcmRlciA9PiBvcmRlci5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgY29uc29sZS5sb2coJ3JlbW92ZScsT3JkZXIpO1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIE9yZGVyOk9yZGVyLmZpbHRlcihvcmRlciA9PiBvcmRlci5pZCAhPT0gYWN0aW9uLmRhdGEpXHJcbiAgICB9XHJcbn1cclxuXHJcbmNhc2UgUkVNT1ZFX0FMTF9DQVJUX1JFUVVFU1Q6e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIC4uLnN0YXRlXHJcbiAgICB9XHJcbn1cclxuY2FzZSBSRU1PVkVfQUxMX0NBUlRfU1VDQ0VFU1M6e1xyXG4gICAgY29uc29sZS5sb2coJ3JlbW92ZUFMTEFMTCcsLi4uc3RhdGUuT3JkZXIuc3BsaWNlKDApKTtcclxuICAgIHJldHVybntcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBPcmRlcjogW10sXHJcbiAgICB9XHJcbn1cclxuZGVmYXVsdDpcclxuICAgIHJldHVybiBzdGF0ZTtcclxufVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9