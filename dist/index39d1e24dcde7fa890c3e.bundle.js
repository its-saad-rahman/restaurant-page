/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Poppins-Black.ttf */ "./src/assets/fonts/Poppins-Black.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Poppins-Regular.ttf */ "./src/assets/fonts/Poppins-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/FrancoisOne-Regular.ttf */ "./src/assets/fonts/FrancoisOne-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n  padding: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role=list],\nol[role=list] {\n  list-style: none;\n}\n\n/* Remove underline style from link   */\na {\n  text-decoration: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n    scroll-behavior: auto;\n  }\n  *,\n*::before,\n*::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n.pt-5 {\n  padding-top: 5em;\n}\n\n.pt-1 {\n  padding-top: 1em;\n}\n\n.pt-2 {\n  padding-top: 2em;\n}\n\n.pt-3 {\n  padding-top: 3em;\n}\n\n.pt-4 {\n  padding-top: 4em;\n}\n\n.pb-1 {\n  padding-bottom: 1em;\n}\n\n.pb-2 {\n  padding-bottom: 2em;\n}\n\n.pb-3 {\n  padding-bottom: 3em;\n}\n\n.pb-4 {\n  padding-bottom: 4em;\n}\n\n.pb-5 {\n  padding-bottom: 5em;\n}\n\n.pl-1 {\n  padding-left: 1em;\n}\n\n.pl-2 {\n  padding-left: 2em;\n}\n\n.pl-3 {\n  padding-left: 3em;\n}\n\n.pl-4 {\n  padding-left: 4em;\n}\n\n.pl-5 {\n  padding-left: 5em;\n}\n\n.pr-1 {\n  padding-right: 1em;\n}\n\n.pr-2 {\n  padding-right: 2em;\n}\n\n.pr-3 {\n  padding-right: 3em;\n}\n\n.pr-4 {\n  padding-right: 4em;\n}\n\n.pr-5 {\n  padding-right: 5em;\n}\n\n.p-1 {\n  padding: 1em;\n}\n\n.p-2 {\n  padding: 2em;\n}\n\n.p-3 {\n  padding: 3em;\n}\n\n.p-4 {\n  padding: 4em;\n}\n\n.p-5 {\n  padding: 5em;\n}\n\n.px-1 {\n  padding-left: 1em;\n  padding-right: 1em;\n}\n\n.px-2 {\n  padding-left: 2em;\n  padding-right: 2em;\n}\n\n.px-3 {\n  padding-left: 3em;\n  padding-right: 3em;\n}\n\n.px-4 {\n  padding-left: 4em;\n  padding-right: 4em;\n}\n\n.px-5 {\n  padding-left: 5em;\n  padding-right: 5em;\n}\n\n.py-1 {\n  padding-top: 1em;\n  padding-bottom: 1em;\n}\n\n.py-2 {\n  padding-top: 2em;\n  padding-bottom: 2em;\n}\n\n.py-3 {\n  padding-top: 3em;\n  padding-bottom: 3em;\n}\n\n.py-4 {\n  padding-top: 4em;\n  padding-bottom: 4em;\n}\n\n.py-5 {\n  padding-top: 5em;\n  padding-bottom: 5em;\n}\n\n.rounded {\n  border-radius: 999px;\n}\n\n.grid {\n  display: grid;\n  grid-template-columns: repeat(var(--grid-placement, auto-fill), minmax(var(--grid-min-item-size, 16rem), 1fr));\n  gap: var(--gutter, var(--space-s-l));\n}\n\n.grid[data-rows=masonry] {\n  grid-template-rows: masonry;\n  align-items: start;\n}\n\n.grid[data-layout=\"50-50\"] {\n  --grid-placement: auto-fit;\n  --grid-min-item-size: clamp(16rem, 50vw, 26rem);\n}\n\n.g-align-items-center {\n  align-items: center;\n}\n\n.flex {\n  display: flex;\n}\n\n.flex-grow-1 {\n  flex-grow: 1;\n}\n\n.flex-justify-between {\n  justify-content: space-between;\n}\n\n.flex-justify-center {\n  justify-content: center;\n}\n\n.flex-align-center {\n  align-items: center;\n}\n\n.flex-align-end {\n  align-items: end;\n}\n\n.col-direction {\n  flex-direction: column;\n}\n\n/**********************\n      COMPOSITION\n ************************/\n.flow > * + * {\n  margin-top: var(--flow-space, 1em);\n}\n\n/**********************\n      UTILITY\n ************************/\n.wrapper {\n  margin-inline: auto;\n  padding-inline: 1rem;\n  max-width: 90rem;\n}\n\n.bg-color {\n  background-color: hsl(0deg, 11%, 91%);\n}\n\n@font-face {\n  font-family: \"Poppins-Black\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n  font-weight: 900;\n}\n@font-face {\n  font-family: \"Poppins-Regular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\");\n  font-weight: 400;\n}\n@font-face {\n  font-family: \"FrancoisOne-Regular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\");\n  font-weight: 400;\n}\n/**********************\n      BLOCKS\n ************************/\n/**********************\n      EXCEPTIONS\n ************************/\n.logo {\n  font-family: \"Poppins-Black\", sans-serif;\n  font-size: 3.5rem;\n}\n\nnav ul {\n  margin: 0;\n  padding: 0;\n  column-gap: 3em;\n}\nnav ul li a {\n  font-size: 1.15rem;\n  color: hsl(0deg, 9%, 16%);\n  font-family: \"Poppins-Regular\", sans-serif;\n  transition: color 350ms ease-in-out;\n}\n\nnav ul li a.active {\n  color: hsl(356deg, 77%, 47%);\n}\n\nnav ul li a:hover {\n  color: hsl(356deg, 77%, 47%);\n}\n\n.btn {\n  font-family: \"Poppins-Regular\", sans-serif;\n  font-size: 1rem;\n}\n\n.nav-btn {\n  background-color: hsl(356deg, 77%, 47%);\n  color: hsl(0deg, 0%, 100%);\n  padding: 0.5em 2em;\n  border-radius: 100px;\n  transition: background 350ms ease-in-out;\n}\n.nav-btn:hover {\n  background-color: #ec6a73;\n}\n\n.hero {\n  height: 80vh;\n}\n\n.hero h1 {\n  font-family: \"FrancoisOne-Regular\", sans-serif;\n  font-weight: 900;\n  font-size: 5rem;\n  line-height: 1;\n  color: hsl(0deg, 9%, 16%);\n}\n\n.hero-btn {\n  color: hsl(356deg, 77%, 47%);\n  background-color: white;\n  align-self: start;\n  cursor: pointer;\n  transition: background 350ms ease-in;\n  box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.1);\n}\n.hero-btn:hover {\n  background-color: hsl(356deg, 77%, 47%);\n  color: white;\n  transition: background 350ms ease-out;\n}\n\n.text-color-green {\n  color: hsl(120deg, 49%, 35%);\n}\n\n.text-color-primary {\n  color: hsl(356deg, 50%, 40%);\n}\n\n.menu {\n  --gutter: 1em;\n  margin-top: 3em;\n}\n\narticle {\n  font-family: \"Poppins-Regular\", sans-serif;\n  padding: 1em;\n  background: white;\n  border-radius: 15px;\n  box-shadow: -2px 2px 0px 2px hsl(356deg, 77%, 47%);\n}\narticle h3 {\n  color: hsl(0deg, 9%, 16%);\n}\n\n.contact {\n  --gutter: 2em;\n  align-content: center;\n  font-family: \"FrancoisOne-Regular\", sans-serif;\n  height: 80vh;\n}", "",{"version":3,"sources":["webpack://./src/scss/_reset.scss","webpack://./src/scss/style.scss","webpack://./src/scss/utilities/_padding.scss","webpack://./src/scss/utilities/_border-radius.scss","webpack://./src/scss/composition/_grid.scss","webpack://./src/scss/composition/_flex.scss"],"names":[],"mappings":"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","sourcesContent":["/* Box sizing rules */\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Remove default margin */\r\nbody,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\np,\r\nfigure,\r\nblockquote,\r\ndl,\r\ndd {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\r\nul[role='list'],\r\nol[role='list'] {\r\n  list-style: none;\r\n}\r\n/* Remove underline style from link   */\r\na {\r\n  text-decoration: none;\r\n}\r\n/* Set core root defaults */\r\nhtml:focus-within {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n/* Set core body defaults */\r\nbody {\r\n  min-height: 100vh;\r\n  text-rendering: optimizeSpeed;\r\n  line-height: 1.5;\r\n}\r\n\r\n/* A elements that don't have a class get default styles */\r\na:not([class]) {\r\n  text-decoration-skip-ink: auto;\r\n}\r\n\r\n/* Make images easier to work with */\r\nimg,\r\npicture {\r\n  max-width: 100%;\r\n  display: block;\r\n}\r\n\r\n/* Inherit fonts for inputs and buttons */\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n\r\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\r\n@media (prefers-reduced-motion: reduce) {\r\n  html:focus-within {\r\n    scroll-behavior: auto;\r\n  }\r\n\r\n  *,\r\n  *::before,\r\n  *::after {\r\n    animation-duration: 0.01ms !important;\r\n    animation-iteration-count: 1 !important;\r\n    transition-duration: 0.01ms !important;\r\n    scroll-behavior: auto !important;\r\n  }\r\n}\r\n","@use 'reset.scss';\r\n@use 'utilities/padding.scss';\r\n@use 'utilities/border-radius.scss';\r\n@use 'composition/grid';\r\n@use 'composition/flex';\r\n$clr-primary: hsl(356, 77%, 47%);\r\n$clr-secondary: hsl(0, 11%, 91%);\r\n$clr-black: hsl(0, 9%, 16%);\r\n\r\n/**********************\r\n      COMPOSITION\r\n ************************/\r\n\r\n.flow > * + * {\r\n  margin-top: var(--flow-space, 1em);\r\n}\r\n\r\n/**********************\r\n      UTILITY\r\n ************************/\r\n.wrapper {\r\n  margin-inline: auto;\r\n  padding-inline: 1rem;\r\n  max-width: 90rem;\r\n}\r\n\r\n.bg-color {\r\n  background-color: $clr-secondary;\r\n}\r\n@font-face {\r\n  font-family: 'Poppins-Black';\r\n  src: url('../assets/fonts/Poppins-Black.ttf') format('truetype');\r\n  font-weight: 900;\r\n}\r\n@font-face {\r\n  font-family: 'Poppins-Regular';\r\n  src: url('../assets/fonts/Poppins-Regular.ttf') format('truetype');\r\n  font-weight: 400;\r\n}\r\n@font-face {\r\n  font-family: 'FrancoisOne-Regular';\r\n  src: url('../assets/fonts/FrancoisOne-Regular.ttf') format('truetype');\r\n  font-weight: 400;\r\n}\r\n$poppins-black: 'Poppins-Black', sans-serif;\r\n$poppins-regular: 'Poppins-Regular', sans-serif;\r\n$francoisone-regular: 'FrancoisOne-Regular', sans-serif;\r\n\r\n/**********************\r\n      BLOCKS\r\n ************************/\r\n\r\n/**********************\r\n      EXCEPTIONS\r\n ************************/\r\n\r\n.logo {\r\n  font-family: $poppins-black;\r\n  font-size: 3.5rem;\r\n}\r\n\r\nnav ul {\r\n  margin: 0;\r\n  padding: 0;\r\n  column-gap: 3em;\r\n  & li a {\r\n    font-size: 1.15rem;\r\n    color: $clr-black;\r\n    font-family: $poppins-regular;\r\n    transition: color 350ms ease-in-out;\r\n  }\r\n}\r\n\r\nnav ul li a.active {\r\n  color: $clr-primary;\r\n}\r\nnav ul li a:hover {\r\n  color: $clr-primary;\r\n}\r\n.btn {\r\n  font-family: $poppins-regular;\r\n  font-size: 1rem;\r\n}\r\n.nav-btn {\r\n  background-color: $clr-primary;\r\n  color: hsl(0, 0%, 100%);\r\n  padding: 0.5em 2em;\r\n  border-radius: 100px;\r\n  transition: background 350ms ease-in-out;\r\n  &:hover {\r\n    background-color: lighten($clr-primary, 20%);\r\n  }\r\n}\r\n// HERO section\r\n.hero {\r\n  height: 80vh;\r\n}\r\n\r\n.hero h1 {\r\n  font-family: $francoisone-regular;\r\n  font-weight: 900;\r\n  font-size: 5rem;\r\n  line-height: 1;\r\n  color: $clr-black;\r\n}\r\n\r\n.hero-btn {\r\n  color: $clr-primary;\r\n  background-color: white;\r\n  align-self: start;\r\n  cursor: pointer;\r\n  transition: background 350ms ease-in;\r\n  // transition: color 350ms ease-in;\r\n  box-shadow: 0px 0px 3px 3px rgb(0 0 0/10%);\r\n  &:hover {\r\n    background-color: $clr-primary;\r\n    color: white;\r\n    transition: background 350ms ease-out;\r\n    // transition: color 350ms ease-out;\r\n  }\r\n}\r\n\r\n.text-color-green {\r\n  color: hsl(120, 49%, 35%);\r\n}\r\n.text-color-primary {\r\n  color: hsl(356, 50%, 40%);\r\n}\r\n\r\n.menu {\r\n  --gutter: 1em;\r\n  margin-top: 3em;\r\n}\r\narticle {\r\n  font-family: $poppins-regular;\r\n  padding: 1em;\r\n  background: white;\r\n  border-radius: 15px;\r\n  box-shadow: -2px 2px 0px 2px $clr-primary;\r\n\r\n  h3 {\r\n    color: $clr-black;\r\n  }\r\n}\r\n\r\n.contact {\r\n  --gutter: 2em;\r\n  align-content: center;\r\n  font-family: $francoisone-regular;\r\n  height: 80vh;\r\n}\r\n","// Padding\r\n.pt-5 {\r\n  padding-top: 5em;\r\n}\r\n.pt-1 {\r\n  padding-top: 1em;\r\n}\r\n.pt-2 {\r\n  padding-top: 2em;\r\n}\r\n.pt-3 {\r\n  padding-top: 3em;\r\n}\r\n.pt-4 {\r\n  padding-top: 4em;\r\n}\r\n\r\n.pb-1 {\r\n  padding-bottom: 1em;\r\n}\r\n.pb-2 {\r\n  padding-bottom: 2em;\r\n}\r\n.pb-3 {\r\n  padding-bottom: 3em;\r\n}\r\n.pb-4 {\r\n  padding-bottom: 4em;\r\n}\r\n.pb-5 {\r\n  padding-bottom: 5em;\r\n}\r\n.pl-1 {\r\n  padding-left: 1em;\r\n}\r\n.pl-2 {\r\n  padding-left: 2em;\r\n}\r\n.pl-3 {\r\n  padding-left: 3em;\r\n}\r\n.pl-4 {\r\n  padding-left: 4em;\r\n}\r\n.pl-5 {\r\n  padding-left: 5em;\r\n}\r\n.pr-1 {\r\n  padding-right: 1em;\r\n}\r\n.pr-2 {\r\n  padding-right: 2em;\r\n}\r\n.pr-3 {\r\n  padding-right: 3em;\r\n}\r\n.pr-4 {\r\n  padding-right: 4em;\r\n}\r\n.pr-5 {\r\n  padding-right: 5em;\r\n}\r\n.p-1 {\r\n  padding: 1em;\r\n}\r\n.p-2 {\r\n  padding: 2em;\r\n}\r\n.p-3 {\r\n  padding: 3em;\r\n}\r\n.p-4 {\r\n  padding: 4em;\r\n}\r\n.p-5 {\r\n  padding: 5em;\r\n}\r\n.px-1 {\r\n  padding-left: 1em;\r\n  padding-right: 1em;\r\n}\r\n.px-2 {\r\n  padding-left: 2em;\r\n  padding-right: 2em;\r\n}\r\n.px-3 {\r\n  padding-left: 3em;\r\n  padding-right: 3em;\r\n}\r\n.px-4 {\r\n  padding-left: 4em;\r\n  padding-right: 4em;\r\n}\r\n.px-5 {\r\n  padding-left: 5em;\r\n  padding-right: 5em;\r\n}\r\n.py-1 {\r\n  padding-top: 1em;\r\n  padding-bottom: 1em;\r\n}\r\n.py-2 {\r\n  padding-top: 2em;\r\n  padding-bottom: 2em;\r\n}\r\n.py-3 {\r\n  padding-top: 3em;\r\n  padding-bottom: 3em;\r\n}\r\n.py-4 {\r\n  padding-top: 4em;\r\n  padding-bottom: 4em;\r\n}\r\n.py-5 {\r\n  padding-top: 5em;\r\n  padding-bottom: 5em;\r\n}\r\n",".rounded {\r\n  border-radius: 999px;\r\n}\r\n",".grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(\r\n    var(--grid-placement, auto-fill),\r\n    minmax(var(--grid-min-item-size, 16rem), 1fr)\r\n  );\r\n  gap: var(--gutter, var(--space-s-l));\r\n}\r\n\r\n.grid[data-rows='masonry'] {\r\n  grid-template-rows: masonry;\r\n  align-items: start;\r\n}\r\n\r\n.grid[data-layout='50-50'] {\r\n  --grid-placement: auto-fit;\r\n  --grid-min-item-size: clamp(16rem, 50vw, 26rem);\r\n}\r\n\r\n.g-align-items-center {\r\n  align-items: center;\r\n}\r\n",".flex {\r\n  display: flex;\r\n}\r\n.flex-grow-1 {\r\n  flex-grow: 1;\r\n}\r\n.flex-justify-between {\r\n  justify-content: space-between;\r\n}\r\n.flex-justify-center {\r\n  justify-content: center;\r\n}\r\n.flex-align-center {\r\n  align-items: center;\r\n}\r\n.flex-align-end {\r\n  align-items: end;\r\n}\r\n\r\n.col-direction {\r\n  flex-direction: column;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/layout/header.js":
/*!******************************!*\
  !*** ./src/layout/header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function header() {
  const headerTag = document.createElement('header');

  const logo = document.createElement('div');
  logo.innerHTML = `Pasta`;
  const nav = document.createElement('nav');
  nav.innerHTML = `<ul role='list' class="flex">
  <li> <a href="#" data-nav='home'>Home</a> </li>
  <li> <a href="#" data-nav='menu'>Menu</a> </li>
  <li> <a href="#" data-nav='contact'>Contact Us</a> </li>
  </ul>`;

  const navLink = document.createElement('a');
  navLink.setAttribute('href', '#');
  navLink.classList.add('nav-btn', 'btn');
  navLink.innerHTML = 'Order Now';

  const navBtnContainer = document.createElement('div');
  navBtnContainer.appendChild(navLink);
  //Added classlist
  headerTag.classList.add('flex', 'flex-justify-between', 'flex-align-center');
  nav.classList.add(
    'flex',
    'flex-grow-1',
    'flex-justify-center',
    'flex-align-end'
  );

  logo.classList.add('logo');

  headerTag.appendChild(logo);
  headerTag.appendChild(nav);
  headerTag.appendChild(navBtnContainer);

  return headerTag;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);


/***/ }),

/***/ "./src/layout/hero.js":
/*!****************************!*\
  !*** ./src/layout/hero.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_images_heroImage_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/heroImage.jpg */ "./src/assets/images/heroImage.jpg");


function hero() {
  const heroDiv = document.createElement('div');
  heroDiv.classList.add('grid', 'hero', 'g-align-items-center');
  heroDiv.setAttribute('data-layout', '50-50');

  const contentContainer = document.createElement('div');
  contentContainer.classList.add('flow', 'flex', 'col-direction');

  const h1 = document.createElement('h1');
  h1.innerHTML = `It's not just <span class="text-color-green">Food</span> , It's an <span class="text-color-primary">experience</span>`;

  const link = document.createElement('a');
  link.innerText = 'Book A Table';
  link.classList.add('btn', 'hero-btn', 'px-2', 'py-1', 'rounded', 'bg-color');

  contentContainer.appendChild(h1);
  contentContainer.appendChild(link);

  const imageContainer = document.createElement('div');
  const imageTag = document.createElement('img');
  imageTag.setAttribute('src', _assets_images_heroImage_jpg__WEBPACK_IMPORTED_MODULE_0__);
  imageContainer.appendChild(imageTag);

  heroDiv.appendChild(contentContainer);
  heroDiv.appendChild(imageContainer);
  return heroDiv;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hero);


/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_images_contact_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/contact.jpg */ "./src/assets/images/contact.jpg");


function contact() {
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('grid', 'contact');
  mainDiv.setAttribute('data-layout', '50-50');

  //image container
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  img.src = _assets_images_contact_jpg__WEBPACK_IMPORTED_MODULE_0__;
  imgContainer.appendChild(img);

  //contact detail
  const contactContainer = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.innerHTML = 'Contact Us';
  const address = document.createElement('ul');
  address.setAttribute('role', 'list');
  address.innerHTML = `
    <li>67096 Francesca Lane</li>
    <li>O'Harahaven, Oregon </li>
    <li>Phone: 111 111 111</li>
    <li>Email: info@pasta.com</li>
  `;
  contactContainer.appendChild(h1);
  contactContainer.appendChild(address);

  //append child to main div
  mainDiv.appendChild(img);
  mainDiv.appendChild(contactContainer);

  return mainDiv;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);


/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_images_Greek_Orzo_Salad_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/Greek-Orzo-Salad.png */ "./src/assets/images/Greek-Orzo-Salad.png");
/* harmony import */ var _assets_images_Gorgonzola_Shrimp_Pasta_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/Gorgonzola-Shrimp-Pasta.png */ "./src/assets/images/Gorgonzola-Shrimp-Pasta.png");
/* harmony import */ var _assets_images_Caprese_Macaroni_Salad_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/Caprese-Macaroni-Salad.png */ "./src/assets/images/Caprese-Macaroni-Salad.png");
/* harmony import */ var _assets_images_Grilled_Chicken_Salad_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/Grilled-Chicken-Salad.png */ "./src/assets/images/Grilled-Chicken-Salad.png");
/* harmony import */ var _assets_images_pasta_2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/pasta-2.png */ "./src/assets/images/pasta-2.png");






const menus = [
  {
    image: _assets_images_Greek_Orzo_Salad_png__WEBPACK_IMPORTED_MODULE_0__,
    heading: 'Greek Orzo Salad',
    description:
      'All the tasty toppings—including red onion, tomatoes, olives, feta cheese and a zesty dressing—and orzo give it extra interest.',
    price: '$15',
  },
  {
    image: _assets_images_Gorgonzola_Shrimp_Pasta_png__WEBPACK_IMPORTED_MODULE_1__,
    heading: 'Gorgonzola Shrimp Pasta',
    description:
      "This creamy pasta dish is so quick and easy. It's perfect for weeknights, but feels special enough for company.",
    price: '$20',
  },
  {
    image: _assets_images_pasta_2_png__WEBPACK_IMPORTED_MODULE_4__,
    heading: 'Artichoke Florentine Pasta',
    description:
      'Pasta loaded with artichokes and creamy cheese is everything a Sunday dinner should be: rich, tasty and memorable.',
    price: '$25',
  },
  {
    image: _assets_images_Caprese_Macaroni_Salad_png__WEBPACK_IMPORTED_MODULE_2__,
    heading: 'Caprese Macaroni Salad',
    description:
      'When fresh tomatoes and basil are abundant in the summer, I like to make this wonderful Caprese macaroni salad',
    price: '$30',
  },
  {
    image: _assets_images_Grilled_Chicken_Salad_png__WEBPACK_IMPORTED_MODULE_3__,
    heading: 'Grilled Chicken Salad',
    description:
      'All the tasty toppings—including red onion, tomatoes, olives, feta cheese and a zesty dressing—and orzo give it extra interest.',
    price: '$15',
  },
];
function menu() {
  const menuDiv = document.createElement('div');
  menuDiv.classList.add('grid', 'menu');
  menus.map((menu) => {
    menuDiv.appendChild(menuList(menu.image, menu.heading, menu.price));
  });

  return menuDiv;
}

function menuList(image, heading, price) {
  //menu image
  const menuImage = document.createElement('img');
  menuImage.setAttribute('src', image);
  menuImage.setAttribute('width', '250');
  menuImage.setAttribute('height', '250');

  //menu heading
  const menuHeading = document.createElement('h4');
  menuHeading.innerHTML = heading;
  //menu description
  // const menuDesc = document.createElement('p');
  // menuDesc.innerHTML = description;

  //menu price
  const menuPrice = document.createElement('p');
  menuPrice.innerHTML = price;

  const article = document.createElement('article');
  //append menu to article
  article.appendChild(menuImage);
  article.appendChild(menuHeading);
  // article.appendChild(menuDesc);
  article.appendChild(menuPrice);

  //append to container
  return article;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);


/***/ }),

/***/ "./src/assets/fonts/FrancoisOne-Regular.ttf":
/*!**************************************************!*\
  !*** ./src/assets/fonts/FrancoisOne-Regular.ttf ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "FrancoisOne-Regular.ttf";

/***/ }),

/***/ "./src/assets/fonts/Poppins-Black.ttf":
/*!********************************************!*\
  !*** ./src/assets/fonts/Poppins-Black.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Poppins-Black.ttf";

/***/ }),

/***/ "./src/assets/fonts/Poppins-Regular.ttf":
/*!**********************************************!*\
  !*** ./src/assets/fonts/Poppins-Regular.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Poppins-Regular.ttf";

/***/ }),

/***/ "./src/assets/images/Caprese-Macaroni-Salad.png":
/*!******************************************************!*\
  !*** ./src/assets/images/Caprese-Macaroni-Salad.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Caprese-Macaroni-Salad.png";

/***/ }),

/***/ "./src/assets/images/Gorgonzola-Shrimp-Pasta.png":
/*!*******************************************************!*\
  !*** ./src/assets/images/Gorgonzola-Shrimp-Pasta.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Gorgonzola-Shrimp-Pasta.png";

/***/ }),

/***/ "./src/assets/images/Greek-Orzo-Salad.png":
/*!************************************************!*\
  !*** ./src/assets/images/Greek-Orzo-Salad.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Greek-Orzo-Salad.png";

/***/ }),

/***/ "./src/assets/images/Grilled-Chicken-Salad.png":
/*!*****************************************************!*\
  !*** ./src/assets/images/Grilled-Chicken-Salad.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Grilled-Chicken-Salad.png";

/***/ }),

/***/ "./src/assets/images/contact.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/contact.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "contact.jpg";

/***/ }),

/***/ "./src/assets/images/heroImage.jpg":
/*!*****************************************!*\
  !*** ./src/assets/images/heroImage.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "heroImage.jpg";

/***/ }),

/***/ "./src/assets/images/pasta-2.png":
/*!***************************************!*\
  !*** ./src/assets/images/pasta-2.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pasta-2.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/header */ "./src/layout/header.js");
/* harmony import */ var _layout_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/hero */ "./src/layout/hero.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/menu */ "./src/pages/menu.js");
/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/contact */ "./src/pages/contact.js");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");






//body background color
document.body.classList.add('bg-color');
//select content
const content = document.getElementById('content');
content.classList.add('wrapper');

//header
const headerDiv = (0,_layout_header__WEBPACK_IMPORTED_MODULE_0__["default"])();

document.querySelector('#content').addEventListener('click', (e) => {
  let target = e.target;
  if (target.dataset.nav === 'home') {
    content.removeChild(content.lastChild);

    content.appendChild((0,_layout_hero__WEBPACK_IMPORTED_MODULE_1__["default"])());
  }
  if (target.dataset.nav === 'menu') {
    content.removeChild(content.lastChild);

    content.appendChild((0,_pages_menu__WEBPACK_IMPORTED_MODULE_2__["default"])());
  }
  if (target.dataset.nav === 'contact') {
    content.removeChild(content.lastChild);
    content.appendChild((0,_pages_contact__WEBPACK_IMPORTED_MODULE_3__["default"])());
  }

  e.preventDefault();
});

//Append all element to content
content.appendChild(headerDiv);
content.appendChild((0,_layout_hero__WEBPACK_IMPORTED_MODULE_1__["default"])());

})();

/******/ })()
;
//# sourceMappingURL=index39d1e24dcde7fa890c3e.bundle.js.map