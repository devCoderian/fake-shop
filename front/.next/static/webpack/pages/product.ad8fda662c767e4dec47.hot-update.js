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
  }, __jsx(Search, {
    placeholder: "input search text",
    onSearch: onSearch,
    enterButton: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 18,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    mode: "inline",
    defaultOpenKeys: ['sub1'],
    style: {
      height: '100%',
      borderRight: 0
    },
    selectable: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx(SubMenu, {
    key: "sub1",
    icon: __jsx(UnorderedListOutlined, {
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
  }, __jsx(Link, {
    href: "/product",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 40
    }
  }, "All")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, __jsx(Link, {
    href: "/product",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 40
    }
  }, "Mens")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, __jsx(Link, {
    href: "/product",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 40
    }
  }, "Womens")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, __jsx(Link, {
    href: "/product/category/jewelery",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 40
    }
  }, "jewelery")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "7",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, __jsx(Link, {
    href: "/product",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 40
    }
  }, "electronics")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
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
            lineNumber: 77,
            columnNumber: 21
          }
        }), me && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartOutlined"], {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 40
            }
          }),
          onClick: function onClick() {
            return addCart(item);
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78,
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
            lineNumber: 82,
            columnNumber: 21
          }
        }),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item.Meta, {
        title: __jsx("a", {
          href: item.href,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 28
          }
        }, item.title),
        description: item.description,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }
      }), item.content);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJJbnB1dCIsIlN1Yk1lbnUiLCJNZW51IiwiUHJvZHVjdExpc3QiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicHJvZHVjdCIsIlByb2R1Y3RzIiwibG9hZFByb2R1Y3RMb2FkaW5nIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZXIiLCJtZSIsIkxvYWRQcm9kdWN0IiwidXNlQ2FsbGJhY2siLCJMb2FkUHJvZHVjdEFjdGlvbiIsImFkZENhcnQiLCJpdGVtIiwiY29uc29sZSIsImxvZyIsImFkZENhcnRBY3Rpb24iLCJ1c2VFZmZlY3QiLCJJY29uVGV4dCIsImljb24iLCJ0ZXh0IiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50Iiwib25TZWFyY2giLCJzdHlsZSIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwibWFyZ2luQm90dG9tIiwiaGVpZ2h0IiwiYm9yZGVyUmlnaHQiLCJvbkNoYW5nZSIsInBhZ2UiLCJwYWdlU2l6ZSIsImlkIiwiRG9sbGFyQ2lyY2xlT3V0bGluZWQiLCJwcmljZSIsImltYWdlIiwiaHJlZiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQVFBLE1BQVIsR0FBbUJDLDBDQUFuQixDQUFRRCxNQUFSO0FBQ0EsSUFBUUUsT0FBUixHQUFvQkMseUNBQXBCLENBQVFELE9BQVI7O0FBQ0EsSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUd4QixxQkFBMENDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsT0FBVjtBQUFBLEdBQU4sQ0FBckQ7QUFBQSxNQUFRQyxRQUFSLGdCQUFRQSxRQUFSO0FBQUEsTUFBa0JDLGtCQUFsQixnQkFB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RjtBQTZESCxDQTVGRDs7R0FBTXpDLFc7VUFHc0NDLHVELEVBQ3pCTSx1RCxFQUNGTix1RDs7O0tBTFhELFc7QUE2RlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3QuYWQ4ZmRhNjYyYzc2N2U0ZGVjNDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpc3QsIEJ1dHRvbiwgU3BhY2UsICBSb3csIENvbCwgSW5wdXQsIE1lbnV9IGZyb20gJ2FudGQnXHJcbmltcG9ydCB7IERvbGxhckNpcmNsZU91dGxpbmVkLCBIZWFydE91dGxpbmVkLCBIZWFydFR3b1RvbmUsIFNob3BwaW5nQ2FydE91dGxpbmVkICB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCwgc2hhbGxvd0VxdWFsfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IExvYWRQcm9kdWN0QWN0aW9uIH0gZnJvbSAnLi4vcmVkdWNlcnMvcHJvZHVjdCc7XHJcbmltcG9ydCB7IGFkZENhcnRBY3Rpb24gfSBmcm9tICcuLi9yZWR1Y2Vycy9jYXJ0JztcclxuY29uc3QgeyBTZWFyY2ggfSA9IElucHV0O1xyXG5jb25zdCB7IFN1Yk1lbnUgfSA9IE1lbnU7XHJcbmNvbnN0IFByb2R1Y3RMaXN0ID0gKCkgPT4ge1xyXG4gIFxyXG5cclxuICBjb25zdCB7IFByb2R1Y3RzLCBsb2FkUHJvZHVjdExvYWRpbmcgfSAgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5wcm9kdWN0KTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gIGNvbnN0IExvYWRQcm9kdWN0ID0gdXNlQ2FsbGJhY2soKCkgPT57XHJcbiAgICBkaXNwYXRjaChMb2FkUHJvZHVjdEFjdGlvbigpKTtcclxuICB9LFtdKTtcclxuXHJcblxyXG4gIGNvbnN0IGFkZENhcnQgPSB1c2VDYWxsYmFjaygoaXRlbSkgPT57XHJcbiAgICBjb25zb2xlLmxvZygnaXRlbScsaXRlbSlcclxuICAgIGRpc3BhdGNoKGFkZENhcnRBY3Rpb24oaXRlbSkpO1xyXG4gIH0sW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgTG9hZFByb2R1Y3QoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgSWNvblRleHQgPSAoeyBpY29uLCB0ZXh0IH0pID0+IChcclxuICAgICAgPFNwYWNlPlxyXG4gICAgICAgIHtSZWFjdC5jcmVhdGVFbGVtZW50KGljb24pfVxyXG4gICAgICAgIHt0ZXh0fVxyXG4gICAgICA8L1NwYWNlPlxyXG4gICAgKTtcclxuICAgIGNvbnN0IG9uU2VhcmNoID0gKCkgPT57XHJcblxyXG4gICAgfVxyXG4gICAgY29uc3Qgc3R5bGUgPSB7IGJhY2tncm91bmQ6ICcjZmZmJywgcGFkZGluZzogJzhweCAyMHB4JyxtYXJnaW5Cb3R0b206ICc2MHB4J307XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxSb3cgZ3V0dGVyID17WzQ4LCA0OF19IGp1c3RpZnk9XCJjZW50ZXJcIj5cclxuICAgICAgICA8Q29sIHNwYW4gPSB7Nn0+XHJcbiAgICAgICAgPFNlYXJjaCBwbGFjZWhvbGRlcj1cImlucHV0IHNlYXJjaCB0ZXh0XCIgb25TZWFyY2g9e29uU2VhcmNofSBlbnRlckJ1dHRvbiAvPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgc3BhbiA9IHsxOH0+XHJcbiAgICAgICAgPE1lbnVcclxuICAgICAgICAgICAgICBtb2RlPVwiaW5saW5lXCJcclxuICAgICAgICAgICAgICBkZWZhdWx0T3BlbktleXM9e1snc3ViMSddfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCBib3JkZXJSaWdodDogMCB9fVxyXG4gICAgICAgICAgICAgIHNlbGVjdGFibGUgPXtmYWxzZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxTdWJNZW51IGtleT1cInN1YjFcIiBpY29uPXs8VW5vcmRlcmVkTGlzdE91dGxpbmVkIC8+fSB0aXRsZT1cIlByb2R1Y3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjNcIj48TGluayBocmVmID1cIi9wcm9kdWN0XCI+QWxsPC9MaW5rPjwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiNFwiPjxMaW5rIGhyZWYgPVwiL3Byb2R1Y3RcIj5NZW5zPC9MaW5rPjwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiNVwiPjxMaW5rIGhyZWYgPVwiL3Byb2R1Y3RcIj5Xb21lbnM8L0xpbms+PC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCI2XCI+PExpbmsgaHJlZiA9XCIvcHJvZHVjdC9jYXRlZ29yeS9qZXdlbGVyeVwiPmpld2VsZXJ5PC9MaW5rPjwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiN1wiPjxMaW5rIGhyZWYgPVwiL3Byb2R1Y3RcIj5lbGVjdHJvbmljczwvTGluaz48L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvU3ViTWVudT5cclxuICAgICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgPExpc3QgICBzdHlsZT17c3R5bGV9XHJcbiAgICAgICAgICAgICAgICBpdGVtTGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb249e3tcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBwYWdlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwYWdlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwYWdlU2l6ZTogNSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nID0ge2xvYWRQcm9kdWN0TG9hZGluZ31cclxuICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e1Byb2R1Y3RzfVxyXG4gICAgICAgICAgICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICA8SWNvblRleHQgaWNvbj17RG9sbGFyQ2lyY2xlT3V0bGluZWR9IHRleHQ9e2l0ZW0ucHJpY2V9IGtleT1cImxpc3QtdmVydGljYWwtc3Rhci1vXCIgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgbWUmJiA8QnV0dG9uIGljb249ezxTaG9wcGluZ0NhcnRPdXRsaW5lZCAvPn0gb25DbGljaz17KCkgPT5hZGRDYXJ0KGl0ZW0pfT5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj4sXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICBleHRyYT17XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxvZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbS5NZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxhIGhyZWY9e2l0ZW0uaHJlZn0+e2l0ZW0udGl0bGV9PC9hPn1cclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3RcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==