"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PortfolioItemButton = exports.Tech = exports.PortfolioAdCopy = exports.PortfolioImage = exports.PortfolioItemWrapper = void 0;

var _stockImg = _interopRequireDefault(require("assets/img/stock-img.jpg"));

var _heroStyles = require("components/hero/hero.styles.js");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  padding: 0.4rem 0.8rem;\n  letter-spacing: 0.1rem;\n  font-size: 0.65rem;\n  background-color: transparent;\n  border: 0.25rem solid ", ";\n  color: ", ";\n\n  &:hover {\n    color: ", ";\n    background-color: ", ";\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  text-transform: uppercase;\n  font-family: Lato;\n  font-weight: 600;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  padding: 0 4%;\n\n  h4 {\n    color: ", ";\n    text-transform: uppercase;\n  }\n\n  p {\n    color: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 50%;\n\n  background: url(", ") no-repeat center center;\n  background-size: cover;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: ", ";\n  display: flex;\n  background-color: ", ";\n  height: 500px;\n  box-shadow: 0 9px 54px -4px rgba(224, 224, 224, 1);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PortfolioItemWrapper = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var last = _ref.last;
  return last ? 0 : "3.5rem";
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.main.grey;
});

exports.PortfolioItemWrapper = PortfolioItemWrapper;

var PortfolioImage = _styledComponents["default"].div(_templateObject2(), _stockImg["default"]);

exports.PortfolioImage = PortfolioImage;

var PortfolioAdCopy = _styledComponents["default"].div(_templateObject3(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.main.primary;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.main.text;
});

exports.PortfolioAdCopy = PortfolioAdCopy;

var Tech = _styledComponents["default"].div(_templateObject4(), function (_ref5) {
  var theme = _ref5.theme;
  return theme.main.secondary;
});

exports.Tech = Tech;
var PortfolioItemButton = (0, _styledComponents["default"])(_heroStyles.PortfolioButton)(_templateObject5(), function (_ref6) {
  var theme = _ref6.theme;
  return theme.main.secondary;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.main.secondary;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.main.body;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.main.secondary;
});
exports.PortfolioItemButton = PortfolioItemButton;