webpackHotUpdate_N_E("pages/product",{

/***/ "./components/ProductList.js":
/*!***********************************!*\
  !*** ./components/ProductList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/product */ "./reducers/product.js");
/* harmony import */ var _reducers_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/cart */ "./reducers/cart.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\ian07\\Desktop\\react-fake-shop\\components\\ProductList.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Search = antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Search;

var ProductList = function ProductList() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.product;
  }),
      Products = _useSelector.Products,
      loadProductLoading = _useSelector.loadProductLoading;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector2.me;

  var LoadProduct = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch(Object(_reducers_product__WEBPACK_IMPORTED_MODULE_4__["LoadProductAction"])());
  }, []);
  var addCart = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (item) {
    console.log('item', item);
    dispatch(Object(_reducers_cart__WEBPACK_IMPORTED_MODULE_5__["addCartAction"])(item));
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    LoadProduct();
  }, []);

  var IconText = function IconText(_ref) {
    var icon = _ref.icon,
        text = _ref.text;
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Space"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(icon), text);
  };

  var onSearch = function onSearch() {};

  var style = {
    background: '#fff',
    padding: '8px 20px',
    marginBottom: '60px'
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: 16,
    justify: "end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx(Search, {
    style: {
      width: 200
    },
    placeholder: "input search text",
    onSearch: onSearch,
    enterButton: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: [48, 48],
    justify: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx(Search, {
    placeholder: "input search text",
    onSearch: onSearch,
    enterButton: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 18,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
    style: style,
    itemLayout: "vertical",
    size: "large",
    pagination: {
      onChange: function onChange(page) {
        console.log(page);
      },
      pageSize: 5
    },
    loading: loadProductLoading,
    dataSource: Products,
    renderItem: function renderItem(item) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
        key: item.id,
        actions: [__jsx(IconText, {
          icon: _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["DollarCircleOutlined"],
          text: item.price,
          key: "list-vertical-star-o",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 21
          }
        }), me && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartOutlined"], {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 40
            }
          }),
          onClick: function onClick() {
            return addCart(item);
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 26
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
            lineNumber: 72,
            columnNumber: 21
          }
        }),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 17
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item.Meta, {
        title: __jsx("a", {
          href: item.href,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 28
          }
        }, item.title),
        description: item.description,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }
      }), item.content);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }))));
};

_s(ProductList, "TIDS8JWsF1HDRIfFR8avzHI5uj0=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJJbnB1dCIsIlByb2R1Y3RMaXN0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInByb2R1Y3QiLCJQcm9kdWN0cyIsImxvYWRQcm9kdWN0TG9hZGluZyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VyIiwibWUiLCJMb2FkUHJvZHVjdCIsInVzZUNhbGxiYWNrIiwiTG9hZFByb2R1Y3RBY3Rpb24iLCJhZGRDYXJ0IiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJhZGRDYXJ0QWN0aW9uIiwidXNlRWZmZWN0IiwiSWNvblRleHQiLCJpY29uIiwidGV4dCIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIm9uU2VhcmNoIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsIm1hcmdpbkJvdHRvbSIsIndpZHRoIiwib25DaGFuZ2UiLCJwYWdlIiwicGFnZVNpemUiLCJpZCIsIkRvbGxhckNpcmNsZU91dGxpbmVkIiwicHJpY2UiLCJpbWFnZSIsImhyZWYiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFRQSxNQUFSLEdBQW1CQywwQ0FBbkIsQ0FBUUQsTUFBUjs7QUFFQSxJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBR3hCLHFCQUEwQ0MsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxPQUFWO0FBQUEsR0FBTixDQUFyRDtBQUFBLE1BQVFDLFFBQVIsZ0JBQVFBLFFBQVI7QUFBQSxNQUFrQkMsa0JBQWxCLGdCQUFrQkEsa0JBQWxCOztBQUNBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBQ0Esc0JBQWVOLCtEQUFXLENBQUMsVUFB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YnBhY2svcGFnZXMvcHJvZHVjdC41ZmVmYmY3NTFkYzczMTQxMjJkMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGlzdCwgQnV0dG9uLCBTcGFjZSwgIFJvdywgQ29sLCBJbnB1dH0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IHsgRG9sbGFyQ2lyY2xlT3V0bGluZWQsIEhlYXJ0T3V0bGluZWQsIEhlYXJ0VHdvVG9uZSwgU2hvcHBpbmdDYXJ0T3V0bGluZWQgIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5cclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoLCBzaGFsbG93RXF1YWx9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTG9hZFByb2R1Y3RBY3Rpb24gfSBmcm9tICcuLi9yZWR1Y2Vycy9wcm9kdWN0JztcclxuaW1wb3J0IHsgYWRkQ2FydEFjdGlvbiB9IGZyb20gJy4uL3JlZHVjZXJzL2NhcnQnO1xyXG5jb25zdCB7IFNlYXJjaCB9ID0gSW5wdXQ7XHJcblxyXG5jb25zdCBQcm9kdWN0TGlzdCA9ICgpID0+IHtcclxuICBcclxuXHJcbiAgY29uc3QgeyBQcm9kdWN0cywgbG9hZFByb2R1Y3RMb2FkaW5nIH0gID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucHJvZHVjdCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICBjb25zdCBMb2FkUHJvZHVjdCA9IHVzZUNhbGxiYWNrKCgpID0+e1xyXG4gICAgZGlzcGF0Y2goTG9hZFByb2R1Y3RBY3Rpb24oKSk7XHJcbiAgfSxbXSk7XHJcblxyXG5cclxuICBjb25zdCBhZGRDYXJ0ID0gdXNlQ2FsbGJhY2soKGl0ZW0pID0+e1xyXG4gICAgY29uc29sZS5sb2coJ2l0ZW0nLGl0ZW0pXHJcbiAgICBkaXNwYXRjaChhZGRDYXJ0QWN0aW9uKGl0ZW0pKTtcclxuICB9LFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIExvYWRQcm9kdWN0KCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IEljb25UZXh0ID0gKHsgaWNvbiwgdGV4dCB9KSA9PiAoXHJcbiAgICAgIDxTcGFjZT5cclxuICAgICAgICB7UmVhY3QuY3JlYXRlRWxlbWVudChpY29uKX1cclxuICAgICAgICB7dGV4dH1cclxuICAgICAgPC9TcGFjZT5cclxuICAgICk7XHJcbiAgICBjb25zdCBvblNlYXJjaCA9ICgpID0+e1xyXG5cclxuICAgIH1cclxuICAgIGNvbnN0IHN0eWxlID0geyBiYWNrZ3JvdW5kOiAnI2ZmZicsIHBhZGRpbmc6ICc4cHggMjBweCcsbWFyZ2luQm90dG9tOiAnNjBweCd9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgPFJvdyBndXR0ZXIgPXsxNn0ganVzdGlmeT1cImVuZFwiPlxyXG4gICAgIFxyXG4gICAgICA8U2VhcmNoIHN0eWxlPXt7IHdpZHRoOiAyMDAgfX1wbGFjZWhvbGRlcj1cImlucHV0IHNlYXJjaCB0ZXh0XCIgb25TZWFyY2g9e29uU2VhcmNofSBlbnRlckJ1dHRvbiAvPlxyXG4gICAgICA8L1Jvdz5cclxuICAgICAgICA8Um93IGd1dHRlciA9e1s0OCwgNDhdfSBqdXN0aWZ5PVwiY2VudGVyXCI+XHJcbiAgICAgICAgPENvbCBzcGFuID0gezZ9PlxyXG4gICAgICAgIDxTZWFyY2ggcGxhY2Vob2xkZXI9XCJpbnB1dCBzZWFyY2ggdGV4dFwiIG9uU2VhcmNoPXtvblNlYXJjaH0gZW50ZXJCdXR0b24gLz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHNwYW4gPSB7MTh9PlxyXG4gICAgICAgIDxMaXN0ICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgICAgICAgICAgICAgaXRlbUxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogcGFnZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGFnZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGFnZVNpemU6IDUsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgbG9hZGluZyA9IHtsb2FkUHJvZHVjdExvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtQcm9kdWN0c31cclxuICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4gKFxyXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25UZXh0IGljb249e0RvbGxhckNpcmNsZU91dGxpbmVkfSB0ZXh0PXtpdGVtLnByaWNlfSBrZXk9XCJsaXN0LXZlcnRpY2FsLXN0YXItb1wiIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgIG1lJiYgPEJ1dHRvbiBpY29uPXs8U2hvcHBpbmdDYXJ0T3V0bGluZWQgLz59IG9uQ2xpY2s9eygpID0+YWRkQ2FydChpdGVtKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+LFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgZXh0cmE9e1xyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezE1MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID17MjAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8YSBocmVmPXtpdGVtLmhyZWZ9PntpdGVtLnRpdGxlfTwvYT59XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2l0ZW0uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=