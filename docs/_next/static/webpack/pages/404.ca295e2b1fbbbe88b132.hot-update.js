/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/404",{

/***/ "./pages/404.js":
/*!**********************!*\
  !*** ./pages/404.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/hardboiled65/dev/blog/pages/404.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Custom404 = function Custom404() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n      path = _useState[0],\n      setPath = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n      debugMessage = _useState2[0],\n      setDebugMessage = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    setPath(window.location.pathname.slice(1));\n  });\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    setDebugMessage('useEffect');\n\n    if (path.startsWith('blog/posts/')) {\n      localStorage.setItem('path', path);\n      var realRealPath = path.slice('5');\n      router.push('/' + realRealPath);\n    } else {\n      setDebugMessage('Not starts with blog/posts/');\n    }\n  }, [path]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"404 - Page not found\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [\"path: \", path]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [\"debugMessage: \", debugMessage]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(Custom404, \"JpuzZuOBUXhBqkFuB1ihx8MXZ60=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];\n});\n\n_c = Custom404;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Custom404);\n\nvar _c;\n\n$RefreshReg$(_c, \"Custom404\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvNDA0LmpzP2I4ZGMiXSwibmFtZXMiOlsiQ3VzdG9tNDA0IiwidXNlU3RhdGUiLCJwYXRoIiwic2V0UGF0aCIsImRlYnVnTWVzc2FnZSIsInNldERlYnVnTWVzc2FnZSIsInVzZUVmZmVjdCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzbGljZSIsInJvdXRlciIsInVzZVJvdXRlciIsInN0YXJ0c1dpdGgiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicmVhbFJlYWxQYXRoIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFDRUMsK0NBQVEsQ0FBQyxFQUFELENBRFY7QUFBQSxNQUNmQyxJQURlO0FBQUEsTUFDVEMsT0FEUzs7QUFBQSxtQkFHa0JGLCtDQUFRLENBQUMsRUFBRCxDQUgxQjtBQUFBLE1BR2ZHLFlBSGU7QUFBQSxNQUdEQyxlQUhDOztBQUt0QkMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RILFdBQU8sQ0FBQ0ksTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxRQUFoQixDQUF5QkMsS0FBekIsQ0FBK0IsQ0FBL0IsQ0FBRCxDQUFQO0FBQ0QsR0FGUSxDQUFUO0FBSUEsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUVBTixrREFBUyxDQUFDLFlBQU07QUFDZEQsbUJBQWUsQ0FBQyxXQUFELENBQWY7O0FBQ0EsUUFBSUgsSUFBSSxDQUFDVyxVQUFMLENBQWdCLGFBQWhCLENBQUosRUFBb0M7QUFDbENDLGtCQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsRUFBNkJiLElBQTdCO0FBQ0EsVUFBTWMsWUFBWSxHQUFHZCxJQUFJLENBQUNRLEtBQUwsQ0FBVyxHQUFYLENBQXJCO0FBQ0FDLFlBQU0sQ0FBQ00sSUFBUCxDQUFZLE1BQU1ELFlBQWxCO0FBQ0QsS0FKRCxNQUlPO0FBQ0xYLHFCQUFlLENBQUMsNkJBQUQsQ0FBZjtBQUNEO0FBQ0YsR0FUUSxFQVNOLENBQUNILElBQUQsQ0FUTSxDQUFUO0FBV0Esc0JBQU87QUFBQSw0QkFDTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURLLGVBRUw7QUFBQSwyQkFBV0EsSUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSyxlQUdMO0FBQUEsbUNBQW1CRSxZQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUtELENBM0JEOztHQUFNSixTO1VBU1dZLGtEOzs7S0FUWFosUztBQTZCTiwrREFBZUEsU0FBZiIsImZpbGUiOiIuL3BhZ2VzLzQwNC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCBDdXN0b200MDQgPSAoKSA9PiB7XG4gIGNvbnN0IFtwYXRoLCBzZXRQYXRoXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBbZGVidWdNZXNzYWdlLCBzZXREZWJ1Z01lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UGF0aCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc2xpY2UoMSkpO1xuICB9KTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldERlYnVnTWVzc2FnZSgndXNlRWZmZWN0Jyk7XG4gICAgaWYgKHBhdGguc3RhcnRzV2l0aCgnYmxvZy9wb3N0cy8nKSkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BhdGgnLCBwYXRoKTtcbiAgICAgIGNvbnN0IHJlYWxSZWFsUGF0aCA9IHBhdGguc2xpY2UoJzUnKTtcbiAgICAgIHJvdXRlci5wdXNoKCcvJyArIHJlYWxSZWFsUGF0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldERlYnVnTWVzc2FnZSgnTm90IHN0YXJ0cyB3aXRoIGJsb2cvcG9zdHMvJyk7XG4gICAgfVxuICB9LCBbcGF0aF0pO1xuXG4gIHJldHVybiA8ZGl2PlxuICAgIDxoMT40MDQgLSBQYWdlIG5vdCBmb3VuZDwvaDE+XG4gICAgPHA+cGF0aDogeyBwYXRoIH08L3A+XG4gICAgPHA+ZGVidWdNZXNzYWdlOiB7IGRlYnVnTWVzc2FnZSB9PC9wPlxuICA8L2Rpdj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tNDA0XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/404.js\n");

/***/ })

});