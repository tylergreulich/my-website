"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NextPage = exports.PreviousPage = exports.PaginationComponent = exports.PostExcerpt = exports.PostDate = exports.Post = exports.BlogText = exports.BlogContainer = void 0;

var _theme = _interopRequireDefault(require("components/theme"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  display: inline-block;\n  text-transform: uppercase;\n  font-weight: 700;\n  cursor: pointer;\n  text-decoration: none;\n  transition: all 0.25s ease-in-out;\n  font-family: Lato;\n  padding: 0.4rem 0.8rem;\n  letter-spacing: 0.1rem;\n  font-size: 0.65rem;\n  background-color: transparent;\n  border: 0.25rem solid\n    ", ";\n\n  &:hover {\n    color: ", ";\n    background-color: ", " !important;\n  }\n\n  color: ", ";\n\n  &:disabled {\n    cursor: not-allowed;\n    pointer-events: all !important;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  display: inline-block;\n  text-transform: uppercase;\n  font-weight: 700;\n  cursor: pointer;\n  text-decoration: none;\n  transition: all 0.25s ease-in-out;\n  font-family: Lato;\n  padding: 0.4rem 0.8rem;\n  letter-spacing: 0.1rem;\n  font-size: 0.65rem;\n  background-color: transparent;\n  border: 0.25rem solid\n    ", ";\n\n  &:hover {\n    color: ", ";\n    background-color: ", ";\n  }\n\n  color: ", ";\n\n  &:disabled {\n    cursor: not-allowed;\n    pointer-events: all !important;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  font-family: Lato;\n  margin: 2.5rem 0;\n  li {\n    margin: 0 2rem;\n    display: inline-flex;\n    align-items: center;\n    color: ", ";\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  font-size: 1rem;\n  line-height: 1.2;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-size: 0.7rem;\n  margin: 0.5rem 0 2rem;\n\n  @media (max-width: 960px) {\n    font-size: 0.8rem;\n  }\n\n  @media (max-width: 600px) {\n    font-size: 0.9rem;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  /* box-shadow: ", "; */\n  margin-bottom: 2rem 0;\n  height: 100%;\n  background-color: ", ";\n\n  div {\n    padding: 7%;\n  }\n\n  .gatsby-image-wrapper {\n    margin-bottom: 0.5rem;\n  }\n\n  @media (max-width: 600px) {\n    text-align: center;\n  }\n\n  #image {\n    height: 50%;\n  }\n\n  a {\n    color: black;\n    display: block;\n    text-decoration: none;\n\n    div {\n      height: 100%;\n    }\n  }\n\n  h2 {\n    font-size: 1.5vw;\n    margin-bottom: 0.2rem;\n    color: ", ";\n    transition: color 0.2s ease-in-out;\n    font-family: Lato;\n    color: ", ";\n\n    &:hover {\n      color: ", ";\n    }\n\n    @media (max-width: 960px) {\n      font-size: 2.2vw;\n    }\n\n    @media (max-width: 600px) {\n      font-size: 2.3vw;\n    }\n  }\n\n  p {\n    color: ", ";\n    line-height: 1.2;\n    font-family: Merriweather;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  margin: 5rem 0;\n  font-size: 2.5rem;\n  font-family: Lato;\n  color: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    grid-template-columns: 1fr;\n    height: 2900px;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    grid-template-columns: repeat(2, 1fr);\n    gap: 2.5rem;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  padding: 0 10%;\n  grid-template-rows: repeat(1, 600px);\n  gap: 5rem;\n\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BlogContainer = _styledComponents["default"].section(_templateObject(), (0, _theme["default"])().xl(_templateObject2()), (0, _theme["default"])().md(_templateObject3()));

exports.BlogContainer = BlogContainer;

var BlogText = _styledComponents["default"].h3(_templateObject4(), function (_ref) {
  var theme = _ref.theme;
  return theme.main.text;
});

exports.BlogText = BlogText;

var Post = _styledComponents["default"].article(_templateObject5(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.main.boxShadow;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.main.grey;
}, function (props) {
  return props.theme.main.text;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.main.primary;
}, function (props) {
  return props.theme.main.primary;
}, function (props) {
  return props.theme.main.text;
});

exports.Post = Post;

var PostDate = _styledComponents["default"].p(_templateObject6());

exports.PostDate = PostDate;

var PostExcerpt = _styledComponents["default"].p(_templateObject7());

exports.PostExcerpt = PostExcerpt;

var PaginationComponent = _styledComponents["default"].div(_templateObject8(), function (_ref5) {
  var theme = _ref5.theme;
  return theme.main.text;
});

exports.PaginationComponent = PaginationComponent;

var PreviousPage = _styledComponents["default"].button(_templateObject9(), function (_ref6) {
  var theme = _ref6.theme,
      currentPage = _ref6.currentPage;
  return currentPage === 1 ? theme.main.darkGrey : theme.main.secondary;
}, function (_ref7) {
  var theme = _ref7.theme,
      currentPage = _ref7.currentPage;
  return currentPage === 1 ? theme.main.darkGrey : theme.main.body;
}, function (_ref8) {
  var theme = _ref8.theme,
      currentPage = _ref8.currentPage;
  return currentPage === 1 ? "none" : theme.main.secondary;
}, function (_ref9) {
  var theme = _ref9.theme,
      currentPage = _ref9.currentPage;
  return currentPage === 1 ? theme.main.darkGrey : theme.main.secondary;
});

exports.PreviousPage = PreviousPage;
var NextPage = (0, _styledComponents["default"])(PreviousPage)(_templateObject10(), function (_ref10) {
  var theme = _ref10.theme,
      currentPage = _ref10.currentPage,
      lastPage = _ref10.lastPage;
  return currentPage === lastPage ? theme.main.darkGrey : theme.main.secondary;
}, function (_ref11) {
  var theme = _ref11.theme,
      currentPage = _ref11.currentPage,
      lastPage = _ref11.lastPage;
  return currentPage === lastPage ? theme.main.darkGrey : theme.main.body;
}, function (_ref12) {
  var theme = _ref12.theme,
      currentPage = _ref12.currentPage,
      lastPage = _ref12.lastPage;
  return currentPage === lastPage ? "transparent" : theme.main.secondary;
}, function (_ref13) {
  var theme = _ref13.theme,
      currentPage = _ref13.currentPage,
      lastPage = _ref13.lastPage;
  return currentPage === lastPage ? theme.main.darkGrey : theme.main.secondary;
});
exports.NextPage = NextPage;