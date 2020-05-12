"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.darkTheme = exports.lightTheme = void 0;

var _styledComponents = require("styled-components");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      @media (max-width: ", "em) {\n        ", ";\n      }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var lightTheme = {
  main: {
    primary: "#7500ff",
    secondary: "#d50d68",
    text: "rgba(0, 0, 0, 0.84)",
    body: "#fff",
    lightGrey: "#fafafa",
    grey: "#f5f5f5",
    darkGrey: "#acacac",
    boxShadow: "0 9px 54px -4px rgba(224, 224, 224, 1)",
    greyAlt: "#eee",
    errorText: "#cc0000"
  }
};
exports.lightTheme = lightTheme;
var darkTheme = {
  main: {
    body: "#363c48",
    text: "hsla(0,0%,100%,0.88)",
    primary: "#d6b3ff",
    secondary: "#ffa7c4",
    secondaryLight: "#fbc5d7",
    grey: "#2f2f2f",
    lightGrey: "#363c48",
    darkGrey: "#fafafa",
    greyAlt: "#3a3c3c",
    errorText: "#ff7790"
  }
};
exports.darkTheme = darkTheme;
var sizes = {
  xl: 82,
  lg: 62,
  md: 43
};

var _default = function _default() {
  return Object.keys(sizes).reduce(function (acc, label) {
    acc[label] = function () {
      return (0, _styledComponents.css)(_templateObject(), sizes[label], _styledComponents.css.apply(void 0, arguments));
    };

    return acc;
  }, {});
};

exports["default"] = _default;