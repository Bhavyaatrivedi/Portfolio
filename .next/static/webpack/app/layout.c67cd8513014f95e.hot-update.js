"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./lib/data.ts":
/*!*********************!*\
  !*** ./lib/data.ts ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   experiencesData: function() { return /* binding */ experiencesData; },\n/* harmony export */   links: function() { return /* binding */ links; },\n/* harmony export */   projectsData: function() { return /* binding */ projectsData; },\n/* harmony export */   skillsData: function() { return /* binding */ skillsData; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/cg */ \"(app-pages-browser)/./node_modules/react-icons/cg/index.esm.js\");\n/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/lu */ \"(app-pages-browser)/./node_modules/react-icons/lu/index.esm.js\");\n\n\n\n// import corpcommentImg from \"@/public/corpcomment.png\";\n// import rmtdevImg from \"@/public/rmtdev.png\";\n// import wordanalyticsImg from \"@/public/wordanalytics.png\";\nconst links = [\n    {\n        name: \"Home\",\n        hash: \"#home\"\n    },\n    {\n        name: \"About\",\n        hash: \"#about\"\n    },\n    {\n        name: \"Projects\",\n        hash: \"#projects\"\n    },\n    {\n        name: \"Skills\",\n        hash: \"#skills\"\n    },\n    {\n        name: \"Experience\",\n        hash: \"#experience\"\n    },\n    {\n        name: \"Contact\",\n        hash: \"#contact\"\n    }\n];\nconst experiencesData = [\n    {\n        title: \"B.tech UnderGraduate student\",\n        location: \"BIT, MESRA\",\n        description: \"Pursuing Computer Science Engineering \",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuGraduationCap),\n        date: \"2020 - 2024\"\n    },\n    {\n        title: \"MERN Stack Developer Intern\",\n        location: \"Bipolar Factory, Banglore\",\n        description: \"\\n    Worked on a Production House website - Drumsticks Production.\\n    Tech stacks used in project are Next.js, React, React Player and Tailwind CSS.\\n  \",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_cg__WEBPACK_IMPORTED_MODULE_2__.CgWorkAlt),\n        date: \"2023\"\n    },\n    {\n        title: \"SDE Intern\",\n        location: \"Chalkboc, Dehradun\",\n        description: \"\\n    Worked on Company's secondary website .\\n    Used React-Bootsrap, Redux for front-end and axios,\\n     REST API, Express, Node.js for backend.\\n  \",\n        date: \"2023\"\n    }\n];\nconst projectsData = [\n    {\n        title: \"Socio\",\n        description: \"\\n      MERN stack social media application .\\n      Allowing User Registration and Authentication, Posting and Sharing\\n      of posts , like and comment,  and follow \\n      or unfollow a user.\\n    \",\n        tags: [\n            \"React\",\n            \"Node.js\",\n            \"MongoDB\",\n            \"Express\",\n            \"Axios\",\n            \"JWT\"\n        ]\n    },\n    {\n        title: \"Stay-Xpert\",\n        description: \"\\n    Full stack hotel booking web application .\\n    Allowing User Registration and Log In, explore and book hotels\\n    along with selecting check in and check out dates , number of guests.\\n  \",\n        tags: [\n            \"Firebase\",\n            \"React-Dom\",\n            \"Node.js\",\n            \"Express\",\n            \"Redux\"\n        ]\n    },\n    {\n        title: \"Streamify\",\n        description: \"\\n    Full stack Movies/TV Shows streaming web application .\\n    Allowing User Registration and Log In,browsing through a vast \\n    collection of movies and TV shows, selecting by genres,\\n    adding or removing Movies from watchlists.\\n  \",\n        tags: [\n            \"React\",\n            \"Node.js\",\n            \"API\",\n            \"MongoDb\",\n            \"Express\",\n            \"Axios\"\n        ]\n    }\n];\nconst skillsData = [\n    \"HTML5\",\n    \" CSS\",\n    \"JavaScript\",\n    \"TypeScript\",\n    \"React\",\n    \"Next.js\",\n    \"Node.js\",\n    \"Git/GitHub\",\n    \"Tailwind\",\n    \"Prisma\",\n    \"MongoDB\",\n    \"Redux\",\n    \"GraphQL\",\n    \"React-Dom\",\n    \"Express\",\n    \"Firebase Login\",\n    \"C++\",\n    \"DBMS\",\n    \"OOPS\",\n    \"OS\",\n    \"Operating Systems\",\n    \"Data Structure and Algorithms\"\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2xpYi9kYXRhLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2lCO0FBRU07QUFDakQseURBQXlEO0FBQ3pELCtDQUErQztBQUMvQyw2REFBNkQ7QUFFdEQsTUFBTUcsUUFBUTtJQUNuQjtRQUNFQyxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VELE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VELE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7Q0FDRCxDQUFVO0FBRUosTUFBTUMsa0JBQWtCO0lBQzdCO1FBQ0VDLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxhQUNFO1FBQ0ZDLE1BQU1WLDBEQUFtQixDQUFDRSwyREFBZUE7UUFDekNVLE1BQU07SUFDUjtJQUNBO1FBQ0VMLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxhQUFjO1FBSWRDLE1BQU1WLDBEQUFtQixDQUFDQyxxREFBU0E7UUFDbkNXLE1BQU07SUFDUjtJQUNBO1FBQ0VMLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxhQUFjO1FBS2RHLE1BQU07SUFDUjtDQUNELENBQVU7QUFFSixNQUFNQyxlQUFlO0lBQzFCO1FBQ0VOLE9BQU87UUFDUEUsYUFBYztRQU1kSyxNQUFNO1lBQUM7WUFBUztZQUFXO1lBQVc7WUFBVztZQUFTO1NBQU07SUFFbEU7SUFDQTtRQUNFUCxPQUFPO1FBQ1BFLGFBQ0M7UUFLREssTUFBTTtZQUFDO1lBQVk7WUFBYTtZQUFXO1lBQVc7U0FBUTtJQUVoRTtJQUNBO1FBQ0VQLE9BQU87UUFFUEUsYUFDQztRQU1ESyxNQUFNO1lBQUM7WUFBUztZQUFXO1lBQU87WUFBVztZQUFXO1NBQVE7SUFFbEU7Q0FDRCxDQUFVO0FBRUosTUFBTUMsYUFBYTtJQUN4QjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNELENBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2RhdGEudHM/MTZmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENnV29ya0FsdCB9IGZyb20gXCJyZWFjdC1pY29ucy9jZ1wiO1xyXG5pbXBvcnQgeyBGYVJlYWN0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCB7IEx1R3JhZHVhdGlvbkNhcCB9IGZyb20gXCJyZWFjdC1pY29ucy9sdVwiO1xyXG4vLyBpbXBvcnQgY29ycGNvbW1lbnRJbWcgZnJvbSBcIkAvcHVibGljL2NvcnBjb21tZW50LnBuZ1wiO1xyXG4vLyBpbXBvcnQgcm10ZGV2SW1nIGZyb20gXCJAL3B1YmxpYy9ybXRkZXYucG5nXCI7XHJcbi8vIGltcG9ydCB3b3JkYW5hbHl0aWNzSW1nIGZyb20gXCJAL3B1YmxpYy93b3JkYW5hbHl0aWNzLnBuZ1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpbmtzID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IFwiSG9tZVwiLFxyXG4gICAgaGFzaDogXCIjaG9tZVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJBYm91dFwiLFxyXG4gICAgaGFzaDogXCIjYWJvdXRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiUHJvamVjdHNcIixcclxuICAgIGhhc2g6IFwiI3Byb2plY3RzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlNraWxsc1wiLFxyXG4gICAgaGFzaDogXCIjc2tpbGxzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkV4cGVyaWVuY2VcIixcclxuICAgIGhhc2g6IFwiI2V4cGVyaWVuY2VcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQ29udGFjdFwiLFxyXG4gICAgaGFzaDogXCIjY29udGFjdFwiLFxyXG4gIH0sXHJcbl0gYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgZXhwZXJpZW5jZXNEYXRhID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIkIudGVjaCBVbmRlckdyYWR1YXRlIHN0dWRlbnRcIixcclxuICAgIGxvY2F0aW9uOiBcIkJJVCwgTUVTUkFcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlB1cnN1aW5nIENvbXB1dGVyIFNjaWVuY2UgRW5naW5lZXJpbmcgXCIsXHJcbiAgICBpY29uOiBSZWFjdC5jcmVhdGVFbGVtZW50KEx1R3JhZHVhdGlvbkNhcCksXHJcbiAgICBkYXRlOiBcIjIwMjAgLSAyMDI0XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJNRVJOIFN0YWNrIERldmVsb3BlciBJbnRlcm5cIixcclxuICAgIGxvY2F0aW9uOiBcIkJpcG9sYXIgRmFjdG9yeSwgQmFuZ2xvcmVcIixcclxuICAgIGRlc2NyaXB0aW9uOiBgXHJcbiAgICBXb3JrZWQgb24gYSBQcm9kdWN0aW9uIEhvdXNlIHdlYnNpdGUgLSBEcnVtc3RpY2tzIFByb2R1Y3Rpb24uXHJcbiAgICBUZWNoIHN0YWNrcyB1c2VkIGluIHByb2plY3QgYXJlIE5leHQuanMsIFJlYWN0LCBSZWFjdCBQbGF5ZXIgYW5kIFRhaWx3aW5kIENTUy5cclxuICBgLFxyXG4gICAgaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChDZ1dvcmtBbHQpLFxyXG4gICAgZGF0ZTogXCIyMDIzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJTREUgSW50ZXJuXCIsXHJcbiAgICBsb2NhdGlvbjogXCJDaGFsa2JvYywgRGVocmFkdW5cIixcclxuICAgIGRlc2NyaXB0aW9uOiBgXHJcbiAgICBXb3JrZWQgb24gQ29tcGFueSdzIHNlY29uZGFyeSB3ZWJzaXRlIC5cclxuICAgIFVzZWQgUmVhY3QtQm9vdHNyYXAsIFJlZHV4IGZvciBmcm9udC1lbmQgYW5kIGF4aW9zLFxyXG4gICAgIFJFU1QgQVBJLCBFeHByZXNzLCBOb2RlLmpzIGZvciBiYWNrZW5kLlxyXG4gIGAsXHJcbiAgICBkYXRlOiBcIjIwMjNcIixcclxuICB9LFxyXG5dIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3RzRGF0YSA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJTb2Npb1wiLFxyXG4gICAgZGVzY3JpcHRpb246IGBcclxuICAgICAgTUVSTiBzdGFjayBzb2NpYWwgbWVkaWEgYXBwbGljYXRpb24gLlxyXG4gICAgICBBbGxvd2luZyBVc2VyIFJlZ2lzdHJhdGlvbiBhbmQgQXV0aGVudGljYXRpb24sIFBvc3RpbmcgYW5kIFNoYXJpbmdcclxuICAgICAgb2YgcG9zdHMgLCBsaWtlIGFuZCBjb21tZW50LCAgYW5kIGZvbGxvdyBcclxuICAgICAgb3IgdW5mb2xsb3cgYSB1c2VyLlxyXG4gICAgYCxcclxuICAgIHRhZ3M6IFtcIlJlYWN0XCIsIFwiTm9kZS5qc1wiLCBcIk1vbmdvREJcIiwgXCJFeHByZXNzXCIsIFwiQXhpb3NcIiwgXCJKV1RcIl0sXHJcbiAgICAvLyBpbWFnZVVybDogY29ycGNvbW1lbnRJbWcsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJTdGF5LVhwZXJ0XCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgIGBcclxuICAgIEZ1bGwgc3RhY2sgaG90ZWwgYm9va2luZyB3ZWIgYXBwbGljYXRpb24gLlxyXG4gICAgQWxsb3dpbmcgVXNlciBSZWdpc3RyYXRpb24gYW5kIExvZyBJbiwgZXhwbG9yZSBhbmQgYm9vayBob3RlbHNcclxuICAgIGFsb25nIHdpdGggc2VsZWN0aW5nIGNoZWNrIGluIGFuZCBjaGVjayBvdXQgZGF0ZXMgLCBudW1iZXIgb2YgZ3Vlc3RzLlxyXG4gIGAsXHJcbiAgICB0YWdzOiBbXCJGaXJlYmFzZVwiLCBcIlJlYWN0LURvbVwiLCBcIk5vZGUuanNcIiwgXCJFeHByZXNzXCIsIFwiUmVkdXhcIl0sXHJcbiAgICAvLyBpbWFnZVVybDogcm10ZGV2SW1nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiU3RyZWFtaWZ5XCIsXHJcbiBcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgYFxyXG4gICAgRnVsbCBzdGFjayBNb3ZpZXMvVFYgU2hvd3Mgc3RyZWFtaW5nIHdlYiBhcHBsaWNhdGlvbiAuXHJcbiAgICBBbGxvd2luZyBVc2VyIFJlZ2lzdHJhdGlvbiBhbmQgTG9nIEluLGJyb3dzaW5nIHRocm91Z2ggYSB2YXN0IFxyXG4gICAgY29sbGVjdGlvbiBvZiBtb3ZpZXMgYW5kIFRWIHNob3dzLCBzZWxlY3RpbmcgYnkgZ2VucmVzLFxyXG4gICAgYWRkaW5nIG9yIHJlbW92aW5nIE1vdmllcyBmcm9tIHdhdGNobGlzdHMuXHJcbiAgYCxcclxuICAgIHRhZ3M6IFtcIlJlYWN0XCIsIFwiTm9kZS5qc1wiLCBcIkFQSVwiLCBcIk1vbmdvRGJcIiwgXCJFeHByZXNzXCIsIFwiQXhpb3NcIl0sXHJcbiAgICAvLyBpbWFnZVVybDogd29yZGFuYWx5dGljc0ltZyxcclxuICB9LFxyXG5dIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNraWxsc0RhdGEgPSBbXHJcbiAgXCJIVE1MNVwiLFxyXG4gIFwiIENTU1wiLFxyXG4gIFwiSmF2YVNjcmlwdFwiLFxyXG4gIFwiVHlwZVNjcmlwdFwiLFxyXG4gIFwiUmVhY3RcIixcclxuICBcIk5leHQuanNcIixcclxuICBcIk5vZGUuanNcIixcclxuICBcIkdpdC9HaXRIdWJcIixcclxuICBcIlRhaWx3aW5kXCIsXHJcbiAgXCJQcmlzbWFcIixcclxuICBcIk1vbmdvREJcIixcclxuICBcIlJlZHV4XCIsXHJcbiAgXCJHcmFwaFFMXCIsXHJcbiAgXCJSZWFjdC1Eb21cIixcclxuICBcIkV4cHJlc3NcIixcclxuICBcIkZpcmViYXNlIExvZ2luXCIsXHJcbiAgXCJDKytcIixcclxuICBcIkRCTVNcIixcclxuICBcIk9PUFNcIixcclxuICBcIk9TXCIsXHJcbiAgXCJPcGVyYXRpbmcgU3lzdGVtc1wiLFxyXG4gIFwiRGF0YSBTdHJ1Y3R1cmUgYW5kIEFsZ29yaXRobXNcIixcclxuXSBhcyBjb25zdDsiXSwibmFtZXMiOlsiUmVhY3QiLCJDZ1dvcmtBbHQiLCJMdUdyYWR1YXRpb25DYXAiLCJsaW5rcyIsIm5hbWUiLCJoYXNoIiwiZXhwZXJpZW5jZXNEYXRhIiwidGl0bGUiLCJsb2NhdGlvbiIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNyZWF0ZUVsZW1lbnQiLCJkYXRlIiwicHJvamVjdHNEYXRhIiwidGFncyIsInNraWxsc0RhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./lib/data.ts\n"));

/***/ })

});