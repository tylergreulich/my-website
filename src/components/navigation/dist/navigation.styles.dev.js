"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavLink = exports.MainNav = exports.NavLinks = exports.ThemeToggle = exports.ThemeToggleWrapper = exports.LogoWrapper = exports.Header = void 0;

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _theme = _interopRequireDefault(require("components/theme"));

var _reactScroll = require("react-scroll");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  font-weight: 500;\n  margin: 0 0 0 1rem;\n  padding: 1rem 0.75rem;\n  cursor: pointer;\n  transition: all 0.25s ease-in-out;\n\n  &:hover {\n    color: ", ";\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    display: none;\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n\n  ", "\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  height: 100%;\n  list-style: none;\n  color: ", ";\n\n  li {\n    .active {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    padding: 0;\n    font-size: 1.25rem;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  padding: 10px;\n\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n\n  svg {\n    height: 65%;\n  }\n\n  &:hover {\n    svg {\n      rect {\n        stroke: ", ";\n      }\n\n      text {\n        fill: ", ";\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  background-color: ", ";\n  width: 100vw;\n  height: 7vh;\n  position: fixed;\n  padding: 0 10%;\n  display: flex;\n  justify-content: space-between;\n  font-family: Lato;\n  max-width: 100%;\n  opacity: ", ";\n  z-index: 100;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Header = _styledComponents["default"].header(_templateObject(), function (_ref) {
  var newBgColor = _ref.newBgColor,
      theme = _ref.theme;
  return newBgColor ? theme.main.body : "transparent";
}, function (_ref2) {
  var newBgColor = _ref2.newBgColor,
      isMobileNavActive = _ref2.isMobileNavActive;
  return newBgColor && !isMobileNavActive ? "0.9" : 1;
});

exports.Header = Header;

var LogoWrapper = _styledComponents["default"].div(_templateObject2(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.main.text;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.main.text;
});

exports.LogoWrapper = LogoWrapper;

var ThemeToggleWrapper = _styledComponents["default"].li(_templateObject3(), (0, _theme["default"])().lg(_templateObject4()));

exports.ThemeToggleWrapper = ThemeToggleWrapper;
var ThemeToggle = (0, _styledComponents["default"])(_reactFontawesome.FontAwesomeIcon)(_templateObject5());
exports.ThemeToggle = ThemeToggle;

var NavLinks = _styledComponents["default"].ul(_templateObject6(), function (_ref5) {
  var theme = _ref5.theme;
  return theme.main.primary;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.main.text;
});

exports.NavLinks = NavLinks;

var MainNav = _styledComponents["default"].div(_templateObject7(), (0, _theme["default"])().lg(_templateObject8()));

exports.MainNav = MainNav;
var NavLink = (0, _styledComponents["default"])(_reactScroll.Link)(_templateObject9(), function (_ref7) {
  var theme = _ref7.theme;
  return theme.main.text;
});
exports.NavLink = NavLink;