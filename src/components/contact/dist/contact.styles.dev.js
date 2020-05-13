"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonContainer = exports.StyledForm = exports.FormWrapper = exports.ContactText = void 0;

var _formik = require("formik");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  font-family: Lato;\n\n  button[type=\"submit\"] {\n    background: ", ";\n    border: none;\n    width: 100%;\n    color: ", ";\n    font-size: 1rem;\n    /* border-radius: 3rem; */\n    text-transform: uppercase;\n    text-align: center;\n    padding: 1.15rem 0;\n    transition: all 0.25s ease-in-out;\n    cursor: pointer;\n\n    &:hover:not(:disabled) {\n      background: ", ";\n    }\n  }\n\n  button:disabled,\n  button[disabled] {\n    color: ", ";\n    font-weight: 600;\n    opacity: 0.6;\n    cursor: not-allowed;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 75%;\n  height: 100%;\n  background-color: ", ";\n  color: ", ";\n  padding: 56px;\n  margin-bottom: 0;\n\n  @media (max-width: 1199.98px) {\n    width: 85%;\n  }\n\n  @media (max-width: 560px) {\n    max-width: 90%;\n  }\n\n  h4 {\n    font-size: 1.2rem;\n    margin: 2.5rem 0;\n  }\n\n  label {\n    color: ", ";\n  }\n\n  input[type=\"text\"],\n  input[type=\"email\"],\n  textarea {\n    width: 100%;\n    font-size: 0.8rem;\n    background: ", ";\n    margin-bottom: 0.5rem;\n    margin-top: 0.5rem;\n    color: inherit;\n    border: ", ";\n    line-height: 1.2;\n    padding: 0.65rem 0.5rem;\n    color: ", ";\n  }\n\n  input[type=\"text\"],\n  input[type=\"email\"],\n  textarea {\n    &:active,\n    &:focus {\n      border: 0.15rem solid ", ";\n    }\n\n    &:invalid {\n      box-shadow: none;\n    }\n  }\n\n  strong {\n    font-family: Lato;\n    color: ", ";\n  }\n\n  div {\n    margin-bottom: 2rem;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 70%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n\n  @media (max-width: 768px) {\n    width: 100%;\n    margin: 0;\n    flex-direction: column;\n    justify-content: space-evenly;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  margin: 5rem 0;\n  font-size: 2.5rem;\n  font-family: Lato;\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ContactText = _styledComponents["default"].h3(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.main.text;
});

exports.ContactText = ContactText;

var FormWrapper = _styledComponents["default"].section(_templateObject2());

exports.FormWrapper = FormWrapper;
var StyledForm = (0, _styledComponents["default"])(_formik.Form)(_templateObject3(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.main.grey;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.body;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.main.text;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.main.body;
}, function (_ref6) {
  var theme = _ref6.theme;
  return "0.15rem solid ".concat(theme.main.darkGrey);
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.main.text;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.main.primary;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.main.errorText;
});
exports.StyledForm = StyledForm;

var ButtonContainer = _styledComponents["default"].div(_templateObject4(), function (_ref10) {
  var theme = _ref10.theme;
  return theme.main.primary;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.main.body;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.main.text;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.main.body;
});

exports.ButtonContainer = ButtonContainer;