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

          loadProductAPI = function _loadProductAPI(category) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJwcm9kdWN0U2FnYSIsImxvYWRQcm9kdWN0QVBJIiwibG9hZFByb2R1Y3QiLCJzZWFyY2hQcm9kdWN0Iiwic29ydFByb2R1Y3QiLCJ3YXRjaExvYWRQcm9kdWN0Iiwid2F0Y2hTZWFyY2hQcm9kdWN0IiwidGFrZUxhdGVzdCIsImNhbGwiLCJyZXN1bHQiLCJwdXQiLCJ0eXBlIiwiZGF0YSIsImNvbnNvbGUiLCJlcnJvciIsInJlc3BvbnNlIiwiYWN0aW9uIiwiY2F0ZWdvcnkiLCJheGlvcyIsImdldCIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUdBR3lCQSxXOztBQUh6QjtBQUNBO0FBRWUsU0FBVUEsV0FBVjtBQUFBLGlFQUNGQyxjQURFLEVBS0RDLFdBTEMsRUFxQkRDLGFBckJDLEVBcUNEQyxXQXJDQyxFQXNEREMsZ0JBdERDLEVBNEREQyxrQkE1REM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE0RERBLDRCQTVEQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE2RFQsMkJBQU1DLDJFQUFVLENBQUMsc0JBQUQsRUFBeUJILFdBQXpCLENBQWhCOztBQTdEUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUF5RERFLDRCQXpEQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEwRFQsMkJBQU1DLDJFQUFVLENBQUMsd0JBQUQsRUFBMkJKLGFBQTNCLENBQWhCOztBQTFEUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFzRERFLDBCQXREQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF1RFQsMkJBQU1FLDJFQUFVLENBQUMsc0JBQUQsRUFBeUJMLFdBQXpCLENBQWhCOztBQXZEUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFxQ0RFLHFCQXJDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdUNVLDJCQUFNSSxxRUFBSSxDQUFDUCxjQUFELENBQVY7O0FBdkNWO0FBdUNDUSwwQkF2Q0Q7QUFBQTtBQXdDTCwyQkFBTUMsb0VBQUcsQ0FBQztBQUNSQywwQkFBSSxFQUFFLHdCQURFO0FBRVJDLDBCQUFJLEVBQUVILE1BQU0sQ0FBQ0c7QUFGTCxxQkFBRCxDQUFUOztBQXhDSztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBNkNMQywyQkFBTyxDQUFDQyxLQUFSO0FBN0NLO0FBOENMLDJCQUFNSixvRUFBRyxDQUFDO0FBQ1JDLDBCQUFJLEVBQUUsd0JBREU7QUFFUkcsMkJBQUssRUFBRSxhQUFJQyxRQUFKLENBQWFIO0FBRloscUJBQUQsQ0FBVDs7QUE5Q0s7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBcUJEVCx1QkFyQkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXVCVSwyQkFBTUsscUVBQUksQ0FBQ1AsY0FBRCxDQUFWOztBQXZCVjtBQXVCQ1EsMEJBdkJEO0FBQUE7QUF3QkwsMkJBQU1DLG9FQUFHLENBQUM7QUFDUkMsMEJBQUksRUFBRSx3QkFERTtBQUVSQywwQkFBSSxFQUFFSCxNQUFNLENBQUNHO0FBRkwscUJBQUQsQ0FBVDs7QUF4Qks7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQTZCTEMsMkJBQU8sQ0FBQ0MsS0FBUjtBQTdCSztBQThCTCwyQkFBTUosb0VBQUcsQ0FBQztBQUNSQywwQkFBSSxFQUFFLHdCQURFO0FBRVJHLDJCQUFLLEVBQUUsYUFBSUMsUUFBSixDQUFhSDtBQUZaLHFCQUFELENBQVQ7O0FBOUJLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUtEVixxQkFMQyx5QkFLV2MsTUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT1UsMkJBQU1SLHFFQUFJLENBQUNQLGNBQUQsRUFBaUJlLE1BQU0sQ0FBQ0osSUFBeEIsQ0FBVjs7QUFQVjtBQU9DSCwwQkFQRDtBQUFBO0FBUUwsMkJBQU1DLG9FQUFHLENBQUM7QUFDUkMsMEJBQUksRUFBRSxzQkFERTtBQUVSQywwQkFBSSxFQUFFSCxNQUFNLENBQUNHO0FBRkwscUJBQUQsQ0FBVDs7QUFSSztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBYUxDLDJCQUFPLENBQUNDLEtBQVI7QUFiSztBQWNMLDJCQUFNSixvRUFBRyxDQUFDO0FBQ1JDLDBCQUFJLEVBQUUsc0JBREU7QUFFUkcsMkJBQUssRUFBRSxZQUFJQyxRQUFKLENBQWFIO0FBRloscUJBQUQsQ0FBVDs7QUFkSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDRlgsd0JBREUsNEJBQ2FnQixRQURiLEVBQ3NCO0FBQzdCLG1CQUFPQyw0Q0FBSyxDQUFDQyxHQUFOLDZDQUErQ0YsUUFBL0MsRUFBUDtBQUNILFdBSFU7O0FBQUEsd0dBS0RmLFdBTEMsa0dBcUJEQyxhQXJCQyxrR0FxQ0RDLFdBckNDLGtHQXNEREMsZ0JBdERDLGtHQXlEREMsa0JBekRDLGtHQTREREEsa0JBNURDO0FBQUE7QUFnRVgsaUJBQU1jLG9FQUFHLENBQUMsQ0FDTkMscUVBQUksQ0FBQ2hCLGdCQUFELENBREUsRUFFTmdCLHFFQUFJLENBQUNmLGtCQUFELENBRkUsQ0FBRCxDQUFUOztBQWhFVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjM1NjNiOTUzMWY0Y2ZmMjJjMmJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGwsIGZvcmssIHRha2VMYXRlc3QsIGRlbGF5LCBwdXQsIGNhbGwgfSBmcm9tIFwiQHJlZHV4LXNhZ2EvY29yZS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwcm9kdWN0U2FnYSgpe1xyXG4gICAgZnVuY3Rpb24gbG9hZFByb2R1Y3RBUEkoY2F0ZWdvcnkpe1xyXG4gICAgICAgIHJldHVybiBheGlvcy5nZXQoYGh0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS9wcm9kdWN0cy8ke2NhdGVnb3J5fWApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uKiBsb2FkUHJvZHVjdChhY3Rpb24pIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUHJvZHVjdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogJ0xPQURfUFJPRFVDVF9TVUNDRVNTJyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdMT0FEX1BST0RVQ1RfRkFJTFVSRScsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uKiBzZWFyY2hQcm9kdWN0KCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQcm9kdWN0QVBJKTtcclxuICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdTRUFSQ0hfUFJPRFVDVF9TVUNDRVNTJyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdTRUFSQ0hfUFJPRFVDVF9GQUlMVVJFJyxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uKiBzb3J0UHJvZHVjdCgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUHJvZHVjdEFQSSk7XHJcbiAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiAnU0VBUkNIX1BST0RVQ1RfU1VDQ0VTUycsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiAnU0VBUkNIX1BST0RVQ1RfRkFJTFVSRScsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgXHJcbiAgICBmdW5jdGlvbiogd2F0Y2hMb2FkUHJvZHVjdCgpe1xyXG4gICAgICB5aWVsZCB0YWtlTGF0ZXN0KCdMT0FEX1BST0RVQ1RfUkVRVUVTVCcsIGxvYWRQcm9kdWN0KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uKiB3YXRjaFNlYXJjaFByb2R1Y3QoKXtcclxuICAgICAgeWllbGQgdGFrZUxhdGVzdCgnU0VBUkNIX1BST0RVQ1RfUkVRVUVTVCcsIHNlYXJjaFByb2R1Y3QpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24qIHdhdGNoU2VhcmNoUHJvZHVjdCgpe1xyXG4gICAgICB5aWVsZCB0YWtlTGF0ZXN0KCdTT1JUX1BST0RVQ1RfUkVRVUVTVCcsIHNvcnRQcm9kdWN0KTtcclxuICAgIH1cclxuXHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkUHJvZHVjdCksXHJcbiAgICAgICAgZm9yayh3YXRjaFNlYXJjaFByb2R1Y3QpXHJcbiAgICBdKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=