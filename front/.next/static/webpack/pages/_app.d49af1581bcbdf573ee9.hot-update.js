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
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
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
var LOAD_PRODUCT_REQUEST = 'LOAD_PRODUCT_REQUEST';
var LOAD_PRODUCT_SUCCESS = 'LOAD_PRODUCT_SUCCESS';
var LOAD_PRODUCT_FAILURE = 'LOAD_PRODUCT_FAILURE';
var SEARCH_PRODUCT_REQUEST = 'SEARCH_PRODUCT_REQUEST';
var SEARCH_PRODUCT_SUCCESS = 'SEARCH_PRODUCT_SUCCESS';
var SEARCH_PRODUCT_FAILURE = 'SEARCH_PRODUCT_FAILURE';
var LoadProductAction = function LoadProductAction(data) {
  return {
    type: LOAD_PRODUCT_REQUEST,
    data: data
  };
};
_c = LoadProductAction;
var searchProductAction = function searchProductAction(data) {
  return {
    type: SEARCH_PRODUCT_REQUEST,
    data: data
  };
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
          Products: action.data.filter(function (item) {
            var _item$title$toLocaleU;

            return (_item$title$toLocaleU = item.title.toLocaleUpperCase()).includes.apply(_item$title$toLocaleU, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.searchVal.toLocaleUpperCase()));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJQcm9kdWN0cyIsImlkIiwidGl0bGUiLCJwcmljZSIsImltYWdlIiwibG9hZFByb2R1Y3RMb2FkaW5nIiwibG9hZFByb2R1Y3REb25lIiwibG9hZFByb2R1Y3RFcnJvciIsInNlYXJjaFZhbCIsIkxPQURfUFJPRFVDVF9SRVFVRVNUIiwiTE9BRF9QUk9EVUNUX1NVQ0NFU1MiLCJMT0FEX1BST0RVQ1RfRkFJTFVSRSIsIlNFQVJDSF9QUk9EVUNUX1JFUVVFU1QiLCJTRUFSQ0hfUFJPRFVDVF9TVUNDRVNTIiwiU0VBUkNIX1BST0RVQ1RfRkFJTFVSRSIsIkxvYWRQcm9kdWN0QWN0aW9uIiwiZGF0YSIsInR5cGUiLCJzZWFyY2hQcm9kdWN0QWN0aW9uIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsImZpbHRlciIsIml0ZW0iLCJ0b0xvY2FsZVVwcGVyQ2FzZSIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsWUFBWSxHQUFHO0FBRVRDLFVBQVEsRUFBQyxDQUNMO0FBQ0FDLE1BQUUsRUFBRSxJQURKO0FBRUFDLFNBQUssRUFBRSxJQUZQO0FBR0FDLFNBQUssRUFBRSxJQUhQO0FBSUFDLFNBQUssRUFBRTtBQUpQLEdBREssQ0FGQTtBQVViQyxvQkFBa0IsRUFBRSxLQVZQO0FBV2JDLGlCQUFlLEVBQUUsS0FYSjtBQVliQyxrQkFBZ0IsRUFBRSxJQVpMO0FBYWJDLFdBQVMsRUFBRTtBQWJFLENBQXJCO0FBZ0JPLElBQU1DLG9CQUFvQixHQUFHLHNCQUE3QjtBQUNBLElBQU1DLG9CQUFvQixHQUFHLHNCQUE3QjtBQUNBLElBQU1DLG9CQUFvQixHQUFHLHNCQUE3QjtBQUVBLElBQU1DLHNCQUFzQixHQUFHLHdCQUEvQjtBQUNBLElBQU1DLHNCQUFzQixHQUFHLHdCQUEvQjtBQUNBLElBQU1DLHNCQUFzQixHQUFHLHdCQUEvQjtBQUdBLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsSUFBRCxFQUFVO0FBQ3ZDLFNBQU07QUFDRkMsUUFBSSxFQUFFUixvQkFESjtBQUVGTyxRQUFJLEVBQUpBO0FBRkUsR0FBTjtBQUlILENBTE07S0FBTUQsaUI7QUFNTixJQUFNRyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNGLElBQUQsRUFBUztBQUN4QyxTQUFNO0FBQ0ZDLFFBQUksRUFBRUwsc0JBREo7QUFFRkksUUFBSSxFQUFKQTtBQUZFLEdBQU47QUFJSCxDQUxNOztBQU9QLElBQU1HLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQWtDO0FBQUEsTUFBakNDLEtBQWlDLHVFQUF6QnJCLFlBQXlCO0FBQUEsTUFBWHNCLE1BQVc7O0FBQzlDLFVBQU9BLE1BQU0sQ0FBQ0osSUFBZDtBQUNJLFNBQUtSLG9CQUFMO0FBQTBCO0FBQ3RCLCtDQUNPVyxLQURQO0FBRUlmLDRCQUFrQixFQUFFLElBRnhCO0FBR0lDLHlCQUFlLEVBQUU7QUFIckI7QUFLSDs7QUFDRCxTQUFLSSxvQkFBTDtBQUEwQjtBQUNsQiwrQ0FDT1UsS0FEUDtBQUVJcEIsa0JBQVEsRUFBQ3FCLE1BQU0sQ0FBQ0wsSUFGcEI7QUFHSVgsNEJBQWtCLEVBQUUsS0FIeEI7QUFJSUMseUJBQWUsRUFBRTtBQUpyQjtBQU9QOztBQUNELFNBQUtLLG9CQUFMO0FBQTBCO0FBQ3RCLCtDQUNPUyxLQURQO0FBRUlmLDRCQUFrQixFQUFFLEtBRnhCO0FBR0lDLHlCQUFlLEVBQUU7QUFIckI7QUFLSDs7QUFDRCxTQUFLTSxzQkFBTDtBQUE0QjtBQUN4QlUsZUFBTyxDQUFDQyxHQUFSLENBQVksd0JBQVosRUFBcUNGLE1BQU0sQ0FBQ0wsSUFBNUM7QUFFSSwrQ0FDT0ksS0FEUDtBQUVJZiw0QkFBa0IsRUFBRSxLQUZ4QjtBQUdJQyx5QkFBZSxFQUFFLElBSHJCO0FBSUlFLG1CQUFTLEVBQUNhLE1BQU0sQ0FBQ0w7QUFKckI7QUFNUDs7QUFDRCxTQUFLSCxzQkFBTDtBQUE0QjtBQUV4QiwrQ0FDT08sS0FEUDtBQUVJcEIsa0JBQVEsRUFBRXFCLE1BQU0sQ0FBQ0wsSUFBUCxDQUFZUSxNQUFaLENBQW1CLFVBQUNDLElBQUQsRUFBUTtBQUFBOztBQUNqQyxtQkFBTyx5QkFBQUEsSUFBSSxDQUFDdkIsS0FBTCxDQUFXd0IsaUJBQVgsSUFBK0JDLFFBQS9CLDJIQUEyQ1AsS0FBSyxDQUFDWixTQUFOLENBQWdCa0IsaUJBQWhCLEVBQTNDLEVBQVA7QUFDQSxXQUZNLENBRmQ7QUFLSXJCLDRCQUFrQixFQUFFLEtBTHhCO0FBTUlDLHlCQUFlLEVBQUU7QUFOckI7QUFTSDs7QUFDRCxTQUFNUSxzQkFBTjtBQUE2QjtBQUN6QiwrQ0FDT00sS0FEUDtBQUVJZiw0QkFBa0IsRUFBRSxLQUZ4QjtBQUdJQyx5QkFBZSxFQUFFO0FBSHJCO0FBS0g7O0FBQ0Q7QUFDSSxhQUFPYyxLQUFQO0FBdERSO0FBd0RILENBekREOztBQTJEZUQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kNDlhZjE1ODFiY2JkZjU3M2VlOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBQcm9kdWN0czpbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBsb2FkUHJvZHVjdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGxvYWRQcm9kdWN0RG9uZTogZmFsc2UsXHJcbiAgICAgICAgbG9hZFByb2R1Y3RFcnJvcjogbnVsbCxcclxuICAgICAgICBzZWFyY2hWYWw6ICcnLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QUk9EVUNUX1JFUVVFU1QgPSAnTE9BRF9QUk9EVUNUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QUk9EVUNUX1NVQ0NFU1MgPSAnTE9BRF9QUk9EVUNUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QUk9EVUNUX0ZBSUxVUkUgPSAnTE9BRF9QUk9EVUNUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9QUk9EVUNUX1JFUVVFU1QgPSAnU0VBUkNIX1BST0RVQ1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfUFJPRFVDVF9TVUNDRVNTID0gJ1NFQVJDSF9QUk9EVUNUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0VBUkNIX1BST0RVQ1RfRkFJTFVSRSA9ICdTRUFSQ0hfUFJPRFVDVF9GQUlMVVJFJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgTG9hZFByb2R1Y3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6IExPQURfUFJPRFVDVF9SRVFVRVNULFxyXG4gICAgICAgIGRhdGFcclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3Qgc2VhcmNoUHJvZHVjdEFjdGlvbiA9IChkYXRhKSA9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOiBTRUFSQ0hfUFJPRFVDVF9SRVFVRVNULFxyXG4gICAgICAgIGRhdGFcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgTE9BRF9QUk9EVUNUX1JFUVVFU1Q6e1xyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRQcm9kdWN0TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRQcm9kdWN0RG9uZTogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExPQURfUFJPRFVDVF9TVUNDRVNTOntcclxuICAgICAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBQcm9kdWN0czphY3Rpb24uZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkUHJvZHVjdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRQcm9kdWN0RG9uZTogdHJ1ZSxcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9BRF9QUk9EVUNUX0ZBSUxVUkU6e1xyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRQcm9kdWN0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBsb2FkUHJvZHVjdERvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgU0VBUkNIX1BST0RVQ1RfUkVRVUVTVDp7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTRUFSQ0hfUFJPRFVDVF9SRVFVRVNUJyxhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZFByb2R1Y3RMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkUHJvZHVjdERvbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoVmFsOmFjdGlvbi5kYXRhXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgU0VBUkNIX1BST0RVQ1RfU1VDQ0VTUzp7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBQcm9kdWN0czogYWN0aW9uLmRhdGEuZmlsdGVyKChpdGVtKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnRpdGxlLnRvTG9jYWxlVXBwZXJDYXNlKCkuaW5jbHVkZXMoLi4uc3RhdGUuc2VhcmNoVmFsLnRvTG9jYWxlVXBwZXJDYXNlKCkpXHJcbiAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIGxvYWRQcm9kdWN0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBsb2FkUHJvZHVjdERvbmU6IHRydWUsXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgIFNFQVJDSF9QUk9EVUNUX0ZBSUxVUkU6e1xyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRQcm9kdWN0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBsb2FkUHJvZHVjdERvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==