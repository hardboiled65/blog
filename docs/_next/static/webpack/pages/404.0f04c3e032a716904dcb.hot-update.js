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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/hardboiled65/dev/blog/pages/404.js\",\n    _this = undefined,\n    _s2 = $RefreshSig$();\n\n\n\n\nvar Custom404 = function Custom404() {\n  _s2();\n\n  var _s = $RefreshSig$();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n      path = _useState[0],\n      setPath = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n      debugMessage = _useState2[0],\n      setDebugMessage = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    setPath(window.location.pathname.slice(1));\n  });\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(_s(function () {\n    _s();\n\n    setDebugMessage('useEffect');\n    console.log('path: ' + path);\n    console.log(path.startsWith('blog/postss/'));\n\n    if (path.startsWith('blog/postss/')) {\n      localStorage.setItem('path', path);\n      var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n      router.push('posts/11');\n    } else {\n      setDebugMessage('Not starts with blog/posts/');\n    }\n  }, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n    return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];\n  }), [path]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"404 - Page not found\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [\"path: \", path]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [\"debugMessage: \", debugMessage]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 10\n  }, _this);\n};\n\n_s2(Custom404, \"0Q6Z8m/alIEEL1KhrKs0t1wJ16M=\");\n\n_c = Custom404;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Custom404);\n\nvar _c;\n\n$RefreshReg$(_c, \"Custom404\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvNDA0LmpzP2I4ZGMiXSwibmFtZXMiOlsiQ3VzdG9tNDA0IiwidXNlU3RhdGUiLCJwYXRoIiwic2V0UGF0aCIsImRlYnVnTWVzc2FnZSIsInNldERlYnVnTWVzc2FnZSIsInVzZUVmZmVjdCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzbGljZSIsImNvbnNvbGUiLCJsb2ciLCJzdGFydHNXaXRoIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInJvdXRlciIsInVzZVJvdXRlciIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0VDLCtDQUFRLENBQUMsRUFBRCxDQURWO0FBQUEsTUFDZkMsSUFEZTtBQUFBLE1BQ1RDLE9BRFM7O0FBQUEsbUJBR2tCRiwrQ0FBUSxDQUFDLEVBQUQsQ0FIMUI7QUFBQSxNQUdmRyxZQUhlO0FBQUEsTUFHREMsZUFIQzs7QUFLdEJDLGtEQUFTLENBQUMsWUFBTTtBQUNkSCxXQUFPLENBQUNJLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBaEIsQ0FBeUJDLEtBQXpCLENBQStCLENBQS9CLENBQUQsQ0FBUDtBQUNELEdBRlEsQ0FBVDtBQUtBSixrREFBUyxJQUFDLFlBQU07QUFBQTs7QUFDZEQsbUJBQWUsQ0FBQyxXQUFELENBQWY7QUFDQU0sV0FBTyxDQUFDQyxHQUFSLENBQVksV0FBV1YsSUFBdkI7QUFDQVMsV0FBTyxDQUFDQyxHQUFSLENBQVlWLElBQUksQ0FBQ1csVUFBTCxDQUFnQixjQUFoQixDQUFaOztBQUNBLFFBQUlYLElBQUksQ0FBQ1csVUFBTCxDQUFnQixjQUFoQixDQUFKLEVBQXFDO0FBQ25DQyxrQkFBWSxDQUFDQyxPQUFiLENBQXFCLE1BQXJCLEVBQTZCYixJQUE3QjtBQUNBLFVBQU1jLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQUQsWUFBTSxDQUFDRSxJQUFQLENBQVksVUFBWjtBQUNELEtBSkQsTUFJTztBQUNMYixxQkFBZSxDQUFDLDZCQUFELENBQWY7QUFDRDtBQUNGLEdBWFE7QUFBQSxZQU1VWSxrREFOVjtBQUFBLE1BV04sQ0FBQ2YsSUFBRCxDQVhNLENBQVQ7QUFhQSxzQkFBTztBQUFBLDRCQUNMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREssZUFFTDtBQUFBLDJCQUFXQSxJQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZLLGVBR0w7QUFBQSxtQ0FBbUJFLFlBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBS0QsQ0E1QkQ7O0lBQU1KLFM7O0tBQUFBLFM7QUE4Qk4sK0RBQWVBLFNBQWYiLCJmaWxlIjoiLi9wYWdlcy80MDQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuY29uc3QgQ3VzdG9tNDA0ID0gKCkgPT4ge1xuICBjb25zdCBbcGF0aCwgc2V0UGF0aF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgW2RlYnVnTWVzc2FnZSwgc2V0RGVidWdNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFBhdGgod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNsaWNlKDEpKTtcbiAgfSk7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldERlYnVnTWVzc2FnZSgndXNlRWZmZWN0Jyk7XG4gICAgY29uc29sZS5sb2coJ3BhdGg6ICcgKyBwYXRoKTtcbiAgICBjb25zb2xlLmxvZyhwYXRoLnN0YXJ0c1dpdGgoJ2Jsb2cvcG9zdHNzLycpKTtcbiAgICBpZiAocGF0aC5zdGFydHNXaXRoKCdibG9nL3Bvc3Rzcy8nKSkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BhdGgnLCBwYXRoKTtcbiAgICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgICAgcm91dGVyLnB1c2goJ3Bvc3RzLzExJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldERlYnVnTWVzc2FnZSgnTm90IHN0YXJ0cyB3aXRoIGJsb2cvcG9zdHMvJyk7XG4gICAgfVxuICB9LCBbcGF0aF0pO1xuXG4gIHJldHVybiA8ZGl2PlxuICAgIDxoMT40MDQgLSBQYWdlIG5vdCBmb3VuZDwvaDE+XG4gICAgPHA+cGF0aDogeyBwYXRoIH08L3A+XG4gICAgPHA+ZGVidWdNZXNzYWdlOiB7IGRlYnVnTWVzc2FnZSB9PC9wPlxuICA8L2Rpdj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tNDA0XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/404.js\n");

/***/ })

});