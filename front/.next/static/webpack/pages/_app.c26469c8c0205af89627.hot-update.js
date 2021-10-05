webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/product.js":
/*!*****************************!*\
  !*** ./reducers/product.js ***!
  \*****************************/
/*! exports provided: LOAD_PRODUCT_REQUEST, LOAD_PRODUCT_SUCCESS, LOAD_PRODUCT_FAILURE, SEARCH_PRODUCT_REQUEST, SEARCH_PRODUCT_SUCCESS, SEARCH_PRODUCT_FAILURE, LoadProductAction, searchProductAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_PRODUCT_REQUEST", function() { return LOAD_PRODUCT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_PRODUCT_SUCCESS", function() { return LOAD_PRODUCT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_PRODUCT_FAILURE", function() { return LOAD_PRODUCT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_PRODUCT_REQUEST", function() { return SEARCH_PRODUCT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_PRODUCT_SUCCESS", function() { return SEARCH_PRODUCT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_PRODUCT_FAILURE", function() { return SEARCH_PRODUCT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadProductAction", function() { return LoadProductAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchProductAction", function() { return searchProductAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  Products: [{
    id: null,
    title: null,
    price: null,
    image: null
  }],
  loadProductLoading: false,
  loadProductDone: false,
  loadProductError: null
};
var LOAD_PRODUCT_REQUEST = 'LOAD_PRODUCT_REQUEST';
var LOAD_PRODUCT_SUCCESS = 'LOAD_PRODUCT_SUCCESS';
var LOAD_PRODUCT_FAILURE = 'LOAD_PRODUCT_FAILURE';
var SEARCH_PRODUCT_REQUEST = 'SEARCH_PRODUCT_REQUEST';
var SEARCH_PRODUCT_SUCCESS = 'SEARCH_PRODUCT_SUCCESS';
var SEARCH_PRODUCT_FAILURE = 'SEARCH_PRODUCT_FAILURE';
var LoadProductAction = function LoadProductAction() {
  return {
    type: LOAD_PRODUCT_REQUEST
  };
};
_c = LoadProductAction;
var searchProductAction = function searchProductAction(data) {
  return {
    type: SEARCH_PRODUCT_REQUEST,
    data: data
  };
};
var dummyProduct = {
  id: 2,
  title: "Mens Casual Premium Slim Fit T-Shirts",
  price: 22.3,
  image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

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
        console.log(action.data);
        return _objectSpread(_objectSpread({}, state), {}, {
          loadProductLoading: false,
          loadProductDone: true
        });
      }

    case SEARCH_PRODUCT_SUCCESS:
      {
        console.log(action.data); // action.data.filter((item)=>{
        //              return item.title.toLocaleUpperCase().includes(searchVal.toLocaleUpperCase())
        //             });

        return _objectSpread(_objectSpread({}, state), {}, {
          Products: action.data,
          loadProductLoading: false,
          loadProductDone: true
        });
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

var _c;

$RefreshReg$(_c, "LoadProductAction");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJQcm9kdWN0cyIsImlkIiwidGl0bGUiLCJwcmljZSIsImltYWdlIiwibG9hZFByb2R1Y3RMb2FkaW5nIiwibG9hZFByb2R1Y3REb25lIiwibG9hZFByb2R1Y3RFcnJvciIsIkxPQURfUFJPRFVDVF9SRVFVRVNUIiwiTE9BRF9QUk9EVUNUX1NVQ0NFU1MiLCJMT0FEX1BST0RVQ1RfRkFJTFVSRSIsIlNFQVJDSF9QUk9EVUNUX1JFUVVFU1QiLCJTRUFSQ0hfUFJPRFVDVF9TVUNDRVNTIiwiU0VBUkNIX1BST0RVQ1RfRkFJTFVSRSIsIkxvYWRQcm9kdWN0QWN0aW9uIiwidHlwZSIsInNlYXJjaFByb2R1Y3RBY3Rpb24iLCJkYXRhIiwiZHVtbXlQcm9kdWN0IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxZQUFZLEdBQUc7QUFFVEMsVUFBUSxFQUFDLENBQ0w7QUFDQUMsTUFBRSxFQUFFLElBREo7QUFFQUMsU0FBSyxFQUFFLElBRlA7QUFHQUMsU0FBSyxFQUFFLElBSFA7QUFJQUMsU0FBSyxFQUFFO0FBSlAsR0FESyxDQUZBO0FBVWJDLG9CQUFrQixFQUFFLEtBVlA7QUFXYkMsaUJBQWUsRUFBRSxLQVhKO0FBWWJDLGtCQUFnQixFQUFFO0FBWkwsQ0FBckI7QUFlTyxJQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxJQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxJQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFFQSxJQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFDQSxJQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFDQSxJQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFHQSxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDbkMsU0FBTTtBQUNGQyxRQUFJLEVBQUVQO0FBREosR0FBTjtBQUdILENBSk07S0FBTU0saUI7QUFLTixJQUFNRSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNDLElBQUQsRUFBUztBQUN4QyxTQUFNO0FBQ0ZGLFFBQUksRUFBRUosc0JBREo7QUFFRk0sUUFBSSxFQUFKQTtBQUZFLEdBQU47QUFJSCxDQUxNO0FBTVAsSUFBTUMsWUFBWSxHQUFHO0FBQ2pCakIsSUFBRSxFQUFFLENBRGE7QUFFakJDLE9BQUssRUFBRSx1Q0FGVTtBQUdqQkMsT0FBSyxFQUFFLElBSFU7QUFJakJDLE9BQUssRUFBRTtBQUpVLENBQXJCOztBQU9BLElBQU1lLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQWtDO0FBQUEsTUFBakNDLEtBQWlDLHVFQUF6QnJCLFlBQXlCO0FBQUEsTUFBWHNCLE1BQVc7O0FBQzlDLFVBQU9BLE1BQU0sQ0FBQ04sSUFBZDtBQUNJLFNBQUtQLG9CQUFMO0FBQTBCO0FBQ3RCLCtDQUNPWSxLQURQO0FBRUlmLDRCQUFrQixFQUFFLElBRnhCO0FBR0lDLHlCQUFlLEVBQUU7QUFIckI7QUFLSDs7QUFDRCxTQUFLRyxvQkFBTDtBQUEwQjtBQUNsQiwrQ0FDT1csS0FEUDtBQUVJcEIsa0JBQVEsRUFBQ3FCLE1BQU0sQ0FBQ0osSUFGcEI7QUFHSVosNEJBQWtCLEVBQUUsS0FIeEI7QUFJSUMseUJBQWUsRUFBRTtBQUpyQjtBQU9QOztBQUNELFNBQUtJLG9CQUFMO0FBQTBCO0FBQ3RCLCtDQUNPVSxLQURQO0FBRUlmLDRCQUFrQixFQUFFLEtBRnhCO0FBR0lDLHlCQUFlLEVBQUU7QUFIckI7QUFLSDs7QUFDRCxTQUFLSyxzQkFBTDtBQUE0QjtBQUN4QlcsZUFBTyxDQUFDQyxHQUFSLENBQVlGLE1BQU0sQ0FBQ0osSUFBbkI7QUFDSSwrQ0FDT0csS0FEUDtBQUVJZiw0QkFBa0IsRUFBRSxLQUZ4QjtBQUdJQyx5QkFBZSxFQUFFO0FBSHJCO0FBTVA7O0FBQ0QsU0FBS00sc0JBQUw7QUFBNEI7QUFDeEJVLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFNLENBQUNKLElBQW5CLEVBRHdCLENBRXhCO0FBQ0E7QUFDQTs7QUFDQSwrQ0FDT0csS0FEUDtBQUVJcEIsa0JBQVEsRUFBQ3FCLE1BQU0sQ0FBQ0osSUFGcEI7QUFHSVosNEJBQWtCLEVBQUUsS0FIeEI7QUFJSUMseUJBQWUsRUFBRTtBQUpyQjtBQU9QOztBQUNHO0FBQ0ksYUFBT2MsS0FBUDtBQS9DUjtBQWlESCxDQWxERDs7QUFvRGVELHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYzI2NDY5YzhjMDIwNWFmODk2MjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgUHJvZHVjdHM6W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIHByaWNlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbG9hZFByb2R1Y3RMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBsb2FkUHJvZHVjdERvbmU6IGZhbHNlLFxyXG4gICAgICAgIGxvYWRQcm9kdWN0RXJyb3I6IG51bGwsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BST0RVQ1RfUkVRVUVTVCA9ICdMT0FEX1BST0RVQ1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BST0RVQ1RfU1VDQ0VTUyA9ICdMT0FEX1BST0RVQ1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BST0RVQ1RfRkFJTFVSRSA9ICdMT0FEX1BST0RVQ1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgU0VBUkNIX1BST0RVQ1RfUkVRVUVTVCA9ICdTRUFSQ0hfUFJPRFVDVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9QUk9EVUNUX1NVQ0NFU1MgPSAnU0VBUkNIX1BST0RVQ1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfUFJPRFVDVF9GQUlMVVJFID0gJ1NFQVJDSF9QUk9EVUNUX0ZBSUxVUkUnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBMb2FkUHJvZHVjdEFjdGlvbiA9ICgpID0+IHtcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOiBMT0FEX1BST0RVQ1RfUkVRVUVTVFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBzZWFyY2hQcm9kdWN0QWN0aW9uID0gKGRhdGEpID0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6IFNFQVJDSF9QUk9EVUNUX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YVxyXG4gICAgfVxyXG59XHJcbmNvbnN0IGR1bW15UHJvZHVjdCA9IHtcclxuICAgIGlkOiAyLFxyXG4gICAgdGl0bGU6IFwiTWVucyBDYXN1YWwgUHJlbWl1bSBTbGltIEZpdCBULVNoaXJ0c1wiLFxyXG4gICAgcHJpY2U6IDIyLjMsXHJcbiAgICBpbWFnZTogXCJodHRwczovL2Zha2VzdG9yZWFwaS5jb20vaW1nLzcxLTNIakdORFVMLl9BQ19TWTg3OS5fU1guX1VYLl9TWS5fVVlfLmpwZ1wiXHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIExPQURfUFJPRFVDVF9SRVFVRVNUOntcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkUHJvZHVjdExvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsb2FkUHJvZHVjdERvbmU6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0FEX1BST0RVQ1RfU1VDQ0VTUzp7XHJcbiAgICAgICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgUHJvZHVjdHM6YWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZFByb2R1Y3RMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkUHJvZHVjdERvbmU6IHRydWUsXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExPQURfUFJPRFVDVF9GQUlMVVJFOntcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkUHJvZHVjdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9hZFByb2R1Y3REb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFNFQVJDSF9QUk9EVUNUX1JFUVVFU1Q6e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZFByb2R1Y3RMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkUHJvZHVjdERvbmU6IHRydWUsXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFNFQVJDSF9QUk9EVUNUX1NVQ0NFU1M6e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgIC8vIGFjdGlvbi5kYXRhLmZpbHRlcigoaXRlbSk9PntcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgIHJldHVybiBpdGVtLnRpdGxlLnRvTG9jYWxlVXBwZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVmFsLnRvTG9jYWxlVXBwZXJDYXNlKCkpXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIFByb2R1Y3RzOmFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgbG9hZFByb2R1Y3RMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvYWRQcm9kdWN0RG9uZTogdHJ1ZSxcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=