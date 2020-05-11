"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobileNavLink = exports.MobileNavLinkContainer = exports.CloseIcon = exports.HamburgerIcon = exports.IconWrapper = void 0;

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _navigation = require("components/navigation/navigation.styles");

var _theme = _interopRequireDefault(require("components/theme"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  font-size: 1rem;\n  padding: 0.5rem 0.75rem;\n  margin: 0 0 0 2rem;\n  border: 2px solid ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: none;\n\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  z-index: 1000;\n  position: absolute;\n  color: ", ";\n  transition: all 0.3s ease-in-out;\n\n  &:hover {\n    color: ", ";\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  z-index: 1011;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: block;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  display: none;\n  font-size: 2rem;\n  cursor: pointer;\n  margin-left: 1.5rem;\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var IconWrapper = _styledComponents["default"].li(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.main.primary;
}, (0, _theme["default"])().lg(_templateObject2()));

exports.IconWrapper = IconWrapper;
var HamburgerIcon = (0, _styledComponents["default"])(_reactFontawesome.FontAwesomeIcon)(_templateObject3());
exports.HamburgerIcon = HamburgerIcon;
var CloseIcon = (0, _styledComponents["default"])(HamburgerIcon)(_templateObject4(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.main.body;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.main.text;
});
exports.CloseIcon = CloseIcon;

var MobileNavLinkContainer = _styledComponents["default"].div(_templateObject5(), (0, _theme["default"])().lg(_templateObject6()));

exports.MobileNavLinkContainer = MobileNavLinkContainer;
var MobileNavLink = (0, _styledComponents["default"])(_navigation.NavLink)(_templateObject7(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.main.primary;
});
exports.MobileNavLink = MobileNavLink;