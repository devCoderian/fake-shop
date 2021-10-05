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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      search = _useState[0],
      setSearch = _useState[1];

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
  var onSearch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    if (e.target.value !== '') {
      dispatch(Object(_reducers_product__WEBPACK_IMPORTED_MODULE_4__["searchProductAction"])(e.target.value));
    }
  }, []);
  var addCart = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (item) {
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
        lineNumber: 36,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(icon), text);
  }; //   useEffect(() => {
  //     let row= [];
  //     Order.forEach((data)=>{
  //         if(data.title.toLocaleUpperCase().includes(search.toLocaleUpperCase())){
  //             row.push(data); 
  //             setProducts(row);
  //         }else{
  //             return;
  //         }
  //         //배열에 추가
  //     });
  //     if(search === ""){
  //         productService.getProducts().then(data => setProducts(data));
  //     }
  //     row= [];
  //     console.log(row);
  // }, [search]);


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
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
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
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, __jsx(Search, {
    placeholder: "input search text",
    onChange: function onChange(e) {
      return onSearch(e);
    },
    onClick: function onClick(e) {
      return onSearch(e);
    },
    enterButton: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  })), __jsx(SubMenu, {
    key: "sub1",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["UnorderedListOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 41
      }
    }),
    title: "Product",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }, "All"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
    }
  }, "Mens"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    }
  }, "Womens"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }, "jewelery"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "7",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  }, "electronics")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 18,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
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
            lineNumber: 102,
            columnNumber: 21
          }
        }), me && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartOutlined"], {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 40
            }
          }),
          onClick: function onClick() {
            return addCart(item);
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103,
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
            lineNumber: 107,
            columnNumber: 21
          }
        }),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 17
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item.Meta, {
        title: __jsx("a", {
          href: item.href,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 28
          }
        }, item.title),
        description: item.description,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 21
        }
      }), item.content);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }))));
};

_s(ProductList, "ec4B7+tzc7WBGF9cf2zmmE8vfWw=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJJbnB1dCIsIlN1Yk1lbnUiLCJNZW51IiwiUHJvZHVjdExpc3QiLCJ1c2VTdGF0ZSIsInNlYXJjaCIsInNldFNlYXJjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwcm9kdWN0IiwiUHJvZHVjdHMiLCJsb2FkUHJvZHVjdExvYWRpbmciLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlciIsIm1lIiwiTG9hZFByb2R1Y3QiLCJ1c2VDYWxsYmFjayIsIkxvYWRQcm9kdWN0QWN0aW9uIiwib25TZWFyY2giLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZWFyY2hQcm9kdWN0QWN0aW9uIiwiYWRkQ2FydCIsIml0ZW0iLCJhZGRDYXJ0QWN0aW9uIiwidXNlRWZmZWN0IiwiSWNvblRleHQiLCJpY29uIiwidGV4dCIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJtYXJnaW5Cb3R0b20iLCJib3JkZXJSaWdodCIsIm9uQ2hhbmdlIiwicGFnZSIsImNvbnNvbGUiLCJsb2ciLCJwYWdlU2l6ZSIsImlkIiwiRG9sbGFyQ2lyY2xlT3V0bGluZWQiLCJwcmljZSIsImltYWdlIiwiaHJlZiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQVFBLE1BQVIsR0FBbUJDLDBDQUFuQixDQUFRRCxNQUFSO0FBQ0EsSUFBUUUsT0FBUixHQUFvQkMseUNBQXBCLENBQVFELE9BQVI7O0FBQ0EsSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUV4QixrQkFBNEJDLHNEQUFRLENBQUMsRUFBRCxDQUFwQztBQUFBLE1BQU9DLE1BQVA7QUFBQSxNQUFlQyxT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bEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQWhCSixFQW9CS3hCLElBQUksQ0FBQ3lCLE9BcEJWLENBRGdCO0FBQUEsS0FYeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZBLENBckJBLENBREYsQ0FERjtBQWlFSCxDQXJIRDs7R0FBTS9DLFc7VUFHc0NJLHVELEVBQ3pCTSx1RCxFQUNGTix1RDs7O0tBTFhKLFc7QUFzSFNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3QuMTFiNmIzMjQ5ZDAzOTczYmY5MTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpc3QsIEJ1dHRvbiwgU3BhY2UsICBSb3csIENvbCwgSW5wdXQsIE1lbnV9IGZyb20gJ2FudGQnXHJcbmltcG9ydCB7IERvbGxhckNpcmNsZU91dGxpbmVkLCBIZWFydE91dGxpbmVkLCBIZWFydFR3b1RvbmUsIFNob3BwaW5nQ2FydE91dGxpbmVkICwgVW5vcmRlcmVkTGlzdE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5cclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoLCBzaGFsbG93RXF1YWx9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTG9hZFByb2R1Y3RBY3Rpb24sIHNlYXJjaFByb2R1Y3RBY3Rpb259IGZyb20gJy4uL3JlZHVjZXJzL3Byb2R1Y3QnO1xyXG5pbXBvcnQgeyBhZGRDYXJ0QWN0aW9uIH0gZnJvbSAnLi4vcmVkdWNlcnMvY2FydCc7XHJcbmNvbnN0IHsgU2VhcmNoIH0gPSBJbnB1dDtcclxuY29uc3QgeyBTdWJNZW51IH0gPSBNZW51O1xyXG5jb25zdCBQcm9kdWN0TGlzdCA9ICgpID0+IHtcclxuICBcclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgeyBQcm9kdWN0cywgbG9hZFByb2R1Y3RMb2FkaW5nIH0gID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucHJvZHVjdCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICBjb25zdCBMb2FkUHJvZHVjdCA9IHVzZUNhbGxiYWNrKCgpID0+e1xyXG4gICAgZGlzcGF0Y2goTG9hZFByb2R1Y3RBY3Rpb24oKSk7XHJcbiAgfSxbXSk7XHJcblxyXG4gIGNvbnN0IG9uU2VhcmNoID0gdXNlQ2FsbGJhY2soKGUpID0+e1xyXG4gICAgaWYoZS50YXJnZXQudmFsdWUgIT09ICcnKXtcclxuICAgICAgZGlzcGF0Y2goc2VhcmNoUHJvZHVjdEFjdGlvbihlLnRhcmdldC52YWx1ZSkpO1xyXG4gICAgfVxyXG4gIH0sW10pO1xyXG5cclxuICBjb25zdCBhZGRDYXJ0ID0gdXNlQ2FsbGJhY2soKGl0ZW0pID0+e1xyXG4gICAgZGlzcGF0Y2goYWRkQ2FydEFjdGlvbihpdGVtKSk7XHJcbiAgfSxbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBMb2FkUHJvZHVjdCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBJY29uVGV4dCA9ICh7IGljb24sIHRleHQgfSkgPT4gKFxyXG4gICAgICA8U3BhY2U+XHJcbiAgICAgICAge1JlYWN0LmNyZWF0ZUVsZW1lbnQoaWNvbil9XHJcbiAgICAgICAge3RleHR9XHJcbiAgICAgIDwvU3BhY2U+XHJcbiAgICApO1xyXG4gIC8vICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgICAgbGV0IHJvdz0gW107XHJcbiAgLy8gICAgIE9yZGVyLmZvckVhY2goKGRhdGEpPT57XHJcbiAgLy8gICAgICAgICBpZihkYXRhLnRpdGxlLnRvTG9jYWxlVXBwZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG9jYWxlVXBwZXJDYXNlKCkpKXtcclxuICAvLyAgICAgICAgICAgICByb3cucHVzaChkYXRhKTsgXHJcbiAgLy8gICAgICAgICAgICAgc2V0UHJvZHVjdHMocm93KTtcclxuICAvLyAgICAgICAgIH1lbHNle1xyXG4gIC8vICAgICAgICAgICAgIHJldHVybjtcclxuICAvLyAgICAgICAgIH1cclxuICAvLyAgICAgICAgIC8v67Cw7Je07JeQIOy2lOqwgFxyXG4gICAgICAgICBcclxuICAvLyAgICAgfSk7XHJcbiAgLy8gICAgIGlmKHNlYXJjaCA9PT0gXCJcIil7XHJcbiAgLy8gICAgICAgICBwcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0cygpLnRoZW4oZGF0YSA9PiBzZXRQcm9kdWN0cyhkYXRhKSk7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgICAgcm93PSBbXTtcclxuICAvLyAgICAgY29uc29sZS5sb2cocm93KTtcclxuXHJcbiAgLy8gfSwgW3NlYXJjaF0pO1xyXG4gXHJcbiAgICBjb25zdCBzdHlsZSA9IHsgYmFja2dyb3VuZDogJyNmZmYnLCBwYWRkaW5nOiAnOHB4IDIwcHgnLG1hcmdpbkJvdHRvbTogJzYwcHgnfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPFJvdyBndXR0ZXIgPXtbNDgsIDQ4XX0ganVzdGlmeT1cImNlbnRlclwiPlxyXG4gICAgICAgIDxDb2wgc3BhbiA9IHs2fT5cclxuICAgICAgICA8TWVudVxyXG4gICAgICAgICAgICAgIG1vZGU9XCJpbmxpbmVcIlxyXG4gICAgICAgICAgICAgIGRlZmF1bHRPcGVuS2V5cz17WydzdWIxJ119XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmlnaHQ6IDAgfX1cclxuICAgICAgICAgICAgICBzZWxlY3RhYmxlID17ZmFsc2V9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiMVwiPlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaCBwbGFjZWhvbGRlcj1cImlucHV0IHNlYXJjaCB0ZXh0XCIgIG9uQ2hhbmdlPXsoZSkgPT4gb25TZWFyY2goZSl9IG9uQ2xpY2s9eyhlKSA9PiBvblNlYXJjaChlKX0gZW50ZXJCdXR0b24gLz5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxTdWJNZW51IGtleT1cInN1YjFcIiBpY29uPXs8VW5vcmRlcmVkTGlzdE91dGxpbmVkIC8+fSB0aXRsZT1cIlByb2R1Y3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjNcIj5BbGw8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjRcIj5NZW5zPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCI1XCI+V29tZW5zPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCI2XCI+amV3ZWxlcnk8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjdcIj5lbGVjdHJvbmljczwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9TdWJNZW51PlxyXG4gICAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICA8L0NvbD4gXHJcbiAgICAgICBcclxuICAgICAgICA8Q29sIHNwYW4gPSB7MTh9PlxyXG4gICAgICAgXHJcbiAgICAgICAgPExpc3QgICBzdHlsZT17c3R5bGV9XHJcbiAgICAgICAgICAgICAgICBpdGVtTGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb249e3tcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBwYWdlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwYWdlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwYWdlU2l6ZTogNSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nID0ge2xvYWRQcm9kdWN0TG9hZGluZ31cclxuICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e1Byb2R1Y3RzfVxyXG4gICAgICAgICAgICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICA8SWNvblRleHQgaWNvbj17RG9sbGFyQ2lyY2xlT3V0bGluZWR9IHRleHQ9e2l0ZW0ucHJpY2V9IGtleT1cImxpc3QtdmVydGljYWwtc3Rhci1vXCIgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgbWUmJiA8QnV0dG9uIGljb249ezxTaG9wcGluZ0NhcnRPdXRsaW5lZCAvPn0gb25DbGljaz17KCkgPT5hZGRDYXJ0KGl0ZW0pfT5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj4sXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICBleHRyYT17XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxvZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbS5NZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxhIGhyZWY9e2l0ZW0uaHJlZn0+e2l0ZW0udGl0bGV9PC9hPn1cclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3RcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==