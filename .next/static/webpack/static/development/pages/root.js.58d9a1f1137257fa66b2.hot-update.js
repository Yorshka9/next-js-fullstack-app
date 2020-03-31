webpackHotUpdate("static\\development\\pages\\root.js",{

/***/ "./pages/root/index.js":
/*!*****************************!*\
  !*** ./pages/root/index.js ***!
  \*****************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layouts/DefaultLayout */ "./components/layouts/DefaultLayout/index.js");
/* harmony import */ var _components_modules_HeadlineModule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/modules/HeadlineModule */ "./components/modules/HeadlineModule/index.jsx");
/* harmony import */ var _components_modules_ParagraphModule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/modules/ParagraphModule */ "./components/modules/ParagraphModule/index.jsx");
/* harmony import */ var _components_modules_ImageModule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/modules/ImageModule */ "./components/modules/ImageModule/index.jsx");
/* harmony import */ var _components_modules_NavModule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/modules/NavModule */ "./components/modules/NavModule/index.jsx");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/NavBar */ "./components/NavBar.js");
/* harmony import */ var _components_modules_PostTeaser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/modules/PostTeaser */ "./components/modules/PostTeaser/index.jsx");
/* harmony import */ var _components_modules_BlogPost__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/modules/BlogPost */ "./components/modules/BlogPost/index.jsx");
var _jsxFileName = "D:\\Code\\NextJS\\react-storyblok-next-boilerplate-master\\pages\\root\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* layout */

/* components */









var Home = function Home(_ref) {
  var data = _ref.data;
  var content = data.content;
  var postTeaserData = content.components.find(function (item) {
    return item.component === 'Post Teaser Module';
  });
  console.log(postTeaserData);
  return __jsx(_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_components_NavBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-3937854739",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("h1", {
    className: "jsx-3937854739",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Blog list"), __jsx("div", {
    className: "jsx-3937854739" + " " + "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, postTeaserData.Group.map(function (teaser) {
    return __jsx(_components_modules_PostTeaser__WEBPACK_IMPORTED_MODULE_8__["default"], {
      title: teaser.Headline,
      intro: teaser.Intro,
      link: teaser.Link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    });
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3937854739",
    __self: this
  }, ".wrapper.jsx-3937854739 p.jsx-3937854739{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxDb2RlXFxOZXh0SlNcXHJlYWN0LXN0b3J5Ymxvay1uZXh0LWJvaWxlcnBsYXRlLW1hc3RlclxccGFnZXNcXHJvb3RcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDc0IsQUFHMEIsVUFDWCIsImZpbGUiOiJEOlxcQ29kZVxcTmV4dEpTXFxyZWFjdC1zdG9yeWJsb2stbmV4dC1ib2lsZXJwbGF0ZS1tYXN0ZXJcXHBhZ2VzXFxyb290XFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyog8J+MiCBUaGlzIGlzIHRoZSBjbGllbnQgc2lkZSDwn4yIKi9cblxuLyogZGVwZW5kZW5jaWVzICovXG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xuXG4vKiBsYXlvdXQgKi9cbmltcG9ydCBEZWZhdWx0TGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dHMvRGVmYXVsdExheW91dFwiO1xuXG4vKiBjb21wb25lbnRzICovXG5pbXBvcnQgSGVhZGxpbmVNb2R1bGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbW9kdWxlcy9IZWFkbGluZU1vZHVsZVwiO1xuaW1wb3J0IFBhcmFncmFwaE1vZHVsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tb2R1bGVzL1BhcmFncmFwaE1vZHVsZVwiO1xuaW1wb3J0IEltYWdlTW9kdWxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbW9kdWxlcy9JbWFnZU1vZHVsZSc7XG5pbXBvcnQgTmF2TW9kdWxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbW9kdWxlcy9OYXZNb2R1bGUnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL05hdkJhcic7XG5pbXBvcnQgUG9zdFRlYXNlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL21vZHVsZXMvUG9zdFRlYXNlcic7XG5pbXBvcnQgQmxvZ1Bvc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tb2R1bGVzL0Jsb2dQb3N0JztcblxuZnVuY3Rpb24gZmV0Y2hVcmwodXJsKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCkudGhlbihyID0+IHIuanNvbigpKTtcbiAgfVxuXG4gIGNvbnN0IEhvbWUgPSAoeyBkYXRhIH0pID0+IHtcbiAgY29uc3QgeyBjb250ZW50IH0gPSBkYXRhO1xuICBjb25zdCBwb3N0VGVhc2VyRGF0YSA9IGNvbnRlbnQuY29tcG9uZW50cy5maW5kKChpdGVtKSA9PiBpdGVtLmNvbXBvbmVudCA9PT0gJ1Bvc3QgVGVhc2VyIE1vZHVsZScpO1xuICBjb25zb2xlLmxvZyhwb3N0VGVhc2VyRGF0YSk7XG5cblxuICBcblx0cmV0dXJuIChcblx0XHQ8RGVmYXVsdExheW91dD5cblx0XHRcdDxOYXZiYXIvPjxici8+XG4gICAgICAgICAgPGgxPkJsb2cgbGlzdDwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAge3Bvc3RUZWFzZXJEYXRhLkdyb3VwLm1hcCh0ZWFzZXIgPT4ge1xuICAgICAgICAgIHJldHVybiAgPFBvc3RUZWFzZXIgdGl0bGU9e3RlYXNlci5IZWFkbGluZX0gaW50cm89e3RlYXNlci5JbnRyb30gbGluaz17dGVhc2VyLkxpbmt9IC8+IFxuICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgLndyYXBwZXIgcCB7XG4gICAgICAgICAgICAgICAgY29sb3I6cmVkO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuXHRcdDwvRGVmYXVsdExheW91dD5cbiAgKTtcblxufTtcblxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaFVybChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wYWdlL2luZGV4YCk7XG4gIHJldHVybiB7IHByb3BzOiB7IGRhdGEgfSB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdfQ== */\n/*@ sourceURL=D:\\\\Code\\\\NextJS\\\\react-storyblok-next-boilerplate-master\\\\pages\\\\root\\\\index.js */"));
};

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=root.js.58d9a1f1137257fa66b2.hot-update.js.map