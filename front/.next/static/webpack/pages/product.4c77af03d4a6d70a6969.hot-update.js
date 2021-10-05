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
    var check = "category/".concat(val);
    dispatch(Object(_reducers_product__WEBPACK_IMPORTED_MODULE_4__["LoadProductAction"])(check));
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
    key: "4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }, __jsx("div", {
    onClick: function onClick() {
      return sortProduct("men's clothing");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 40
    }
  }, "Mens")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, __jsx("div", {
    onClick: function onClick() {
      return sortProduct("women's clothing");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 40
    }
  }, "Womens")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }, __jsx("div", {
    onClick: function onClick() {
      return sortProduct('jewelery');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 40
    }
  }, "jewelery")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "7",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }, __jsx("div", {
    onClick: function onClick() {
      return sortProduct('electronics');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 40
    }
  }, "electronics"))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJJbnB1dCIsIlN1Yk1lbnUiLCJNZW51IiwiUHJvZHVjdExpc3QiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicHJvZHVjdCIsIlByb2R1Y3RzIiwibG9hZFByb2R1Y3RMb2FkaW5nIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZXIiLCJtZSIsIkxvYWRQcm9kdWN0IiwidXNlQ2FsbGJhY2siLCJMb2FkUHJvZHVjdEFjdGlvbiIsInNvcnRQcm9kdWN0IiwidmFsIiwiY2hlY2siLCJvblNlYXJjaCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlYXJjaFByb2R1Y3RBY3Rpb24iLCJhZGRDYXJ0IiwiaXRlbSIsImFkZENhcnRBY3Rpb24iLCJ1c2VFZmZlY3QiLCJJY29uVGV4dCIsImljb24iLCJ0ZXh0IiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsIm1hcmdpbkJvdHRvbSIsImJvcmRlclJpZ2h0Iiwib25DaGFuZ2UiLCJwYWdlIiwiY29uc29sZSIsImxvZyIsInBhZ2VTaXplIiwiaWQiLCJEb2xsYXJDaXJjbGVPdXRsaW5lZCIsInByaWNlIiwiaW1hZ2UiLCJocmVmIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBUUEsTUFBUixHQUFtQkMsMENBQW5CLENBQVFELE1BQVI7QUFDQSxJQUFRRSxPQUFSLEdBQW9CQyx5Q0FBcEIsQ0FBUUQsT0FBUjs7QUFDQSxJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBRXhCLHFCQUEwQ0MsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxPQUFWO0FBQUEsR0FBTixDQUFyRDtBQUFBLE1BQVFDLFFBQVIsZ0JBQVFBLFFBQVI7QUFBQSxNQUFrQkMsa0JBQWxCLGdCQUFrQkEsa0JBQWxCOztBQUNBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBQ0Esc0JBQWVOLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ00sSUFBVjtBQUFBLEdBQU4sQ0FBMUI7QUFBQSxNQUFRQyxFQUFSLGlCQUFRQSxFQUFSOztBQUVBLE1BQU1DLFdBQVcsR0FBR0MseURBQVcsQ0FBQyxZQUFLO0FBQ25DTCxZQUFRLENBQUNNLDJFQUFpQixDQUFDLEVBQUQsQ0FBbEIsQ0FBUjtBQUNELEdBRjhCLEVBRTdCLEVBRjZCLENBQS9CO0FBSUEsTUFBTUMsV0FBVyxHQUFHRix5REFBVyxDQUFDLFVBQUNHLEdBQUQsRUFBUTtBQUN0QyxRQUFNQyxLQUFLLHNCQUFlRCxHQUFmLENBQVg7QUFDQVIsWUFBUSxDQUFDTSwyRUFBaUIsQ0FBQ0csS0FBRCxDQUFsQixDQUFSO0FBQ0QsR0FIOEIsRUFHN0IsRUFINkIsQ0FBL0I7QUFLQSxNQUFNQyxRQUFRLEdBQUdMLHlEQUFXLENBQUMsVUFBQ00sQ0FBRCxFQUFNO0FBQ2pDLFFBQUdBLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULEtBQW1CLEVBQXRCLEVBQXlCO0FBQ3ZCYixjQUFRLENBQUNjLDZFQUFtQixDQUFDSCxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFwQixDQUFSO0FBQ0QsS0FGRCxNQUVLO0FBQ0hiLGNBQVEsQ0FBQ00sMkVBQWlCLEVBQWxCLENBQVI7QUFDRDtBQUNGLEdBTjJCLEVBTTFCLENBQUNSLFFBQUQsQ0FOMEIsQ0FBNUI7QUFRQSxNQUFNaUIsT0FBTyxHQUFHVix5REFBVyxDQUFDLFVBQUNXLElBQUQsRUFBUztBQUNuQ2hCLFlBQVEsQ0FBQ2lCLG9FQUFhLENBQUNELElBQUQsQ0FBZCxDQUFSO0FBQ0QsR0FGMEIsRUFFekIsRUFGeUIsQ0FBM0I7QUFJQUUseURBQVMsQ0FBQyxZQUFNO0FBQ2RkLGVBQVc7QUFDWixHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUlFLE1BQU1lLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsUUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsUUFBU0MsSUFBVCxRQUFTQSxJQUFUO0FBQUEsV0FDZixNQUFDLDBDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQ0dDLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JILElBQXBCLENBREgsRUFFR0MsSUFGSCxDQURlO0FBQUEsR0FBakIsQ0EvQnNCLENBcUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFFRSxNQUFNRyxLQUFLLEdBQUc7QUFBRUMsY0FBVSxFQUFFLE1BQWQ7QUFBc0JDLFdBQU8sRUFBRSxVQUEvQjtBQUEwQ0MsZ0JBQVksRUFBRTtBQUF4RCxHQUFkO0FBQ0EsU0FDRSxtRUFDRSxNQUFDLHdDQUFEO0FBQUssVUFBTSxFQUFHLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBZDtBQUF3QixXQUFPLEVBQUMsUUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsd0NBQUQ7QUFBSyxRQUFJLEVBQUksQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyx5Q0FBRDtBQUNNLFFBQUksRUFBQyxRQURYO0FBRU0sbUJBQWUsRUFBRSxDQUFDLE1BQUQsQ0FGdkI7QUFHTSxTQUFLLEVBQUU7QUFBRUMsaUJBQVcsRUFBRTtBQUFmLEtBSGI7QUFJTSxjQUFVLEVBQUcsS0FKbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1RLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsT0FBRyxFQUFDLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsTUFBRDtBQUFRLGVBQVcsRUFBQyxtQkFBcEI7QUFBeUMsWUFBUSxFQUFFLGtCQUFDakIsQ0FBRDtBQUFBLGFBQU9ELFFBQVEsQ0FBQ0MsQ0FBRCxDQUFmO0FBQUEsS0FBbkQ7QUFBdUUsV0FBTyxFQUFFLGlCQUFDQSxDQUFEO0FBQUEsYUFBT0QsUUFBUSxDQUFDQyxDQUFELENBQWY7QUFBQSxLQUFoRjtBQUFvRyxlQUFXLE1BQS9HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxDQU5SLEVBU00sTUFBQyxPQUFEO0FBQVMsT0FBRyxFQUFDLE1BQWI7QUFBb0IsUUFBSSxFQUFFLE1BQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUExQjtBQUFxRCxTQUFLLEVBQUMsU0FBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNNLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsT0FBRyxFQUFDLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUROLEVBRU0sTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUMsR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW1CO0FBQUssV0FBTyxFQUFHO0FBQUEsYUFBS0osV0FBVyxrQkFBaEI7QUFBQSxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBbkIsQ0FGTixFQUdNLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsT0FBRyxFQUFDLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFtQjtBQUFLLFdBQU8sRUFBRztBQUFBLGFBQUtBLFdBQVcsb0JBQWhCO0FBQUEsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQW5CLENBSE4sRUFJTSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLE9BQUcsRUFBQyxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbUI7QUFBSyxXQUFPLEVBQUc7QUFBQSxhQUFLQSxXQUFXLENBQUMsVUFBRCxDQUFoQjtBQUFBLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBbkIsQ0FKTixFQUtNLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsT0FBRyxFQUFDLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFtQjtBQUFLLFdBQU8sRUFBRztBQUFBLGFBQUtBLFdBQVcsQ0FBQyxhQUFELENBQWhCO0FBQUEsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFuQixDQUxOLENBVE4sQ0FEQSxDQURBLEVBcUJBLE1BQUMsd0NBQUQ7QUFBSyxRQUFJLEVBQUksRUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUEsTUFBQyx5Q0FBRDtBQUFRLFNBQUssRUFBRWlCLEtBQWY7QUFDUSxjQUFVLEVBQUMsVUFEbkI7QUFFUSxRQUFJLEVBQUMsT0FGYjtBQUdRLGNBQVUsRUFBRTtBQUNaSyxjQUFRLEVBQUUsa0JBQUFDLElBQUksRUFBSTtBQUNkQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNILE9BSFc7QUFJWkcsY0FBUSxFQUFFO0FBSkUsS0FIcEI7QUFTUSxXQUFPLEVBQUlsQyxrQkFUbkI7QUFVUSxjQUFVLEVBQUVELFFBVnBCO0FBV1EsY0FBVSxFQUFFLG9CQUFBa0IsSUFBSTtBQUFBLGFBQ2hCLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0ksV0FBRyxFQUFFQSxJQUFJLENBQUNrQixFQURkO0FBRUksZUFBTyxFQUFFLENBQ1QsTUFBQyxRQUFEO0FBQVUsY0FBSSxFQUFFQyxzRUFBaEI7QUFBc0MsY0FBSSxFQUFFbkIsSUFBSSxDQUFDb0IsS0FBakQ7QUFBd0QsYUFBRyxFQUFDLHNCQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRFMsRUFFVGpDLEVBQUUsSUFBRyxNQUFDLDJDQUFEO0FBQVEsY0FBSSxFQUFFLE1BQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFkO0FBQXdDLGlCQUFPLEVBQUU7QUFBQSxtQkFBS1ksT0FBTyxDQUFDQyxJQUFELENBQVo7QUFBQSxXQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRkksQ0FGYjtBQU9JLGFBQUssRUFDTDtBQUNJLGVBQUssRUFBRSxHQURYO0FBRUksZ0JBQU0sRUFBRyxHQUZiO0FBR0ksYUFBRyxFQUFDLE1BSFI7QUFJSSxhQUFHLEVBQUVBLElBQUksQ0FBQ3FCLEtBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FnQkksTUFBQyx5Q0FBRCxDQUFNLElBQU4sQ0FBVyxJQUFYO0FBQ0EsYUFBSyxFQUFFO0FBQUcsY0FBSSxFQUFFckIsSUFBSSxDQUFDc0IsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXFCdEIsSUFBSSxDQUFDdUIsS0FBMUIsQ0FEUDtBQUVBLG1CQUFXLEVBQUV2QixJQUFJLENBQUN3QixXQUZsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBaEJKLEVBb0JLeEIsSUFBSSxDQUFDeUIsT0FwQlYsQ0FEZ0I7QUFBQSxLQVh4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkEsQ0FyQkEsQ0FERixDQURGO0FBaUVILENBM0hEOztHQUFNL0MsVztVQUVzQ0MsdUQsRUFDekJNLHVELEVBQ0ZOLHVEOzs7S0FKWEQsVztBQTRIU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC40Yzc3YWYwM2Q0YTZkNzBhNjk2OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGlzdCwgQnV0dG9uLCBTcGFjZSwgIFJvdywgQ29sLCBJbnB1dCwgTWVudX0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IHsgRG9sbGFyQ2lyY2xlT3V0bGluZWQsIEhlYXJ0T3V0bGluZWQsIEhlYXJ0VHdvVG9uZSwgU2hvcHBpbmdDYXJ0T3V0bGluZWQgLCBVbm9yZGVyZWRMaXN0T3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2gsIHNoYWxsb3dFcXVhbH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBMb2FkUHJvZHVjdEFjdGlvbiwgc2VhcmNoUHJvZHVjdEFjdGlvbn0gZnJvbSAnLi4vcmVkdWNlcnMvcHJvZHVjdCc7XHJcbmltcG9ydCB7IGFkZENhcnRBY3Rpb24gfSBmcm9tICcuLi9yZWR1Y2Vycy9jYXJ0JztcclxuY29uc3QgeyBTZWFyY2ggfSA9IElucHV0O1xyXG5jb25zdCB7IFN1Yk1lbnUgfSA9IE1lbnU7XHJcbmNvbnN0IFByb2R1Y3RMaXN0ID0gKCkgPT4ge1xyXG4gIFxyXG4gIGNvbnN0IHsgUHJvZHVjdHMsIGxvYWRQcm9kdWN0TG9hZGluZyB9ICA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnByb2R1Y3QpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgY29uc3QgTG9hZFByb2R1Y3QgPSB1c2VDYWxsYmFjaygoKSA9PntcclxuICAgIGRpc3BhdGNoKExvYWRQcm9kdWN0QWN0aW9uKCcnKSk7XHJcbiAgfSxbXSk7XHJcblxyXG4gIGNvbnN0IHNvcnRQcm9kdWN0ID0gdXNlQ2FsbGJhY2soKHZhbCkgPT57XHJcbiAgICBjb25zdCBjaGVjayA9IGBjYXRlZ29yeS8ke3ZhbH1gXHJcbiAgICBkaXNwYXRjaChMb2FkUHJvZHVjdEFjdGlvbihjaGVjaykpO1xyXG4gIH0sW10pO1xyXG5cclxuICBjb25zdCBvblNlYXJjaCA9IHVzZUNhbGxiYWNrKChlKSA9PntcclxuICAgIGlmKGUudGFyZ2V0LnZhbHVlICE9PSAnJyl7XHJcbiAgICAgIGRpc3BhdGNoKHNlYXJjaFByb2R1Y3RBY3Rpb24oZS50YXJnZXQudmFsdWUpKTtcclxuICAgIH1lbHNle1xyXG4gICAgICBkaXNwYXRjaChMb2FkUHJvZHVjdEFjdGlvbigpKTtcclxuICAgIH1cclxuICB9LFtQcm9kdWN0c10pO1xyXG5cclxuICBjb25zdCBhZGRDYXJ0ID0gdXNlQ2FsbGJhY2soKGl0ZW0pID0+e1xyXG4gICAgZGlzcGF0Y2goYWRkQ2FydEFjdGlvbihpdGVtKSk7XHJcbiAgfSxbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBMb2FkUHJvZHVjdCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBJY29uVGV4dCA9ICh7IGljb24sIHRleHQgfSkgPT4gKFxyXG4gICAgICA8U3BhY2U+XHJcbiAgICAgICAge1JlYWN0LmNyZWF0ZUVsZW1lbnQoaWNvbil9XHJcbiAgICAgICAge3RleHR9XHJcbiAgICAgIDwvU3BhY2U+XHJcbiAgICApO1xyXG4gIC8vICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgICAgbGV0IHJvdz0gW107XHJcbiAgLy8gICAgIE9yZGVyLmZvckVhY2goKGRhdGEpPT57XHJcbiAgLy8gICAgICAgICBpZihkYXRhLnRpdGxlLnRvTG9jYWxlVXBwZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG9jYWxlVXBwZXJDYXNlKCkpKXtcclxuICAvLyAgICAgICAgICAgICByb3cucHVzaChkYXRhKTsgXHJcbiAgLy8gICAgICAgICAgICAgc2V0UHJvZHVjdHMocm93KTtcclxuICAvLyAgICAgICAgIH1lbHNle1xyXG4gIC8vICAgICAgICAgICAgIHJldHVybjtcclxuICAvLyAgICAgICAgIH1cclxuICAvLyAgICAgICAgIC8v67Cw7Je07JeQIOy2lOqwgFxyXG4gICAgICAgICBcclxuICAvLyAgICAgfSk7XHJcbiAgLy8gICAgIGlmKHNlYXJjaCA9PT0gXCJcIil7XHJcbiAgLy8gICAgICAgICBwcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0cygpLnRoZW4oZGF0YSA9PiBzZXRQcm9kdWN0cyhkYXRhKSk7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgICAgcm93PSBbXTtcclxuICAvLyAgICAgY29uc29sZS5sb2cocm93KTtcclxuXHJcbiAgLy8gfSwgW3NlYXJjaF0pO1xyXG4gXHJcbiAgICBjb25zdCBzdHlsZSA9IHsgYmFja2dyb3VuZDogJyNmZmYnLCBwYWRkaW5nOiAnOHB4IDIwcHgnLG1hcmdpbkJvdHRvbTogJzYwcHgnfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPFJvdyBndXR0ZXIgPXtbNDgsIDQ4XX0ganVzdGlmeT1cImNlbnRlclwiPlxyXG4gICAgICAgIDxDb2wgc3BhbiA9IHs2fT5cclxuICAgICAgICA8TWVudVxyXG4gICAgICAgICAgICAgIG1vZGU9XCJpbmxpbmVcIlxyXG4gICAgICAgICAgICAgIGRlZmF1bHRPcGVuS2V5cz17WydzdWIxJ119XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmlnaHQ6IDAgfX1cclxuICAgICAgICAgICAgICBzZWxlY3RhYmxlID17ZmFsc2V9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiMVwiPlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaCBwbGFjZWhvbGRlcj1cImlucHV0IHNlYXJjaCB0ZXh0XCIgIG9uQ2hhbmdlPXsoZSkgPT4gb25TZWFyY2goZSl9IG9uQ2xpY2s9eyhlKSA9PiBvblNlYXJjaChlKX0gZW50ZXJCdXR0b24gLz5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxTdWJNZW51IGtleT1cInN1YjFcIiBpY29uPXs8VW5vcmRlcmVkTGlzdE91dGxpbmVkIC8+fSB0aXRsZT1cIlByb2R1Y3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjNcIj5BbGw8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjRcIj48ZGl2IG9uQ2xpY2sgPXsoKSA9PnNvcnRQcm9kdWN0KGBtZW4ncyBjbG90aGluZ2ApfT5NZW5zPC9kaXY+PC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCI1XCI+PGRpdiBvbkNsaWNrID17KCkgPT5zb3J0UHJvZHVjdChgd29tZW4ncyBjbG90aGluZ2ApfT5Xb21lbnM8L2Rpdj48L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjZcIj48ZGl2IG9uQ2xpY2sgPXsoKSA9PnNvcnRQcm9kdWN0KCdqZXdlbGVyeScpfSA+amV3ZWxlcnk8L2Rpdj48L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjdcIj48ZGl2IG9uQ2xpY2sgPXsoKSA9PnNvcnRQcm9kdWN0KCdlbGVjdHJvbmljcycpfSA+ZWxlY3Ryb25pY3M8L2Rpdj48L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvU3ViTWVudT5cclxuICAgICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgPC9Db2w+IFxyXG4gICAgICAgXHJcbiAgICAgICAgPENvbCBzcGFuID0gezE4fT5cclxuICAgICAgIFxyXG4gICAgICAgIDxMaXN0ICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgICAgICAgICAgICAgaXRlbUxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogcGFnZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGFnZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGFnZVNpemU6IDUsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgbG9hZGluZyA9IHtsb2FkUHJvZHVjdExvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtQcm9kdWN0c31cclxuICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4gKFxyXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25UZXh0IGljb249e0RvbGxhckNpcmNsZU91dGxpbmVkfSB0ZXh0PXtpdGVtLnByaWNlfSBrZXk9XCJsaXN0LXZlcnRpY2FsLXN0YXItb1wiIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgIG1lJiYgPEJ1dHRvbiBpY29uPXs8U2hvcHBpbmdDYXJ0T3V0bGluZWQgLz59IG9uQ2xpY2s9eygpID0+YWRkQ2FydChpdGVtKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+LFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgZXh0cmE9e1xyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezE1MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID17MjAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8YSBocmVmPXtpdGVtLmhyZWZ9PntpdGVtLnRpdGxlfTwvYT59XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2l0ZW0uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=