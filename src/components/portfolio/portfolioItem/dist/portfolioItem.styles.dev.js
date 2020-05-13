"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PortfolioItemButtonWrapper = exports.PortfolioItemButton = exports.TechList = exports.Tech = exports.TechContainer = exports.PortfolioAdCopy = exports.PortfolioImage = exports.ImageWrapper = exports.PortfolioItemWrapper = void 0;

var _theme = _interopRequireDefault(require("components/theme"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n    padding: 1.5rem;\n    background-color: ", ";\n    grid-column-start: 2;\n    grid-column-end: 3;\n  "]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n    padding: 0.2rem 0.6rem;\n    font-size: 0.4rem;\n  "]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    font-size: 0.5rem;\n  "]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 3rem;\n  text-align: center;\n  display: inline-block;\n  text-transform: uppercase;\n  font-weight: 700;\n  cursor: pointer;\n  margin-right: 1.5rem;\n  text-decoration: none;\n  transition: all 0.3s ease-in-out;\n  font-family: Lato;\n  padding: 0.4rem 0.8rem;\n  letter-spacing: 0.1rem;\n  font-size: 0.65rem;\n  border: 0.25rem solid ", ";\n  color: ", ";\n\n  &:hover {\n    color: ", ";\n    background-color: ", ";\n  }\n\n  ", "\n\n  ", "\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n    font-size: 1.5vw;\n  "]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n    font-size: 1.75vw;\n  "]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n\n  ", "\n\n  ", "\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    font-size: 2.35vw;\n  "]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  text-transform: uppercase;\n  font-family: Lato;\n  font-weight: 600;\n  font-size: 1rem;\n\n  ", "\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    padding: 1.5rem;\n  "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n      font-size: 2vw;\n    "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n      font-size: 1.75vw;\n    "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n      margin-bottom: 1rem;\n      font-size: 2.7vw;\n    "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n      font-size: 2.4vw;\n    "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    padding: 0;\n    width: 100%;\n    height: 50%;\n    display: grid;\n    grid-template-columns: 70% 30%;\n    grid-template-rows: repeat(2, 50%);\n\n    #projectInfo {\n      padding: 1.5rem;\n      grid-row-end: 3;\n      grid-row-start: 1;\n    }\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  padding: 2.5rem;\n\n  ", "\n\n  h4 {\n    color: ", ";\n    text-transform: uppercase;\n    font-size: 1.3vw;\n\n    @media (max-width: 1400px) {\n      font-size: 1.6vw;\n    }\n\n    @media (max-width: 1300px) {\n      font-size: 1.8vw;\n    }\n\n    ", "\n\n    ", "\n  }\n\n  p {\n    color: ", ";\n    font-size: 0.85vw;\n\n    @media (max-width: 1400px) {\n      font-size: 1vw;\n    }\n\n    @media (max-width: 1300px) {\n      font-size: 1.3vw;\n    }\n\n    ", "\n\n    ", "\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n\n  background: ", ";\n  background-size: cover;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    height: 50%;\n    width: 100%;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 50%;\n  height: 100%;\n\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    flex-direction: column;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    height: 600px;\n    padding: 0;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: ", ";\n  display: flex;\n  background-color: ", ";\n  height: 500px;\n  padding: 2rem;\n\n  ", "\n\n  ", "\n"]);

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
}, (0, _theme["default"])().lg(_templateObject2()), (0, _theme["default"])().lg(_templateObject3()));

exports.PortfolioItemWrapper = PortfolioItemWrapper;

var ImageWrapper = _styledComponents["default"].div(_templateObject4(), (0, _theme["default"])().lg(_templateObject5()));

exports.ImageWrapper = ImageWrapper;

var PortfolioImage = _styledComponents["default"].div(_templateObject6(), function (_ref3) {
  var imgUrl = _ref3.imgUrl;
  return "url(".concat(imgUrl, ") no-repeat center center");
});

exports.PortfolioImage = PortfolioImage;

var PortfolioAdCopy = _styledComponents["default"].div(_templateObject7(), (0, _theme["default"])().lg(_templateObject8()), function (_ref4) {
  var theme = _ref4.theme;
  return theme.main.primary;
}, (0, _theme["default"])().lg(_templateObject9()), (0, _theme["default"])().md(_templateObject10()), function (_ref5) {
  var theme = _ref5.theme;
  return theme.main.text;
}, (0, _theme["default"])().lg(_templateObject11()), (0, _theme["default"])().md(_templateObject12()));

exports.PortfolioAdCopy = PortfolioAdCopy;

var TechContainer = _styledComponents["default"].div(_templateObject13(), (0, _theme["default"])().lg(_templateObject14(), function (_ref6) {
  var theme = _ref6.theme;
  return theme.main.greyAlt;
}));

exports.TechContainer = TechContainer;

var Tech = _styledComponents["default"].div(_templateObject15(), function (_ref7) {
  var theme = _ref7.theme;
  return theme.main.secondary;
}, (0, _theme["default"])().lg(_templateObject16(), function (_ref8) {
  var theme = _ref8.theme;
  return theme.main.greyAlt;
}));

exports.Tech = Tech;

var TechList = _styledComponents["default"].span(_templateObject17(), function (_ref9) {
  var theme = _ref9.theme;
  return theme.main.text;
}, (0, _theme["default"])().lg(_templateObject18()), (0, _theme["default"])().md(_templateObject19()));

exports.TechList = TechList;

var PortfolioItemButton = _styledComponents["default"].a(_templateObject20(), function (_ref10) {
  var theme = _ref10.theme;
  return theme.main.secondary;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.main.secondary;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.main.body;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.main.secondary;
}, (0, _theme["default"])().lg(_templateObject21(), function (_ref14) {
  var theme = _ref14.theme;
  return theme.main.greyAlt;
}), (0, _theme["default"])().md(_templateObject22()));

exports.PortfolioItemButton = PortfolioItemButton;

var PortfolioItemButtonWrapper = _styledComponents["default"].div(_templateObject23(), (0, _theme["default"])().lg(_templateObject24(), function (_ref15) {
  var theme = _ref15.theme;
  return theme.main.greyAlt;
}));

exports.PortfolioItemButtonWrapper = PortfolioItemButtonWrapper;