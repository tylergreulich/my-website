"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackendGrid = exports.FrontendGrid = exports.BackendText = exports.FrontendText = exports.BackendContainer = exports.FrontendContainer = exports.SkillsContainer = exports.SkillsText = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject8() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(3, 200px);\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-size: 1.5rem;\n  margin-top: 5%;\n  text-align: center;\n  text-transform: uppercase;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  box-shadow: 0 9px 54px -4px rgba(224, 224, 224, 1);\n  width: 100%;\n  padding: 2rem;\n  background-color: #f5f5f5;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 0 10%;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 5rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: 5rem 0;\n  text-align: center;\n  font-size: 2.5rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SkillsText = _styledComponents["default"].h3(_templateObject());

exports.SkillsText = SkillsText;

var SkillsContainer = _styledComponents["default"].section(_templateObject2());

exports.SkillsContainer = SkillsContainer;

var FrontendContainer = _styledComponents["default"].div(_templateObject3());

exports.FrontendContainer = FrontendContainer;
var BackendContainer = (0, _styledComponents["default"])(FrontendContainer)(_templateObject4());
exports.BackendContainer = BackendContainer;

var FrontendText = _styledComponents["default"].h4(_templateObject5());

exports.FrontendText = FrontendText;
var BackendText = (0, _styledComponents["default"])(FrontendText)(_templateObject6());
exports.BackendText = BackendText;

var FrontendGrid = _styledComponents["default"].div(_templateObject7());

exports.FrontendGrid = FrontendGrid;
var BackendGrid = (0, _styledComponents["default"])(FrontendGrid)(_templateObject8());
exports.BackendGrid = BackendGrid;