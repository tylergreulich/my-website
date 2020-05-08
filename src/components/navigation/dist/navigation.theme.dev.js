"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavLink = exports.NavLinks = exports.LogoWrapper = exports.Header = void 0;

var _reactScroll = require("react-scroll");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-weight: 500;\n  margin: 0 0 0 1rem;\n  padding: 1rem 0.75rem;\n  cursor: pointer;\n  transition: all 0.25s ease-in-out;\n\n  &:hover {\n    color: ", ";\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  height: 100%;\n  list-style: none;\n  color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n\n  &:hover {\n    svg {\n      rect {\n        stroke: ", ";\n      }\n\n      text {\n        stroke: ", ";\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  background-color: transparent;\n  width: 100vw;\n  height: 7vh;\n  position: absolute;\n  padding: 0 10%;\n  display: flex;\n  justify-content: space-between;\n  font-family: Lato;\n  max-width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Header = _styledComponents["default"].header(_templateObject());

exports.Header = Header;

var LogoWrapper = _styledComponents["default"].div(_templateObject2(), function (_ref) {
  var theme = _ref.theme;
  return theme.main.text;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.main.text;
});

exports.LogoWrapper = LogoWrapper;

var NavLinks = _styledComponents["default"].ul(_templateObject3(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.main.primary;
});

exports.NavLinks = NavLinks;
var NavLink = (0, _styledComponents["default"])(_reactScroll.Link)(_templateObject4(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.main.text;
});
exports.NavLink = NavLink;