"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.BlogContent=exports.BlogDate=exports.BlogTitle=exports.BlogContainer=exports.BlogImage=void 0;var _styledComponents=_interopRequireDefault(require("styled-components"));function _interopRequireDefault(n){return n&&n.__esModule?n:{default:n}}function _templateObject5(){var n=_taggedTemplateLiteral(["\n  font-family: Merriweather;\n  line-height: 1.5;\n\n  blockquote {\n    margin: 3.6rem 0 !important;\n  }\n\n  a {\n    text-decoration: none;\n    color: ",";\n  }\n\n  h1 {\n    line-height: 1.5;\n    font-style: italic;\n    font-weight: lighter;\n    font-size: 1.5rem;\n    font-family: Lato !important;\n\n    @media (max-width: 720px) {\n      font-size: 1.25rem;\n    }\n\n    @media (max-width: 600px) {\n      font-size: 1rem;\n    }\n  }\n\n  h2 {\n    font-size: 2vw;\n    margin: 3.6rem 0;\n    font-family: Lato !important;\n\n    @media (max-width: 720px) {\n      font-size: 3vw;\n    }\n\n    @media (max-width: 600px) {\n      font-size: 3.5vw;\n    }\n  }\n\n  p {\n    font-size: 1.35vw;\n    line-height: 1.5;\n    margin-bottom: 3.6rem;\n\n    @media (max-width: 800px) {\n      font-size: 2.25vw;\n    }\n\n    @media (max-width: 720px) {\n      font-size: 2.5vw;\n    }\n\n    @media (max-width: 600px) {\n      font-size: 3.5vw;\n    }\n  }\n\n  div > .gatsby-highlight {\n    margin-bottom: 2rem;\n\n    pre {\n      font-size: 1rem;\n    }\n  }\n"]);return _templateObject5=function(){return n},n}function _templateObject4(){var n=_taggedTemplateLiteral(["\n  font-weight: normal;\n  font-size: 1rem;\n  color: #999;\n  text-align: center;\n  font-size: 1rem;\n  margin-bottom: 3.6rem;\n\n  @media (max-width: 940px) {\n    font-size: 0.9rem;\n  }\n\n  @media (max-width: 600px) {\n    font-size: 0.8rem;\n  }\n"]);return _templateObject4=function(){return n},n}function _templateObject3(){var n=_taggedTemplateLiteral(["\n  font-family: Lato;\n  font-weight: bold;\n  margin: 0;\n  text-align: center;\n\n  @media (max-width: 940px) {\n    font-size: 2.5rem;\n  }\n\n  @media (max-width: 600px) {\n    font-size: 2rem;\n  }\n"]);return _templateObject3=function(){return n},n}function _templateObject2(){var n=_taggedTemplateLiteral(["\n  padding: 7rem 0 0;\n  width: 55%;\n  margin: 0 auto;\n\n  @media (max-width: 940px) {\n    padding: 3rem 0;\n  }\n"]);return _templateObject2=function(){return n},n}function _templateObject(){var n=_taggedTemplateLiteral(["\n  .gatsby-image-wrapper {\n    > div {\n      padding: 0 !important;\n    }\n\n    > picture {\n      img {\n        position: static !important;\n        height: 72.5vh !important;\n\n        @media (max-width: 940px) {\n          height: 60vh !important;\n        }\n\n        @media (max-width: 720px) {\n          height: 50vh !important;\n        }\n\n        @media (max-width: 600px) {\n          height: 40vh !important;\n        }\n\n        @media (max-width: 480px) {\n          height: 30vh !important;\n        }\n      }\n    }\n  }\n"]);return _templateObject=function(){return n},n}function _taggedTemplateLiteral(n,t){return t=t||n.slice(0),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}var BlogImage=_styledComponents.default.div(_templateObject());exports.BlogImage=BlogImage;var BlogContainer=_styledComponents.default.div(_templateObject2());exports.BlogContainer=BlogContainer;var BlogTitle=_styledComponents.default.h1(_templateObject3());exports.BlogTitle=BlogTitle;var BlogDate=_styledComponents.default.p(_templateObject4());exports.BlogDate=BlogDate;var BlogContent=_styledComponents.default.div(_templateObject5(),function(n){return n.theme.main.primary});exports.BlogContent=BlogContent;