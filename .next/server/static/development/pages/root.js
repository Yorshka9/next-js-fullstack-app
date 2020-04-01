module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/NavBar/NavBar.js":
/*!*************************************!*\
  !*** ./components/NavBar/NavBar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navbar_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.scss */ "./components/NavBar/navbar.scss");
/* harmony import */ var _navbar_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_navbar_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_Head_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Head/index */ "./components/common/Head/index.jsx");
var _jsxFileName = "D:\\Code\\NextJS\\react-storyblok-next-boilerplate-master\\components\\NavBar\\NavBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* styles */

/* components */



const Navbar = () => {
  return __jsx("div", {
    className: _navbar_scss__WEBPACK_IMPORTED_MODULE_1___default.a.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("a", {
    href: "/root/index",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Posts")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("a", {
    href: "/root/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "About"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/NavBar/navbar.scss":
/*!***************************************!*\
  !*** ./components/NavBar/navbar.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"root": "root___3lvcA"
};

/***/ }),

/***/ "./components/common/Head/index.jsx":
/*!******************************************!*\
  !*** ./components/common/Head/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Code\\NextJS\\react-storyblok-next-boilerplate-master\\components\\common\\Head\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* This is the html <header> element which you'll need
your site to have to comply with web standards.
This is NOT a visual header */

const Head = ({
  title,
  description
}) => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("meta", {
  charSet: "UTF-8",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), __jsx("title", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, title || ''), __jsx("meta", {
  name: "description",
  content: description || '',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, inititial-scale=1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), __jsx("link", {
  href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap",
  rel: "stylesheet",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), __jsx("link", {
  href: "https://fonts.googleapis.com/css?family=Poppins&display=swap",
  rel: "stylesheet",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}), __jsx("link", {
  rel: "shortcut icon",
  type: "image/x-icon",
  href: "/favicon.ico",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Head);

/***/ }),

/***/ "./components/layouts/DefaultLayout/index.js":
/*!***************************************************!*\
  !*** ./components/layouts/DefaultLayout/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./components/layouts/DefaultLayout/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styleReset_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styleReset.scss */ "./components/layouts/DefaultLayout/styleReset.scss");
/* harmony import */ var _styleReset_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styleReset_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_Head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/Head */ "./components/common/Head/index.jsx");
var _jsxFileName = "D:\\Code\\NextJS\\react-storyblok-next-boilerplate-master\\components\\layouts\\DefaultLayout\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* styles */


/* components */



const DefaultLayout = props => {
  const title = 'Hyper Island FED21';
  const description = 'Kick-off template for FED21 students';
  return __jsx("div", {
    className: (_styleReset_scss__WEBPACK_IMPORTED_MODULE_2___default.a, _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.root),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("div", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.pageWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx(_common_Head__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: title,
    description: description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (DefaultLayout);

/***/ }),

/***/ "./components/layouts/DefaultLayout/index.scss":
/*!*****************************************************!*\
  !*** ./components/layouts/DefaultLayout/index.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"root": "root___aXesb",
	"pageWrapper": "pageWrapper___2wxVi"
};

/***/ }),

/***/ "./components/layouts/DefaultLayout/styleReset.scss":
/*!**********************************************************!*\
  !*** ./components/layouts/DefaultLayout/styleReset.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/modules/PostTeaser/index.jsx":
/*!*************************************************!*\
  !*** ./components/modules/PostTeaser/index.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _postteaser_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postteaser.scss */ "./components/modules/PostTeaser/postteaser.scss");
/* harmony import */ var _postteaser_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_postteaser_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Code\\NextJS\\react-storyblok-next-boilerplate-master\\components\\modules\\PostTeaser\\index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* styles */


const PostTeaser = ({
  title,
  posttitle,
  intro,
  link
}) => {
  return __jsx("div", {
    className: _postteaser_scss__WEBPACK_IMPORTED_MODULE_1___default.a.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, title), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("a", {
    href: link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, posttitle), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, intro))));
};

/* harmony default export */ __webpack_exports__["default"] = (PostTeaser);

/***/ }),

/***/ "./components/modules/PostTeaser/postteaser.scss":
/*!*******************************************************!*\
  !*** ./components/modules/PostTeaser/postteaser.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"root": "root___GzGq6"
};

/***/ }),

/***/ "./pages/root/index.js":
/*!*****************************!*\
  !*** ./pages/root/index.js ***!
  \*****************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layouts/DefaultLayout */ "./components/layouts/DefaultLayout/index.js");
/* harmony import */ var _components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/NavBar/NavBar */ "./components/NavBar/NavBar.js");
/* harmony import */ var _components_modules_PostTeaser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/modules/PostTeaser */ "./components/modules/PostTeaser/index.jsx");
var _jsxFileName = "D:\\Code\\NextJS\\react-storyblok-next-boilerplate-master\\pages\\root\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* 🌈 This is the client side 🌈*/

/* dependencies */

/* layout */


/* components */




function fetchUrl(url) {
  return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url).then(r => r.json());
}

const Home = ({
  data
}) => {
  const {
    content
  } = data;
  const postTeaserData = content.components.find(item => item.component === 'Post Teaser Module');
  console.log(postTeaserData);
  return __jsx(_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), __jsx("br", {
    className: "jsx-1626315026",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-1626315026" + " " + "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, postTeaserData.Group.map(teaser => {
    return __jsx(_components_modules_PostTeaser__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: teaser.Title,
      posttitle: teaser.Headline,
      intro: teaser.Intro,
      link: teaser.Link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: undefined
    });
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1626315026",
    __self: undefined
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxDb2RlXFxOZXh0SlNcXHJlYWN0LXN0b3J5Ymxvay1uZXh0LWJvaWxlcnBsYXRlLW1hc3RlclxccGFnZXNcXHJvb3RcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDc0IiLCJmaWxlIjoiRDpcXENvZGVcXE5leHRKU1xccmVhY3Qtc3RvcnlibG9rLW5leHQtYm9pbGVycGxhdGUtbWFzdGVyXFxwYWdlc1xccm9vdFxcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIPCfjIggVGhpcyBpcyB0aGUgY2xpZW50IHNpZGUg8J+MiCovXG5cbi8qIGRlcGVuZGVuY2llcyAqL1xuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcblxuLyogbGF5b3V0ICovXG5pbXBvcnQgRGVmYXVsdExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXRzL0RlZmF1bHRMYXlvdXRcIjtcblxuLyogY29tcG9uZW50cyAqL1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL05hdkJhci9OYXZCYXInO1xuaW1wb3J0IFBvc3RUZWFzZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tb2R1bGVzL1Bvc3RUZWFzZXInO1xuXG5cbmZ1bmN0aW9uIGZldGNoVXJsKHVybCkge1xuICAgIHJldHVybiBmZXRjaCh1cmwpLnRoZW4ociA9PiByLmpzb24oKSk7XG4gIH1cblxuICBjb25zdCBIb21lID0gKHsgZGF0YSB9KSA9PiB7XG4gIGNvbnN0IHsgY29udGVudCB9ID0gZGF0YTtcbiAgY29uc3QgcG9zdFRlYXNlckRhdGEgPSBjb250ZW50LmNvbXBvbmVudHMuZmluZCgoaXRlbSkgPT4gaXRlbS5jb21wb25lbnQgPT09ICdQb3N0IFRlYXNlciBNb2R1bGUnKTtcbiAgY29uc29sZS5sb2cocG9zdFRlYXNlckRhdGEpO1xuXG5cbiAgXG5cdHJldHVybiAoXG5cdFx0PERlZmF1bHRMYXlvdXQ+XG5cdFx0XHQ8TmF2YmFyLz48YnIvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICAgICAge3Bvc3RUZWFzZXJEYXRhLkdyb3VwLm1hcCh0ZWFzZXIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICA8UG9zdFRlYXNlciB0aXRsZT17dGVhc2VyLlRpdGxlfSBwb3N0dGl0bGU9e3RlYXNlci5IZWFkbGluZX0gaW50cm89e3RlYXNlci5JbnRyb30gbGluaz17dGVhc2VyLkxpbmt9IC8+IFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgICAgYH08L3N0eWxlPlxuXHRcdDwvRGVmYXVsdExheW91dD5cbiAgKTtcblxufTtcblxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaFVybChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wYWdlL2luZGV4YCk7XG4gIHJldHVybiB7IHByb3BzOiB7IGRhdGEgfSB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdfQ== */\n/*@ sourceURL=D:\\\\Code\\\\NextJS\\\\react-storyblok-next-boilerplate-master\\\\pages\\\\root\\\\index.js */"));
};

const getServerSideProps = async () => {
  const data = await fetchUrl(`http://localhost:3000/api/page/index`);
  return {
    props: {
      data
    }
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 4:
/*!***********************************!*\
  !*** multi ./pages/root/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Code\NextJS\react-storyblok-next-boilerplate-master\pages\root\index.js */"./pages/root/index.js");


/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=root.js.map