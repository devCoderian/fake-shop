webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ProductMenu.js":
/*!***********************************!*\
  !*** ./components/ProductMenu.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/product */ "./reducers/product.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\ian07\\Desktop\\fake-shop\\front\\components\\ProductMenu.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Search = antd__WEBPACK_IMPORTED_MODULE_4__["Input"].Search;
var SubMenu = antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].SubMenu;

var ProductMenu = function ProductMenu() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var LoadProduct = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch(Object(_reducers_product__WEBPACK_IMPORTED_MODULE_1__["LoadProductAction"])(''));
  }, []);
  var sortProduct = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (val) {
    var categoryParam = "category/".concat(val);
    dispatch(Object(_reducers_product__WEBPACK_IMPORTED_MODULE_1__["LoadProductAction"])(categoryParam));
  }, []);
  var onSearch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    if (e.target.value !== '') {
      dispatch(Object(_reducers_product__WEBPACK_IMPORTED_MODULE_1__["searchProductAction"])(e.target.value));
    }
  }, []);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"], {
    mode: "inline",
    defaultOpenKeys: ['sub1'],
    style: {
      borderRight: 0
    },
    selectable: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
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
      lineNumber: 39,
      columnNumber: 17
    }
  })), __jsx(SubMenu, {
    key: "sub1",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["UnorderedListOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 43
      }
    }),
    title: "Product",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, __jsx("div", {
    onClick: function onClick() {
      return LoadProduct('');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 40
    }
  }, "All")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }, __jsx("div", {
    onClick: function onClick() {
      return sortProduct("men's clothing");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 40
    }
  }, "Mens")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, __jsx("div", {
    onClick: function onClick() {
      return sortProduct("women's clothing");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 40
    }
  }, "Womens")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, __jsx("div", {
    onClick: function onClick() {
      return sortProduct('jewelery');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 40
    }
  }, "jewelery")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "7",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, __jsx("div", {
    onClick: function onClick() {
      return sortProduct('electronics');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 40
    }
  }, "electronics"))), me && __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "2",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 42
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/cart",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 19
    }
  }, "My Cart")));
};

_s(ProductMenu, "/RifG9fGzLjAIAxf/2iCXfj+ef0=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
});

_c = ProductMenu;
/* harmony default export */ __webpack_exports__["default"] = (ProductMenu);

var _c;

$RefreshReg$(_c, "ProductMenu");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0TWVudS5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJJbnB1dCIsIlN1Yk1lbnUiLCJNZW51IiwiUHJvZHVjdE1lbnUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIkxvYWRQcm9kdWN0IiwidXNlQ2FsbGJhY2siLCJMb2FkUHJvZHVjdEFjdGlvbiIsInNvcnRQcm9kdWN0IiwidmFsIiwiY2F0ZWdvcnlQYXJhbSIsIm9uU2VhcmNoIiwiZSIsInRhcmdldCIsInZhbHVlIiwic2VhcmNoUHJvZHVjdEFjdGlvbiIsImJvcmRlclJpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFRQSxNQUFSLEdBQW1CQywwQ0FBbkIsQ0FBUUQsTUFBUjtBQUNBLElBQVFFLE9BQVIsR0FBb0JDLHlDQUFwQixDQUFRRCxPQUFSOztBQUVBLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFDdEIscUJBQWVDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsSUFBVjtBQUFBLEdBQU4sQ0FBMUI7QUFBQSxNQUFRQyxFQUFSLGdCQUFRQSxFQUFSOztBQUNBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQSxNQUFNQyxXQUFXLEdBQUdDLHlEQUFXLENBQUMsWUFBSztBQUNqQ0gsWUFBUSxDQUFDSSwyRUFBaUIsQ0FBQyxFQUFELENBQWxCLENBQVI7QUFDSCxHQUY4QixFQUU3QixFQUY2QixDQUEvQjtBQUlBLE1BQU1DLFdBQVcsR0FBR0YseURBQVcsQ0FBQyxVQUFDRyxHQUFELEVBQVE7QUFDcEMsUUFBTUMsYUFBYSxzQkFBZUQsR0FBZixDQUFuQjtBQUNBTixZQUFRLENBQUNJLDJFQUFpQixDQUFDRyxh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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFuQixDQUxKLENBVFIsRUFnQlNOLEVBQUUsSUFDSCxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLE9BQUcsRUFBQyxHQUFmO0FBQW1CLFFBQUksRUFBRSxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUUsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsQ0FqQlIsQ0FESjtBQXdCSCxDQTNDRDs7R0FBTUosVztVQUNhQyx1RCxFQUNFSyx1RDs7O0tBRmZOLFc7QUE2Q1NBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjVlOWNlNDg4ZDNlYjgzNzNkYzU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMb2FkUHJvZHVjdEFjdGlvbiwgc2VhcmNoUHJvZHVjdEFjdGlvbn0gZnJvbSAnLi4vcmVkdWNlcnMvcHJvZHVjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBVbm9yZGVyZWRMaXN0T3V0bGluZWQsIFNob3BwaW5nQ2FydE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBJbnB1dCwgTWVudX0gZnJvbSAnYW50ZCdcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCB7IFNlYXJjaCB9ID0gSW5wdXQ7XHJcbmNvbnN0IHsgU3ViTWVudSB9ID0gTWVudTtcclxuXHJcbmNvbnN0IFByb2R1Y3RNZW51ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlcik7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3QgTG9hZFByb2R1Y3QgPSB1c2VDYWxsYmFjaygoKSA9PntcclxuICAgICAgICBkaXNwYXRjaChMb2FkUHJvZHVjdEFjdGlvbignJykpO1xyXG4gICAgfSxbXSk7XHJcblxyXG4gICAgY29uc3Qgc29ydFByb2R1Y3QgPSB1c2VDYWxsYmFjaygodmFsKSA9PntcclxuICAgICAgICBjb25zdCBjYXRlZ29yeVBhcmFtID0gYGNhdGVnb3J5LyR7dmFsfWBcclxuICAgICAgICBkaXNwYXRjaChMb2FkUHJvZHVjdEFjdGlvbihjYXRlZ29yeVBhcmFtKSk7XHJcbiAgICB9LFtdKTtcclxuXHJcbiAgICBjb25zdCBvblNlYXJjaCA9IHVzZUNhbGxiYWNrKChlKSA9PntcclxuICAgICAgICBpZihlLnRhcmdldC52YWx1ZSAhPT0gJycpe1xyXG4gICAgICAgIGRpc3BhdGNoKHNlYXJjaFByb2R1Y3RBY3Rpb24oZS50YXJnZXQudmFsdWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNZW51XHJcbiAgICAgICAgICAgICAgbW9kZT1cImlubGluZVwiXHJcbiAgICAgICAgICAgICAgZGVmYXVsdE9wZW5LZXlzPXtbJ3N1YjEnXX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJSaWdodDogMCB9fVxyXG4gICAgICAgICAgICAgIHNlbGVjdGFibGUgPXtmYWxzZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIxXCI+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoIHBsYWNlaG9sZGVyPVwiaW5wdXQgc2VhcmNoIHRleHRcIiAgb25DaGFuZ2U9eyhlKSA9PiBvblNlYXJjaChlKX0gb25DbGljaz17KGUpID0+IG9uU2VhcmNoKGUpfSBlbnRlckJ1dHRvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8U3ViTWVudSBrZXk9XCJzdWIxXCIgaWNvbj17PFVub3JkZXJlZExpc3RPdXRsaW5lZCAvPn0gdGl0bGU9XCJQcm9kdWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIzXCI+PGRpdiBvbkNsaWNrID17KCkgPT5Mb2FkUHJvZHVjdCgnJyl9PkFsbDwvZGl2PjwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiNFwiPjxkaXYgb25DbGljayA9eygpID0+c29ydFByb2R1Y3QoYG1lbidzIGNsb3RoaW5nYCl9Pk1lbnM8L2Rpdj48L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjVcIj48ZGl2IG9uQ2xpY2sgPXsoKSA9PnNvcnRQcm9kdWN0KGB3b21lbidzIGNsb3RoaW5nYCl9PldvbWVuczwvZGl2PjwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiNlwiPjxkaXYgb25DbGljayA9eygpID0+c29ydFByb2R1Y3QoJ2pld2VsZXJ5Jyl9ID5qZXdlbGVyeTwvZGl2PjwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiN1wiPjxkaXYgb25DbGljayA9eygpID0+c29ydFByb2R1Y3QoJ2VsZWN0cm9uaWNzJyl9ID5lbGVjdHJvbmljczwvZGl2PjwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9TdWJNZW51PlxyXG4gICAgICAgICAgICAgICAge21lICYmXHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjJcIiBpY29uPXs8U2hvcHBpbmdDYXJ0T3V0bGluZWQgLz59PlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmID1cIi9jYXJ0XCI+TXkgQ2FydDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICA8L01lbnU+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RNZW51XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=