"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./lib/data.ts":
/*!*********************!*\
  !*** ./lib/data.ts ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   experiencesData: function() { return /* binding */ experiencesData; },\n/* harmony export */   links: function() { return /* binding */ links; },\n/* harmony export */   projectsData: function() { return /* binding */ projectsData; },\n/* harmony export */   skillsData: function() { return /* binding */ skillsData; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/cg */ \"(app-pages-browser)/./node_modules/react-icons/cg/index.esm.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/lu */ \"(app-pages-browser)/./node_modules/react-icons/lu/index.esm.js\");\n\n\n\n\n// import corpcommentImg from \"@/public/corpcomment.png\";\n// import rmtdevImg from \"@/public/rmtdev.png\";\n// import wordanalyticsImg from \"@/public/wordanalytics.png\";\nconst links = [\n    {\n        name: \"Home\",\n        hash: \"#home\"\n    },\n    {\n        name: \"About\",\n        hash: \"#about\"\n    },\n    {\n        name: \"Projects\",\n        hash: \"#projects\"\n    },\n    {\n        name: \"Skills\",\n        hash: \"#skills\"\n    },\n    {\n        name: \"Experience\",\n        hash: \"#experience\"\n    },\n    {\n        name: \"Contact\",\n        hash: \"#contact\"\n    }\n];\nconst experiencesData = [\n    {\n        title: \"Graduated bootcamp\",\n        location: \"Miami, FL\",\n        description: \"I graduated after 6 months of studying. I immediately found a job as a front-end developer.\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuGraduationCap),\n        date: \"2019\"\n    },\n    {\n        title: \"Front-End Developer\",\n        location: \"Orlando, FL\",\n        description: \"I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_cg__WEBPACK_IMPORTED_MODULE_2__.CgWorkAlt),\n        date: \"2019 - 2021\"\n    },\n    {\n        title: \"Full-Stack Developer\",\n        location: \"Houston, TX\",\n        description: \"I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaReact),\n        date: \"2021 - present\"\n    }\n];\nconst projectsData = [\n    {\n        title: \"Socio\",\n        description: \"\\n      MERN stack social media application encompasses a range of features and functionality to provide an engaging and user-friendly experience.\\n      Allowing User Registration and Authentication, Posting and Sharing\\n      of posts ,  to like and comment, search functionality and follow \\n      a user or unfollow.\\n    \",\n        tags: [\n            \"React\",\n            \"Next.js\",\n            \"MongoDB\",\n            \"Tailwind\",\n            \"Prisma\"\n        ]\n    },\n    {\n        title: \"rmtDev\",\n        description: \"Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.\",\n        tags: [\n            \"React\",\n            \"TypeScript\",\n            \"Next.js\",\n            \"Tailwind\",\n            \"Redux\"\n        ]\n    },\n    {\n        title: \"Word Analytics\",\n        description: \"A public web app for quick analytics on text. It shows word count, character count and social media post limits.\",\n        tags: [\n            \"React\",\n            \"Next.js\",\n            \"SQL\",\n            \"Tailwind\",\n            \"Framer\"\n        ]\n    }\n];\nconst skillsData = [\n    \"HTML\",\n    \"CSS\",\n    \"JavaScript\",\n    \"TypeScript\",\n    \"React\",\n    \"Next.js\",\n    \"Node.js\",\n    \"Git\",\n    \"Tailwind\",\n    \"Prisma\",\n    \"MongoDB\",\n    \"Redux\",\n    \"GraphQL\",\n    \"Apollo\",\n    \"Express\",\n    \"PostgreSQL\",\n    \"Python\",\n    \"Django\",\n    \"Framer Motion\"\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2xpYi9kYXRhLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNpQjtBQUNGO0FBQ1E7QUFDakQseURBQXlEO0FBQ3pELCtDQUErQztBQUMvQyw2REFBNkQ7QUFFdEQsTUFBTUksUUFBUTtJQUNuQjtRQUNFQyxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VELE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VELE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7Q0FDRCxDQUFVO0FBRUosTUFBTUMsa0JBQWtCO0lBQzdCO1FBQ0VDLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxhQUNFO1FBQ0ZDLE1BQU1YLDBEQUFtQixDQUFDRywyREFBZUE7UUFDekNVLE1BQU07SUFDUjtJQUNBO1FBQ0VMLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxhQUNFO1FBQ0ZDLE1BQU1YLDBEQUFtQixDQUFDQyxxREFBU0E7UUFDbkNZLE1BQU07SUFDUjtJQUNBO1FBQ0VMLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxhQUNFO1FBQ0ZDLE1BQU1YLDBEQUFtQixDQUFDRSxtREFBT0E7UUFDakNXLE1BQU07SUFDUjtDQUNELENBQVU7QUFFSixNQUFNQyxlQUFlO0lBQzFCO1FBQ0VOLE9BQU87UUFDUEUsYUFBYztRQU1kSyxNQUFNO1lBQUM7WUFBUztZQUFXO1lBQVc7WUFBWTtTQUFTO0lBRTdEO0lBQ0E7UUFDRVAsT0FBTztRQUNQRSxhQUNFO1FBQ0ZLLE1BQU07WUFBQztZQUFTO1lBQWM7WUFBVztZQUFZO1NBQVE7SUFFL0Q7SUFDQTtRQUNFUCxPQUFPO1FBQ1BFLGFBQ0U7UUFDRkssTUFBTTtZQUFDO1lBQVM7WUFBVztZQUFPO1lBQVk7U0FBUztJQUV6RDtDQUNELENBQVU7QUFFSixNQUFNQyxhQUFhO0lBQ3hCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0QsQ0FBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvZGF0YS50cz8xNmYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2dXb3JrQWx0IH0gZnJvbSBcInJlYWN0LWljb25zL2NnXCI7XHJcbmltcG9ydCB7IEZhUmVhY3QgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuaW1wb3J0IHsgTHVHcmFkdWF0aW9uQ2FwIH0gZnJvbSBcInJlYWN0LWljb25zL2x1XCI7XHJcbi8vIGltcG9ydCBjb3JwY29tbWVudEltZyBmcm9tIFwiQC9wdWJsaWMvY29ycGNvbW1lbnQucG5nXCI7XHJcbi8vIGltcG9ydCBybXRkZXZJbWcgZnJvbSBcIkAvcHVibGljL3JtdGRldi5wbmdcIjtcclxuLy8gaW1wb3J0IHdvcmRhbmFseXRpY3NJbWcgZnJvbSBcIkAvcHVibGljL3dvcmRhbmFseXRpY3MucG5nXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbGlua3MgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJIb21lXCIsXHJcbiAgICBoYXNoOiBcIiNob21lXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkFib3V0XCIsXHJcbiAgICBoYXNoOiBcIiNhYm91dFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJQcm9qZWN0c1wiLFxyXG4gICAgaGFzaDogXCIjcHJvamVjdHNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiU2tpbGxzXCIsXHJcbiAgICBoYXNoOiBcIiNza2lsbHNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiRXhwZXJpZW5jZVwiLFxyXG4gICAgaGFzaDogXCIjZXhwZXJpZW5jZVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJDb250YWN0XCIsXHJcbiAgICBoYXNoOiBcIiNjb250YWN0XCIsXHJcbiAgfSxcclxuXSBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBleHBlcmllbmNlc0RhdGEgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiR3JhZHVhdGVkIGJvb3RjYW1wXCIsXHJcbiAgICBsb2NhdGlvbjogXCJNaWFtaSwgRkxcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkkgZ3JhZHVhdGVkIGFmdGVyIDYgbW9udGhzIG9mIHN0dWR5aW5nLiBJIGltbWVkaWF0ZWx5IGZvdW5kIGEgam9iIGFzIGEgZnJvbnQtZW5kIGRldmVsb3Blci5cIixcclxuICAgIGljb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTHVHcmFkdWF0aW9uQ2FwKSxcclxuICAgIGRhdGU6IFwiMjAxOVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiRnJvbnQtRW5kIERldmVsb3BlclwiLFxyXG4gICAgbG9jYXRpb246IFwiT3JsYW5kbywgRkxcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkkgd29ya2VkIGFzIGEgZnJvbnQtZW5kIGRldmVsb3BlciBmb3IgMiB5ZWFycyBpbiAxIGpvYiBhbmQgMSB5ZWFyIGluIGFub3RoZXIgam9iLiBJIGFsc28gdXBza2lsbGVkIHRvIHRoZSBmdWxsIHN0YWNrLlwiLFxyXG4gICAgaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChDZ1dvcmtBbHQpLFxyXG4gICAgZGF0ZTogXCIyMDE5IC0gMjAyMVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiRnVsbC1TdGFjayBEZXZlbG9wZXJcIixcclxuICAgIGxvY2F0aW9uOiBcIkhvdXN0b24sIFRYXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJJJ20gbm93IGEgZnVsbC1zdGFjayBkZXZlbG9wZXIgd29ya2luZyBhcyBhIGZyZWVsYW5jZXIuIE15IHN0YWNrIGluY2x1ZGVzIFJlYWN0LCBOZXh0LmpzLCBUeXBlU2NyaXB0LCBUYWlsd2luZCwgUHJpc21hIGFuZCBNb25nb0RCLiBJJ20gb3BlbiB0byBmdWxsLXRpbWUgb3Bwb3J0dW5pdGllcy5cIixcclxuICAgIGljb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmFSZWFjdCksXHJcbiAgICBkYXRlOiBcIjIwMjEgLSBwcmVzZW50XCIsXHJcbiAgfSxcclxuXSBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0c0RhdGEgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiU29jaW9cIixcclxuICAgIGRlc2NyaXB0aW9uOiBgXHJcbiAgICAgIE1FUk4gc3RhY2sgc29jaWFsIG1lZGlhIGFwcGxpY2F0aW9uIGVuY29tcGFzc2VzIGEgcmFuZ2Ugb2YgZmVhdHVyZXMgYW5kIGZ1bmN0aW9uYWxpdHkgdG8gcHJvdmlkZSBhbiBlbmdhZ2luZyBhbmQgdXNlci1mcmllbmRseSBleHBlcmllbmNlLlxyXG4gICAgICBBbGxvd2luZyBVc2VyIFJlZ2lzdHJhdGlvbiBhbmQgQXV0aGVudGljYXRpb24sIFBvc3RpbmcgYW5kIFNoYXJpbmdcclxuICAgICAgb2YgcG9zdHMgLCAgdG8gbGlrZSBhbmQgY29tbWVudCwgc2VhcmNoIGZ1bmN0aW9uYWxpdHkgYW5kIGZvbGxvdyBcclxuICAgICAgYSB1c2VyIG9yIHVuZm9sbG93LlxyXG4gICAgYCxcclxuICAgIHRhZ3M6IFtcIlJlYWN0XCIsIFwiTmV4dC5qc1wiLCBcIk1vbmdvREJcIiwgXCJUYWlsd2luZFwiLCBcIlByaXNtYVwiXSxcclxuICAgIC8vIGltYWdlVXJsOiBjb3JwY29tbWVudEltZyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcInJtdERldlwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiSm9iIGJvYXJkIGZvciByZW1vdGUgZGV2ZWxvcGVyIGpvYnMuIEkgd2FzIHRoZSBmcm9udC1lbmQgZGV2ZWxvcGVyLiBJdCBoYXMgZmVhdHVyZXMgbGlrZSBmaWx0ZXJpbmcsIHNvcnRpbmcgYW5kIHBhZ2luYXRpb24uXCIsXHJcbiAgICB0YWdzOiBbXCJSZWFjdFwiLCBcIlR5cGVTY3JpcHRcIiwgXCJOZXh0LmpzXCIsIFwiVGFpbHdpbmRcIiwgXCJSZWR1eFwiXSxcclxuICAgIC8vIGltYWdlVXJsOiBybXRkZXZJbWcsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJXb3JkIEFuYWx5dGljc1wiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiQSBwdWJsaWMgd2ViIGFwcCBmb3IgcXVpY2sgYW5hbHl0aWNzIG9uIHRleHQuIEl0IHNob3dzIHdvcmQgY291bnQsIGNoYXJhY3RlciBjb3VudCBhbmQgc29jaWFsIG1lZGlhIHBvc3QgbGltaXRzLlwiLFxyXG4gICAgdGFnczogW1wiUmVhY3RcIiwgXCJOZXh0LmpzXCIsIFwiU1FMXCIsIFwiVGFpbHdpbmRcIiwgXCJGcmFtZXJcIl0sXHJcbiAgICAvLyBpbWFnZVVybDogd29yZGFuYWx5dGljc0ltZyxcclxuICB9LFxyXG5dIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNraWxsc0RhdGEgPSBbXHJcbiAgXCJIVE1MXCIsXHJcbiAgXCJDU1NcIixcclxuICBcIkphdmFTY3JpcHRcIixcclxuICBcIlR5cGVTY3JpcHRcIixcclxuICBcIlJlYWN0XCIsXHJcbiAgXCJOZXh0LmpzXCIsXHJcbiAgXCJOb2RlLmpzXCIsXHJcbiAgXCJHaXRcIixcclxuICBcIlRhaWx3aW5kXCIsXHJcbiAgXCJQcmlzbWFcIixcclxuICBcIk1vbmdvREJcIixcclxuICBcIlJlZHV4XCIsXHJcbiAgXCJHcmFwaFFMXCIsXHJcbiAgXCJBcG9sbG9cIixcclxuICBcIkV4cHJlc3NcIixcclxuICBcIlBvc3RncmVTUUxcIixcclxuICBcIlB5dGhvblwiLFxyXG4gIFwiRGphbmdvXCIsXHJcbiAgXCJGcmFtZXIgTW90aW9uXCIsXHJcbl0gYXMgY29uc3Q7Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ2dXb3JrQWx0IiwiRmFSZWFjdCIsIkx1R3JhZHVhdGlvbkNhcCIsImxpbmtzIiwibmFtZSIsImhhc2giLCJleHBlcmllbmNlc0RhdGEiLCJ0aXRsZSIsImxvY2F0aW9uIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY3JlYXRlRWxlbWVudCIsImRhdGUiLCJwcm9qZWN0c0RhdGEiLCJ0YWdzIiwic2tpbGxzRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./lib/data.ts\n"));

/***/ })

});