webpackHotUpdate("static\\development\\pages\\[page].js",{

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Head_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/Head/index */ "./components/common/Head/index.jsx");
var _jsxFileName = "D:\\Code\\NextJS\\react-storyblok-next-boilerplate-master\\components\\nav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* styles */

/* components */


var Nav = function Nav() {
  return __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("a", {
    href: "/blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Blog")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("a", {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "About")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("a", {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Contact")));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./pages/[page].js":
/*!*************************!*\
  !*** ./pages/[page].js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layouts/DefaultLayout */ "./components/layouts/DefaultLayout/index.js");
/* harmony import */ var _components_modules_HeadlineModule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/modules/HeadlineModule */ "./components/modules/HeadlineModule/index.jsx");
/* harmony import */ var _components_modules_ParagraphModule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/modules/ParagraphModule */ "./components/modules/ParagraphModule/index.jsx");
/* harmony import */ var _components_modules_ImageModule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/modules/ImageModule */ "./components/modules/ImageModule/index.jsx");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");

var _jsxFileName = "D:\\Code\\NextJS\\react-storyblok-next-boilerplate-master\\pages\\[page].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* 🌈 This is the client side 🌈*/

/* dependencies */

/* layout */


/* components */





/* Helper function to fetch data - do we need this as an extra function? Debatable. 😊 */

function fetchUrl(url) {
  return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url).then(function (r) {
    return r.json();
  });
}
/* This route gets hit when our user appends a slug to
the url and therefore the page request, e.g. your-site.com/about */


var SlugPage = function SlugPage(_ref) {
  var data = _ref.data;
  var content = data.content;
  var imageModuleData = content.components.find(function (item) {
    return item.component === 'Image module';
  });
  var headlineModuleData = content.components.find(function (item) {
    return item.component === 'Headline Module';
  });
  console.log(imageModuleData);
  console.log(content);
  console.log(headlineModuleData);
  var codeString = JSON.stringify(content);
  /* Now you need to map your own components, I just left the headline module as reference */

  return __jsx(_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "\uD83C\uDF08 This is what you are getting back from Storyblok: \uD83C\uDF08"), headlineModuleData ? __jsx(_components_modules_HeadlineModule__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: headlineModuleData.Title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }) : null, imageModuleData ? __jsx(_components_modules_ImageModule__WEBPACK_IMPORTED_MODULE_6__["default"], {
    image: imageModuleData.Image,
    copy: imageModuleData.Copy,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }) : null);
};
/* Before rendering, we are calling our internal API endpoint (server).
This call is hitting the code we wrote in 'pages/api/page/[slug].js' */


SlugPage.getInitialProps = function _callee(_ref2) {
  var query, page, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = _ref2.query;

          /* {query} is an object we receive within this method from Next,
          so that we can retrieve the slug (e.g. '/welcome') coming with the route */
          page = query.page;
          /* Calling our internal api endpoint so that we can fetch Storyblok content
          server-side (we are on client-side here) */

          _context.next = 4;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetchUrl("http://localhost:3000/api/page/".concat(page)));

        case 4:
          data = _context.sent;
          return _context.abrupt("return", {
            data: data
          });

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (SlugPage);

/***/ })

})
//# sourceMappingURL=[page].js.44d5d7dfbcd1f51b7bf9.hot-update.js.map