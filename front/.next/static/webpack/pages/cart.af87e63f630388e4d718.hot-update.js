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

  var showConfirm = function showConfirm() {
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

  var orderListFooter = function orderListFooter() {
    return Order.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      justify: "space-between",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
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
        lineNumber: 54,
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
        lineNumber: 57,
        columnNumber: 21
      }
    }, __jsx(ButtonWrapper, {
      onClick: function onClick() {
        return showConfirm();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 21
      }
    }, "\uC8FC\uBB38\uD558\uAE30"), __jsx(ButtonWrapper, {
      onClick: function onClick() {
        return removeAllCart();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 21
      }
    }, "\uC804\uCCB4 \uBE44\uC6B0\uAE30"))));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    orientation: "middle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, me.userId, "\uB2D8\uC758 \uC8FC\uBB38\uC11C"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    justify: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 18,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
    header: __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
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
          lineNumber: 78,
          columnNumber: 21
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 12,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 21
        }
      }, item.title), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 2,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 21
        }
      }, "X", item.quantity), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 2,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 21
        }
      }, "$", item.price), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 2,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 21
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        shape: "circle",
        icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["MinusCircleOutlined"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 50
          }
        }),
        onClick: function onClick() {
          return removeCart(item.id);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }
      })));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PcmRlckxpc3QuanMiXSwibmFtZXMiOlsiY29uZmlybSIsIk1vZGFsIiwiT3JkZXJMaXN0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsImNhcnQiLCJPcmRlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJCdXR0b25XcmFwcGVyIiwic3R5bGVkIiwiQnV0dG9uIiwiY2FsIiwidXNlTWVtbyIsInRvdGFsIiwibWFwIiwib3JkZXIiLCJxdWFudGl0eSIsInByaWNlIiwicmVkdWNlIiwibCIsInIiLCJ0b0ZpeGVkIiwicmVtb3ZlQ2FydCIsInVzZUNhbGxiYWNrIiwiaXRlbSIsInJlbW92ZUNhcnRBY3Rpb24iLCJyZW1vdmVBbGxDYXJ0IiwiY29uc29sZSIsImxvZyIsInJlbW92ZUFsbENhcnRBY3Rpb24iLCJzaG93Q29uZmlybSIsInRpdGxlIiwiaWNvbiIsIm9uT2siLCJvbkNhbmNlbCIsIm9yZGVyTGlzdEZvb3RlciIsImxlbmd0aCIsInNwYW4iLCJvZmZzZXQiLCJ1c2VySWQiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBUUEsT0FBUixHQUFvQkMsMENBQXBCLENBQVFELE9BQVI7O0FBRUEsSUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUNwQixxQkFBZUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FBMUI7QUFBQSxNQUFRQyxFQUFSLGdCQUFRQSxFQUFSOztBQUNBLHNCQUFtQkgsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDRyxJQUFWO0FBQUEsR0FBTixDQUE5QjtBQUFBLE1BQVFDLEtBQVIsaUJBQVFBLEtBQVI7O0FBRUEsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUVBLE1BQU1DLGFBQWEsR0FBR0MsaUVBQU0sQ0FBQ0MsMkNBQUQsQ0FBVCw0S0FBbkI7QUFJQSxNQUFNQyxHQUFHLEdBQUdDLHFEQUFPLENBQUMsWUFBSztBQUNyQixRQUFJQyxLQUFLLEdBQUlSLEtBQUssQ0FBQ1MsR0FBTixDQUFXLFVBQUNDLEtBQUQsRUFBVTtBQUM5QixhQUFPQSxLQUFLLENBQUNDLFFBQU4sR0FBZUQsS0FBSyxDQUFDRSxLQUE1QjtBQUNILEtBRlksRUFFVkMsTUFGVSxDQUVILFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGFBQVNELENBQUMsR0FBQ0MsQ0FBWDtBQUFBLEtBRkcsRUFFVyxDQUZYLENBQWI7QUFHQSxXQUFPUCxLQUFLLENBQUNRLE9BQU4sQ0FBYyxDQUFkLENBQVA7QUFDSCxHQUxrQixFQUtqQixDQUFDaEIsS0FBRCxDQUxpQixDQUFuQjtBQU9BLE1BQU1pQixVQUFVLEdBQUdDLHlEQUFXLENBQUMsVUFBQ0MsSUFBRCxFQUFTO0FBQ3BDbEIsWUFBUSxDQUFDbUIsdUVBQWdCLENBQUNELElBQUQsQ0FBakIsQ0FBUjtBQUNILEdBRjZCLEVBRTVCLENBQUNuQixLQUFELENBRjRCLENBQTlCO0FBSUEsTUFBTXFCLGFBQWEsR0FBR0gseURBQVcsQ0FBQyxZQUFLO0FBQ25DSSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaO0FBQ0F0QixZQUFRLENBQUN1QiwwRUFBbUIsRUFBcEIsQ0FBUjtBQUNILEdBSGdDLEVBRy9CLENBQUN4QixLQUFELENBSCtCLENBQWpDOztBQUtBLE1BQU15QixXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFLO0FBQ3JCakMsV0FBTyxDQUFDO0FBQ0prQyxXQUFLLEVBQUUsV0FESDtBQUVKQyxVQUFJLEVBQUUsTUFBQywyRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkY7QUFHSkMsVUFISSxrQkFHRztBQUNMTixlQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaO0FBQ0QsT0FMRztBQU1KTSxjQU5JLHNCQU1PO0FBQ1RQLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDRDtBQVJHLEtBQUQsQ0FBUDtBQVVILEdBWEQ7O0FBYUEsTUFBTU8sZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFLO0FBQ3pCLFdBQ0k5QixLQUFLLENBQUMrQixNQUFOLEdBQWEsQ0FBYixJQUNBLG1FQUNJLE1BQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLEVBRUksTUFBQyx3Q0FBRDtBQUFLLGFBQU8sRUFBQyxlQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLHdDQUFEO0FBQUssUUFBRSxFQUFFO0FBQUVDLFlBQUksRUFBRSxDQUFSO0FBQVdDLGNBQU0sRUFBRTtBQUFuQixPQUFUO0FBQWlDLFFBQUUsRUFBRTtBQUFFRCxZQUFJLEVBQUUsQ0FBUjtBQUFXQyxjQUFNLEVBQUU7QUFBbkIsT0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FDUzNCLEdBRFQsQ0FESixFQUlJLE1BQUMsd0NBQUQ7QUFBSyxRQUFFLEVBQUU7QUFBRTBCLFlBQUksRUFBRSxDQUFSO0FBQVdDLGNBQU0sRUFBRTtBQUFuQixPQUFUO0FBQWlDLFFBQUUsRUFBRTtBQUFFRCxZQUFJLEVBQUUsQ0FBUjtBQUFXQyxjQUFNLEVBQUU7QUFBbkIsT0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNBLE1BQUMsYUFBRDtBQUFlLGFBQU8sRUFBRztBQUFBLGVBQU1SLFdBQVcsRUFBakI7QUFBQSxPQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURBLEVBRUEsTUFBQyxhQUFEO0FBQWUsYUFBTyxFQUFHO0FBQUEsZUFBTUosYUFBYSxFQUFuQjtBQUFBLE9BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUNBRkEsQ0FKSixDQUZKLENBRko7QUFnQkgsR0FqQkQ7O0FBbUJBLFNBQ0ksbUVBQ0EsTUFBQyw0Q0FBRDtBQUFTLGVBQVcsRUFBQyxRQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQStCdkIsRUFBRSxDQUFDb0MsTUFBbEMsb0NBREEsRUFFQSxNQUFDLHdDQUFEO0FBQUssV0FBTyxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsd0NBQUQ7QUFBSyxRQUFJLEVBQUksRUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx5Q0FBRDtBQUNBLFVBQU0sRUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURSO0FBRUEsVUFBTSxFQUFFSixlQUFlLEVBRnZCO0FBR0EsWUFBUSxNQUhSO0FBSUEsY0FBVSxFQUFFOUIsS0FKWjtBQUtBLGNBQVUsRUFBRSxvQkFBQW1CLElBQUk7QUFBQSxhQUNaLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsV0FBRyxFQUFFQSxJQUFJLENBQUNnQixFQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0EsTUFBQyx3Q0FBRDtBQUFLLFlBQUksRUFBSSxFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQ2hCLElBQUksQ0FBQ08sS0FETixDQURBLEVBSUEsTUFBQyx3Q0FBRDtBQUFLLFlBQUksRUFBSSxDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FDRVAsSUFBSSxDQUFDUixRQURQLENBSkEsRUFPQSxNQUFDLHdDQUFEO0FBQUssWUFBSSxFQUFJLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUNFUSxJQUFJLENBQUNQLEtBRFAsQ0FQQSxFQVVBLE1BQUMsd0NBQUQ7QUFBSyxZQUFJLEVBQUksQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0EsTUFBQywyQ0FBRDtBQUFRLGFBQUssRUFBQyxRQUFkO0FBQXVCLFlBQUksRUFBRSxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBN0I7QUFBc0QsZUFBTyxFQUFJO0FBQUEsaUJBQU1LLFVBQVUsQ0FBQ0UsSUFBSSxDQUFDZ0IsRUFBTixDQUFoQjtBQUFBLFNBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFEQSxDQVZBLENBRFk7QUFBQSxLQUxoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixDQUZBLENBREo7QUErQkgsQ0F6RkQ7O0dBQU16QyxTO1VBQ2FDLHVELEVBQ0lBLHVELEVBRUZPLHVEOzs7S0FKZlIsUztBQTJGU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FydC5hZjg3ZTYzZjYzMDM4OGU0ZDcxOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2ssIHVzZU1lbW99IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMaXN0LCBEaXZpZGVyLCBSb3csIENvbCwgQnV0dG9uLCBNb2RhbCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBNaW51c0NpcmNsZU91dGxpbmVkLCBFeGNsYW1hdGlvbkNpcmNsZU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHJlbW92ZUFsbENhcnRBY3Rpb24sIHJlbW92ZUNhcnRBY3Rpb259IGZyb20gJy4uL3JlZHVjZXJzL2NhcnQnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuY29uc3QgeyBjb25maXJtIH0gPSBNb2RhbDtcclxuXHJcbmNvbnN0IE9yZGVyTGlzdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcilcclxuICAgIGNvbnN0IHsgT3JkZXIgfSAgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5jYXJ0KTtcclxuIFxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICBcclxuICAgIGNvbnN0IEJ1dHRvbldyYXBwZXIgPSBzdHlsZWQoQnV0dG9uKWBcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBgO1xyXG5cclxuICAgIGNvbnN0IGNhbCA9IHVzZU1lbW8oKCkgPT57XHJcbiAgICAgICAgbGV0IHRvdGFsID0gIE9yZGVyLm1hcCAoKG9yZGVyKSA9PntcclxuICAgICAgICAgICAgcmV0dXJuIG9yZGVyLnF1YW50aXR5Km9yZGVyLnByaWNlO1xyXG4gICAgICAgIH0pLnJlZHVjZSgobCwgcik9PiBsK3IsIDApO1xyXG4gICAgICAgIHJldHVybiB0b3RhbC50b0ZpeGVkKDIpO1xyXG4gICAgfSxbT3JkZXJdKTtcclxuXHJcbiAgICBjb25zdCByZW1vdmVDYXJ0ID0gdXNlQ2FsbGJhY2soKGl0ZW0pID0+e1xyXG4gICAgICAgIGRpc3BhdGNoKHJlbW92ZUNhcnRBY3Rpb24oaXRlbSkpO1xyXG4gICAgfSxbT3JkZXJdKTtcclxuICAgIFxyXG4gICAgY29uc3QgcmVtb3ZlQWxsQ2FydCA9IHVzZUNhbGxiYWNrKCgpID0+eyAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZW1vdmVfYWxsJyk7XHJcbiAgICAgICAgZGlzcGF0Y2gocmVtb3ZlQWxsQ2FydEFjdGlvbigpKTtcclxuICAgIH0sW09yZGVyXSk7XHJcblxyXG4gICAgY29uc3Qgc2hvd0NvbmZpcm0gPSgoKSA9PnsgICBcclxuICAgICAgICBjb25maXJtKHtcclxuICAgICAgICAgICAgdGl0bGU6ICfso7zrrLjtlZjsi5zqsqDsirXri4jquYw/JyxcclxuICAgICAgICAgICAgaWNvbjogPEV4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZWQgLz4sXHJcbiAgICAgICAgICAgIG9uT2soKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ09LJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uQ2FuY2VsKCkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDYW5jZWwnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgb3JkZXJMaXN0Rm9vdGVyID0gKCkgPT57XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICBPcmRlci5sZW5ndGg+MCYmXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlcj48L0RpdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8Um93IGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17eyBzcGFuOiA1LCBvZmZzZXQ6IDEgfX0gbGc9e3sgc3BhbjogNiwgb2Zmc2V0OiA0IH19PlxyXG4gICAgICAgICAgICAgICAgICAgIOy0nSDquIjslaE6ICQge2NhbH1cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXt7IHNwYW46IDYsIG9mZnNldDogMSB9fSBsZz17eyBzcGFuOiA2LCBvZmZzZXQ6IDR9fT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uV3JhcHBlciBvbkNsaWNrID17KCkgPT4gc2hvd0NvbmZpcm0oKSB9PuyjvOusuO2VmOq4sDwvQnV0dG9uV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uV3JhcHBlciBvbkNsaWNrID17KCkgPT4gcmVtb3ZlQWxsQ2FydCgpfT7soITssrQg67mE7Jqw6riwPC9CdXR0b25XcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPERpdmlkZXIgb3JpZW50YXRpb249XCJtaWRkbGVcIj57bWUudXNlcklkfeuLmOydmCDso7zrrLjshJw8L0RpdmlkZXI+XHJcbiAgICAgICAgPFJvdyBqdXN0aWZ5PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxDb2wgc3BhbiA9IHsxOH0gPlxyXG4gICAgICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgIGhlYWRlcj17PGRpdj7so7zrrLjshJw8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICBmb290ZXI9e29yZGVyTGlzdEZvb3RlcigpfVxyXG4gICAgICAgICAgICAgICAgYm9yZGVyZWRcclxuICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e09yZGVyfVxyXG4gICAgICAgICAgICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc3BhbiA9IHsxMn0gPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc3BhbiA9IHsyfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgWHtpdGVtLnF1YW50aXR5fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc3BhbiA9IHsyfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtpdGVtLnByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc3BhbiA9IHsyfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaGFwZT1cImNpcmNsZVwiIGljb249ezxNaW51c0NpcmNsZU91dGxpbmVkIC8+fSBvbkNsaWNrID0geygpID0+IHJlbW92ZUNhcnQoaXRlbS5pZCl9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9yZGVyTGlzdFxyXG4iXSwic291cmNlUm9vdCI6IiJ9