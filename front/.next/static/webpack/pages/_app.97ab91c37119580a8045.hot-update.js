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


var _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(productSaga);



function productSaga() {
  var _marked, _marked2, _marked3, _marked4, _marked5, _marked6, loadProductAPI, loadProduct, searchProduct, sortProduct, watchLoadProduct, watchSearchProduct;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function productSaga$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          watchSearchProduct = function _watchSearchProduct2() {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchSearchProduct$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])('SORT_PRODUCT_REQUEST', sortProduct);

                  case 2:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _marked6);
          };

          watchSearchProduct = function _watchSearchProduct() {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchSearchProduct$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])('SEARCH_PRODUCT_REQUEST', searchProduct);

                  case 2:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _marked5);
          };

          watchLoadProduct = function _watchLoadProduct() {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadProduct$(_context4) {
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

          sortProduct = function _sortProduct() {
            var result;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function sortProduct$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    _context3.next = 3;
                    return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadProductAPI);

                  case 3:
                    result = _context3.sent;
                    _context3.next = 6;
                    return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: 'SEARCH_PRODUCT_SUCCESS',
                      data: result.data
                    });

                  case 6:
                    _context3.next = 13;
                    break;

                  case 8:
                    _context3.prev = 8;
                    _context3.t0 = _context3["catch"](0);
                    console.error(_context3.t0);
                    _context3.next = 13;
                    return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: 'SEARCH_PRODUCT_FAILURE',
                      error: _context3.t0.response.data
                    });

                  case 13:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _marked3, null, [[0, 8]]);
          };

          searchProduct = function _searchProduct() {
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
                      type: 'SEARCH_PRODUCT_SUCCESS',
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
                      type: 'SEARCH_PRODUCT_FAILURE',
                      error: _context2.t0.response.data
                    });

                  case 13:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _marked2, null, [[0, 8]]);
          };

          loadProduct = function _loadProduct(action) {
            var result;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadProduct$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadProductAPI, action.data);

                  case 3:
                    result = _context.sent;
                    _context.next = 6;
                    return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: 'LOAD_PRODUCT_SUCCESS',
                      data: result.data
                    });

                  case 6:
                    _context.next = 14;
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
                    s;

                  case 14:
                  case "end":
                    return _context.stop();
                }
              }
            }, _marked, null, [[0, 8]]);
          };

          loadProductAPI = function _loadProductAPI(category) {
            console.log(category);
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("https://fakestoreapi.com/products/".concat(category));
          };

          _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadProduct), _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(searchProduct), _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(sortProduct), _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadProduct), _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchSearchProduct), _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchSearchProduct);
          _context7.next = 10;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadProduct), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSearchProduct)]);

        case 10:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJwcm9kdWN0U2FnYSIsImxvYWRQcm9kdWN0QVBJIiwibG9hZFByb2R1Y3QiLCJzZWFyY2hQcm9kdWN0Iiwic29ydFByb2R1Y3QiLCJ3YXRjaExvYWRQcm9kdWN0Iiwid2F0Y2hTZWFyY2hQcm9kdWN0IiwidGFrZUxhdGVzdCIsImNhbGwiLCJyZXN1bHQiLCJwdXQiLCJ0eXBlIiwiZGF0YSIsImNvbnNvbGUiLCJlcnJvciIsInJlc3BvbnNlIiwiYWN0aW9uIiwicyIsImNhdGVnb3J5IiwibG9nIiwiYXhpb3MiLCJnZXQiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O21HQUd5QkEsVzs7QUFIekI7QUFDQTtBQUVlLFNBQVVBLFdBQVY7QUFBQSxpRUFFRkMsY0FGRSxFQU9EQyxXQVBDLEVBdUJEQyxhQXZCQyxFQXVDREMsV0F2Q0MsRUF3RERDLGdCQXhEQyxFQThEREMsa0JBOURDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBOEREQSw0QkE5REM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBK0RULDJCQUFNQywyRUFBVSxDQUFDLHNCQUFELEVBQXlCSCxXQUF6QixDQUFoQjs7QUEvRFM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBMkRERSw0QkEzREM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBNERULDJCQUFNQywyRUFBVSxDQUFDLHdCQUFELEVBQTJCSixhQUEzQixDQUFoQjs7QUE1RFM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBd0RERSwwQkF4REM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBeURULDJCQUFNRSwyRUFBVSxDQUFDLHNCQUFELEVBQXlCTCxXQUF6QixDQUFoQjs7QUF6RFM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBdUNERSxxQkF2Q0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXlDVSwyQkFBTUkscUVBQUksQ0FBQ1AsY0FBRCxDQUFWOztBQXpDVjtBQXlDQ1EsMEJBekNEO0FBQUE7QUEwQ0wsMkJBQU1DLG9FQUFHLENBQUM7QUFDUkMsMEJBQUksRUFBRSx3QkFERTtBQUVSQywwQkFBSSxFQUFFSCxNQUFNLENBQUNHO0FBRkwscUJBQUQsQ0FBVDs7QUExQ0s7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQStDTEMsMkJBQU8sQ0FBQ0MsS0FBUjtBQS9DSztBQWdETCwyQkFBTUosb0VBQUcsQ0FBQztBQUNSQywwQkFBSSxFQUFFLHdCQURFO0FBRVJHLDJCQUFLLEVBQUUsYUFBSUMsUUFBSixDQUFhSDtBQUZaLHFCQUFELENBQVQ7O0FBaERLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXVCRFQsdUJBdkJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF5QlUsMkJBQU1LLHFFQUFJLENBQUNQLGNBQUQsQ0FBVjs7QUF6QlY7QUF5QkNRLDBCQXpCRDtBQUFBO0FBMEJMLDJCQUFNQyxvRUFBRyxDQUFDO0FBQ1JDLDBCQUFJLEVBQUUsd0JBREU7QUFFUkMsMEJBQUksRUFBRUgsTUFBTSxDQUFDRztBQUZMLHFCQUFELENBQVQ7O0FBMUJLO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUErQkxDLDJCQUFPLENBQUNDLEtBQVI7QUEvQks7QUFnQ0wsMkJBQU1KLG9FQUFHLENBQUM7QUFDUkMsMEJBQUksRUFBRSx3QkFERTtBQUVSRywyQkFBSyxFQUFFLGFBQUlDLFFBQUosQ0FBYUg7QUFGWixxQkFBRCxDQUFUOztBQWhDSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFPRFYscUJBUEMseUJBT1djLE1BUFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNVLDJCQUFNUixxRUFBSSxDQUFDUCxjQUFELEVBQWlCZSxNQUFNLENBQUNKLElBQXhCLENBQVY7O0FBVFY7QUFTQ0gsMEJBVEQ7QUFBQTtBQVVMLDJCQUFNQyxvRUFBRyxDQUFDO0FBQ1JDLDBCQUFJLEVBQUUsc0JBREU7QUFFUkMsMEJBQUksRUFBRUgsTUFBTSxDQUFDRztBQUZMLHFCQUFELENBQVQ7O0FBVks7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWVMQywyQkFBTyxDQUFDQyxLQUFSO0FBZks7QUFnQkwsMkJBQU1KLG9FQUFHLENBQUM7QUFDUkMsMEJBQUksRUFBRSxzQkFERTtBQUVSRywyQkFBSyxFQUFFLFlBQUlDLFFBQUosQ0FBYUg7QUFGWixxQkFBRCxDQUFUOztBQWhCSztBQW1CRksscUJBQUM7O0FBbkJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVGaEIsd0JBRkUsNEJBRWFpQixRQUZiLEVBRXNCO0FBQzdCTCxtQkFBTyxDQUFDTSxHQUFSLENBQVlELFFBQVo7QUFDQSxtQkFBT0UsNENBQUssQ0FBQ0MsR0FBTiw2Q0FBK0NILFFBQS9DLEVBQVA7QUFDSCxXQUxVOztBQUFBLHdHQU9EaEIsV0FQQyxrR0F1QkRDLGFBdkJDLGtHQXVDREMsV0F2Q0Msa0dBd0REQyxnQkF4REMsa0dBMkREQyxrQkEzREMsa0dBOEREQSxrQkE5REM7QUFBQTtBQWtFWCxpQkFBTWdCLG9FQUFHLENBQUMsQ0FDTkMscUVBQUksQ0FBQ2xCLGdCQUFELENBREUsRUFFTmtCLHFFQUFJLENBQUNqQixrQkFBRCxDQUZFLENBQUQsQ0FBVDs7QUFsRVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45N2FiOTFjMzcxMTk1ODBhODA0NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsLCBmb3JrLCB0YWtlTGF0ZXN0LCBkZWxheSwgcHV0LCBjYWxsIH0gZnJvbSBcIkByZWR1eC1zYWdhL2NvcmUvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcHJvZHVjdFNhZ2EoKXtcclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkUHJvZHVjdEFQSShjYXRlZ29yeSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coY2F0ZWdvcnkpO1xyXG4gICAgICAgIHJldHVybiBheGlvcy5nZXQoYGh0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS9wcm9kdWN0cy8ke2NhdGVnb3J5fWApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uKiBsb2FkUHJvZHVjdChhY3Rpb24pIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUHJvZHVjdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogJ0xPQURfUFJPRFVDVF9TVUNDRVNTJyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdMT0FEX1BST0RVQ1RfRkFJTFVSRScsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgIH0pO3NcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiogc2VhcmNoUHJvZHVjdCgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUHJvZHVjdEFQSSk7XHJcbiAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiAnU0VBUkNIX1BST0RVQ1RfU1VDQ0VTUycsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiAnU0VBUkNIX1BST0RVQ1RfRkFJTFVSRScsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiogc29ydFByb2R1Y3QoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFByb2R1Y3RBUEkpO1xyXG4gICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogJ1NFQVJDSF9QUk9EVUNUX1NVQ0NFU1MnLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogJ1NFQVJDSF9QUk9EVUNUX0ZBSUxVUkUnLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFxyXG4gICAgZnVuY3Rpb24qIHdhdGNoTG9hZFByb2R1Y3QoKXtcclxuICAgICAgeWllbGQgdGFrZUxhdGVzdCgnTE9BRF9QUk9EVUNUX1JFUVVFU1QnLCBsb2FkUHJvZHVjdCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiogd2F0Y2hTZWFyY2hQcm9kdWN0KCl7XHJcbiAgICAgIHlpZWxkIHRha2VMYXRlc3QoJ1NFQVJDSF9QUk9EVUNUX1JFUVVFU1QnLCBzZWFyY2hQcm9kdWN0KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uKiB3YXRjaFNlYXJjaFByb2R1Y3QoKXtcclxuICAgICAgeWllbGQgdGFrZUxhdGVzdCgnU09SVF9QUk9EVUNUX1JFUVVFU1QnLCBzb3J0UHJvZHVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZFByb2R1Y3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hTZWFyY2hQcm9kdWN0KVxyXG4gICAgXSk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9