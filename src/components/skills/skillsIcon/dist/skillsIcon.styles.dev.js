"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogoContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n\n  svg {\n    font-size: 6rem;\n    color: ", ";\n    margin-bottom: 1rem;\n    height: 50%;\n  }\n\n  p {\n    font-size: 1.5rem;\n    font-family: Lato;\n    margin: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LogoContainer = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var theme = _ref.theme,
      color = _ref.color;
  return color === "primary" ? theme.main.primary : theme.main.secondary;
});

exports.LogoContainer = LogoContainer;