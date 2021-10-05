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
  var onSearch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    if (e.target.value !== '') {
      dispatch(Object(_reducers_product__WEBPACK_IMPORTED_MODULE_4__["searchProductAction"])(e.target.value));
    }
  }, [Products]);
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
        lineNumber: 35,
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
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
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
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
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
      lineNumber: 72,
      columnNumber: 17
    }
  })), __jsx(SubMenu, {
    key: "sub1",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["UnorderedListOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 41
      }
    }),
    title: "Product",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, "All"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }, "Mens"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
    }
  }, "Womens"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    }
  }, "jewelery"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "7",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }, "electronics")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 18,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
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
            lineNumber: 101,
            columnNumber: 21
          }
        }), me && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartOutlined"], {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 40
            }
          }),
          onClick: function onClick() {
            return addCart(item);
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102,
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
            lineNumber: 106,
            columnNumber: 21
          }
        }),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 17
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item.Meta, {
        title: __jsx("a", {
          href: item.href,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 28
          }
        }, item.title),
        description: item.description,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 21
        }
      }), item.content);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }))));
};

_s(ProductList, "DQ7iVTa5EzwuQPohgmlj1iZnoD0=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJJbnB1dCIsIlN1Yk1lbnUiLCJNZW51IiwiUHJvZHVjdExpc3QiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicHJvZHVjdCIsIlByb2R1Y3RzIiwibG9hZFByb2R1Y3RMb2FkaW5nIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZXIiLCJtZSIsIkxvYWRQcm9kdWN0IiwidXNlQ2FsbGJhY2siLCJMb2FkUHJvZHVjdEFjdGlvbiIsIm9uU2VhcmNoIiwiZSIsInRhcmdldCIsInZhbHVlIiwic2VhcmNoUHJvZHVjdEFjdGlvbiIsImFkZENhcnQiLCJpdGVtIiwiYWRkQ2FydEFjdGlvbiIsInVzZUVmZmVjdCIsIkljb25UZXh0IiwiaWNvbiIsInRleHQiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwibWFyZ2luQm90dG9tIiwiYm9yZGVyUmlnaHQiLCJvbkNoYW5nZSIsInBhZ2UiLCJjb25zb2xlIiwibG9nIiwicGFnZVNpemUiLCJpZCIsIkRvbGxhckNpcmNsZU91dGxpbmVkIiwicHJpY2UiLCJpbWFnZSIsImhyZWYiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFRQSxNQUFSLEdBQW1CQywwQ0FBbkIsQ0FBUUQsTUFBUjtBQUNBLElBQVFFLE9BQVIsR0FBb0JDLHlDQUFwQixDQUFRRCxPQUFSOztBQUNBLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFFeEIscUJBQTBDQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLE9BQVY7QUFBQSxHQUFOLENBQXJEO0FBQUEsTUFBUUMsUUFBUixn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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGQSxDQXJCQSxDQURGLENBREY7QUFpRUgsQ0FwSEQ7O0dBQU01QyxXO1VBRXNDQyx1RCxFQUN6Qk0sdUQsRUFDRk4sdUQ7OztLQUpYRCxXO0FBcUhTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0LjhmZGU2MDEyMWIyOWE3YTJkN2U4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMaXN0LCBCdXR0b24sIFNwYWNlLCAgUm93LCBDb2wsIElucHV0LCBNZW51fSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgeyBEb2xsYXJDaXJjbGVPdXRsaW5lZCwgSGVhcnRPdXRsaW5lZCwgSGVhcnRUd29Ub25lLCBTaG9wcGluZ0NhcnRPdXRsaW5lZCAsIFVub3JkZXJlZExpc3RPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCwgc2hhbGxvd0VxdWFsfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IExvYWRQcm9kdWN0QWN0aW9uLCBzZWFyY2hQcm9kdWN0QWN0aW9ufSBmcm9tICcuLi9yZWR1Y2Vycy9wcm9kdWN0JztcclxuaW1wb3J0IHsgYWRkQ2FydEFjdGlvbiB9IGZyb20gJy4uL3JlZHVjZXJzL2NhcnQnO1xyXG5jb25zdCB7IFNlYXJjaCB9ID0gSW5wdXQ7XHJcbmNvbnN0IHsgU3ViTWVudSB9ID0gTWVudTtcclxuY29uc3QgUHJvZHVjdExpc3QgPSAoKSA9PiB7XHJcbiAgXHJcbiAgY29uc3QgeyBQcm9kdWN0cywgbG9hZFByb2R1Y3RMb2FkaW5nIH0gID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucHJvZHVjdCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICBjb25zdCBMb2FkUHJvZHVjdCA9IHVzZUNhbGxiYWNrKCgpID0+e1xyXG4gICAgZGlzcGF0Y2goTG9hZFByb2R1Y3RBY3Rpb24oKSk7XHJcbiAgfSxbXSk7XHJcblxyXG4gIGNvbnN0IG9uU2VhcmNoID0gdXNlQ2FsbGJhY2soKGUpID0+e1xyXG4gICAgaWYoZS50YXJnZXQudmFsdWUgIT09ICcnKXtcclxuICAgICAgZGlzcGF0Y2goc2VhcmNoUHJvZHVjdEFjdGlvbihlLnRhcmdldC52YWx1ZSkpO1xyXG4gICAgfVxyXG4gIH0sW1Byb2R1Y3RzXSk7XHJcblxyXG4gIGNvbnN0IGFkZENhcnQgPSB1c2VDYWxsYmFjaygoaXRlbSkgPT57XHJcbiAgICBkaXNwYXRjaChhZGRDYXJ0QWN0aW9uKGl0ZW0pKTtcclxuICB9LFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIExvYWRQcm9kdWN0KCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IEljb25UZXh0ID0gKHsgaWNvbiwgdGV4dCB9KSA9PiAoXHJcbiAgICAgIDxTcGFjZT5cclxuICAgICAgICB7UmVhY3QuY3JlYXRlRWxlbWVudChpY29uKX1cclxuICAgICAgICB7dGV4dH1cclxuICAgICAgPC9TcGFjZT5cclxuICAgICk7XHJcbiAgLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgICBsZXQgcm93PSBbXTtcclxuICAvLyAgICAgT3JkZXIuZm9yRWFjaCgoZGF0YSk9PntcclxuICAvLyAgICAgICAgIGlmKGRhdGEudGl0bGUudG9Mb2NhbGVVcHBlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb2NhbGVVcHBlckNhc2UoKSkpe1xyXG4gIC8vICAgICAgICAgICAgIHJvdy5wdXNoKGRhdGEpOyBcclxuICAvLyAgICAgICAgICAgICBzZXRQcm9kdWN0cyhyb3cpO1xyXG4gIC8vICAgICAgICAgfWVsc2V7XHJcbiAgLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4gIC8vICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgLy/rsLDsl7Tsl5Ag7LaU6rCAXHJcbiAgICAgICAgIFxyXG4gIC8vICAgICB9KTtcclxuICAvLyAgICAgaWYoc2VhcmNoID09PSBcIlwiKXtcclxuICAvLyAgICAgICAgIHByb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3RzKCkudGhlbihkYXRhID0+IHNldFByb2R1Y3RzKGRhdGEpKTtcclxuICAvLyAgICAgfVxyXG4gIC8vICAgICByb3c9IFtdO1xyXG4gIC8vICAgICBjb25zb2xlLmxvZyhyb3cpO1xyXG5cclxuICAvLyB9LCBbc2VhcmNoXSk7XHJcbiBcclxuICAgIGNvbnN0IHN0eWxlID0geyBiYWNrZ3JvdW5kOiAnI2ZmZicsIHBhZGRpbmc6ICc4cHggMjBweCcsbWFyZ2luQm90dG9tOiAnNjBweCd9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8Um93IGd1dHRlciA9e1s0OCwgNDhdfSBqdXN0aWZ5PVwiY2VudGVyXCI+XHJcbiAgICAgICAgPENvbCBzcGFuID0gezZ9PlxyXG4gICAgICAgIDxNZW51XHJcbiAgICAgICAgICAgICAgbW9kZT1cImlubGluZVwiXHJcbiAgICAgICAgICAgICAgZGVmYXVsdE9wZW5LZXlzPXtbJ3N1YjEnXX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJSaWdodDogMCB9fVxyXG4gICAgICAgICAgICAgIHNlbGVjdGFibGUgPXtmYWxzZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIxXCI+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoIHBsYWNlaG9sZGVyPVwiaW5wdXQgc2VhcmNoIHRleHRcIiAgb25DaGFuZ2U9eyhlKSA9PiBvblNlYXJjaChlKX0gb25DbGljaz17KGUpID0+IG9uU2VhcmNoKGUpfSBlbnRlckJ1dHRvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgPFN1Yk1lbnUga2V5PVwic3ViMVwiIGljb249ezxVbm9yZGVyZWRMaXN0T3V0bGluZWQgLz59IHRpdGxlPVwiUHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiM1wiPkFsbDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiNFwiPk1lbnM8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjVcIj5Xb21lbnM8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjZcIj5qZXdlbGVyeTwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiN1wiPmVsZWN0cm9uaWNzPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L1N1Yk1lbnU+XHJcbiAgICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgIDwvQ29sPiBcclxuICAgICAgIFxyXG4gICAgICAgIDxDb2wgc3BhbiA9IHsxOH0+XHJcbiAgICAgICBcclxuICAgICAgICA8TGlzdCAgIHN0eWxlPXtzdHlsZX1cclxuICAgICAgICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IHBhZ2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBhZ2VTaXplOiA1LFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGxvYWRpbmcgPSB7bG9hZFByb2R1Y3RMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17UHJvZHVjdHN9XHJcbiAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IChcclxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uVGV4dCBpY29uPXtEb2xsYXJDaXJjbGVPdXRsaW5lZH0gdGV4dD17aXRlbS5wcmljZX0ga2V5PVwibGlzdC12ZXJ0aWNhbC1zdGFyLW9cIiAvPixcclxuICAgICAgICAgICAgICAgICAgICBtZSYmIDxCdXR0b24gaWNvbj17PFNob3BwaW5nQ2FydE91dGxpbmVkIC8+fSBvbkNsaWNrPXsoKSA9PmFkZENhcnQoaXRlbSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPixcclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgIGV4dHJhPXtcclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxNTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9nb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtLk1ldGFcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17PGEgaHJlZj17aXRlbS5ocmVmfT57aXRlbS50aXRsZX08L2E+fVxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtpdGVtLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uY29udGVudH1cclxuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdFxyXG4iXSwic291cmNlUm9vdCI6IiJ9