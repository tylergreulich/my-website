"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LogoContainer=void 0;var _styledComponents=_interopRequireDefault(require("styled-components"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _templateObject(){var e=_taggedTemplateLiteral(["\n  font-size: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n\n  svg {\n    font-size: 6rem;\n    color: ",";\n    margin-bottom: 1rem;\n    height: 50%;\n  }\n\n  p {\n    font-size: 1.5rem;\n    font-family: Lato;\n    margin: 0;\n    color: ",";\n  }\n"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,n){return n=n||e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var LogoContainer=_styledComponents.default.div(_templateObject(),function(e){var n=e.theme;return"primary"===e.color?n.main.primary:n.main.secondary},function(e){return e.theme.main.text});exports.LogoContainer=LogoContainer;