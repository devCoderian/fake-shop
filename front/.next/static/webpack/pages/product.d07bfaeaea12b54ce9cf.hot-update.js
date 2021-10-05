webpackHotUpdate_N_E("pages/product",{

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
        console.log('SEARCH_PRODUCT_REQUEST', action.data);
        return _objectSpread(_objectSpread({}, state), {}, {
          loadProductLoading: false,
          loadProductDone: true,
          searchVal: action.data
        });
      }

    case SEARCH_PRODUCT_SUCCESS:
      {
        var searchResult = [];

        if (searchVal !== '') {
          action.data.filter(function (item) {
            var _item$title$toLocaleU;

            return (_item$title$toLocaleU = item.title.toLocaleUpperCase()).includes.apply(_item$title$toLocaleU, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.searchVal.toLocaleUpperCase()));
          });
        } else {
          searchResult.push(action.data);
        }

        return _objectSpread(_objectSpread({}, state), {}, {
          Products: searchResult,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJQcm9kdWN0cyIsImlkIiwidGl0bGUiLCJwcmljZSIsImltYWdlIiwibG9hZFByb2R1Y3RMb2FkaW5nIiwibG9hZFByb2R1Y3REb25lIiwibG9hZFByb2R1Y3RFcnJvciIsInNlYXJjaFZhbCIsIkxPQURfUFJPRFVDVF9SRVFVRVNUIiwiTE9BRF9QUk9EVUNUX1NVQ0NFU1MiLCJMT0FEX1BST0RVQ1RfRkFJTFVSRSIsIlNFQVJDSF9QUk9EVUNUX1JFUVVFU1QiLCJTRUFSQ0hfUFJPRFVDVF9TVUNDRVNTIiwiU0VBUkNIX1BST0RVQ1RfRkFJTFVSRSIsIkxvYWRQcm9kdWN0QWN0aW9uIiwidHlwZSIsInNlYXJjaFByb2R1Y3RBY3Rpb24iLCJkYXRhIiwiZHVtbXlQcm9kdWN0IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsInNlYXJjaFJlc3VsdCIsImZpbHRlciIsIml0ZW0iLCJ0b0xvY2FsZVVwcGVyQ2FzZSIsImluY2x1ZGVzIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFlBQVksR0FBRztBQUVUQyxVQUFRLEVBQUMsQ0FDTDtBQUNBQyxNQUFFLEVBQUUsSUFESjtBQUVBQyxTQUFLLEVBQUUsSUFGUDtBQUdBQyxTQUFLLEVBQUUsSUFIUDtBQUlBQyxTQUFLLEVBQUU7QUFKUCxHQURLLENBRkE7QUFVYkMsb0JBQWtCLEVBQUUsS0FWUDtBQVdiQyxpQkFBZSxFQUFFLEtBWEo7QUFZYkMsa0JBQWdCLEVBQUUsSUFaTDtBQWFiQyxXQUFTLEVBQUU7QUFiRSxDQUFyQjtBQWdCTyxJQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxJQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxJQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFFQSxJQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFDQSxJQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFDQSxJQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFHQSxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDbkMsU0FBTTtBQUNGQyxRQUFJLEVBQUVQO0FBREosR0FBTjtBQUdILENBSk07S0FBTU0saUI7QUFLTixJQUFNRSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNDLElBQUQsRUFBUztBQUN4QyxTQUFNO0FBQ0ZGLFFBQUksRUFBRUosc0JBREo7QUFFRk0sUUFBSSxFQUFKQTtBQUZFLEdBQU47QUFJSCxDQUxNO0FBTVAsSUFBTUMsWUFBWSxHQUFHO0FBQ2pCbEIsSUFBRSxFQUFFLENBRGE7QUFFakJDLE9BQUssRUFBRSx1Q0FGVTtBQUdqQkMsT0FBSyxFQUFFLElBSFU7QUFJakJDLE9BQUssRUFBRTtBQUpVLENBQXJCOztBQU9BLElBQU1nQixPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFrQztBQUFBLE1BQWpDQyxLQUFpQyx1RUFBekJ0QixZQUF5QjtBQUFBLE1BQVh1QixNQUFXOztBQUM5QyxVQUFPQSxNQUFNLENBQUNOLElBQWQ7QUFDSSxTQUFLUCxvQkFBTDtBQUEwQjtBQUN0QiwrQ0FDT1ksS0FEUDtBQUVJaEIsNEJBQWtCLEVBQUUsSUFGeEI7QUFHSUMseUJBQWUsRUFBRTtBQUhyQjtBQUtIOztBQUNELFNBQUtJLG9CQUFMO0FBQTBCO0FBQ2xCLCtDQUNPVyxLQURQO0FBRUlyQixrQkFBUSxFQUFDc0IsTUFBTSxDQUFDSixJQUZwQjtBQUdJYiw0QkFBa0IsRUFBRSxLQUh4QjtBQUlJQyx5QkFBZSxFQUFFO0FBSnJCO0FBT1A7O0FBQ0QsU0FBS0ssb0JBQUw7QUFBMEI7QUFDdEIsK0NBQ09VLEtBRFA7QUFFSWhCLDRCQUFrQixFQUFFLEtBRnhCO0FBR0lDLHlCQUFlLEVBQUU7QUFIckI7QUFLSDs7QUFDRCxTQUFLTSxzQkFBTDtBQUE0QjtBQUN4QlcsZUFBTyxDQUFDQyxHQUFSLENBQVksd0JBQVosRUFBcUNGLE1BQU0sQ0FBQ0osSUFBNUM7QUFFSSwrQ0FDT0csS0FEUDtBQUVJaEIsNEJBQWtCLEVBQUUsS0FGeEI7QUFHSUMseUJBQWUsRUFBRSxJQUhyQjtBQUlJRSxtQkFBUyxFQUFDYyxNQUFNLENBQUNKO0FBSnJCO0FBTVA7O0FBQ0QsU0FBS0wsc0JBQUw7QUFBNEI7QUFDeEIsWUFBSVksWUFBWSxHQUFHLEVBQW5COztBQUNBLFlBQUdqQixTQUFTLEtBQUssRUFBakIsRUFBb0I7QUFDaEJjLGdCQUFNLENBQUNKLElBQVAsQ0FBWVEsTUFBWixDQUFtQixVQUFDQyxJQUFELEVBQVE7QUFBQTs7QUFDdkIsbUJBQU8seUJBQUFBLElBQUksQ0FBQ3pCLEtBQUwsQ0FBVzBCLGlCQUFYLElBQStCQyxRQUEvQiwySEFBMkNSLEtBQUssQ0FBQ2IsU0FBTixDQUFnQm9CLGlCQUFoQixFQUEzQyxFQUFQO0FBQ0EsV0FGSjtBQUdILFNBSkQsTUFJSztBQUNESCxzQkFBWSxDQUFDSyxJQUFiLENBQWtCUixNQUFNLENBQUNKLElBQXpCO0FBQ0g7O0FBQ0QsK0NBQ09HLEtBRFA7QUFFSXJCLGtCQUFRLEVBQUN5QixZQUZiO0FBR0lwQiw0QkFBa0IsRUFBRSxLQUh4QjtBQUlJQyx5QkFBZSxFQUFFO0FBSnJCO0FBT1A7O0FBQ0c7QUFDSSxhQUFPZSxLQUFQO0FBcERSO0FBc0RILENBdkREOztBQXlEZUQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC5kMDdiZmFlYWVhMTJiNTRjZTljZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBQcm9kdWN0czpbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBsb2FkUHJvZHVjdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGxvYWRQcm9kdWN0RG9uZTogZmFsc2UsXHJcbiAgICAgICAgbG9hZFByb2R1Y3RFcnJvcjogbnVsbCxcclxuICAgICAgICBzZWFyY2hWYWw6ICcnLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QUk9EVUNUX1JFUVVFU1QgPSAnTE9BRF9QUk9EVUNUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QUk9EVUNUX1NVQ0NFU1MgPSAnTE9BRF9QUk9EVUNUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QUk9EVUNUX0ZBSUxVUkUgPSAnTE9BRF9QUk9EVUNUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9QUk9EVUNUX1JFUVVFU1QgPSAnU0VBUkNIX1BST0RVQ1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfUFJPRFVDVF9TVUNDRVNTID0gJ1NFQVJDSF9QUk9EVUNUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0VBUkNIX1BST0RVQ1RfRkFJTFVSRSA9ICdTRUFSQ0hfUFJPRFVDVF9GQUlMVVJFJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgTG9hZFByb2R1Y3RBY3Rpb24gPSAoKSA9PiB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTogTE9BRF9QUk9EVUNUX1JFUVVFU1RcclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3Qgc2VhcmNoUHJvZHVjdEFjdGlvbiA9IChkYXRhKSA9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOiBTRUFSQ0hfUFJPRFVDVF9SRVFVRVNULFxyXG4gICAgICAgIGRhdGFcclxuICAgIH1cclxufVxyXG5jb25zdCBkdW1teVByb2R1Y3QgPSB7XHJcbiAgICBpZDogMixcclxuICAgIHRpdGxlOiBcIk1lbnMgQ2FzdWFsIFByZW1pdW0gU2xpbSBGaXQgVC1TaGlydHNcIixcclxuICAgIHByaWNlOiAyMi4zLFxyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL2ltZy83MS0zSGpHTkRVTC5fQUNfU1k4NzkuX1NYLl9VWC5fU1kuX1VZXy5qcGdcIlxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBMT0FEX1BST0RVQ1RfUkVRVUVTVDp7XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZFByb2R1Y3RMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbG9hZFByb2R1Y3REb25lOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9BRF9QUk9EVUNUX1NVQ0NFU1M6e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIFByb2R1Y3RzOmFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRQcm9kdWN0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZFByb2R1Y3REb25lOiB0cnVlLFxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0FEX1BST0RVQ1RfRkFJTFVSRTp7XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZFByb2R1Y3RMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvYWRQcm9kdWN0RG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBTRUFSQ0hfUFJPRFVDVF9SRVFVRVNUOntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NFQVJDSF9QUk9EVUNUX1JFUVVFU1QnLGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkUHJvZHVjdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRQcm9kdWN0RG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hWYWw6YWN0aW9uLmRhdGFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBTRUFSQ0hfUFJPRFVDVF9TVUNDRVNTOntcclxuICAgICAgICAgICAgbGV0IHNlYXJjaFJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBpZihzZWFyY2hWYWwgIT09ICcnKXtcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5kYXRhLmZpbHRlcigoaXRlbSk9PntcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS50aXRsZS50b0xvY2FsZVVwcGVyQ2FzZSgpLmluY2x1ZGVzKC4uLnN0YXRlLnNlYXJjaFZhbC50b0xvY2FsZVVwcGVyQ2FzZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hSZXN1bHQucHVzaChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBQcm9kdWN0czpzZWFyY2hSZXN1bHQsXHJcbiAgICAgICAgICAgICAgICBsb2FkUHJvZHVjdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9hZFByb2R1Y3REb25lOiB0cnVlLFxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==