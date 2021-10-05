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


var _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(productSaga);



function productSaga() {
  var _marked, _marked2, _marked3, loadProductAPI, loadProduct, searchProduct, watchLoadProduct;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function productSaga$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
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
                    _context2.next = 6;
                    return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: 'LOAD_PRODUCT_SUCCESS',
                      data: result.data
                    });

                  case 6:
                    _context2.next = 13;
                    break;

                  case 8:
                    _context2.prev = 8;
                    _context2.t0 = _context2["catch"](0);
                    console.error(_context2.t0);
                    _context2.next = 13;
                    return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: 'LOAD_PRODUCT_FAILURE',
                      error: _context2.t0.response.data
                    });

                  case 13:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _marked2, null, [[0, 8]]);
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

          _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadProduct), _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(searchProduct), _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadProduct);
          _context4.next = 7;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadProduct)]);

        case 7:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJwcm9kdWN0U2FnYSIsImxvYWRQcm9kdWN0QVBJIiwibG9hZFByb2R1Y3QiLCJzZWFyY2hQcm9kdWN0Iiwid2F0Y2hMb2FkUHJvZHVjdCIsInRha2VMYXRlc3QiLCJzZWFyY2hWYWwiLCJjYWxsIiwicmVzdWx0IiwicHV0IiwidHlwZSIsImRhdGEiLCJjb25zb2xlIiwiZXJyb3IiLCJyZXNwb25zZSIsImF4aW9zIiwiZ2V0IiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttR0FHeUJBLFc7O0FBSHpCO0FBQ0E7QUFFZSxTQUFVQSxXQUFWO0FBQUEsbUNBQ0ZDLGNBREUsRUFLREMsV0FMQyxFQXFCREMsYUFyQkMsRUFzQ0RDLGdCQXRDQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXNDREEsMEJBdENDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXVDVCwyQkFBTUMsMkVBQVUsQ0FBQyxzQkFBRCxFQUF5QkgsV0FBekIsQ0FBaEI7O0FBdkNTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXFCREMsdUJBckJDLDJCQXFCYUcsU0FyQmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXVCVSwyQkFBTUMscUVBQUksQ0FBQ04sY0FBRCxDQUFWOztBQXZCVjtBQXVCQ08sMEJBdkJEO0FBQUE7QUF3QkwsMkJBQU1DLG9FQUFHLENBQUM7QUFDUkMsMEJBQUksRUFBRSxzQkFERTtBQUVSQywwQkFBSSxFQUFFSCxNQUFNLENBQUNHO0FBRkwscUJBQUQsQ0FBVDs7QUF4Qks7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQTZCTEMsMkJBQU8sQ0FBQ0MsS0FBUjtBQTdCSztBQThCTCwyQkFBTUosb0VBQUcsQ0FBQztBQUNSQywwQkFBSSxFQUFFLHNCQURFO0FBRVJHLDJCQUFLLEVBQUUsYUFBSUMsUUFBSixDQUFhSDtBQUZaLHFCQUFELENBQVQ7O0FBOUJLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUtEVCxxQkFMQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT1UsMkJBQU1LLHFFQUFJLENBQUNOLGNBQUQsQ0FBVjs7QUFQVjtBQU9DTywwQkFQRDtBQUFBO0FBUUwsMkJBQU1DLG9FQUFHLENBQUM7QUFDUkMsMEJBQUksRUFBRSxzQkFERTtBQUVSQywwQkFBSSxFQUFFSCxNQUFNLENBQUNHO0FBRkwscUJBQUQsQ0FBVDs7QUFSSztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBYUxDLDJCQUFPLENBQUNDLEtBQVI7QUFiSztBQWNMLDJCQUFNSixvRUFBRyxDQUFDO0FBQ1JDLDBCQUFJLEVBQUUsc0JBREU7QUFFUkcsMkJBQUssRUFBRSxZQUFJQyxRQUFKLENBQWFIO0FBRloscUJBQUQsQ0FBVDs7QUFkSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDRlYsd0JBREUsOEJBQ2M7QUFDckIsbUJBQU9jLDRDQUFLLENBQUNDLEdBQU4scUNBQVA7QUFDSCxXQUhVOztBQUFBLHdHQUtEZCxXQUxDLGtHQXFCREMsYUFyQkMsa0dBc0NEQyxnQkF0Q0M7QUFBQTtBQTBDWCxpQkFBTWEsb0VBQUcsQ0FBQyxDQUNOQyxxRUFBSSxDQUFDZCxnQkFBRCxDQURFLENBQUQsQ0FBVDs7QUExQ1c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45ZTcxMWU5M2NjNDM1M2IyY2Y3MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsLCBmb3JrLCB0YWtlTGF0ZXN0LCBkZWxheSwgcHV0LCBjYWxsIH0gZnJvbSBcIkByZWR1eC1zYWdhL2NvcmUvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcHJvZHVjdFNhZ2EoKXtcclxuICAgIGZ1bmN0aW9uIGxvYWRQcm9kdWN0QVBJKCl7XHJcbiAgICAgICAgcmV0dXJuIGF4aW9zLmdldChgaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL3Byb2R1Y3RzYCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24qIGxvYWRQcm9kdWN0KCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQcm9kdWN0QVBJKTtcclxuICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdMT0FEX1BST0RVQ1RfU1VDQ0VTUycsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiAnTE9BRF9QUk9EVUNUX0ZBSUxVUkUnLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiogc2VhcmNoUHJvZHVjdChzZWFyY2hWYWwpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUHJvZHVjdEFQSSk7XHJcbiAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiAnTE9BRF9QUk9EVUNUX1NVQ0NFU1MnLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogJ0xPQURfUFJPRFVDVF9GQUlMVVJFJyxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBcclxuICAgIGZ1bmN0aW9uKiB3YXRjaExvYWRQcm9kdWN0KCl7XHJcbiAgICAgIHlpZWxkIHRha2VMYXRlc3QoJ0xPQURfUFJPRFVDVF9SRVFVRVNUJywgbG9hZFByb2R1Y3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRQcm9kdWN0KVxyXG4gICAgXSk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9