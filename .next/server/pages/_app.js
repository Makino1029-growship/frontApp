"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./hook/commonContext.jsx":
/*!********************************!*\
  !*** ./hook/commonContext.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CommonProvider: () => (/* binding */ CommonProvider),\n/* harmony export */   useCommon: () => (/* binding */ useCommon)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CommonContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst CommonProvider = ({ children })=>{\n    const [errorStatus, setErrorStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"init\");\n    const [employeeData, setEmployeeData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        employeeNum: \"\",\n        name: \"\",\n        address: \"\",\n        tel: \"\",\n        degree: \"\"\n    });\n    const value = {\n        errorStatus,\n        setErrorStatus,\n        employeeData,\n        setEmployeeData\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CommonContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\MakinoKazuta\\\\PracticeMakeApp\\\\my-app\\\\frontend\\\\hook\\\\commonContext.jsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\nconst useCommon = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CommonContext);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rL2NvbW1vbkNvbnRleHQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBbUU7QUFFbkUsTUFBTUksOEJBQWdCRixvREFBYUE7QUFFbkMsTUFBTUcsaUJBQWlCLENBQUMsRUFBRUMsUUFBUSxFQUFFO0lBQ2xDLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNLENBQUNRLGNBQWNDLGdCQUFnQixHQUFHVCwrQ0FBUUEsQ0FBQztRQUMvQ1UsYUFBYTtRQUNiQyxNQUFNO1FBQ05DLFNBQVM7UUFDVEMsS0FBSztRQUNMQyxRQUFRO0lBQ1Y7SUFFQSxNQUFNQyxRQUFRO1FBQ1pUO1FBQ0FDO1FBQ0FDO1FBQ0FDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ04sY0FBY2EsUUFBUTtRQUFDRCxPQUFPQTtrQkFBUVY7Ozs7OztBQUUzQztBQUVBLE1BQU1ZLFlBQVksSUFBTWYsaURBQVVBLENBQUNDO0FBQ0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9ob29rL2NvbW1vbkNvbnRleHQuanN4PzZkMDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBDb21tb25Db250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgQ29tbW9uUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW2Vycm9yU3RhdHVzLCBzZXRFcnJvclN0YXR1c10gPSB1c2VTdGF0ZShcImluaXRcIik7XHJcblxyXG4gIGNvbnN0IFtlbXBsb3llZURhdGEsIHNldEVtcGxveWVlRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBlbXBsb3llZU51bTogXCJcIixcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBhZGRyZXNzOiBcIlwiLFxyXG4gICAgdGVsOiBcIlwiLFxyXG4gICAgZGVncmVlOiBcIlwiLFxyXG4gIH0pO1xyXG4gIFxyXG4gIGNvbnN0IHZhbHVlID0ge1xyXG4gICAgZXJyb3JTdGF0dXMsXHJcbiAgICBzZXRFcnJvclN0YXR1cyxcclxuICAgIGVtcGxveWVlRGF0YSxcclxuICAgIHNldEVtcGxveWVlRGF0YSxcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbW1vbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT57Y2hpbGRyZW59PC9Db21tb25Db250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCB1c2VDb21tb24gPSAoKSA9PiB1c2VDb250ZXh0KENvbW1vbkNvbnRleHQpO1xyXG5leHBvcnQgeyB1c2VDb21tb24sIENvbW1vblByb3ZpZGVyIH07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJDb21tb25Db250ZXh0IiwiQ29tbW9uUHJvdmlkZXIiLCJjaGlsZHJlbiIsImVycm9yU3RhdHVzIiwic2V0RXJyb3JTdGF0dXMiLCJlbXBsb3llZURhdGEiLCJzZXRFbXBsb3llZURhdGEiLCJlbXBsb3llZU51bSIsIm5hbWUiLCJhZGRyZXNzIiwidGVsIiwiZGVncmVlIiwidmFsdWUiLCJQcm92aWRlciIsInVzZUNvbW1vbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hook/commonContext.jsx\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hook_commonContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hook/commonContext */ \"./hook/commonContext.jsx\");\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hook_commonContext__WEBPACK_IMPORTED_MODULE_1__.CommonProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\MakinoKazuta\\\\PracticeMakeApp\\\\my-app\\\\frontend\\\\pages\\\\_app.js\",\n            lineNumber: 5,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\MakinoKazuta\\\\PracticeMakeApp\\\\my-app\\\\frontend\\\\pages\\\\_app.js\",\n        lineNumber: 4,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXNEO0FBQ3ZDLFNBQVNDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbEQscUJBQ0UsOERBQUNILCtEQUFjQTtrQkFDYiw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QiIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Qcm92aWRlciB9IGZyb20gXCJAL2hvb2svY29tbW9uQ29udGV4dFwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb21tb25Qcm92aWRlcj5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9Db21tb25Qcm92aWRlcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJDb21tb25Qcm92aWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();