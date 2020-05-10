"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.NavLink=exports.NavLinks=exports.LogoWrapper=exports.Header=void 0;var _reactScroll=require("react-scroll"),_styledComponents=_interopRequireDefault(require("styled-components"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _templateObject4(){var e=_taggedTemplateLiteral(["\n  font-weight: 500;\n  margin: 0 0 0 1rem;\n  padding: 1rem 0.75rem;\n  cursor: pointer;\n  transition: all 0.25s ease-in-out;\n\n  &:hover {\n    color: ",";\n  }\n"]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  height: 100%;\n  list-style: none;\n  color: ",";\n"]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral(["\n  height: 100%;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n\n  &:hover {\n    svg {\n      rect {\n        stroke: ",";\n      }\n\n      text {\n        fill: ",";\n      }\n    }\n  }\n"]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral(["\n  position: fixed;\n  background-color: ",";\n  width: 100vw;\n  height: 7vh;\n  position: fixed;\n  padding: 0 10%;\n  display: flex;\n  justify-content: space-between;\n  font-family: Lato;\n  max-width: 100%;\n  opacity: ",";\n  z-index: 100;\n"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t=t||e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var Header=_styledComponents.default.header(_templateObject(),function(e){var t=e.newBgColor,n=e.theme;return t?n.main.body:"transparent"},function(e){return e.newBgColor?"0.9":1});exports.Header=Header;var LogoWrapper=_styledComponents.default.div(_templateObject2(),function(e){return e.theme.main.text},function(e){return e.theme.main.text});exports.LogoWrapper=LogoWrapper;var NavLinks=_styledComponents.default.ul(_templateObject3(),function(e){return e.theme.main.primary});exports.NavLinks=NavLinks;var NavLink=(0,_styledComponents.default)(_reactScroll.Link)(_templateObject4(),function(e){return e.theme.main.text});exports.NavLink=NavLink;