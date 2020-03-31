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
    className: "jsx-2788982029",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("h1", {
    className: "jsx-2788982029",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Blog list"), __jsx("div", {
    className: "jsx-2788982029" + " " + "wrapper",
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
    id: "2788982029",
    __self: this
  }, ".wrapper.jsx-2788982029 a.jsx-2788982029{link-style:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxDb2RlXFxOZXh0SlNcXHJlYWN0LXN0b3J5Ymxvay1uZXh0LWJvaWxlcnBsYXRlLW1hc3RlclxccGFnZXNcXHJvb3RcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDc0IsQUFHaUMsZ0JBQ2xCIiwiZmlsZSI6IkQ6XFxDb2RlXFxOZXh0SlNcXHJlYWN0LXN0b3J5Ymxvay1uZXh0LWJvaWxlcnBsYXRlLW1hc3RlclxccGFnZXNcXHJvb3RcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiDwn4yIIFRoaXMgaXMgdGhlIGNsaWVudCBzaWRlIPCfjIgqL1xuXG4vKiBkZXBlbmRlbmNpZXMgKi9cbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5cbi8qIGxheW91dCAqL1xuaW1wb3J0IERlZmF1bHRMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0cy9EZWZhdWx0TGF5b3V0XCI7XG5cbi8qIGNvbXBvbmVudHMgKi9cbmltcG9ydCBIZWFkbGluZU1vZHVsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tb2R1bGVzL0hlYWRsaW5lTW9kdWxlXCI7XG5pbXBvcnQgUGFyYWdyYXBoTW9kdWxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21vZHVsZXMvUGFyYWdyYXBoTW9kdWxlXCI7XG5pbXBvcnQgSW1hZ2VNb2R1bGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tb2R1bGVzL0ltYWdlTW9kdWxlJztcbmltcG9ydCBOYXZNb2R1bGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tb2R1bGVzL05hdk1vZHVsZSc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2QmFyJztcbmltcG9ydCBQb3N0VGVhc2VyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbW9kdWxlcy9Qb3N0VGVhc2VyJztcbmltcG9ydCBCbG9nUG9zdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL21vZHVsZXMvQmxvZ1Bvc3QnO1xuXG5mdW5jdGlvbiBmZXRjaFVybCh1cmwpIHtcbiAgICByZXR1cm4gZmV0Y2godXJsKS50aGVuKHIgPT4gci5qc29uKCkpO1xuICB9XG5cbiAgY29uc3QgSG9tZSA9ICh7IGRhdGEgfSkgPT4ge1xuICBjb25zdCB7IGNvbnRlbnQgfSA9IGRhdGE7XG4gIGNvbnN0IHBvc3RUZWFzZXJEYXRhID0gY29udGVudC5jb21wb25lbnRzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uY29tcG9uZW50ID09PSAnUG9zdCBUZWFzZXIgTW9kdWxlJyk7XG4gIGNvbnNvbGUubG9nKHBvc3RUZWFzZXJEYXRhKTtcblxuXG4gIFxuXHRyZXR1cm4gKFxuXHRcdDxEZWZhdWx0TGF5b3V0PlxuXHRcdFx0PE5hdmJhci8+PGJyLz5cbiAgICAgICAgICA8aDE+QmxvZyBsaXN0PC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAgICAgIHtwb3N0VGVhc2VyRGF0YS5Hcm91cC5tYXAodGVhc2VyID0+IHtcbiAgICAgICAgICAgIHJldHVybiAgPFBvc3RUZWFzZXIgdGl0bGU9e3RlYXNlci5IZWFkbGluZX0gaW50cm89e3RlYXNlci5JbnRyb30gbGluaz17dGVhc2VyLkxpbmt9IC8+IFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAud3JhcHBlciBhIHtcbiAgICAgICAgICAgICAgICBsaW5rLXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuXHRcdDwvRGVmYXVsdExheW91dD5cbiAgKTtcblxufTtcblxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaFVybChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wYWdlL2luZGV4YCk7XG4gIHJldHVybiB7IHByb3BzOiB7IGRhdGEgfSB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdfQ== */\n/*@ sourceURL=D:\\\\Code\\\\NextJS\\\\react-storyblok-next-boilerplate-master\\\\pages\\\\root\\\\index.js */"));
};

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=root.js.aa2cdbb44647fa6116ff.hot-update.js.map