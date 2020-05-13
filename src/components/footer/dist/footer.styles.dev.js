"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FooterContainer = exports.GithubWrapper = exports.AltContact = void 0;

var _theme = _interopRequireDefault(require("components/theme"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 14vh;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  background-color: ", ";\n  color: ", ";\n  font-family: Lato;\n\n  a {\n    color: ", ";\n    margin-left: 0.25rem;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      font-size: 2.5rem;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  a {\n    font-size: 2rem;\n\n    ", "\n\n    svg {\n      color: ", ";\n      transition: all 0.3s ease-in-out;\n    }\n\n    &:hover .fa-github {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: 2.5rem 0;\n  text-align: center;\n  font-size: 1.15rem;\n  color: ", ";\n\n  a {\n    text-decoration: none;\n    color: ", ";\n    cursor: pointer;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AltContact = _styledComponents["default"].p(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.main.text;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.main.primary;
});

exports.AltContact = AltContact;

var GithubWrapper = _styledComponents["default"].span(_templateObject2(), (0, _theme["default"])().md(_templateObject3()), function (_ref3) {
  var theme = _ref3.theme;
  return theme.main.body;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.main.text;
});

exports.GithubWrapper = GithubWrapper;

var FooterContainer = _styledComponents["default"].footer(_templateObject4(), function (_ref5) {
  var theme = _ref5.theme;
  return theme.main.secondary;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.main.body;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.main.body;
});

exports.FooterContainer = FooterContainer;