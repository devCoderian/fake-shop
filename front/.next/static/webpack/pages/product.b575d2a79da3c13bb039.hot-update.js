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
    dispatch(Object(_reducers_product__WEBPACK_IMPORTED_MODULE_4__["LoadProductAction"])(''));
  }, []);
  var sortProduct = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (val) {
    var category = "category/".concat(val);
    dispatch(Object(_reducers_product__WEBPACK_IMPORTED_MODULE_4__["LoadProductAction"])("category/".concat(category)));
  }, []);
  var onSearch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    if (e.target.value !== '') {
      dispatch(Object(_reducers_product__WEBPACK_IMPORTED_MODULE_4__["searchProductAction"])(e.target.value));
    } else {
      dispatch(Object(_reducers_product__WEBPACK_IMPORTED_MODULE_4__["LoadProductAction"])());
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
        lineNumber: 42,
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
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
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
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
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
      lineNumber: 79,
      columnNumber: 17
    }
  })), __jsx(SubMenu, {
    key: "sub1",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["UnorderedListOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 41
      }
    }),
    title: "Product",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }, "All"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    onClick: sortProduct('Mens'),
    key: "4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }, "Mens"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    onClick: sortProduct('Womens'),
    key: "5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, "Womens"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    onClick: sortProduct('jewelery'),
    key: "6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }, "jewelery"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    onClick: sortProduct('electronics'),
    key: "7",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }, "electronics")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 18,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
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
            lineNumber: 108,
            columnNumber: 21
          }
        }), me && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartOutlined"], {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 40
            }
          }),
          onClick: function onClick() {
            return addCart(item);
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109,
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
            lineNumber: 113,
            columnNumber: 21
          }
        }),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 17
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item.Meta, {
        title: __jsx("a", {
          href: item.href,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 28
          }
        }, item.title),
        description: item.description,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 21
        }
      }), item.content);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }))));
};

_s(ProductList, "iS9imqGzUoyZwSr5uxtyzQgiWfI=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJJbnB1dCIsIlN1Yk1lbnUiLCJNZW51IiwiUHJvZHVjdExpc3QiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicHJvZHVjdCIsIlByb2R1Y3RzIiwibG9hZFByb2R1Y3RMb2FkaW5nIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZXIiLCJtZSIsIkxvYWRQcm9kdWN0IiwidXNlQ2FsbGJhY2siLCJMb2FkUHJvZHVjdEFjdGlvbiIsInNvcnRQcm9kdWN0IiwidmFsIiwiY2F0ZWdvcnkiLCJvblNlYXJjaCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlYXJjaFByb2R1Y3RBY3Rpb24iLCJhZGRDYXJ0IiwiaXRlbSIsImFkZENhcnRBY3Rpb24iLCJ1c2VFZmZlY3QiLCJJY29uVGV4dCIsImljb24iLCJ0ZXh0IiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsIm1hcmdpbkJvdHRvbSIsImJvcmRlclJpZ2h0Iiwib25DaGFuZ2UiLCJwYWdlIiwiY29uc29sZSIsImxvZyIsInBhZ2VTaXplIiwiaWQiLCJEb2xsYXJDaXJjbGVPdXRsaW5lZCIsInByaWNlIiwiaW1hZ2UiLCJocmVmIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBUUEsTUFBUixHQUFtQkMsMENBQW5CLENBQVFELE1BQVI7QUFDQSxJQUFRRSxPQUFSLEdBQW9CQyx5Q0FBcEIsQ0FBUUQsT0FBUjs7QUFDQSxJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBRXhCLHFCQUEwQ0MsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxPQUFWO0FB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QUFHLEdBRmI7QUFHSSxhQUFHLEVBQUMsTUFIUjtBQUlJLGFBQUcsRUFBRUEsSUFBSSxDQUFDcUIsS0FKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWdCSSxNQUFDLHlDQUFELENBQU0sSUFBTixDQUFXLElBQVg7QUFDQSxhQUFLLEVBQUU7QUFBRyxjQUFJLEVBQUVyQixJQUFJLENBQUNzQixJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBcUJ0QixJQUFJLENBQUN1QixLQUExQixDQURQO0FBRUEsbUJBQVcsRUFBRXZCLElBQUksQ0FBQ3dCLFdBRmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFoQkosRUFvQkt4QixJQUFJLENBQUN5QixPQXBCVixDQURnQjtBQUFBLEtBWHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGQSxDQXJCQSxDQURGLENBREY7QUFpRUgsQ0EzSEQ7O0dBQU0vQyxXO1VBRXNDQyx1RCxFQUN6Qk0sdUQsRUFDRk4sdUQ7OztLQUpYRCxXO0FBNEhTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0LmI1NzVkMmE3OWRhM2MxM2JiMDM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMaXN0LCBCdXR0b24sIFNwYWNlLCAgUm93LCBDb2wsIElucHV0LCBNZW51fSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgeyBEb2xsYXJDaXJjbGVPdXRsaW5lZCwgSGVhcnRPdXRsaW5lZCwgSGVhcnRUd29Ub25lLCBTaG9wcGluZ0NhcnRPdXRsaW5lZCAsIFVub3JkZXJlZExpc3RPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCwgc2hhbGxvd0VxdWFsfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IExvYWRQcm9kdWN0QWN0aW9uLCBzZWFyY2hQcm9kdWN0QWN0aW9ufSBmcm9tICcuLi9yZWR1Y2Vycy9wcm9kdWN0JztcclxuaW1wb3J0IHsgYWRkQ2FydEFjdGlvbiB9IGZyb20gJy4uL3JlZHVjZXJzL2NhcnQnO1xyXG5jb25zdCB7IFNlYXJjaCB9ID0gSW5wdXQ7XHJcbmNvbnN0IHsgU3ViTWVudSB9ID0gTWVudTtcclxuY29uc3QgUHJvZHVjdExpc3QgPSAoKSA9PiB7XHJcbiAgXHJcbiAgY29uc3QgeyBQcm9kdWN0cywgbG9hZFByb2R1Y3RMb2FkaW5nIH0gID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucHJvZHVjdCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICBjb25zdCBMb2FkUHJvZHVjdCA9IHVzZUNhbGxiYWNrKCgpID0+e1xyXG4gICAgZGlzcGF0Y2goTG9hZFByb2R1Y3RBY3Rpb24oJycpKTtcclxuICB9LFtdKTtcclxuXHJcbiAgY29uc3Qgc29ydFByb2R1Y3QgPSB1c2VDYWxsYmFjaygodmFsKSA9PntcclxuICAgIGNvbnN0IGNhdGVnb3J5ID0gYGNhdGVnb3J5LyR7dmFsfWBcclxuICAgIGRpc3BhdGNoKExvYWRQcm9kdWN0QWN0aW9uKGBjYXRlZ29yeS8ke2NhdGVnb3J5fWApKTtcclxuICB9LFtdKTtcclxuXHJcbiAgY29uc3Qgb25TZWFyY2ggPSB1c2VDYWxsYmFjaygoZSkgPT57XHJcbiAgICBpZihlLnRhcmdldC52YWx1ZSAhPT0gJycpe1xyXG4gICAgICBkaXNwYXRjaChzZWFyY2hQcm9kdWN0QWN0aW9uKGUudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgZGlzcGF0Y2goTG9hZFByb2R1Y3RBY3Rpb24oKSk7XHJcbiAgICB9XHJcbiAgfSxbUHJvZHVjdHNdKTtcclxuXHJcbiAgY29uc3QgYWRkQ2FydCA9IHVzZUNhbGxiYWNrKChpdGVtKSA9PntcclxuICAgIGRpc3BhdGNoKGFkZENhcnRBY3Rpb24oaXRlbSkpO1xyXG4gIH0sW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgTG9hZFByb2R1Y3QoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgSWNvblRleHQgPSAoeyBpY29uLCB0ZXh0IH0pID0+IChcclxuICAgICAgPFNwYWNlPlxyXG4gICAgICAgIHtSZWFjdC5jcmVhdGVFbGVtZW50KGljb24pfVxyXG4gICAgICAgIHt0ZXh0fVxyXG4gICAgICA8L1NwYWNlPlxyXG4gICAgKTtcclxuICAvLyAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICAgIGxldCByb3c9IFtdO1xyXG4gIC8vICAgICBPcmRlci5mb3JFYWNoKChkYXRhKT0+e1xyXG4gIC8vICAgICAgICAgaWYoZGF0YS50aXRsZS50b0xvY2FsZVVwcGVyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvY2FsZVVwcGVyQ2FzZSgpKSl7XHJcbiAgLy8gICAgICAgICAgICAgcm93LnB1c2goZGF0YSk7IFxyXG4gIC8vICAgICAgICAgICAgIHNldFByb2R1Y3RzKHJvdyk7XHJcbiAgLy8gICAgICAgICB9ZWxzZXtcclxuICAvLyAgICAgICAgICAgICByZXR1cm47XHJcbiAgLy8gICAgICAgICB9XHJcbiAgLy8gICAgICAgICAvL+uwsOyXtOyXkCDstpTqsIBcclxuICAgICAgICAgXHJcbiAgLy8gICAgIH0pO1xyXG4gIC8vICAgICBpZihzZWFyY2ggPT09IFwiXCIpe1xyXG4gIC8vICAgICAgICAgcHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdHMoKS50aGVuKGRhdGEgPT4gc2V0UHJvZHVjdHMoZGF0YSkpO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICAgIHJvdz0gW107XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKHJvdyk7XHJcblxyXG4gIC8vIH0sIFtzZWFyY2hdKTtcclxuIFxyXG4gICAgY29uc3Qgc3R5bGUgPSB7IGJhY2tncm91bmQ6ICcjZmZmJywgcGFkZGluZzogJzhweCAyMHB4JyxtYXJnaW5Cb3R0b206ICc2MHB4J307XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxSb3cgZ3V0dGVyID17WzQ4LCA0OF19IGp1c3RpZnk9XCJjZW50ZXJcIj5cclxuICAgICAgICA8Q29sIHNwYW4gPSB7Nn0+XHJcbiAgICAgICAgPE1lbnVcclxuICAgICAgICAgICAgICBtb2RlPVwiaW5saW5lXCJcclxuICAgICAgICAgICAgICBkZWZhdWx0T3BlbktleXM9e1snc3ViMSddfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlclJpZ2h0OiAwIH19XHJcbiAgICAgICAgICAgICAgc2VsZWN0YWJsZSA9e2ZhbHNlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjFcIj5cclxuICAgICAgICAgICAgICAgIDxTZWFyY2ggcGxhY2Vob2xkZXI9XCJpbnB1dCBzZWFyY2ggdGV4dFwiICBvbkNoYW5nZT17KGUpID0+IG9uU2VhcmNoKGUpfSBvbkNsaWNrPXsoZSkgPT4gb25TZWFyY2goZSl9IGVudGVyQnV0dG9uIC8+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICA8U3ViTWVudSBrZXk9XCJzdWIxXCIgaWNvbj17PFVub3JkZXJlZExpc3RPdXRsaW5lZCAvPn0gdGl0bGU9XCJQcm9kdWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIzXCI+QWxsPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBvbkNsaWNrID17c29ydFByb2R1Y3QoJ01lbnMnKX0ga2V5PVwiNFwiPk1lbnM8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG9uQ2xpY2sgPXtzb3J0UHJvZHVjdCgnV29tZW5zJyl9IGtleT1cIjVcIj5Xb21lbnM8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG9uQ2xpY2sgPXtzb3J0UHJvZHVjdCgnamV3ZWxlcnknKX0ga2V5PVwiNlwiPmpld2VsZXJ5PC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBvbkNsaWNrID17c29ydFByb2R1Y3QoJ2VsZWN0cm9uaWNzJyl9IGtleT1cIjdcIj5lbGVjdHJvbmljczwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9TdWJNZW51PlxyXG4gICAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICA8L0NvbD4gXHJcbiAgICAgICBcclxuICAgICAgICA8Q29sIHNwYW4gPSB7MTh9PlxyXG4gICAgICAgXHJcbiAgICAgICAgPExpc3QgICBzdHlsZT17c3R5bGV9XHJcbiAgICAgICAgICAgICAgICBpdGVtTGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb249e3tcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBwYWdlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwYWdlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwYWdlU2l6ZTogNSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nID0ge2xvYWRQcm9kdWN0TG9hZGluZ31cclxuICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e1Byb2R1Y3RzfVxyXG4gICAgICAgICAgICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICA8SWNvblRleHQgaWNvbj17RG9sbGFyQ2lyY2xlT3V0bGluZWR9IHRleHQ9e2l0ZW0ucHJpY2V9IGtleT1cImxpc3QtdmVydGljYWwtc3Rhci1vXCIgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgbWUmJiA8QnV0dG9uIGljb249ezxTaG9wcGluZ0NhcnRPdXRsaW5lZCAvPn0gb25DbGljaz17KCkgPT5hZGRDYXJ0KGl0ZW0pfT5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj4sXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICBleHRyYT17XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxvZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbS5NZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxhIGhyZWY9e2l0ZW0uaHJlZn0+e2l0ZW0udGl0bGV9PC9hPn1cclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3RcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==