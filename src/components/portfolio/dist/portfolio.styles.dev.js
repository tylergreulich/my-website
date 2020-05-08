"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PortfolioContainer = exports.PortfolioText = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 0 10%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  margin: 5rem 0;\n  font-size: 2.5rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PortfolioText = _styledComponents["default"].h3(_templateObject());

exports.PortfolioText = PortfolioText;

var PortfolioContainer = _styledComponents["default"].section(_templateObject2());

exports.PortfolioContainer = PortfolioContainer;