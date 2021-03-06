"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrowContainer = exports.BlogButton = exports.PortfolioButton = exports.ButtonWrapper = exports.Profile = exports.ProfileSection = exports.ContentArea = void 0;

var _theme = _interopRequireDefault(require("components/theme"));

var _reactScroll = require("react-scroll");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n      height: 2.3rem;\n      width: 2.3rem;\n    "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n      height: 2rem;\n      width: 2rem;\n    "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    transform: translateY(10vh);\n  \n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  /* margin-top: 44%; */\n  cursor: pointer;\n  transform: translateY(15vh);\n\n  ", "\n\n  .arrow {\n    box-sizing: border-box;\n    height: 1.75rem;\n    width: 1.75rem;\n    border-style: solid;\n    border-color: ", ";\n    border-width: 0px 5px 5px 0px;\n    transform: rotate(45deg);\n    transition: border-width 150ms ease-in-out;\n\n    ", "\n\n    ", "\n  }\n\n  .arrow:hover {\n    border-bottom-width: 3px;\n    border-right-width: 3px;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  border: 0.3rem solid ", ";\n  background-color: ", ";\n  color: ", ";\n  padding: 0.5rem 1.44rem;\n\n  &:hover {\n    color: ", ";\n    border-color: ", ";\n    background-color: ", ";\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border-radius: 3rem;\n  text-align: center;\n  color: ", ";\n  padding: 0.8rem 1.6rem;\n  display: inline-block;\n  text-transform: uppercase;\n  letter-spacing: 0.3rem;\n  font-weight: 700;\n  font-size: 0.85rem;\n  cursor: pointer;\n  margin-right: 1.5rem;\n  text-decoration: none;\n  transition: all 0.3s ease-in-out;\n  font-family: Lato;\n\n  &:hover {\n    background-color: ", ";\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  @media (max-width: 760px) {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n\n  h1 {\n    font-size: 3.8rem;\n    font-weight: 500;\n    line-height: 1.2;\n    font-family: Lato;\n    margin: 0 0 1rem;\n    color: ", ";\n\n    span {\n      color: ", ";\n      font-family: Lato;\n    }\n  }\n\n  h5 {\n    font-size: 2rem;\n    font-family: Lato;\n    margin: 0 0 3rem;\n    color: ", ";\n  }\n\n  p {\n    color: ", ";\n    font-size: 0.9rem;\n    line-height: 1.5;\n    font-weight: 400;\n    margin: 0 0 3rem;\n    font-family: Merriweather;\n\n    @media (max-width: 760px) {\n      font-size: 1rem;\n    }\n\n    a {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  max-width: 35rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100vw;\n  height: 100vh;\n  max-width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  @media (max-width: 768px) {\n    margin: 0 auto;\n    width: 100%;\n  }\n\n  background-color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ContentArea = _styledComponents["default"].section(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.main.lightGrey;
});

exports.ContentArea = ContentArea;

var ProfileSection = _styledComponents["default"].div(_templateObject2());

exports.ProfileSection = ProfileSection;

var Profile = _styledComponents["default"].div(_templateObject3(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.main.text;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.main.primary;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.main.text;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.main.text;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.main.primary;
});

exports.Profile = Profile;

var ButtonWrapper = _styledComponents["default"].div(_templateObject4());

exports.ButtonWrapper = ButtonWrapper;
var PortfolioButton = (0, _styledComponents["default"])(_reactScroll.Link)(_templateObject5(), function (_ref7) {
  var theme = _ref7.theme;
  return theme.main.primary;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.main.body;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.main.text;
});
exports.PortfolioButton = PortfolioButton;
var BlogButton = (0, _styledComponents["default"])(PortfolioButton)(_templateObject6(), function (_ref10) {
  var theme = _ref10.theme;
  return theme.main.primary;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.main.body;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.main.primary;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.main.text;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.main.text;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.main.body;
});
exports.BlogButton = BlogButton;

var ArrowContainer = _styledComponents["default"].div(_templateObject7(), (0, _theme["default"])().xl(_templateObject8()), function (_ref16) {
  var theme = _ref16.theme;
  return theme.main.secondary;
}, (0, _theme["default"])().xl(_templateObject9()), (0, _theme["default"])().md(_templateObject10()));

exports.ArrowContainer = ArrowContainer;