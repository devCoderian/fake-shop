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
var _this = undefined,
    _jsxFileName = "C:\\Users\\ian07\\Desktop\\fake-shop\\front\\components\\ProductMenu.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Search = antd__WEBPACK_IMPORTED_MODULE_4__["Input"].Search;
var SubMenu = antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].SubMenu;

var ProductMenu = function ProductMenu() {
  _s();

  var _useSelector = Object(react__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(function (state) {
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
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
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
      lineNumber: 36,
      columnNumber: 17
    }
  })), __jsx(SubMenu, {
    key: "sub1",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["UnorderedListOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 43
      }
    }),
    title: "Product",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, __jsx("div", {
    onClick: function onClick() {
      return LoadProduct('');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 40
    }
  }, "All")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, __jsx("div", {
    onClick: function onClick() {
      return sortProduct("men's clothing");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 40
    }
  }, "Mens")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, __jsx("div", {
    onClick: function onClick() {
      return sortProduct("women's clothing");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 40
    }
  }, "Womens")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, __jsx("div", {
    onClick: function onClick() {
      return sortProduct('jewelery');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 40
    }
  }, "jewelery")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "7",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }, __jsx("div", {
    onClick: function onClick() {
      return sortProduct('electronics');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 40
    }
  }, "electronics"))), me && __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "2",
    icon: __jsx(ShoppingCartOutlined, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 42
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx(Link, {
    href: "/cart",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 19
    }
  }, "My Cart")));
};

_s(ProductMenu, "/RifG9fGzLjAIAxf/2iCXfj+ef0=", false, function () {
  return [react__WEBPACK_IMPORTED_MODULE_0__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0TWVudS5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJJbnB1dCIsIlN1Yk1lbnUiLCJNZW51IiwiUHJvZHVjdE1lbnUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIkxvYWRQcm9kdWN0IiwidXNlQ2FsbGJhY2siLCJMb2FkUHJvZHVjdEFjdGlvbiIsInNvcnRQcm9kdWN0IiwidmFsIiwiY2F0ZWdvcnlQYXJhbSIsIm9uU2VhcmNoIiwiZSIsInRhcmdldCIsInZhbHVlIiwic2VhcmNoUHJvZHVjdEFjdGlvbiIsImJvcmRlclJpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQVFBLE1BQVIsR0FBbUJDLDBDQUFuQixDQUFRRCxNQUFSO0FBQ0EsSUFBUUUsT0FBUixHQUFvQkMseUNBQXBCLENBQVFELE9BQVI7O0FBRUEsSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUN0QixxQkFBZUMseURBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxJQUFWO0FBQUEsR0FBTixDQUExQjtBQUFBLE1BQVFDLEVBQVIsZ0JBQVFBLEVBQVI7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUVBLE1BQU1DLFdBQVcsR0FBR0MseURBQVcsQ0FBQyxZQUFLO0FBQ2pDSCxZQUFRLENBQUNJLDJFQUFpQixDQUFDLEVBQUQsQ0FBbEIsQ0FBUjtBQUNILEdBRjhCLEVBRTdCLEVBRjZCLENBQS9CO0FBSUEsTUFBTUMsV0FBVyxHQUFHRix5REFBVyxDQUFDLFVBQUNHLEdBQUQsRUFBUTtBQUNwQyxRQUFNQyxhQUFhLHNCQUFlRCxHQUFmLENBQW5CO0FBQ0FOLFlBQVEsQ0FBQ0ksMkVBQWlCLENBQUNHLGFBQUQsQ0FB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O0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQW5CLENBTEosQ0FUUixFQWdCU04sRUFBRSxJQUNILE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsT0FBRyxFQUFDLEdBQWY7QUFBbUIsUUFBSSxFQUFFLE1BQUMsb0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxJQUFEO0FBQU0sUUFBSSxFQUFFLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLENBakJSLENBREo7QUF3QkgsQ0EzQ0Q7O0dBQU1KLFc7VUFDYUMsaUQsRUFDRUssdUQ7OztLQUZmTixXO0FBNkNTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45YjUxOTQ5MGMzMTBkOTY1MWMyNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExvYWRQcm9kdWN0QWN0aW9uLCBzZWFyY2hQcm9kdWN0QWN0aW9ufSBmcm9tICcuLi9yZWR1Y2Vycy9wcm9kdWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2h9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgVW5vcmRlcmVkTGlzdE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBJbnB1dCwgTWVudX0gZnJvbSAnYW50ZCdcclxuY29uc3QgeyBTZWFyY2ggfSA9IElucHV0O1xyXG5jb25zdCB7IFN1Yk1lbnUgfSA9IE1lbnU7XHJcblxyXG5jb25zdCBQcm9kdWN0TWVudSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIGNvbnN0IExvYWRQcm9kdWN0ID0gdXNlQ2FsbGJhY2soKCkgPT57XHJcbiAgICAgICAgZGlzcGF0Y2goTG9hZFByb2R1Y3RBY3Rpb24oJycpKTtcclxuICAgIH0sW10pO1xyXG5cclxuICAgIGNvbnN0IHNvcnRQcm9kdWN0ID0gdXNlQ2FsbGJhY2soKHZhbCkgPT57XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlQYXJhbSA9IGBjYXRlZ29yeS8ke3ZhbH1gXHJcbiAgICAgICAgZGlzcGF0Y2goTG9hZFByb2R1Y3RBY3Rpb24oY2F0ZWdvcnlQYXJhbSkpO1xyXG4gICAgfSxbXSk7XHJcblxyXG4gICAgY29uc3Qgb25TZWFyY2ggPSB1c2VDYWxsYmFjaygoZSkgPT57XHJcbiAgICAgICAgaWYoZS50YXJnZXQudmFsdWUgIT09ICcnKXtcclxuICAgICAgICBkaXNwYXRjaChzZWFyY2hQcm9kdWN0QWN0aW9uKGUudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TWVudVxyXG4gICAgICAgICAgICAgIG1vZGU9XCJpbmxpbmVcIlxyXG4gICAgICAgICAgICAgIGRlZmF1bHRPcGVuS2V5cz17WydzdWIxJ119XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmlnaHQ6IDAgfX1cclxuICAgICAgICAgICAgICBzZWxlY3RhYmxlID17ZmFsc2V9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiMVwiPlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaCBwbGFjZWhvbGRlcj1cImlucHV0IHNlYXJjaCB0ZXh0XCIgIG9uQ2hhbmdlPXsoZSkgPT4gb25TZWFyY2goZSl9IG9uQ2xpY2s9eyhlKSA9PiBvblNlYXJjaChlKX0gZW50ZXJCdXR0b24gLz5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPFN1Yk1lbnUga2V5PVwic3ViMVwiIGljb249ezxVbm9yZGVyZWRMaXN0T3V0bGluZWQgLz59IHRpdGxlPVwiUHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiM1wiPjxkaXYgb25DbGljayA9eygpID0+TG9hZFByb2R1Y3QoJycpfT5BbGw8L2Rpdj48L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjRcIj48ZGl2IG9uQ2xpY2sgPXsoKSA9PnNvcnRQcm9kdWN0KGBtZW4ncyBjbG90aGluZ2ApfT5NZW5zPC9kaXY+PC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCI1XCI+PGRpdiBvbkNsaWNrID17KCkgPT5zb3J0UHJvZHVjdChgd29tZW4ncyBjbG90aGluZ2ApfT5Xb21lbnM8L2Rpdj48L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjZcIj48ZGl2IG9uQ2xpY2sgPXsoKSA9PnNvcnRQcm9kdWN0KCdqZXdlbGVyeScpfSA+amV3ZWxlcnk8L2Rpdj48L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjdcIj48ZGl2IG9uQ2xpY2sgPXsoKSA9PnNvcnRQcm9kdWN0KCdlbGVjdHJvbmljcycpfSA+ZWxlY3Ryb25pY3M8L2Rpdj48L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvU3ViTWVudT5cclxuICAgICAgICAgICAgICAgIHttZSAmJlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIyXCIgaWNvbj17PFNob3BwaW5nQ2FydE91dGxpbmVkIC8+fT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZiA9XCIvY2FydFwiPk15IENhcnQ8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgPC9NZW51PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TWVudVxyXG4iXSwic291cmNlUm9vdCI6IiJ9