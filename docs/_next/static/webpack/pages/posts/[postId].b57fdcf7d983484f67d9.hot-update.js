/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[postId]",{

/***/ "./pages/posts/[postId].js":
/*!*********************************!*\
  !*** ./pages/posts/[postId].js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/app */ \"./components/app.js\");\n/* harmony import */ var _components_contents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/contents */ \"./components/contents.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/hardboiled65/dev/blog/pages/posts/[postId].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Post = function Post() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      postId = _useState[0],\n      setPostId = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),\n      post = _useState2[0],\n      setPost = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (!router.isReady) {\n      return;\n    }\n\n    var postId = router.query.postId;\n    setPostId(postId);\n  }, [router.isReady]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var res = axios__WEBPACK_IMPORTED_MODULE_3___default().get('https://blog.hardboiled65.tk/api/v1/posts/' + postId);\n    setPost(res.data);\n    console.log(res.data);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_app__WEBPACK_IMPORTED_MODULE_4__.default, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"Post\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_contents__WEBPACK_IMPORTED_MODULE_5__.default, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: [\"Hello, world! \", postId]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Post, \"AJmt/NGr7hirP1AO+NxkFzIp7QM=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];\n});\n\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3Bvc3RJZF0uanM/ZWNlYSJdLCJuYW1lcyI6WyJQb3N0Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJwb3N0SWQiLCJzZXRQb3N0SWQiLCJwb3N0Iiwic2V0UG9zdCIsInVzZUVmZmVjdCIsImlzUmVhZHkiLCJxdWVyeSIsInJlcyIsImF4aW9zIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNqQixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQURpQixrQkFHV0MsK0NBQVEsQ0FBQyxDQUFELENBSG5CO0FBQUEsTUFHVkMsTUFIVTtBQUFBLE1BR0ZDLFNBSEU7O0FBQUEsbUJBSU9GLCtDQUFRLENBQUMsRUFBRCxDQUpmO0FBQUEsTUFJVkcsSUFKVTtBQUFBLE1BSUpDLE9BSkk7O0FBTWpCQyxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJLENBQUNQLE1BQU0sQ0FBQ1EsT0FBWixFQUFxQjtBQUNuQjtBQUNEOztBQUhhLFFBS05MLE1BTE0sR0FLS0gsTUFBTSxDQUFDUyxLQUxaLENBS05OLE1BTE07QUFNZEMsYUFBUyxDQUFDRCxNQUFELENBQVQ7QUFDRCxHQVBRLEVBT04sQ0FBQ0gsTUFBTSxDQUFDUSxPQUFSLENBUE0sQ0FBVDtBQVNBRCxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFNRyxHQUFHLEdBQUdDLGdEQUFBLENBQVUsK0NBQStDUixNQUF6RCxDQUFaO0FBRUFHLFdBQU8sQ0FBQ0ksR0FBRyxDQUFDRSxJQUFMLENBQVA7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlKLEdBQUcsQ0FBQ0UsSUFBaEI7QUFDRCxHQUxRLEVBS04sRUFMTSxDQUFUO0FBT0Esc0JBQ0UsOERBQUMsb0RBQUQ7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsNkJBQ0UsOERBQUMseURBQUQ7QUFBQSwrQkFDRTtBQUFBLHVDQUFtQlQsTUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFTRCxDQS9CRDs7R0FBTUosSTtVQUNXRSxrRDs7O0tBRFhGLEk7QUFpQ04sK0RBQWVBLElBQWYiLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bcG9zdElkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmltcG9ydCBBcHAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hcHAnXG5pbXBvcnQgQ29udGVudHMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb250ZW50cydcblxuY29uc3QgUG9zdCA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgW3Bvc3RJZCwgc2V0UG9zdElkXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbcG9zdCwgc2V0UG9zdF0gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXJvdXRlci5pc1JlYWR5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBwb3N0SWQgfSA9IHJvdXRlci5xdWVyeTtcbiAgICBzZXRQb3N0SWQocG9zdElkKTtcbiAgfSwgW3JvdXRlci5pc1JlYWR5XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCByZXMgPSBheGlvcy5nZXQoJ2h0dHBzOi8vYmxvZy5oYXJkYm9pbGVkNjUudGsvYXBpL3YxL3Bvc3RzLycgKyBwb3N0SWQpO1xuXG4gICAgc2V0UG9zdChyZXMuZGF0YSk7XG4gICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXBwPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJQb3N0XCI+XG4gICAgICAgIDxDb250ZW50cz5cbiAgICAgICAgICA8cD5IZWxsbywgd29ybGQhIHsgcG9zdElkIH08L3A+XG4gICAgICAgIDwvQ29udGVudHM+XG4gICAgICA8L2Rpdj5cbiAgICA8L0FwcD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/[postId].js\n");

/***/ })

});