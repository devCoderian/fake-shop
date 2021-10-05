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
                    // result.data.filter((item)=>{
                    //          return item.title.toLocaleUpperCase().includes(searchVal.toLocaleUpperCase())
                    //         });
                    console.log(result.data);
                    _context2.next = 7;
                    return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: 'SEARCH_PRODUCT_SUCCESS',
                      data: result.data.filter(function (item) {
                        return item.title.toLocaleUpperCase().includes(searchVal.toLocaleUpperCase());
                      })
                    });

                  case 7:
                    _context2.next = 14;
                    break;

                  case 9:
                    _context2.prev = 9;
                    _context2.t0 = _context2["catch"](0);
                    console.error(_context2.t0);
                    _context2.next = 14;
                    return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: 'SEARCH_PRODUCT_FAILURE',
                      error: _context2.t0.response.data
                    });

                  case 14:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _marked2, null, [[0, 9]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJwcm9kdWN0U2FnYSIsImxvYWRQcm9kdWN0QVBJIiwibG9hZFByb2R1Y3QiLCJzZWFyY2hQcm9kdWN0Iiwid2F0Y2hMb2FkUHJvZHVjdCIsIndhdGNoU2VhcmNoUHJvZHVjdCIsInRha2VMYXRlc3QiLCJzZWFyY2hWYWwiLCJjYWxsIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJwdXQiLCJ0eXBlIiwiZmlsdGVyIiwiaXRlbSIsInRpdGxlIiwidG9Mb2NhbGVVcHBlckNhc2UiLCJpbmNsdWRlcyIsImVycm9yIiwicmVzcG9uc2UiLCJheGlvcyIsImdldCIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUdBR3lCQSxXOztBQUh6QjtBQUNBO0FBRWUsU0FBVUEsV0FBVjtBQUFBLDZDQUNGQyxjQURFLEVBS0RDLFdBTEMsRUFxQkRDLGFBckJDLEVBMENEQyxnQkExQ0MsRUE2Q0RDLGtCQTdDQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTZDREEsNEJBN0NDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQThDVCwyQkFBTUMsMkVBQVUsQ0FBQyx3QkFBRCxFQUEyQkgsYUFBM0IsQ0FBaEI7O0FBOUNTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQTBDREMsMEJBMUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTJDVCwyQkFBTUUsMkVBQVUsQ0FBQyxzQkFBRCxFQUF5QkosV0FBekIsQ0FBaEI7O0FBM0NTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXFCREMsdUJBckJDLDJCQXFCYUksU0FyQmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXVCVSwyQkFBTUMscUVBQUksQ0FBQ1AsY0FBRCxDQUFWOztBQXZCVjtBQXVCQ1EsMEJBdkJEO0FBd0JMO0FBQ0E7QUFDQTtBQUNBQywyQkFBTyxDQUFDQyxHQUFSLENBQWFGLE1BQU0sQ0FBQ0csSUFBcEI7QUEzQks7QUE0QkwsMkJBQU1DLG9FQUFHLENBQUM7QUFDUkMsMEJBQUksRUFBRSx3QkFERTtBQUVSRiwwQkFBSSxFQUFFSCxNQUFNLENBQUNHLElBQVAsQ0FBWUcsTUFBWixDQUFtQixVQUFDQyxJQUFEO0FBQUEsK0JBQVFBLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxpQkFBWCxHQUErQkMsUUFBL0IsQ0FBd0NaLFNBQVMsQ0FBQ1csaUJBQVYsRUFBeEMsQ0FBUjtBQUFBLHVCQUFuQjtBQUZFLHFCQUFELENBQVQ7O0FBNUJLO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFpQ0xSLDJCQUFPLENBQUNVLEtBQVI7QUFqQ0s7QUFrQ0wsMkJBQU1QLG9FQUFHLENBQUM7QUFDUkMsMEJBQUksRUFBRSx3QkFERTtBQUVSTSwyQkFBSyxFQUFFLGFBQUlDLFFBQUosQ0FBYVQ7QUFGWixxQkFBRCxDQUFUOztBQWxDSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFLRFYscUJBTEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9VLDJCQUFNTSxxRUFBSSxDQUFDUCxjQUFELENBQVY7O0FBUFY7QUFPQ1EsMEJBUEQ7QUFBQTtBQVFMLDJCQUFNSSxvRUFBRyxDQUFDO0FBQ1JDLDBCQUFJLEVBQUUsc0JBREU7QUFFUkYsMEJBQUksRUFBRUgsTUFBTSxDQUFDRztBQUZMLHFCQUFELENBQVQ7O0FBUks7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWFMRiwyQkFBTyxDQUFDVSxLQUFSO0FBYks7QUFjTCwyQkFBTVAsb0VBQUcsQ0FBQztBQUNSQywwQkFBSSxFQUFFLHNCQURFO0FBRVJNLDJCQUFLLEVBQUUsWUFBSUMsUUFBSixDQUFhVDtBQUZaLHFCQUFELENBQVQ7O0FBZEs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0ZYLHdCQURFLDhCQUNjO0FBQ3JCLG1CQUFPcUIsNENBQUssQ0FBQ0MsR0FBTixxQ0FBUDtBQUNILFdBSFU7O0FBQUEsd0dBS0RyQixXQUxDLGtHQXFCREMsYUFyQkMsa0dBMENEQyxnQkExQ0Msa0dBNkNEQyxrQkE3Q0M7QUFBQTtBQWlEWCxpQkFBTW1CLG9FQUFHLENBQUMsQ0FDTkMscUVBQUksQ0FBQ3JCLGdCQUFELENBREUsRUFFTnFCLHFFQUFJLENBQUNwQixrQkFBRCxDQUZFLENBQUQsQ0FBVDs7QUFqRFc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC41MmY4MmNhMmRjYzg4MzVkODA0Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsLCBmb3JrLCB0YWtlTGF0ZXN0LCBkZWxheSwgcHV0LCBjYWxsIH0gZnJvbSBcIkByZWR1eC1zYWdhL2NvcmUvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcHJvZHVjdFNhZ2EoKXtcclxuICAgIGZ1bmN0aW9uIGxvYWRQcm9kdWN0QVBJKCl7XHJcbiAgICAgICAgcmV0dXJuIGF4aW9zLmdldChgaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL3Byb2R1Y3RzYCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24qIGxvYWRQcm9kdWN0KCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQcm9kdWN0QVBJKTtcclxuICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdMT0FEX1BST0RVQ1RfU1VDQ0VTUycsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiAnTE9BRF9QUk9EVUNUX0ZBSUxVUkUnLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiogc2VhcmNoUHJvZHVjdChzZWFyY2hWYWwpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUHJvZHVjdEFQSSk7XHJcbiAgICAgICAgICAvLyByZXN1bHQuZGF0YS5maWx0ZXIoKGl0ZW0pPT57XHJcbiAgICAgICAgICAvLyAgICAgICAgICByZXR1cm4gaXRlbS50aXRsZS50b0xvY2FsZVVwcGVyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFZhbC50b0xvY2FsZVVwcGVyQ2FzZSgpKVxyXG4gICAgICAgICAgLy8gICAgICAgICB9KTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCByZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiAnU0VBUkNIX1BST0RVQ1RfU1VDQ0VTUycsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmZpbHRlcigoaXRlbSk9Pml0ZW0udGl0bGUudG9Mb2NhbGVVcHBlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hWYWwudG9Mb2NhbGVVcHBlckNhc2UoKSkpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiAnU0VBUkNIX1BST0RVQ1RfRkFJTFVSRScsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgXHJcbiAgICBmdW5jdGlvbiogd2F0Y2hMb2FkUHJvZHVjdCgpe1xyXG4gICAgICB5aWVsZCB0YWtlTGF0ZXN0KCdMT0FEX1BST0RVQ1RfUkVRVUVTVCcsIGxvYWRQcm9kdWN0KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uKiB3YXRjaFNlYXJjaFByb2R1Y3QoKXtcclxuICAgICAgeWllbGQgdGFrZUxhdGVzdCgnU0VBUkNIX1BST0RVQ1RfUkVRVUVTVCcsIHNlYXJjaFByb2R1Y3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRQcm9kdWN0KSxcclxuICAgICAgICBmb3JrKHdhdGNoU2VhcmNoUHJvZHVjdClcclxuICAgIF0pO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==