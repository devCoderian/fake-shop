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
var SubMenu = antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].SubMenu;

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
    gutter: [48, 48],
    justify: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    mode: "inline",
    defaultOpenKeys: ['sub1'],
    style: {
      borderRight: 0
    },
    selectable: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, __jsx(Search, {
    placeholder: "input search text",
    onSearch: onSearch,
    enterButton: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  })), __jsx(SubMenu, {
    key: "sub1",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["UnorderedListOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 41
      }
    }),
    title: "Product",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, "All"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, "Mens"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, "Womens"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, "jewelery"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "7",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, "electronics")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 18,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
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
            lineNumber: 81,
            columnNumber: 21
          }
        }), me && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartOutlined"], {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 40
            }
          }),
          onClick: function onClick() {
            return addCart(item);
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82,
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
            lineNumber: 86,
            columnNumber: 21
          }
        }),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 17
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item.Meta, {
        title: __jsx("a", {
          href: item.href,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 28
          }
        }, item.title),
        description: item.description,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 21
        }
      }), item.content);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJJbnB1dCIsIlN1Yk1lbnUiLCJNZW51IiwiUHJvZHVjdExpc3QiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicHJvZHVjdCIsIlByb2R1Y3RzIiwibG9hZFByb2R1Y3RMb2FkaW5nIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZXIiLCJtZSIsIkxvYWRQcm9kdWN0IiwidXNlQ2FsbGJhY2siLCJMb2FkUHJvZHVjdEFjdGlvbiIsImFkZENhcnQiLCJpdGVtIiwiY29uc29sZSIsImxvZyIsImFkZENhcnRBY3Rpb24iLCJ1c2VFZmZlY3QiLCJJY29uVGV4dCIsImljb24iLCJ0ZXh0IiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50Iiwib25TZWFyY2giLCJzdHlsZSIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwibWFyZ2luQm90dG9tIiwiYm9yZGVyUmlnaHQiLCJvbkNoYW5nZSIsInBhZ2UiLCJwYWdlU2l6ZSIsImlkIiwiRG9sbGFyQ2lyY2xlT3V0bGluZWQiLCJwcmljZSIsImltYWdlIiwiaHJlZiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQVFBLE1BQVIsR0FBbUJDLDBDQUFuQixDQUFRRCxNQUFSO0FBQ0EsSUFBUUUsT0FBUixHQUFvQkMseUNBQXBCLENBQVFELE9BQVI7O0FBQ0EsSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUd4QixxQkFBMENDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsT0FBVjtBQUFBLEdBQU4sQ0FBckQ7QUFBQSxNQUFRQyxRQUFSLGdCQUFRQSxRQUFSO0FBQUEsTUFBa0JDLGtCQUFsQixnQkFBa0JBLGtCQUFs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QVo7QUFBQSxXQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRkksQ0FGYjtBQU9JLGFBQUssRUFDTDtBQUNJLGVBQUssRUFBRSxHQURYO0FBRUksZ0JBQU0sRUFBRyxHQUZiO0FBR0ksYUFBRyxFQUFDLE1BSFI7QUFJSSxhQUFHLEVBQUVBLElBQUksQ0FBQ3NCLEtBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FnQkksTUFBQyx5Q0FBRCxDQUFNLElBQU4sQ0FBVyxJQUFYO0FBQ0EsYUFBSyxFQUFFO0FBQUcsY0FBSSxFQUFFdEIsSUFBSSxDQUFDdUIsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXFCdkIsSUFBSSxDQUFDd0IsS0FBMUIsQ0FEUDtBQUVBLG1CQUFXLEVBQUV4QixJQUFJLENBQUN5QixXQUZsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBaEJKLEVBb0JLekIsSUFBSSxDQUFDMEIsT0FwQlYsQ0FEZ0I7QUFBQSxLQVh4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkEsQ0FyQkEsQ0FERixDQURGO0FBaUVILENBaEdEOztHQUFNeEMsVztVQUdzQ0MsdUQsRUFDekJNLHVELEVBQ0ZOLHVEOzs7S0FMWEQsVztBQWlHU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC5hY2NlYmQ3YWQ0OTI1MWQ5NGExYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGlzdCwgQnV0dG9uLCBTcGFjZSwgIFJvdywgQ29sLCBJbnB1dCwgTWVudX0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IHsgRG9sbGFyQ2lyY2xlT3V0bGluZWQsIEhlYXJ0T3V0bGluZWQsIEhlYXJ0VHdvVG9uZSwgU2hvcHBpbmdDYXJ0T3V0bGluZWQgLCBVbm9yZGVyZWRMaXN0T3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2gsIHNoYWxsb3dFcXVhbH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBMb2FkUHJvZHVjdEFjdGlvbiB9IGZyb20gJy4uL3JlZHVjZXJzL3Byb2R1Y3QnO1xyXG5pbXBvcnQgeyBhZGRDYXJ0QWN0aW9uIH0gZnJvbSAnLi4vcmVkdWNlcnMvY2FydCc7XHJcbmNvbnN0IHsgU2VhcmNoIH0gPSBJbnB1dDtcclxuY29uc3QgeyBTdWJNZW51IH0gPSBNZW51O1xyXG5jb25zdCBQcm9kdWN0TGlzdCA9ICgpID0+IHtcclxuICBcclxuXHJcbiAgY29uc3QgeyBQcm9kdWN0cywgbG9hZFByb2R1Y3RMb2FkaW5nIH0gID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucHJvZHVjdCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICBjb25zdCBMb2FkUHJvZHVjdCA9IHVzZUNhbGxiYWNrKCgpID0+e1xyXG4gICAgZGlzcGF0Y2goTG9hZFByb2R1Y3RBY3Rpb24oKSk7XHJcbiAgfSxbXSk7XHJcblxyXG5cclxuICBjb25zdCBhZGRDYXJ0ID0gdXNlQ2FsbGJhY2soKGl0ZW0pID0+e1xyXG4gICAgY29uc29sZS5sb2coJ2l0ZW0nLGl0ZW0pXHJcbiAgICBkaXNwYXRjaChhZGRDYXJ0QWN0aW9uKGl0ZW0pKTtcclxuICB9LFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIExvYWRQcm9kdWN0KCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IEljb25UZXh0ID0gKHsgaWNvbiwgdGV4dCB9KSA9PiAoXHJcbiAgICAgIDxTcGFjZT5cclxuICAgICAgICB7UmVhY3QuY3JlYXRlRWxlbWVudChpY29uKX1cclxuICAgICAgICB7dGV4dH1cclxuICAgICAgPC9TcGFjZT5cclxuICAgICk7XHJcbiAgICBjb25zdCBvblNlYXJjaCA9ICgpID0+e1xyXG5cclxuICAgIH1cclxuICAgIGNvbnN0IHN0eWxlID0geyBiYWNrZ3JvdW5kOiAnI2ZmZicsIHBhZGRpbmc6ICc4cHggMjBweCcsbWFyZ2luQm90dG9tOiAnNjBweCd9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8Um93IGd1dHRlciA9e1s0OCwgNDhdfSBqdXN0aWZ5PVwiY2VudGVyXCI+XHJcbiAgICAgICAgPENvbCBzcGFuID0gezZ9PlxyXG4gICAgICAgIDxNZW51XHJcbiAgICAgICAgICAgICAgbW9kZT1cImlubGluZVwiXHJcbiAgICAgICAgICAgICAgZGVmYXVsdE9wZW5LZXlzPXtbJ3N1YjEnXX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJSaWdodDogMCB9fVxyXG4gICAgICAgICAgICAgIHNlbGVjdGFibGUgPXtmYWxzZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIxXCI+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoIHBsYWNlaG9sZGVyPVwiaW5wdXQgc2VhcmNoIHRleHRcIiBvblNlYXJjaD17b25TZWFyY2h9IGVudGVyQnV0dG9uIC8+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICA8U3ViTWVudSBrZXk9XCJzdWIxXCIgaWNvbj17PFVub3JkZXJlZExpc3RPdXRsaW5lZCAvPn0gdGl0bGU9XCJQcm9kdWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIzXCI+QWxsPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCI0XCI+TWVuczwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiNVwiPldvbWVuczwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiNlwiPmpld2VsZXJ5PC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCI3XCI+ZWxlY3Ryb25pY3M8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvU3ViTWVudT5cclxuICAgICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgPC9Db2w+IFxyXG4gICAgICAgXHJcbiAgICAgICAgPENvbCBzcGFuID0gezE4fT5cclxuICAgICAgIFxyXG4gICAgICAgIDxMaXN0ICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgICAgICAgICAgICAgaXRlbUxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogcGFnZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGFnZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGFnZVNpemU6IDUsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgbG9hZGluZyA9IHtsb2FkUHJvZHVjdExvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtQcm9kdWN0c31cclxuICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4gKFxyXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25UZXh0IGljb249e0RvbGxhckNpcmNsZU91dGxpbmVkfSB0ZXh0PXtpdGVtLnByaWNlfSBrZXk9XCJsaXN0LXZlcnRpY2FsLXN0YXItb1wiIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgIG1lJiYgPEJ1dHRvbiBpY29uPXs8U2hvcHBpbmdDYXJ0T3V0bGluZWQgLz59IG9uQ2xpY2s9eygpID0+YWRkQ2FydChpdGVtKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+LFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgZXh0cmE9e1xyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezE1MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID17MjAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8YSBocmVmPXtpdGVtLmhyZWZ9PntpdGVtLnRpdGxlfTwvYT59XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2l0ZW0uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=