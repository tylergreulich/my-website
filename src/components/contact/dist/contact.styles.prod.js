"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ButtonContainer=exports.StyledForm=exports.FormWrapper=exports.ContactText=void 0;var _formik=require("formik"),_styledComponents=_interopRequireDefault(require("styled-components"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _templateObject4(){var e=_taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  width: 100%;\n  font-family: Lato;\n\n  button[type="submit"] {\n    background: ',";\n    border: none;\n    width: 100%;\n    color: ",";\n    font-size: 1rem;\n    /* border-radius: 3rem; */\n    text-transform: uppercase;\n    text-align: center;\n    padding: 1.15rem 0;\n    transition: all 0.25s ease-in-out;\n    cursor: pointer;\n\n    &:hover {\n      background: ",";\n    }\n  }\n\n  button:disabled,\n  button[disabled] {\n    background-color: ",";\n    color: black;\n    font-weight: 600;\n  }\n"]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral(["\n  max-width: 75%;\n  height: 100%;\n  background-color: ",";\n  color: ",';\n  padding: 56px;\n\n  @media (max-width: 1199.98px) {\n    max-width: 65%;\n  }\n\n  @media (max-width: 768px) {\n    max-width: 70%;\n  }\n\n  @media (max-width: 560px) {\n    max-width: 90%;\n  }\n\n  h4 {\n    font-size: 1.2rem;\n    margin: 2.5rem 0;\n  }\n\n  input[type="text"],\n  input[type="email"],\n  textarea {\n    width: 100%;\n    font-size: 0.8rem;\n    background: ',';\n    border: 0.15rem solid transparent;\n    margin-bottom: 2rem;\n    margin-top: 0.5rem;\n    color: inherit;\n    line-height: 1.2;\n    padding: 0.65rem 0.5rem;\n  }\n\n  input[type="text"],\n  input[type="email"],\n  textarea {\n    &:active,\n    &:focus {\n      border: 0.15rem solid ',";\n    }\n\n    &:invalid {\n      &:active,\n      &:focus {\n        border: 0.15rem solid transparent;\n      }\n    }\n  }\n"]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral(["\n  width: 70%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n\n  @media (max-width: 768px) {\n    width: 100%;\n    margin: 0;\n    flex-direction: column;\n    justify-content: space-evenly;\n    padding-top: 5.4rem;\n  }\n"]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral(["\n  text-align: center;\n  margin: 5rem 0;\n  font-size: 2.5rem;\n  font-family: Lato;\n"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,n){return n=n||e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var ContactText=_styledComponents.default.h3(_templateObject());exports.ContactText=ContactText;var FormWrapper=_styledComponents.default.section(_templateObject2());exports.FormWrapper=FormWrapper;var StyledForm=(0,_styledComponents.default)(_formik.Form)(_templateObject3(),function(e){return e.theme.main.grey},function(e){return e.theme.body},function(e){return e.theme.main.body},function(e){return e.theme.main.primary});exports.StyledForm=StyledForm;var ButtonContainer=_styledComponents.default.div(_templateObject4(),function(e){return e.theme.main.secondary},function(e){return e.theme.main.body},function(e){return e.theme.main.text},function(e){return e.theme.main.darkGrey});exports.ButtonContainer=ButtonContainer;