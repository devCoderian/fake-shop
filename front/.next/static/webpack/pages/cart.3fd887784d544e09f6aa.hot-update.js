webpackHotUpdate_N_E("pages/cart",{

/***/ "./components/OrderList.js":
/*!*********************************!*\
  !*** ./components/OrderList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/cart */ "./reducers/cart.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _this = undefined,
    _templateObject,
    _jsxFileName = "C:\\Users\\ian07\\Desktop\\fake-shop\\front\\components\\OrderList.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var confirm = antd__WEBPACK_IMPORTED_MODULE_2__["Modal"].confirm;

var OrderList = function OrderList() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.cart;
  }),
      Order = _useSelector2.Order;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var ButtonWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        margin: 10px;\n    "])));
  var cal = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    var total = Order.map(function (order) {
      return order.quantity * order.price;
    }).reduce(function (l, r) {
      return l + r;
    }, 0);
    return total.toFixed(2);
  }, [Order]);
  var removeCart = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (item) {
    dispatch(Object(_reducers_cart__WEBPACK_IMPORTED_MODULE_5__["removeCartAction"])(item));
  }, [Order]);
  var removeAllCart = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    console.log('remove_all');
    dispatch(Object(_reducers_cart__WEBPACK_IMPORTED_MODULE_5__["removeAllCartAction"])());
  }, [Order]);

  var showOrderConfirm = function showOrderConfirm() {
    confirm({
      title: '주문하시겠습니까?',
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["ExclamationCircleOutlined"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 19
        }
      }),
      onOk: function onOk() {
        console.log('OK');
      },
      onCancel: function onCancel() {
        console.log('Cancel');
      }
    });
  };

  var showDeleteConfirm = function showDeleteConfirm() {
    confirm({
      title: '장바구니를 비우시겠습니까?',
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["ExclamationCircleOutlined"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 19
        }
      }),
      onOk: function onOk() {
        removeAllCart();
      },
      onCancel: function onCancel() {
        console.log('Cancel');
      }
    });
  };

  var orderListFooter = function orderListFooter() {
    return Order.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      justify: "space-between",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      xs: {
        span: 5,
        offset: 1
      },
      lg: {
        span: 6,
        offset: 4
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 21
      }
    }, "\uCD1D \uAE08\uC561: $ ", cal), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      xs: {
        span: 6,
        offset: 1
      },
      lg: {
        span: 6,
        offset: 4
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 21
      }
    }, __jsx(ButtonWrapper, {
      onClick: function onClick() {
        return showOrderConfirm();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 21
      }
    }, "\uC8FC\uBB38\uD558\uAE30"), __jsx(ButtonWrapper, {
      onClick: function onClick() {
        return showDeleteConfirm();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 21
      }
    }, "\uC804\uCCB4 \uBE44\uC6B0\uAE30"))));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    orientation: "middle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, me.userId, "\uB2D8\uC758 \uC8FC\uBB38\uC11C"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    justify: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 18,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
    header: __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 25
      }
    }, "\uC8FC\uBB38\uC11C"),
    footer: orderListFooter(),
    bordered: true,
    dataSource: Order,
    renderItem: function renderItem(item) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
        key: item.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 21
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 12,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }
      }, item.title), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 2,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }
      }, "X", item.quantity), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 2,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 21
        }
      }, "$", item.price), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 2,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 21
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        shape: "circle",
        icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["MinusCircleOutlined"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 50
          }
        }),
        onClick: function onClick() {
          return removeCart(item.id);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 21
        }
      })));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }))));
};

_s(OrderList, "H8TSzByrxWa3i7AnNydI+R8aaKc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"]];
});

_c = OrderList;
/* harmony default export */ __webpack_exports__["default"] = (OrderList);

var _c;

$RefreshReg$(_c, "OrderList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PcmRlckxpc3QuanMiXSwibmFtZXMiOlsiY29uZmlybSIsIk1vZGFsIiwiT3JkZXJMaXN0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsImNhcnQiLCJPcmRlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJCdXR0b25XcmFwcGVyIiwic3R5bGVkIiwiQnV0dG9uIiwiY2FsIiwidXNlTWVtbyIsInRvdGFsIiwibWFwIiwib3JkZXIiLCJxdWFudGl0eSIsInByaWNlIiwicmVkdWNlIiwibCIsInIiLCJ0b0ZpeGVkIiwicmVtb3ZlQ2FydCIsInVzZUNhbGxiYWNrIiwiaXRlbSIsInJlbW92ZUNhcnRBY3Rpb24iLCJyZW1vdmVBbGxDYXJ0IiwiY29uc29sZSIsImxvZyIsInJlbW92ZUFsbENhcnRBY3Rpb24iLCJzaG93T3JkZXJDb25maXJtIiwidGl0bGUiLCJpY29uIiwib25PayIsIm9uQ2FuY2VsIiwic2hvd0RlbGV0ZUNvbmZpcm0iLCJvcmRlckxpc3RGb290ZXIiLCJsZW5ndGgiLCJzcGFuIiwib2Zmc2V0IiwidXNlcklkIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQVFBLE9BQVIsR0FBb0JDLDBDQUFwQixDQUFRRCxPQUFSOztBQUVBLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFDcEIscUJBQWVDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBQTFCO0FBQUEsTUFBUUMsRUFBUixnQkFBUUEsRUFBUjs7QUFDQSxzQkFBbUJILCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0csSUFBVjtBQUFBLEdBQU4sQ0FBOUI7QUFBQSxNQUFRQyxLQUFSLGlCQUFRQSxL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QixJQUFJLENBQUNPLEtBRE4sQ0FEQSxFQUlBLE1BQUMsd0NBQUQ7QUFBSyxZQUFJLEVBQUksQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQ0VQLElBQUksQ0FBQ1IsUUFEUCxDQUpBLEVBT0EsTUFBQyx3Q0FBRDtBQUFLLFlBQUksRUFBSSxDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FDRVEsSUFBSSxDQUFDUCxLQURQLENBUEEsRUFVQSxNQUFDLHdDQUFEO0FBQUssWUFBSSxFQUFJLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNBLE1BQUMsMkNBQUQ7QUFBUSxhQUFLLEVBQUMsUUFBZDtBQUF1QixZQUFJLEVBQUUsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQTdCO0FBQXNELGVBQU8sRUFBSTtBQUFBLGlCQUFNSyxVQUFVLENBQUNFLElBQUksQ0FBQ2lCLEVBQU4sQ0FBaEI7QUFBQSxTQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREEsQ0FWQSxDQURZO0FBQUEsS0FMaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosQ0FGQSxDQURKO0FBK0JILENBdkdEOztHQUFNMUMsUztVQUNhQyx1RCxFQUNJQSx1RCxFQUVGTyx1RDs7O0tBSmZSLFM7QUF5R1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhcnQuM2ZkODg3Nzg0ZDU0NGUwOWY2YWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VNZW1vfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGlzdCwgRGl2aWRlciwgUm93LCBDb2wsIEJ1dHRvbiwgTW9kYWwgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgTWludXNDaXJjbGVPdXRsaW5lZCwgRXhjbGFtYXRpb25DaXJjbGVPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyByZW1vdmVBbGxDYXJ0QWN0aW9uLCByZW1vdmVDYXJ0QWN0aW9ufSBmcm9tICcuLi9yZWR1Y2Vycy9jYXJ0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmNvbnN0IHsgY29uZmlybSB9ID0gTW9kYWw7XHJcblxyXG5jb25zdCBPcmRlckxpc3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpXHJcbiAgICBjb25zdCB7IE9yZGVyIH0gID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY2FydCk7XHJcbiBcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgXHJcbiAgICBjb25zdCBCdXR0b25XcmFwcGVyID0gc3R5bGVkKEJ1dHRvbilgXHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgYDtcclxuXHJcbiAgICBjb25zdCBjYWwgPSB1c2VNZW1vKCgpID0+e1xyXG4gICAgICAgIGxldCB0b3RhbCA9ICBPcmRlci5tYXAgKChvcmRlcikgPT57XHJcbiAgICAgICAgICAgIHJldHVybiBvcmRlci5xdWFudGl0eSpvcmRlci5wcmljZTtcclxuICAgICAgICB9KS5yZWR1Y2UoKGwsIHIpPT4gbCtyLCAwKTtcclxuICAgICAgICByZXR1cm4gdG90YWwudG9GaXhlZCgyKTtcclxuICAgIH0sW09yZGVyXSk7XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlQ2FydCA9IHVzZUNhbGxiYWNrKChpdGVtKSA9PntcclxuICAgICAgICBkaXNwYXRjaChyZW1vdmVDYXJ0QWN0aW9uKGl0ZW0pKTtcclxuICAgIH0sW09yZGVyXSk7XHJcbiAgICBcclxuICAgIGNvbnN0IHJlbW92ZUFsbENhcnQgPSB1c2VDYWxsYmFjaygoKSA9PnsgICBcclxuICAgICAgICBjb25zb2xlLmxvZygncmVtb3ZlX2FsbCcpO1xyXG4gICAgICAgIGRpc3BhdGNoKHJlbW92ZUFsbENhcnRBY3Rpb24oKSk7XHJcbiAgICB9LFtPcmRlcl0pO1xyXG5cclxuICAgIGNvbnN0IHNob3dPcmRlckNvbmZpcm0gPSgoKSA9PnsgICBcclxuICAgICAgICBjb25maXJtKHtcclxuICAgICAgICAgICAgdGl0bGU6ICfso7zrrLjtlZjsi5zqsqDsirXri4jquYw/JyxcclxuICAgICAgICAgICAgaWNvbjogPEV4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZWQgLz4sXHJcbiAgICAgICAgICAgIG9uT2soKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ09LJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uQ2FuY2VsKCkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDYW5jZWwnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBzaG93RGVsZXRlQ29uZmlybSA9KCgpID0+eyAgIFxyXG4gICAgICAgIGNvbmZpcm0oe1xyXG4gICAgICAgICAgICB0aXRsZTogJ+yepeuwlOq1rOuLiOulvCDruYTsmrDsi5zqsqDsirXri4jquYw/JyxcclxuICAgICAgICAgICAgaWNvbjogPEV4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZWQgLz4sXHJcbiAgICAgICAgICAgIG9uT2soKSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVBbGxDYXJ0KCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uQ2FuY2VsKCkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDYW5jZWwnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgb3JkZXJMaXN0Rm9vdGVyID0gKCkgPT57XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICBPcmRlci5sZW5ndGg+MCYmXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlcj48L0RpdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8Um93IGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17eyBzcGFuOiA1LCBvZmZzZXQ6IDEgfX0gbGc9e3sgc3BhbjogNiwgb2Zmc2V0OiA0IH19PlxyXG4gICAgICAgICAgICAgICAgICAgIOy0nSDquIjslaE6ICQge2NhbH1cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXt7IHNwYW46IDYsIG9mZnNldDogMSB9fSBsZz17eyBzcGFuOiA2LCBvZmZzZXQ6IDR9fT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uV3JhcHBlciBvbkNsaWNrID17KCkgPT4gc2hvd09yZGVyQ29uZmlybSgpIH0+7KO866y47ZWY6riwPC9CdXR0b25XcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25XcmFwcGVyIG9uQ2xpY2sgPXsoKSA9PiBzaG93RGVsZXRlQ29uZmlybSgpIH0+7KCE7LK0IOu5hOyasOq4sDwvQnV0dG9uV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxEaXZpZGVyIG9yaWVudGF0aW9uPVwibWlkZGxlXCI+e21lLnVzZXJJZH3ri5jsnZgg7KO866y47IScPC9EaXZpZGVyPlxyXG4gICAgICAgIDxSb3cganVzdGlmeT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICA8Q29sIHNwYW4gPSB7MTh9ID5cclxuICAgICAgICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI9ezxkaXY+7KO866y47IScPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgZm9vdGVyPXtvcmRlckxpc3RGb290ZXIoKX1cclxuICAgICAgICAgICAgICAgIGJvcmRlcmVkXHJcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtPcmRlcn1cclxuICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0ga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW4gPSB7MTJ9ID5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW4gPSB7Mn0gPlxyXG4gICAgICAgICAgICAgICAgICAgIFh7aXRlbS5xdWFudGl0eX1cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW4gPSB7Mn0gPlxyXG4gICAgICAgICAgICAgICAgICAgICR7aXRlbS5wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW4gPSB7Mn0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2hhcGU9XCJjaXJjbGVcIiBpY29uPXs8TWludXNDaXJjbGVPdXRsaW5lZCAvPn0gb25DbGljayA9IHsoKSA9PiByZW1vdmVDYXJ0KGl0ZW0uaWQpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcmRlckxpc3RcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==