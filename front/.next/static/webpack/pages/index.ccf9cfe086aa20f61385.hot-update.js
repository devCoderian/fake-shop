webpackHotUpdate_N_E("pages/index",{

/***/ "./components/MenuLayout.js":
/*!**********************************!*\
  !*** ./components/MenuLayout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _MenuHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MenuHeader */ "./components/MenuHeader.js");
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LoginForm */ "./components/LoginForm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\ian07\\Desktop\\fake-shop\\front\\components\\MenuLayout.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var SubMenu = antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].SubMenu;
var Content = antd__WEBPACK_IMPORTED_MODULE_3__["Layout"].Content,
    Sider = antd__WEBPACK_IMPORTED_MODULE_3__["Layout"].Sider;




var MenuLayout = function MenuLayout(_ref) {
  _s();

  var children = _ref.children;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Layout"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["PageHeader"], {
    ghost: false,
    title: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      size: "large",
      shape: "round",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 20
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 55
      }
    }, "FAKE-SHOP")),
    subTitle: "by devCoderian",
    extra: me ? __jsx(_MenuHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 23
      }
    }) : __jsx(_LoginForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 37
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 12
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Layout"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Layout"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx(Content, {
    className: "site-layout-background",
    style: {
      padding: 24,
      margin: 0,
      minHeight: '100vh'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, children))));
};

_s(MenuLayout, "w2b5rwE/wumJi8RNmPJOutGjGrs=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = MenuLayout;
MenuLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (MenuLayout);

var _c;

$RefreshReg$(_c, "MenuLayout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51TGF5b3V0LmpzIl0sIm5hbWVzIjpbIlN1Yk1lbnUiLCJNZW51IiwiQ29udGVudCIsIkxheW91dCIsIlNpZGVyIiwiTWVudUxheW91dCIsImNoaWxkcmVuIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsInBhZGRpbmciLCJtYXJnaW4iLCJtaW5IZWlnaHQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBLElBQVFBLE9BQVIsR0FBb0JDLHlDQUFwQixDQUFRRCxPQUFSO0FBQ0EsSUFBUUUsT0FBUixHQUEyQkMsMkNBQTNCLENBQVFELE9BQVI7QUFBQSxJQUFpQkUsS0FBakIsR0FBMkJELDJDQUEzQixDQUFpQkMsS0FBakI7QUFFQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBRW5DLHFCQUFlQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUExQjtBQUFBLE1BQU9DLEVBQVAsZ0JBQU9BLEVBQVA7O0FBRUEsU0FDTSxNQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxNQUFDLCtDQUFEO0FBQ0MsU0FBSyxFQUFFLEtBRFI7QUFFQyxTQUFLLEVBQUUsTUFBQywyQ0FBRDtBQUFRLFVBQUksRUFBQyxPQUFiO0FBQXFCLFdBQUssRUFBQyxPQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQW1DLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUUsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFuQyxDQUZSO0FBR0MsWUFBUSxFQUFDLGdCQUhWO0FBSUMsU0FBSyxFQUFFQSxFQUFFLEdBQUMsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQUQsR0FBZSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURILEVBT0EsTUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUUsTUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxPQUFEO0FBQ0UsYUFBUyxFQUFDLHdCQURaO0FBRUUsU0FBSyxFQUFFO0FBQ0xDLGFBQU8sRUFBRSxFQURKO0FBRUxDLFlBQU0sRUFBRSxDQUZIO0FBR0xDLGVBQVMsRUFBRTtBQUhOLEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFHUCxRQVJILENBREYsQ0FGRixDQVBBLENBRE47QUF5QkQsQ0E3QkQ7O0dBQU1ELFU7VUFFV0UsdUQ7OztLQUZYRixVO0FBK0JOQSxVQUFVLENBQUNTLFNBQVgsR0FBdUI7QUFDbkJSLFVBQVEsRUFBRVMsaURBQVMsQ0FBQ0MsSUFBVixDQUFlQztBQUROLENBQXZCO0FBR2VaLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNjZjljZmUwODZhYTIwZjYxMzg1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVJlZiwgdXNlU3RhdGUsdXNlTWVtb30gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgeyBMYXlvdXQsIE1lbnUsIFBhZ2VIZWFkZXIsIEJ1dHRvbn0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFVub3JkZXJlZExpc3RPdXRsaW5lZCwgSG9tZU91dGxpbmVkLCBTaG9wcGluZ0NhcnRPdXRsaW5lZH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5jb25zdCB7IFN1Yk1lbnUgfSA9IE1lbnU7XHJcbmNvbnN0IHsgQ29udGVudCwgU2lkZXIgfSA9IExheW91dDtcclxuXHJcbmltcG9ydCBNZW51SGVhZGVyIGZyb20gJy4vTWVudUhlYWRlcic7XHJcbmltcG9ydCBMb2dpbkZyb20gZnJvbSAnLi9Mb2dpbkZvcm0nO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuXHJcbmNvbnN0IE1lbnVMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblxyXG4gIGNvbnN0IHttZX0gID0gIHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICA8UGFnZUhlYWRlclxyXG4gICAgICAgICAgICBnaG9zdD17ZmFsc2V9XHJcbiAgICAgICAgICAgIHRpdGxlPXs8QnV0dG9uIHNpemU9J2xhcmdlJyBzaGFwZT1cInJvdW5kXCI+PExpbmsgaHJlZiA9XCIvXCI+RkFLRS1TSE9QPC9MaW5rPjwvQnV0dG9uPn0gXHJcbiAgICAgICAgICAgIHN1YlRpdGxlPVwiYnkgZGV2Q29kZXJpYW5cIlxyXG4gICAgICAgICAgICBleHRyYT17bWU/PE1lbnVIZWFkZXIvPjo8TG9naW5Gcm9tLz59XHJcbiAgICAgICAgICAgID48L1BhZ2VIZWFkZXI+XHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgXHJcbiAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8Q29udGVudFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpdGUtbGF5b3V0LWJhY2tncm91bmRcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyNCxcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogJzEwMHZoJyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L0NvbnRlbnQ+XHJcbiAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcbk1lbnVMYXlvdXQucHJvcFR5cGVzID0ge1xyXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTWVudUxheW91dDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==