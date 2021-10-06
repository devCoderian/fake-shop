webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ProductList.js":
/*!***********************************!*\
  !*** ./components/ProductList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/product */ "./reducers/product.js");
/* harmony import */ var _reducers_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/cart */ "./reducers/cart.js");
/* harmony import */ var _ProductMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProductMenu */ "./components/ProductMenu.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\ian07\\Desktop\\fake-shop\\front\\components\\ProductList.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var ProductList = function ProductList() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.product;
  }),
      Products = _useSelector2.Products,
      loadProductLoading = _useSelector2.loadProductLoading;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var LoadProduct = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    dispatch(Object(_reducers_product__WEBPACK_IMPORTED_MODULE_5__["LoadProductAction"])(''));
  }, []);
  var addCart = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (item) {
    var product = _objectSpread(_objectSpread({}, item), {}, {
      quantity: 1
    });

    dispatch(Object(_reducers_cart__WEBPACK_IMPORTED_MODULE_6__["addCartAction"])(product));
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    LoadProduct();
  }, []);

  var IconText = function IconText(_ref) {
    var icon = _ref.icon,
        text = _ref.text;
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Space"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(icon), text);
  };

  var style = {
    background: '#fff',
    padding: '8px 20px',
    marginBottom: '60px'
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    gutter: [48, 48],
    justify: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx(_ProductMenu__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 18,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
    style: style,
    itemLayout: "vertical",
    size: "large",
    pagination: {
      pageSize: 5
    },
    loading: loadProductLoading,
    dataSource: Products,
    renderItem: function renderItem(item) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
        key: item.id,
        actions: [__jsx(IconText, {
          icon: _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["DollarCircleOutlined"],
          text: item.price,
          key: "list-vertical-star-o",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 19
          }
        }), me && __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartOutlined"], {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 38
            }
          }),
          onClick: function onClick() {
            return addCart(item);
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 24
          }
        })],
        extra: __jsx("img", {
          width: 150,
          height: 200,
          alt: "logo",
          src: item.image,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 19
          }
        }),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 15
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item.Meta, {
        title: __jsx("a", {
          href: item.href,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 26
          }
        }, item.title),
        description: item.description,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 19
        }
      }), item.content);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }))));
};

_s(ProductList, "yoOApUKhja5S7gyGpUJaljqAvG4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"]];
});

_c = ProductList;
/* harmony default export */ __webpack_exports__["default"] = (ProductList);

var _c;

$RefreshReg$(_c, "ProductList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0TGlzdCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJwcm9kdWN0IiwiUHJvZHVjdHMiLCJsb2FkUHJvZHVjdExvYWRpbmciLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiTG9hZFByb2R1Y3QiLCJ1c2VDYWxsYmFjayIsIkxvYWRQcm9kdWN0QWN0aW9uIiwiYWRkQ2FydCIsIml0ZW0iLCJxdWFudGl0eSIsImFkZENhcnRBY3Rpb24iLCJ1c2VFZmZlY3QiLCJJY29uVGV4dCIsImljb24iLCJ0ZXh0IiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsIm1hcmdpbkJvdHRvbSIsInBhZ2VTaXplIiwiaWQiLCJEb2xsYXJDaXJjbGVPdXRsaW5lZCIsInByaWNlIiwiaW1hZ2UiLCJocmVmIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUV4QixxQkFBZUMsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxJQUFWO0FBQUEsR0FBTixDQUExQjtBQUFBLE1BQVFDLEVBQVIsZ0JBQVFBLEVBQVI7O0FBQ0Esc0JBQTBDSCwrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNHLE9BQVY7QUFBQSxHQUFOLENBQXJEO0FBQUEsTUFBUUMsUUFBUixpQkFBUUEsUUFBUjtBQUFBLE1BQWtCQyxrQkFBbEIsaUJBQWtCQSxrQkFBbEI7O0FBRUEsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUVBLE1B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SUFBWDtBQUNBLGFBQUssRUFBRTtBQUFHLGNBQUksRUFBRWpCLElBQUksQ0FBQ2tCLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFxQmxCLElBQUksQ0FBQ21CLEtBQTFCLENBRFA7QUFFQSxtQkFBVyxFQUFFbkIsSUFBSSxDQUFDb0IsV0FGbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQWRKLEVBa0JLcEIsSUFBSSxDQUFDcUIsT0FsQlYsQ0FEZ0I7QUFBQSxLQU50QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsQ0FMQSxDQURGLENBREY7QUF5Q0gsQ0FyRUQ7O0dBQU1uQyxXO1VBRVdDLHVELEVBQzJCQSx1RCxFQUV6QlEsdUQ7OztLQUxiVCxXO0FBc0VTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yOWMyNTE5Y2YyYTA2ODRkNDY3MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMaXN0LCBCdXR0b24sIFNwYWNlLCAgUm93LCBDb2x9IGZyb20gJ2FudGQnXHJcbmltcG9ydCB7IERvbGxhckNpcmNsZU91dGxpbmVkLCBTaG9wcGluZ0NhcnRPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNofSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IExvYWRQcm9kdWN0QWN0aW9ufSBmcm9tICcuLi9yZWR1Y2Vycy9wcm9kdWN0JztcclxuaW1wb3J0IHsgYWRkQ2FydEFjdGlvbiB9IGZyb20gJy4uL3JlZHVjZXJzL2NhcnQnO1xyXG5pbXBvcnQgUHJvZHVjdE1lbnUgZnJvbSAnLi9Qcm9kdWN0TWVudSc7XHJcblxyXG5jb25zdCBQcm9kdWN0TGlzdCA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc3QgeyBQcm9kdWN0cywgbG9hZFByb2R1Y3RMb2FkaW5nIH0gID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucHJvZHVjdCk7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3QgTG9hZFByb2R1Y3QgPSB1c2VDYWxsYmFjaygoKSA9PntcclxuICAgIGRpc3BhdGNoKExvYWRQcm9kdWN0QWN0aW9uKCcnKSk7XHJcbiAgfSxbXSk7XHJcblxyXG4gIGNvbnN0IGFkZENhcnQgPSB1c2VDYWxsYmFjaygoaXRlbSkgPT57XHJcbiAgICBsZXQgcHJvZHVjdCA9IHsuLi5pdGVtLCBxdWFudGl0eTogMX07XHJcbiAgICBkaXNwYXRjaChhZGRDYXJ0QWN0aW9uKHByb2R1Y3QpKTtcclxuICB9LFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIExvYWRQcm9kdWN0KCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IEljb25UZXh0ID0gKHsgaWNvbiwgdGV4dCB9KSA9PiAoXHJcbiAgICAgIDxTcGFjZT5cclxuICAgICAgICB7UmVhY3QuY3JlYXRlRWxlbWVudChpY29uKX1cclxuICAgICAgICB7dGV4dH1cclxuICAgICAgPC9TcGFjZT5cclxuICAgICk7XHJcbiBcclxuICAgIGNvbnN0IHN0eWxlID0geyBiYWNrZ3JvdW5kOiAnI2ZmZicsIHBhZGRpbmc6ICc4cHggMjBweCcsbWFyZ2luQm90dG9tOiAnNjBweCd9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8Um93IGd1dHRlciA9e1s0OCwgNDhdfSBqdXN0aWZ5PVwiY2VudGVyXCI+XHJcbiAgICAgICAgPENvbCBzcGFuID0gezZ9PlxyXG4gICAgICAgICAgPFByb2R1Y3RNZW51IC8+XHJcbiAgICAgICAgPC9Db2w+IFxyXG4gICAgICAgXHJcbiAgICAgICAgPENvbCBzcGFuID0gezE4fT5cclxuICAgICAgICA8TGlzdCBzdHlsZT17c3R5bGV9XHJcbiAgICAgICAgICAgICAgaXRlbUxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgIHBhZ2luYXRpb249IHt7cGFnZVNpemU6IDUsfX1cclxuICAgICAgICAgICAgICBsb2FkaW5nID0ge2xvYWRQcm9kdWN0TG9hZGluZ31cclxuICAgICAgICAgICAgICBkYXRhU291cmNlPXtQcm9kdWN0c31cclxuICAgICAgICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IChcclxuICAgICAgICAgICAgICA8TGlzdC5JdGVtXHJcbiAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICA8SWNvblRleHQgaWNvbj17RG9sbGFyQ2lyY2xlT3V0bGluZWR9IHRleHQ9e2l0ZW0ucHJpY2V9IGtleT1cImxpc3QtdmVydGljYWwtc3Rhci1vXCIgLz4sXHJcbiAgICAgICAgICAgICAgICAgIG1lJiYgPEJ1dHRvbiBpY29uPXs8U2hvcHBpbmdDYXJ0T3V0bGluZWQgLz59IG9uQ2xpY2s9eygpID0+YWRkQ2FydChpdGVtKX0+PC9CdXR0b24+LFxyXG4gICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICBleHRyYT17XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxNTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgfT5cclxuICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbS5NZXRhXHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXs8YSBocmVmPXtpdGVtLmhyZWZ9PntpdGVtLnRpdGxlfTwvYT59XHJcbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtpdGVtLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3RcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==