webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/product.js":
/*!**************************!*\
  !*** ./sagas/product.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return productSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redux-saga/core/effects */ "./node_modules/@redux-saga/core/dist/redux-saga-effects.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


var _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(productSaga);



function productSaga() {
  var _marked, _marked2, _marked3, _marked4, loadProductAPI, loadProduct, searchProduct, watchLoadProduct, watchSearchProduct;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function productSaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          watchSearchProduct = function _watchSearchProduct() {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchSearchProduct$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])('LOAD_PRODUCT_REQUEST', loadProduct);

                  case 2:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _marked4);
          };

          watchLoadProduct = function _watchLoadProduct() {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadProduct$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])('LOAD_PRODUCT_REQUEST', loadProduct);

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _marked3);
          };

          searchProduct = function _searchProduct(searchVal) {
            var result;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function searchProduct$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    _context2.next = 3;
                    return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadProductAPI);

                  case 3:
                    result = _context2.sent;

                    (function (order) {
                      return order.id !== action.data;
                    });

                    result.data.filter(function (item) {
                      return item.title.toLocaleUpperCase().includes(searchVal.toLocaleUpperCase());
                    });
                    _context2.next = 8;
                    return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: 'SEARCH_PRODUCT_SUCCESS',
                      data: result.data
                    });

                  case 8:
                    _context2.next = 15;
                    break;

                  case 10:
                    _context2.prev = 10;
                    _context2.t0 = _context2["catch"](0);
                    console.error(_context2.t0);
                    _context2.next = 15;
                    return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: 'SEARCH_PRODUCT_FAILURE',
                      error: _context2.t0.response.data
                    });

                  case 15:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _marked2, null, [[0, 10]]);
          };

          loadProduct = function _loadProduct() {
            var result;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadProduct$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadProductAPI);

                  case 3:
                    result = _context.sent;
                    _context.next = 6;
                    return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: 'LOAD_PRODUCT_SUCCESS',
                      data: result.data
                    });

                  case 6:
                    _context.next = 13;
                    break;

                  case 8:
                    _context.prev = 8;
                    _context.t0 = _context["catch"](0);
                    console.error(_context.t0);
                    _context.next = 13;
                    return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: 'LOAD_PRODUCT_FAILURE',
                      error: _context.t0.response.data
                    });

                  case 13:
                  case "end":
                    return _context.stop();
                }
              }
            }, _marked, null, [[0, 8]]);
          };

          loadProductAPI = function _loadProductAPI() {
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("https://fakestoreapi.com/products");
          };

          _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadProduct), _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(searchProduct), _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadProduct), _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchSearchProduct);
          _context5.next = 8;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadProduct), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSearchProduct)]);

        case 8:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJwcm9kdWN0U2FnYSIsImxvYWRQcm9kdWN0QVBJIiwibG9hZFByb2R1Y3QiLCJzZWFyY2hQcm9kdWN0Iiwid2F0Y2hMb2FkUHJvZHVjdCIsIndhdGNoU2VhcmNoUHJvZHVjdCIsInRha2VMYXRlc3QiLCJzZWFyY2hWYWwiLCJjYWxsIiwicmVzdWx0Iiwib3JkZXIiLCJpZCIsImFjdGlvbiIsImRhdGEiLCJmaWx0ZXIiLCJpdGVtIiwidGl0bGUiLCJ0b0xvY2FsZVVwcGVyQ2FzZSIsImluY2x1ZGVzIiwicHV0IiwidHlwZSIsImNvbnNvbGUiLCJlcnJvciIsInJlc3BvbnNlIiwiYXhpb3MiLCJnZXQiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O21HQUd5QkEsVzs7QUFIekI7QUFDQTtBQUVlLFNBQVVBLFdBQVY7QUFBQSw2Q0FDRkMsY0FERSxFQUtEQyxXQUxDLEVBcUJEQyxhQXJCQyxFQTBDREMsZ0JBMUNDLEVBNkNEQyxrQkE3Q0M7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE2Q0RBLDRCQTdDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE4Q1QsMkJBQU1DLDJFQUFVLENBQUMsc0JBQUQsRUFBeUJKLFdBQXpCLENBQWhCOztBQTlDUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUEwQ0RFLDBCQTFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEyQ1QsMkJBQU1FLDJFQUFVLENBQUMsc0JBQUQsRUFBeUJKLFdBQXpCLENBQWhCOztBQTNDUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFxQkRDLHVCQXJCQywyQkFxQmFJLFNBckJiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF1QlUsMkJBQU1DLHFFQUFJLENBQUNQLGNBQUQsQ0FBVjs7QUF2QlY7QUF1QkNRLDBCQXZCRDs7QUF3QkwsK0JBQUFDLEtBQUs7QUFBQSw2QkFBSUEsS0FBSyxDQUFDQyxFQUFOLEtBQWFDLE1BQU0sQ0FBQ0MsSUFBeEI7QUFBQSxxQkFBTDs7QUFDQUosMEJBQU0sQ0FBQ0ksSUFBUCxDQUFZQyxNQUFaLENBQW1CLFVBQUNDLElBQUQsRUFBUTtBQUNsQiw2QkFBT0EsSUFBSSxDQUFDQyxLQUFMLENBQVdDLGlCQUFYLEdBQStCQyxRQUEvQixDQUF3Q1gsU0FBUyxDQUFDVSxpQkFBVixFQUF4QyxDQUFQO0FBQ0EscUJBRlQ7QUF6Qks7QUE0QkwsMkJBQU1FLG9FQUFHLENBQUM7QUFDUkMsMEJBQUksRUFBRSx3QkFERTtBQUVSUCwwQkFBSSxFQUFFSixNQUFNLENBQUNJO0FBRkwscUJBQUQsQ0FBVDs7QUE1Qks7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWlDTFEsMkJBQU8sQ0FBQ0MsS0FBUjtBQWpDSztBQWtDTCwyQkFBTUgsb0VBQUcsQ0FBQztBQUNSQywwQkFBSSxFQUFFLHdCQURFO0FBRVJFLDJCQUFLLEVBQUUsYUFBSUMsUUFBSixDQUFhVjtBQUZaLHFCQUFELENBQVQ7O0FBbENLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUtEWCxxQkFMQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT1UsMkJBQU1NLHFFQUFJLENBQUNQLGNBQUQsQ0FBVjs7QUFQVjtBQU9DUSwwQkFQRDtBQUFBO0FBUUwsMkJBQU1VLG9FQUFHLENBQUM7QUFDUkMsMEJBQUksRUFBRSxzQkFERTtBQUVSUCwwQkFBSSxFQUFFSixNQUFNLENBQUNJO0FBRkwscUJBQUQsQ0FBVDs7QUFSSztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBYUxRLDJCQUFPLENBQUNDLEtBQVI7QUFiSztBQWNMLDJCQUFNSCxvRUFBRyxDQUFDO0FBQ1JDLDBCQUFJLEVBQUUsc0JBREU7QUFFUkUsMkJBQUssRUFBRSxZQUFJQyxRQUFKLENBQWFWO0FBRloscUJBQUQsQ0FBVDs7QUFkSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDRlosd0JBREUsOEJBQ2M7QUFDckIsbUJBQU91Qiw0Q0FBSyxDQUFDQyxHQUFOLHFDQUFQO0FBQ0gsV0FIVTs7QUFBQSx3R0FLRHZCLFdBTEMsa0dBcUJEQyxhQXJCQyxrR0EwQ0RDLGdCQTFDQyxrR0E2Q0RDLGtCQTdDQztBQUFBO0FBaURYLGlCQUFNcUIsb0VBQUcsQ0FBQyxDQUNOQyxxRUFBSSxDQUFDdkIsZ0JBQUQsQ0FERSxFQUVOdUIscUVBQUksQ0FBQ3RCLGtCQUFELENBRkUsQ0FBRCxDQUFUOztBQWpEVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjg2ZTM0YTYxYTQ5OGM2OWVjMzU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGwsIGZvcmssIHRha2VMYXRlc3QsIGRlbGF5LCBwdXQsIGNhbGwgfSBmcm9tIFwiQHJlZHV4LXNhZ2EvY29yZS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwcm9kdWN0U2FnYSgpe1xyXG4gICAgZnVuY3Rpb24gbG9hZFByb2R1Y3RBUEkoKXtcclxuICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KGBodHRwczovL2Zha2VzdG9yZWFwaS5jb20vcHJvZHVjdHNgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiogbG9hZFByb2R1Y3QoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFByb2R1Y3RBUEkpO1xyXG4gICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogJ0xPQURfUFJPRFVDVF9TVUNDRVNTJyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdMT0FEX1BST0RVQ1RfRkFJTFVSRScsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uKiBzZWFyY2hQcm9kdWN0KHNlYXJjaFZhbCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQcm9kdWN0QVBJKTtcclxuICAgICAgICAgIG9yZGVyID0+IG9yZGVyLmlkICE9PSBhY3Rpb24uZGF0YVxyXG4gICAgICAgICAgcmVzdWx0LmRhdGEuZmlsdGVyKChpdGVtKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0udGl0bGUudG9Mb2NhbGVVcHBlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hWYWwudG9Mb2NhbGVVcHBlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiAnU0VBUkNIX1BST0RVQ1RfU1VDQ0VTUycsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiAnU0VBUkNIX1BST0RVQ1RfRkFJTFVSRScsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgXHJcbiAgICBmdW5jdGlvbiogd2F0Y2hMb2FkUHJvZHVjdCgpe1xyXG4gICAgICB5aWVsZCB0YWtlTGF0ZXN0KCdMT0FEX1BST0RVQ1RfUkVRVUVTVCcsIGxvYWRQcm9kdWN0KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uKiB3YXRjaFNlYXJjaFByb2R1Y3QoKXtcclxuICAgICAgeWllbGQgdGFrZUxhdGVzdCgnTE9BRF9QUk9EVUNUX1JFUVVFU1QnLCBsb2FkUHJvZHVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZFByb2R1Y3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hTZWFyY2hQcm9kdWN0KVxyXG4gICAgXSk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9