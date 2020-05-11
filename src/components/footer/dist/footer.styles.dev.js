"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FooterContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 14vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ", ";\n  color: ", ";\n  font-family: Lato;\n\n  a {\n    color: ", ";\n    margin-left: 0.25rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FooterContainer = _styledComponents["default"].footer(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.main.secondary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.main.body;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.main.body;
});

exports.FooterContainer = FooterContainer;