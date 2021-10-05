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
                    return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])('SEARCH_PRODUCT_REQUEST', searchProduct);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJwcm9kdWN0U2FnYSIsImxvYWRQcm9kdWN0QVBJIiwibG9hZFByb2R1Y3QiLCJzZWFyY2hQcm9kdWN0Iiwid2F0Y2hMb2FkUHJvZHVjdCIsIndhdGNoU2VhcmNoUHJvZHVjdCIsInRha2VMYXRlc3QiLCJjYWxsIiwicmVzdWx0IiwicHV0IiwidHlwZSIsImRhdGEiLCJjb25zb2xlIiwiZXJyb3IiLCJyZXNwb25zZSIsImF4aW9zIiwiZ2V0IiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttR0FHeUJBLFc7O0FBSHpCO0FBQ0E7QUFFZSxTQUFVQSxXQUFWO0FBQUEsNkNBQ0ZDLGNBREUsRUFNREMsV0FOQyxFQXNCREMsYUF0QkMsRUEyQ0RDLGdCQTNDQyxFQThDREMsa0JBOUNDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBOENEQSw0QkE5Q0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBK0NULDJCQUFNQywyRUFBVSxDQUFDLHdCQUFELEVBQTJCSCxhQUEzQixDQUFoQjs7QUEvQ1M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBMkNEQywwQkEzQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBNENULDJCQUFNRSwyRUFBVSxDQUFDLHNCQUFELEVBQXlCSixXQUF6QixDQUFoQjs7QUE1Q1M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBc0JEQyx1QkF0QkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXdCVSwyQkFBTUkscUVBQUksQ0FBQ04sY0FBRCxDQUFWOztBQXhCVjtBQXdCQ08sMEJBeEJEO0FBQUE7QUE2QkwsMkJBQU1DLG9FQUFHLENBQUM7QUFDUkMsMEJBQUksRUFBRSx3QkFERTtBQUVSQywwQkFBSSxFQUFFSCxNQUFNLENBQUNHO0FBRkwscUJBQUQsQ0FBVDs7QUE3Qks7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWtDTEMsMkJBQU8sQ0FBQ0MsS0FBUjtBQWxDSztBQW1DTCwyQkFBTUosb0VBQUcsQ0FBQztBQUNSQywwQkFBSSxFQUFFLHdCQURFO0FBRVJHLDJCQUFLLEVBQUUsYUFBSUMsUUFBSixDQUFhSDtBQUZaLHFCQUFELENBQVQ7O0FBbkNLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1EVCxxQkFOQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUVUsMkJBQU1LLHFFQUFJLENBQUNOLGNBQUQsQ0FBVjs7QUFSVjtBQVFDTywwQkFSRDtBQUFBO0FBU0wsMkJBQU1DLG9FQUFHLENBQUM7QUFDUkMsMEJBQUksRUFBRSxzQkFERTtBQUVSQywwQkFBSSxFQUFFSCxNQUFNLENBQUNHO0FBRkwscUJBQUQsQ0FBVDs7QUFUSztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBY0xDLDJCQUFPLENBQUNDLEtBQVI7QUFkSztBQWVMLDJCQUFNSixvRUFBRyxDQUFDO0FBQ1JDLDBCQUFJLEVBQUUsc0JBREU7QUFFUkcsMkJBQUssRUFBRSxZQUFJQyxRQUFKLENBQWFIO0FBRloscUJBQUQsQ0FBVDs7QUFmSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDRlYsd0JBREUsOEJBQ2M7QUFDckIsbUJBQU9jLDRDQUFLLENBQUNDLEdBQU4scUNBQVA7QUFDSCxXQUhVOztBQUFBLHdHQU1EZCxXQU5DLGtHQXNCREMsYUF0QkMsa0dBMkNEQyxnQkEzQ0Msa0dBOENEQyxrQkE5Q0M7QUFBQTtBQWtEWCxpQkFBTVksb0VBQUcsQ0FBQyxDQUNOQyxxRUFBSSxDQUFDZCxnQkFBRCxDQURFLEVBRU5jLHFFQUFJLENBQUNiLGtCQUFELENBRkUsQ0FBRCxDQUFUOztBQWxEVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjQzODU1Yjk0NTNiMTc3ODdhODhhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGwsIGZvcmssIHRha2VMYXRlc3QsIGRlbGF5LCBwdXQsIGNhbGwgfSBmcm9tIFwiQHJlZHV4LXNhZ2EvY29yZS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwcm9kdWN0U2FnYSgpe1xyXG4gICAgZnVuY3Rpb24gbG9hZFByb2R1Y3RBUEkoKXtcclxuICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KGBodHRwczovL2Zha2VzdG9yZWFwaS5jb20vcHJvZHVjdHNgKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24qIGxvYWRQcm9kdWN0KCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQcm9kdWN0QVBJKTtcclxuICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdMT0FEX1BST0RVQ1RfU1VDQ0VTUycsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiAnTE9BRF9QUk9EVUNUX0ZBSUxVUkUnLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiogc2VhcmNoUHJvZHVjdCgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUHJvZHVjdEFQSSk7XHJcbiAgICAgICAgICAvLyByZXN1bHQuZGF0YS5maWx0ZXIoKGl0ZW0pPT57XHJcbiAgICAgICAgICAvLyAgICAgICAgICByZXR1cm4gaXRlbS50aXRsZS50b0xvY2FsZVVwcGVyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFZhbC50b0xvY2FsZVVwcGVyQ2FzZSgpKVxyXG4gICAgICAgICAgLy8gICAgICAgICB9KTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdTRUFSQ0hfUFJPRFVDVF9TVUNDRVNTJyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdTRUFSQ0hfUFJPRFVDVF9GQUlMVVJFJyxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBcclxuICAgIGZ1bmN0aW9uKiB3YXRjaExvYWRQcm9kdWN0KCl7XHJcbiAgICAgIHlpZWxkIHRha2VMYXRlc3QoJ0xPQURfUFJPRFVDVF9SRVFVRVNUJywgbG9hZFByb2R1Y3QpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24qIHdhdGNoU2VhcmNoUHJvZHVjdCgpe1xyXG4gICAgICB5aWVsZCB0YWtlTGF0ZXN0KCdTRUFSQ0hfUFJPRFVDVF9SRVFVRVNUJywgc2VhcmNoUHJvZHVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZFByb2R1Y3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hTZWFyY2hQcm9kdWN0KVxyXG4gICAgXSk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9