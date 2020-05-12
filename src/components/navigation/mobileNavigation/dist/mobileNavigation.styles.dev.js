"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobileNavLink = exports.MobileNavLinkContainer = exports.CloseIcon = exports.HamburgerIcon = exports.HamburgerIconWrapper = exports.CloseIconWrapper = exports.IconWrapper = void 0;

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _navigation = require("components/navigation/navigation.styles");

var _theme = _interopRequireDefault(require("components/theme"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    padding: 0.3rem 0.55rem;\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  font-size: 0.85rem;\n  padding: 0.5rem 0.75rem;\n  margin: 0 0 0 1.5rem;\n  border: 2px solid ", ";\n\n  &:hover {\n    color: ", ";\n    border: 2px solid ", ";\n  }\n\n  ", "\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: none;\n\n  ", "\n\n  li {\n    .active {\n      border: 2px solid ", ";\n    }\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  z-index: 1000;\n  position: absolute;\n  color: ", ";\n  transition: all 0.3s ease-in-out;\n  top: 15px;\n  right: 80px;\n  opacity: ", ";\n\n  &:hover {\n    color: ", ";\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  z-index: 1011;\n  opacity: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    display: block !important;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: none !important;\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  display: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  display: none;\n  font-size: 2rem;\n  cursor: pointer;\n  margin-left: 1.5rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var IconWrapper = _styledComponents["default"].li(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.main.primary;
});

exports.IconWrapper = IconWrapper;
var CloseIconWrapper = (0, _styledComponents["default"])(IconWrapper)(_templateObject2(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.main.body;
}, function (_ref3) {
  var isMobileNavActive = _ref3.isMobileNavActive;
  return isMobileNavActive ? "block" : "none";
});
exports.CloseIconWrapper = CloseIconWrapper;
var HamburgerIconWrapper = (0, _styledComponents["default"])(IconWrapper)(_templateObject3(), (0, _theme["default"])().lg(_templateObject4()));
exports.HamburgerIconWrapper = HamburgerIconWrapper;
var HamburgerIcon = (0, _styledComponents["default"])(_reactFontawesome.FontAwesomeIcon)(_templateObject5(), function (_ref4) {
  var isMobileNavActive = _ref4.isMobileNavActive;
  return isMobileNavActive ? 0 : 1;
});
exports.HamburgerIcon = HamburgerIcon;
var CloseIcon = (0, _styledComponents["default"])(HamburgerIcon)(_templateObject6(), function (_ref5) {
  var theme = _ref5.theme;
  return theme.main.body;
}, function (_ref6) {
  var isMobileNavActive = _ref6.isMobileNavActive;
  return isMobileNavActive ? 1 : 0;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.main.text;
});
exports.CloseIcon = CloseIcon;

var MobileNavLinkContainer = _styledComponents["default"].div(_templateObject7(), (0, _theme["default"])().lg(_templateObject8()), function (_ref8) {
  var theme = _ref8.theme;
  return theme.main.text;
});

exports.MobileNavLinkContainer = MobileNavLinkContainer;
var MobileNavLink = (0, _styledComponents["default"])(_navigation.NavLink)(_templateObject9(), function (_ref9) {
  var theme = _ref9.theme;
  return theme.main.primary;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.main.text;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.main.text;
}, (0, _theme["default"])().md(_templateObject10()));
exports.MobileNavLink = MobileNavLink;