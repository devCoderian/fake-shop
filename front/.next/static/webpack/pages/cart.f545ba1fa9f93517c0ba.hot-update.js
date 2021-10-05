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
      title: '주문하시겠습니까?',
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
        return showDeleteConfirm;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PcmRlckxpc3QuanMiXSwibmFtZXMiOlsiY29uZmlybSIsIk1vZGFsIiwiT3JkZXJMaXN0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsImNhcnQiLCJPcmRlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJCdXR0b25XcmFwcGVyIiwic3R5bGVkIiwiQnV0dG9uIiwiY2FsIiwidXNlTWVtbyIsInRvdGFsIiwibWFwIiwib3JkZXIiLCJxdWFudGl0eSIsInByaWNlIiwicmVkdWNlIiwibCIsInIiLCJ0b0ZpeGVkIiwicmVtb3ZlQ2FydCIsInVzZUNhbGxiYWNrIiwiaXRlbSIsInJlbW92ZUNhcnRBY3Rpb24iLCJyZW1vdmVBbGxDYXJ0IiwiY29uc29sZSIsImxvZyIsInJlbW92ZUFsbENhcnRBY3Rpb24iLCJzaG93T3JkZXJDb25maXJtIiwidGl0bGUiLCJpY29uIiwib25PayIsIm9uQ2FuY2VsIiwic2hvd0RlbGV0ZUNvbmZpcm0iLCJvcmRlckxpc3RGb290ZXIiLCJsZW5ndGgiLCJzcGFuIiwib2Zmc2V0IiwidXNlcklkIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQVFBLE9BQVIsR0FBb0JDLDBDQUFwQixDQUFRRCxPQUFSOztBQUVBLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFDcEIscUJBQWVDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBQTFCO0FBQUEsTUFBUUMsRUFBUixnQkFBUUEsRUFBUjs7QUFDQSxzQkFBbUJILCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0csSUFBVjtBQUFBLEdBQU4sQ0FBOUI7QUFBQSxNQUFRQyxLQUFSLGlCQUFRQSxL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QUFDTyxLQUROLENBREEsRUFJQSxNQUFDLHdDQUFEO0FBQUssWUFBSSxFQUFJLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUNFUCxJQUFJLENBQUNSLFFBRFAsQ0FKQSxFQU9BLE1BQUMsd0NBQUQ7QUFBSyxZQUFJLEVBQUksQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQ0VRLElBQUksQ0FBQ1AsS0FEUCxDQVBBLEVBVUEsTUFBQyx3Q0FBRDtBQUFLLFlBQUksRUFBSSxDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQSxNQUFDLDJDQUFEO0FBQVEsYUFBSyxFQUFDLFFBQWQ7QUFBdUIsWUFBSSxFQUFFLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUE3QjtBQUFzRCxlQUFPLEVBQUk7QUFBQSxpQkFBTUssVUFBVSxDQUFDRSxJQUFJLENBQUNpQixFQUFOLENBQWhCO0FBQUEsU0FBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURBLENBVkEsQ0FEWTtBQUFBLEtBTGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLENBRkEsQ0FESjtBQStCSCxDQXZHRDs7R0FBTTFDLFM7VUFDYUMsdUQsRUFDSUEsdUQsRUFFRk8sdUQ7OztLQUpmUixTO0FBeUdTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXJ0LmY1NDViYTFmYTlmOTM1MTdjMGJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFjaywgdXNlTWVtb30gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpc3QsIERpdmlkZXIsIFJvdywgQ29sLCBCdXR0b24sIE1vZGFsIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IE1pbnVzQ2lyY2xlT3V0bGluZWQsIEV4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgcmVtb3ZlQWxsQ2FydEFjdGlvbiwgcmVtb3ZlQ2FydEFjdGlvbn0gZnJvbSAnLi4vcmVkdWNlcnMvY2FydCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5jb25zdCB7IGNvbmZpcm0gfSA9IE1vZGFsO1xyXG5cclxuY29uc3QgT3JkZXJMaXN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKVxyXG4gICAgY29uc3QgeyBPcmRlciB9ICA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmNhcnQpO1xyXG4gXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgIFxyXG4gICAgY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZChCdXR0b24pYFxyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgIGA7XHJcblxyXG4gICAgY29uc3QgY2FsID0gdXNlTWVtbygoKSA9PntcclxuICAgICAgICBsZXQgdG90YWwgPSAgT3JkZXIubWFwICgob3JkZXIpID0+e1xyXG4gICAgICAgICAgICByZXR1cm4gb3JkZXIucXVhbnRpdHkqb3JkZXIucHJpY2U7XHJcbiAgICAgICAgfSkucmVkdWNlKChsLCByKT0+IGwrciwgMCk7XHJcbiAgICAgICAgcmV0dXJuIHRvdGFsLnRvRml4ZWQoMik7XHJcbiAgICB9LFtPcmRlcl0pO1xyXG5cclxuICAgIGNvbnN0IHJlbW92ZUNhcnQgPSB1c2VDYWxsYmFjaygoaXRlbSkgPT57XHJcbiAgICAgICAgZGlzcGF0Y2gocmVtb3ZlQ2FydEFjdGlvbihpdGVtKSk7XHJcbiAgICB9LFtPcmRlcl0pO1xyXG4gICAgXHJcbiAgICBjb25zdCByZW1vdmVBbGxDYXJ0ID0gdXNlQ2FsbGJhY2soKCkgPT57ICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JlbW92ZV9hbGwnKTtcclxuICAgICAgICBkaXNwYXRjaChyZW1vdmVBbGxDYXJ0QWN0aW9uKCkpO1xyXG4gICAgfSxbT3JkZXJdKTtcclxuXHJcbiAgICBjb25zdCBzaG93T3JkZXJDb25maXJtID0oKCkgPT57ICAgXHJcbiAgICAgICAgY29uZmlybSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn7KO866y47ZWY7Iuc6rKg7Iq164uI6rmMPycsXHJcbiAgICAgICAgICAgIGljb246IDxFeGNsYW1hdGlvbkNpcmNsZU91dGxpbmVkIC8+LFxyXG4gICAgICAgICAgICBvbk9rKCkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdPSycpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkNhbmNlbCgpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ2FuY2VsJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIFxyXG4gICAgY29uc3Qgc2hvd0RlbGV0ZUNvbmZpcm0gPSgoKSA9PnsgICBcclxuICAgICAgICBjb25maXJtKHtcclxuICAgICAgICAgICAgdGl0bGU6ICfso7zrrLjtlZjsi5zqsqDsirXri4jquYw/JyxcclxuICAgICAgICAgICAgaWNvbjogPEV4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZWQgLz4sXHJcbiAgICAgICAgICAgIG9uT2soKSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVBbGxDYXJ0KCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uQ2FuY2VsKCkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDYW5jZWwnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgb3JkZXJMaXN0Rm9vdGVyID0gKCkgPT57XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICBPcmRlci5sZW5ndGg+MCYmXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlcj48L0RpdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8Um93IGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17eyBzcGFuOiA1LCBvZmZzZXQ6IDEgfX0gbGc9e3sgc3BhbjogNiwgb2Zmc2V0OiA0IH19PlxyXG4gICAgICAgICAgICAgICAgICAgIOy0nSDquIjslaE6ICQge2NhbH1cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXt7IHNwYW46IDYsIG9mZnNldDogMSB9fSBsZz17eyBzcGFuOiA2LCBvZmZzZXQ6IDR9fT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uV3JhcHBlciBvbkNsaWNrID17KCkgPT4gc2hvd09yZGVyQ29uZmlybSgpIH0+7KO866y47ZWY6riwPC9CdXR0b25XcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25XcmFwcGVyIG9uQ2xpY2sgPXsoKSA9PiBzaG93RGVsZXRlQ29uZmlybX0+7KCE7LK0IOu5hOyasOq4sDwvQnV0dG9uV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxEaXZpZGVyIG9yaWVudGF0aW9uPVwibWlkZGxlXCI+e21lLnVzZXJJZH3ri5jsnZgg7KO866y47IScPC9EaXZpZGVyPlxyXG4gICAgICAgIDxSb3cganVzdGlmeT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICA8Q29sIHNwYW4gPSB7MTh9ID5cclxuICAgICAgICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI9ezxkaXY+7KO866y47IScPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgZm9vdGVyPXtvcmRlckxpc3RGb290ZXIoKX1cclxuICAgICAgICAgICAgICAgIGJvcmRlcmVkXHJcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtPcmRlcn1cclxuICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0ga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW4gPSB7MTJ9ID5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW4gPSB7Mn0gPlxyXG4gICAgICAgICAgICAgICAgICAgIFh7aXRlbS5xdWFudGl0eX1cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW4gPSB7Mn0gPlxyXG4gICAgICAgICAgICAgICAgICAgICR7aXRlbS5wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW4gPSB7Mn0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2hhcGU9XCJjaXJjbGVcIiBpY29uPXs8TWludXNDaXJjbGVPdXRsaW5lZCAvPn0gb25DbGljayA9IHsoKSA9PiByZW1vdmVDYXJ0KGl0ZW0uaWQpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcmRlckxpc3RcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==