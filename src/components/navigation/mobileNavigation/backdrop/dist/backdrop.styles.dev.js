"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackdropColor = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 100;\n  opacity: ", ";\n  transition: all 0.3s ease-in-out;\n  display: ", ";\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  transform: ", ";\n\n  li {\n    color: ", ";\n    a {\n      font-size: 2.5rem;\n      z-index: 10000;\n\n      &:hover {\n        color: ", " !important;\n      }\n    }\n  }\n  /* transform: translateY(0); */\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BackdropColor = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.main.primary;
}, function (_ref2) {
  var isMobileNavActive = _ref2.isMobileNavActive;
  return isMobileNavActive ? 1 : 0;
}, function (_ref3) {
  var isMobileNavActive = _ref3.isMobileNavActive;
  return isMobileNavActive ? "block" : "none";
}, function (_ref4) {
  var isMobileNavActive = _ref4.isMobileNavActive;
  return "translateX(".concat(isMobileNavActive ? "0" : "100%", ")");
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.main.body;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.main.text;
});

exports.BackdropColor = BackdropColor;