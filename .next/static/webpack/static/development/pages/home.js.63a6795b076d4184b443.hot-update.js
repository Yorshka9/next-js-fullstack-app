webpackHotUpdate("static\\development\\pages\\home.js",{

/***/ "./components/MainContent.js":
/*!***********************************!*\
  !*** ./components/MainContent.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Code\\NextJS\\react-storyblok-next-boilerplate-master\\components\\MainContent.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var MainContent = function MainContent(_ref) {
  var children = _ref.children;
  return __jsx("div", {
    className: style.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (MainContent);

/***/ }),

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layouts/DefaultLayout */ "./components/layouts/DefaultLayout/index.js");
/* harmony import */ var _components_modules_HeadlineModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/modules/HeadlineModule */ "./components/modules/HeadlineModule/index.jsx");
/* harmony import */ var _components_modules_ParagraphModule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/modules/ParagraphModule */ "./components/modules/ParagraphModule/index.jsx");
/* harmony import */ var _components_modules_ImageModule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/modules/ImageModule */ "./components/modules/ImageModule/index.jsx");
/* harmony import */ var _components_modules_NavModule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/modules/NavModule */ "./components/modules/NavModule/index.jsx");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/NavBar */ "./components/NavBar.js");
/* harmony import */ var _components_modules_PostTeaser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/modules/PostTeaser */ "./components/modules/PostTeaser/index.jsx");
/* harmony import */ var _components_modules_BlogPost__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/modules/BlogPost */ "./components/modules/BlogPost/index.jsx");
/* harmony import */ var _components_MainContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/MainContent */ "./components/MainContent.js");
var _jsxFileName = "D:\\Code\\NextJS\\react-storyblok-next-boilerplate-master\\pages\\home.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* layout */

/* components */










var Home = function Home(_ref) {
  var data = _ref.data;
  var content = data.content;
  var postTeaserData = content.components.find(function (item) {
    return item.component === 'Post Teaser';
  });
  console.log(postTeaserData);
  return __jsx(_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_components_NavBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Blog list"), __jsx(_components_MainContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, content.map(function (postTeaserData) {
    return __jsx(_components_modules_PostTeaser__WEBPACK_IMPORTED_MODULE_7__["default"], {
      title: postTeaserData.Title,
      intro: postTeaserData.Intro,
      link: postTeaserData.Link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    });
  })));
};

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=home.js.63a6795b076d4184b443.hot-update.js.map