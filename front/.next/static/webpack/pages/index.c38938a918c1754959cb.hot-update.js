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

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
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
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
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
      lineNumber: 32,
      columnNumber: 17
    }
  })), __jsx(SubMenu, {
    key: "sub1",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["UnorderedListOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 41
      }
    }),
    title: "Product",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, __jsx("div", {
    onClick: function onClick() {
      return LoadProduct('');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 40
    }
  }, "All")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, __jsx("div", {
    onClick: function onClick() {
      return sortProduct("men's clothing");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 40
    }
  }, "Mens")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, __jsx("div", {
    onClick: function onClick() {
      return sortProduct("women's clothing");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 40
    }
  }, "Womens")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, __jsx("div", {
    onClick: function onClick() {
      return sortProduct('jewelery');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 40
    }
  }, "jewelery")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "7",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, __jsx("div", {
    onClick: function onClick() {
      return sortProduct('electronics');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 40
    }
  }, "electronics"))));
};

_s(ProductMenu, "7eeGI73Hjf47yjKW7IxGKkOT4/4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0TWVudS5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJJbnB1dCIsIlN1Yk1lbnUiLCJNZW51IiwiUHJvZHVjdE1lbnUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwic29ydFByb2R1Y3QiLCJ1c2VDYWxsYmFjayIsInZhbCIsImNhdGVnb3J5UGFyYW0iLCJMb2FkUHJvZHVjdEFjdGlvbiIsIm9uU2VhcmNoIiwiZSIsInRhcmdldCIsInZhbHVlIiwic2VhcmNoUHJvZHVjdEFjdGlvbiIsImJvcmRlclJpZ2h0IiwiTG9hZFByb2R1Y3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBUUEsTUFBUixHQUFtQkMsMENBQW5CLENBQVFELE1BQVI7QUFDQSxJQUFRRSxPQUFSLEdBQW9CQyx5Q0FBcEIsQ0FBUUQsT0FBUjs7QUFFQSxJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBRXRCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQSxNQUFNQyxXQUFXLEdBQUdDLHlEQUFXLENBQUMsVUFBQ0MsR0FBRCxFQUFRO0FBQ3BDLFFBQU1DLGFBQWEsc0JBQWVELEdBQWYsQ0FBbkI7QUFDQUosWUFBUSxDQUFDTSwyRUFBaUIsQ0FBQ0QsYUFBRCxDQUFsQixDQUFSO0FBQ0gsR0FIOEIsRUFHN0IsRUFINkIsQ0FBL0I7QUFLQSxNQUFNRSxRQUFRLEdBQUdKLHlEQUFXLENBQUMsVUFBQ0ssQ0FBRCxFQUFNO0FBQy9CLFFBQUdBLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULEtBQW1CLEVBQXRCLEVBQXlCO0FBQ3pCVixjQUFRLENBQUNXLDZFQUFtQixDQUFDSCxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFwQixDQUFSO0FBQ0M7QUFDSixHQUoyQixFQUkxQixFQUowQixDQUE1QjtBQU1BLFNBQ0ksTUFBQyx5Q0FBRDtBQUNNLFFBQUksRUFBQyxRQURYO0FBRU0sbUJBQWUsRUFBRSxDQUFDLE1BQUQsQ0FGdkI7QUFHTSxTQUFLLEVBQUU7QUFBRUUsaUJBQVcsRUFBRTtBQUFmLEtBSGI7QUFJTSxjQUFVLEVBQUcsS0FKbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1RLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsT0FBRyxFQUFDLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsTUFBRDtBQUFRLGVBQVcsRUFBQyxtQkFBcEI7QUFBeUMsWUFBUSxFQUFFLGtCQUFDSixDQUFEO0FBQUEsYUFBT0QsUUFBUSxDQUFDQyxDQUFELENBQWY7QUFBQSxLQUFuRDtBQUF1RSxXQUFPLEVBQUUsaUJBQUNBLENBQUQ7QUFBQSxhQUFPRCxRQUFRLENBQUNDLENBQUQsQ0FBZjtBQUFBLEtBQWhGO0FBQW9HLGVBQVcsTUFBL0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLENBTlIsRUFTTSxNQUFDLE9BQUQ7QUFBUyxPQUFHLEVBQUMsTUFBYjtBQUFvQixRQUFJLEVBQUUsTUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQTFCO0FBQXFELFNBQUssRUFBQyxTQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ00sTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUMsR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW1CO0FBQUssV0FBTyxFQUFHO0FBQUEsYUFBS0ssV0FBVyxDQUFDLEVBQUQsQ0FBaEI7QUFBQSxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBbkIsQ0FETixFQUVNLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsT0FBRyxFQUFDLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFtQjtBQUFLLFdBQU8sRUFBRztBQUFBLGFBQUtYLFdBQVcsa0JBQWhCO0FBQUEsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQW5CLENBRk4sRUFHTSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLE9BQUcsRUFBQyxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbUI7QUFBSyxXQUFPLEVBQUc7QUFBQSxhQUFLQSxXQUFXLG9CQUFoQjtBQUFBLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFuQixDQUhOLEVBSU0sTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUMsR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW1CO0FBQUssV0FBTyxFQUFHO0FBQUEsYUFBS0EsV0FBVyxDQUFDLFVBQUQsQ0FBaEI7QUFBQSxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQW5CLENBSk4sRUFLTSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLE9BQUcsRUFBQyxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbUI7QUFBSyxXQUFPLEVBQUc7QUFBQSxhQUFLQSxXQUFXLENBQUMsYUFBRCxDQUFoQjtBQUFBLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBbkIsQ0FMTixDQVROLENBREo7QUFtQkgsQ0FsQ0Q7O0dBQU1ILFc7VUFFZUUsdUQ7OztLQUZmRixXO0FBb0NTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jMzg5MzhhOTE4YzE3NTQ5NTljYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTG9hZFByb2R1Y3RBY3Rpb24sIHNlYXJjaFByb2R1Y3RBY3Rpb259IGZyb20gJy4uL3JlZHVjZXJzL3Byb2R1Y3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBVbm9yZGVyZWRMaXN0T3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IElucHV0LCBNZW51fSBmcm9tICdhbnRkJ1xyXG5jb25zdCB7IFNlYXJjaCB9ID0gSW5wdXQ7XHJcbmNvbnN0IHsgU3ViTWVudSB9ID0gTWVudTtcclxuXHJcbmNvbnN0IFByb2R1Y3RNZW51ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBjb25zdCBzb3J0UHJvZHVjdCA9IHVzZUNhbGxiYWNrKCh2YWwpID0+e1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5UGFyYW0gPSBgY2F0ZWdvcnkvJHt2YWx9YFxyXG4gICAgICAgIGRpc3BhdGNoKExvYWRQcm9kdWN0QWN0aW9uKGNhdGVnb3J5UGFyYW0pKTtcclxuICAgIH0sW10pO1xyXG5cclxuICAgIGNvbnN0IG9uU2VhcmNoID0gdXNlQ2FsbGJhY2soKGUpID0+e1xyXG4gICAgICAgIGlmKGUudGFyZ2V0LnZhbHVlICE9PSAnJyl7XHJcbiAgICAgICAgZGlzcGF0Y2goc2VhcmNoUHJvZHVjdEFjdGlvbihlLnRhcmdldC52YWx1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1lbnVcclxuICAgICAgICAgICAgICBtb2RlPVwiaW5saW5lXCJcclxuICAgICAgICAgICAgICBkZWZhdWx0T3BlbktleXM9e1snc3ViMSddfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlclJpZ2h0OiAwIH19XHJcbiAgICAgICAgICAgICAgc2VsZWN0YWJsZSA9e2ZhbHNlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjFcIj5cclxuICAgICAgICAgICAgICAgIDxTZWFyY2ggcGxhY2Vob2xkZXI9XCJpbnB1dCBzZWFyY2ggdGV4dFwiICBvbkNoYW5nZT17KGUpID0+IG9uU2VhcmNoKGUpfSBvbkNsaWNrPXsoZSkgPT4gb25TZWFyY2goZSl9IGVudGVyQnV0dG9uIC8+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICA8U3ViTWVudSBrZXk9XCJzdWIxXCIgaWNvbj17PFVub3JkZXJlZExpc3RPdXRsaW5lZCAvPn0gdGl0bGU9XCJQcm9kdWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIzXCI+PGRpdiBvbkNsaWNrID17KCkgPT5Mb2FkUHJvZHVjdCgnJyl9PkFsbDwvZGl2PjwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiNFwiPjxkaXYgb25DbGljayA9eygpID0+c29ydFByb2R1Y3QoYG1lbidzIGNsb3RoaW5nYCl9Pk1lbnM8L2Rpdj48L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjVcIj48ZGl2IG9uQ2xpY2sgPXsoKSA9PnNvcnRQcm9kdWN0KGB3b21lbidzIGNsb3RoaW5nYCl9PldvbWVuczwvZGl2PjwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiNlwiPjxkaXYgb25DbGljayA9eygpID0+c29ydFByb2R1Y3QoJ2pld2VsZXJ5Jyl9ID5qZXdlbGVyeTwvZGl2PjwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiN1wiPjxkaXYgb25DbGljayA9eygpID0+c29ydFByb2R1Y3QoJ2VsZWN0cm9uaWNzJyl9ID5lbGVjdHJvbmljczwvZGl2PjwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9TdWJNZW51PlxyXG4gICAgICAgIDwvTWVudT5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdE1lbnVcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==