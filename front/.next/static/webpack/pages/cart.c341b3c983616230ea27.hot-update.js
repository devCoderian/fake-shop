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
      content: 'Some descriptions',
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
        lineNumber: 53,
        columnNumber: 17
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      justify: "space-between",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
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
        lineNumber: 55,
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
        lineNumber: 58,
        columnNumber: 21
      }
    }, __jsx(ButtonWrapper, {
      onClick: function onClick() {
        return showConfirm();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 21
      }
    }, "\uC8FC\uBB38\uD558\uAE30"), __jsx(ButtonWrapper, {
      onClick: function onClick() {
        return removeAllCart();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 21
      }
    }, "\uC804\uCCB4 \uBE44\uC6B0\uAE30"))));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    orientation: "middle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, me.userId, "\uB2D8\uC758 \uC8FC\uBB38\uC11C"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    justify: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 18,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
    header: __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
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
          lineNumber: 79,
          columnNumber: 21
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 12,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }
      }, item.title), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 2,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }
      }, "X", item.quantity), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 2,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }
      }, "$", item.price), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 2,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        shape: "circle",
        icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["MinusCircleOutlined"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 50
          }
        }),
        onClick: function onClick() {
          return removeCart(item.id);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }
      })));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PcmRlckxpc3QuanMiXSwibmFtZXMiOlsiY29uZmlybSIsIk1vZGFsIiwiT3JkZXJMaXN0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsImNhcnQiLCJPcmRlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJCdXR0b25XcmFwcGVyIiwic3R5bGVkIiwiQnV0dG9uIiwiY2FsIiwidXNlTWVtbyIsInRvdGFsIiwibWFwIiwib3JkZXIiLCJxdWFudGl0eSIsInByaWNlIiwicmVkdWNlIiwibCIsInIiLCJ0b0ZpeGVkIiwicmVtb3ZlQ2FydCIsInVzZUNhbGxiYWNrIiwiaXRlbSIsInJlbW92ZUNhcnRBY3Rpb24iLCJyZW1vdmVBbGxDYXJ0IiwiY29uc29sZSIsImxvZyIsInJlbW92ZUFsbENhcnRBY3Rpb24iLCJzaG93Q29uZmlybSIsInRpdGxlIiwiaWNvbiIsImNvbnRlbnQiLCJvbk9rIiwib25DYW5jZWwiLCJvcmRlckxpc3RGb290ZXIiLCJsZW5ndGgiLCJzcGFuIiwib2Zmc2V0IiwidXNlcklkIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQVFBLE9BQVIsR0FBb0JDLDBDQUFwQixDQUFRRCxPQUFSOztBQUVBLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFDcEIscUJBQWVDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBQTFCO0FBQUEsTUFBUUMsRUFBUixnQkFBUUEsRUFBUjs7QUFDQSxzQkFBbUJILCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0csSUFBVjtBQUFBLEdBQU4sQ0FBOUI7QUFBQSxNQUFRQyxLQUFSLGlCQUFRQSxLQUFSOztBQUVBLE1BQU1D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QUE7QUFBQTtBQUFBO0FBQUEsU0FDQSxNQUFDLDJDQUFEO0FBQVEsYUFBSyxFQUFDLFFBQWQ7QUFBdUIsWUFBSSxFQUFFLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUE3QjtBQUFzRCxlQUFPLEVBQUk7QUFBQSxpQkFBTUssVUFBVSxDQUFDRSxJQUFJLENBQUNpQixFQUFOLENBQWhCO0FBQUEsU0FBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURBLENBVkEsQ0FEWTtBQUFBLEtBTGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLENBRkEsQ0FESjtBQStCSCxDQTFGRDs7R0FBTTFDLFM7VUFDYUMsdUQsRUFDSUEsdUQsRUFFRk8sdUQ7OztLQUpmUixTO0FBNEZTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXJ0LmMzNDFiM2M5ODM2MTYyMzBlYTI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFjaywgdXNlTWVtb30gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpc3QsIERpdmlkZXIsIFJvdywgQ29sLCBCdXR0b24sIE1vZGFsIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IE1pbnVzQ2lyY2xlT3V0bGluZWQsIEV4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgcmVtb3ZlQWxsQ2FydEFjdGlvbiwgcmVtb3ZlQ2FydEFjdGlvbn0gZnJvbSAnLi4vcmVkdWNlcnMvY2FydCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5jb25zdCB7IGNvbmZpcm0gfSA9IE1vZGFsO1xyXG5cclxuY29uc3QgT3JkZXJMaXN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKVxyXG4gICAgY29uc3QgeyBPcmRlciB9ICA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmNhcnQpO1xyXG4gXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgIFxyXG4gICAgY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZChCdXR0b24pYFxyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgIGA7XHJcblxyXG4gICAgY29uc3QgY2FsID0gdXNlTWVtbygoKSA9PntcclxuICAgICAgICBsZXQgdG90YWwgPSAgT3JkZXIubWFwICgob3JkZXIpID0+e1xyXG4gICAgICAgICAgICByZXR1cm4gb3JkZXIucXVhbnRpdHkqb3JkZXIucHJpY2U7XHJcbiAgICAgICAgfSkucmVkdWNlKChsLCByKT0+IGwrciwgMCk7XHJcbiAgICAgICAgcmV0dXJuIHRvdGFsLnRvRml4ZWQoMik7XHJcbiAgICB9LFtPcmRlcl0pO1xyXG5cclxuICAgIGNvbnN0IHJlbW92ZUNhcnQgPSB1c2VDYWxsYmFjaygoaXRlbSkgPT57XHJcbiAgICAgICAgZGlzcGF0Y2gocmVtb3ZlQ2FydEFjdGlvbihpdGVtKSk7XHJcbiAgICB9LFtPcmRlcl0pO1xyXG4gICAgXHJcbiAgICBjb25zdCByZW1vdmVBbGxDYXJ0ID0gdXNlQ2FsbGJhY2soKCkgPT57ICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JlbW92ZV9hbGwnKTtcclxuICAgICAgICBkaXNwYXRjaChyZW1vdmVBbGxDYXJ0QWN0aW9uKCkpO1xyXG4gICAgfSxbT3JkZXJdKTtcclxuXHJcbiAgICBjb25zdCBzaG93Q29uZmlybSA9KCgpID0+eyAgIFxyXG4gICAgICAgIGNvbmZpcm0oe1xyXG4gICAgICAgICAgICB0aXRsZTogJ+yjvOusuO2VmOyLnOqyoOyKteuLiOq5jD8nLFxyXG4gICAgICAgICAgICBpY29uOiA8RXhjbGFtYXRpb25DaXJjbGVPdXRsaW5lZCAvPixcclxuICAgICAgICAgICAgY29udGVudDogJ1NvbWUgZGVzY3JpcHRpb25zJyxcclxuICAgICAgICAgICAgb25PaygpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnT0snKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25DYW5jZWwoKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NhbmNlbCcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBvcmRlckxpc3RGb290ZXIgPSAoKSA9PntcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIE9yZGVyLmxlbmd0aD4wJiZcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyPjwvRGl2aWRlcj5cclxuICAgICAgICAgICAgICAgIDxSb3cganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXt7IHNwYW46IDUsIG9mZnNldDogMSB9fSBsZz17eyBzcGFuOiA2LCBvZmZzZXQ6IDQgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAg7LSdIOq4iOyVoTogJCB7Y2FsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9e3sgc3BhbjogNiwgb2Zmc2V0OiAxIH19IGxnPXt7IHNwYW46IDYsIG9mZnNldDogNH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25XcmFwcGVyIG9uQ2xpY2sgPXsoKSA9PiBzaG93Q29uZmlybSgpIH0+7KO866y47ZWY6riwPC9CdXR0b25XcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25XcmFwcGVyIG9uQ2xpY2sgPXsoKSA9PiByZW1vdmVBbGxDYXJ0KCl9PuyghOyytCDruYTsmrDquLA8L0J1dHRvbldyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8RGl2aWRlciBvcmllbnRhdGlvbj1cIm1pZGRsZVwiPnttZS51c2VySWR964uY7J2YIOyjvOusuOyEnDwvRGl2aWRlcj5cclxuICAgICAgICA8Um93IGp1c3RpZnk9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgPENvbCBzcGFuID0gezE4fSA+XHJcbiAgICAgICAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyPXs8ZGl2PuyjvOusuOyEnDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIGZvb3Rlcj17b3JkZXJMaXN0Rm9vdGVyKCl9XHJcbiAgICAgICAgICAgICAgICBib3JkZXJlZFxyXG4gICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17T3JkZXJ9XHJcbiAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuID0gezEyfSA+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuID0gezJ9ID5cclxuICAgICAgICAgICAgICAgICAgICBYe2l0ZW0ucXVhbnRpdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuID0gezJ9ID5cclxuICAgICAgICAgICAgICAgICAgICAke2l0ZW0ucHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuID0gezJ9ID5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNoYXBlPVwiY2lyY2xlXCIgaWNvbj17PE1pbnVzQ2lyY2xlT3V0bGluZWQgLz59IG9uQ2xpY2sgPSB7KCkgPT4gcmVtb3ZlQ2FydChpdGVtLmlkKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3JkZXJMaXN0XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=