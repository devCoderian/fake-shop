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
      height: '100%',
      borderRight: 0
    },
    selectable: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "1",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["UnorderedListOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 42
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx(Search, {
    placeholder: "input search text",
    onSearch: onSearch,
    enterButton: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  })), __jsx(SubMenu, {
    key: "sub1",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["UnorderedListOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 41
      }
    }),
    title: "Product",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, "All"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, "Mens"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, "Womens"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, "jewelery"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "7",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, "electronics")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 18,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
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
            lineNumber: 82,
            columnNumber: 21
          }
        }), me && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartOutlined"], {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 40
            }
          }),
          onClick: function onClick() {
            return addCart(item);
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83,
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
            lineNumber: 87,
            columnNumber: 21
          }
        }),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 17
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item.Meta, {
        title: __jsx("a", {
          href: item.href,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 28
          }
        }, item.title),
        description: item.description,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 21
        }
      }), item.content);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJJbnB1dCIsIlN1Yk1lbnUiLCJNZW51IiwiUHJvZHVjdExpc3QiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicHJvZHVjdCIsIlByb2R1Y3RzIiwibG9hZFByb2R1Y3RMb2FkaW5nIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZXIiLCJtZSIsIkxvYWRQcm9kdWN0IiwidXNlQ2FsbGJhY2siLCJMb2FkUHJvZHVjdEFjdGlvbiIsImFkZENhcnQiLCJpdGVtIiwiY29uc29sZSIsImxvZyIsImFkZENhcnRBY3Rpb24iLCJ1c2VFZmZlY3QiLCJJY29uVGV4dCIsImljb24iLCJ0ZXh0IiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50Iiwib25TZWFyY2giLCJzdHlsZSIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwibWFyZ2luQm90dG9tIiwiaGVpZ2h0IiwiYm9yZGVyUmlnaHQiLCJvbkNoYW5nZSIsInBhZ2UiLCJwYWdlU2l6ZSIsImlkIiwiRG9sbGFyQ2lyY2xlT3V0bGluZWQiLCJwcmljZSIsImltYWdlIiwiaHJlZiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQVFBLE1BQVIsR0FBbUJDLDBDQUFuQixDQUFRRCxNQUFSO0FBQ0EsSUFBUUUsT0FBUixHQUFvQkMseUNBQXBCLENBQVFELE9BQVI7O0FBQ0EsSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUd4QixxQkFBMENDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsT0FBVjtBQUFBLEdBQU4sQ0FBckQ7QUFBQSxNQUFRQyxRQUFSLGdCQUFRQSxRQUFSO0FBQUEsTUFBa0JDLGtCQUFsQixnQkFB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QUUsTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQWQ7QUFBd0MsaUJBQU8sRUFBRTtBQUFBLG1CQUFLSSxPQUFPLENBQUNDLElBQUQsQ0FBWjtBQUFBLFdBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGSSxDQUZiO0FBT0ksYUFBSyxFQUNMO0FBQ0ksZUFBSyxFQUFFLEdBRFg7QUFFSSxnQkFBTSxFQUFHLEdBRmI7QUFHSSxhQUFHLEVBQUMsTUFIUjtBQUlJLGFBQUcsRUFBRUEsSUFBSSxDQUFDdUIsS0FKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWdCSSxNQUFDLHlDQUFELENBQU0sSUFBTixDQUFXLElBQVg7QUFDQSxhQUFLLEVBQUU7QUFBRyxjQUFJLEVBQUV2QixJQUFJLENBQUN3QixJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBcUJ4QixJQUFJLENBQUN5QixLQUExQixDQURQO0FBRUEsbUJBQVcsRUFBRXpCLElBQUksQ0FBQzBCLFdBRmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFoQkosRUFvQksxQixJQUFJLENBQUMyQixPQXBCVixDQURnQjtBQUFBLEtBWHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGQSxDQXRCQSxDQURGLENBREY7QUFrRUgsQ0FqR0Q7O0dBQU16QyxXO1VBR3NDQyx1RCxFQUN6Qk0sdUQsRUFDRk4sdUQ7OztLQUxYRCxXO0FBa0dTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0Ljc2M2I1MGRkM2VjMWU1MzQ2ODg3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMaXN0LCBCdXR0b24sIFNwYWNlLCAgUm93LCBDb2wsIElucHV0LCBNZW51fSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgeyBEb2xsYXJDaXJjbGVPdXRsaW5lZCwgSGVhcnRPdXRsaW5lZCwgSGVhcnRUd29Ub25lLCBTaG9wcGluZ0NhcnRPdXRsaW5lZCAsIFVub3JkZXJlZExpc3RPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCwgc2hhbGxvd0VxdWFsfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IExvYWRQcm9kdWN0QWN0aW9uIH0gZnJvbSAnLi4vcmVkdWNlcnMvcHJvZHVjdCc7XHJcbmltcG9ydCB7IGFkZENhcnRBY3Rpb24gfSBmcm9tICcuLi9yZWR1Y2Vycy9jYXJ0JztcclxuY29uc3QgeyBTZWFyY2ggfSA9IElucHV0O1xyXG5jb25zdCB7IFN1Yk1lbnUgfSA9IE1lbnU7XHJcbmNvbnN0IFByb2R1Y3RMaXN0ID0gKCkgPT4ge1xyXG4gIFxyXG5cclxuICBjb25zdCB7IFByb2R1Y3RzLCBsb2FkUHJvZHVjdExvYWRpbmcgfSAgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5wcm9kdWN0KTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gIGNvbnN0IExvYWRQcm9kdWN0ID0gdXNlQ2FsbGJhY2soKCkgPT57XHJcbiAgICBkaXNwYXRjaChMb2FkUHJvZHVjdEFjdGlvbigpKTtcclxuICB9LFtdKTtcclxuXHJcblxyXG4gIGNvbnN0IGFkZENhcnQgPSB1c2VDYWxsYmFjaygoaXRlbSkgPT57XHJcbiAgICBjb25zb2xlLmxvZygnaXRlbScsaXRlbSlcclxuICAgIGRpc3BhdGNoKGFkZENhcnRBY3Rpb24oaXRlbSkpO1xyXG4gIH0sW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgTG9hZFByb2R1Y3QoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgSWNvblRleHQgPSAoeyBpY29uLCB0ZXh0IH0pID0+IChcclxuICAgICAgPFNwYWNlPlxyXG4gICAgICAgIHtSZWFjdC5jcmVhdGVFbGVtZW50KGljb24pfVxyXG4gICAgICAgIHt0ZXh0fVxyXG4gICAgICA8L1NwYWNlPlxyXG4gICAgKTtcclxuICAgIGNvbnN0IG9uU2VhcmNoID0gKCkgPT57XHJcblxyXG4gICAgfVxyXG4gICAgY29uc3Qgc3R5bGUgPSB7IGJhY2tncm91bmQ6ICcjZmZmJywgcGFkZGluZzogJzhweCAyMHB4JyxtYXJnaW5Cb3R0b206ICc2MHB4J307XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxSb3cgZ3V0dGVyID17WzQ4LCA0OF19IGp1c3RpZnk9XCJjZW50ZXJcIj5cclxuICAgICAgICA8Q29sIHNwYW4gPSB7Nn0+XHJcbiAgICAgIFxyXG4gICAgICAgIDxNZW51XHJcbiAgICAgICAgICAgICAgbW9kZT1cImlubGluZVwiXHJcbiAgICAgICAgICAgICAgZGVmYXVsdE9wZW5LZXlzPXtbJ3N1YjEnXX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgYm9yZGVyUmlnaHQ6IDAgfX1cclxuICAgICAgICAgICAgICBzZWxlY3RhYmxlID17ZmFsc2V9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiMVwiIGljb249ezxVbm9yZGVyZWRMaXN0T3V0bGluZWQgLz59PlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaCBwbGFjZWhvbGRlcj1cImlucHV0IHNlYXJjaCB0ZXh0XCIgb25TZWFyY2g9e29uU2VhcmNofSBlbnRlckJ1dHRvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgPFN1Yk1lbnUga2V5PVwic3ViMVwiIGljb249ezxVbm9yZGVyZWRMaXN0T3V0bGluZWQgLz59IHRpdGxlPVwiUHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiM1wiPkFsbDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiNFwiPk1lbnM8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjVcIj5Xb21lbnM8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjZcIj5qZXdlbGVyeTwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiN1wiPmVsZWN0cm9uaWNzPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L1N1Yk1lbnU+XHJcbiAgICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgIDwvQ29sPiBcclxuICAgICAgIFxyXG4gICAgICAgIDxDb2wgc3BhbiA9IHsxOH0+XHJcbiAgICAgICBcclxuICAgICAgICA8TGlzdCAgIHN0eWxlPXtzdHlsZX1cclxuICAgICAgICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IHBhZ2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBhZ2VTaXplOiA1LFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGxvYWRpbmcgPSB7bG9hZFByb2R1Y3RMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17UHJvZHVjdHN9XHJcbiAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IChcclxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uVGV4dCBpY29uPXtEb2xsYXJDaXJjbGVPdXRsaW5lZH0gdGV4dD17aXRlbS5wcmljZX0ga2V5PVwibGlzdC12ZXJ0aWNhbC1zdGFyLW9cIiAvPixcclxuICAgICAgICAgICAgICAgICAgICBtZSYmIDxCdXR0b24gaWNvbj17PFNob3BwaW5nQ2FydE91dGxpbmVkIC8+fSBvbkNsaWNrPXsoKSA9PmFkZENhcnQoaXRlbSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPixcclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgIGV4dHJhPXtcclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxNTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9nb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtLk1ldGFcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17PGEgaHJlZj17aXRlbS5ocmVmfT57aXRlbS50aXRsZX08L2E+fVxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtpdGVtLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uY29udGVudH1cclxuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdFxyXG4iXSwic291cmNlUm9vdCI6IiJ9