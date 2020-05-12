"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.MobileNavLink=exports.MobileNavLinkContainer=exports.CloseIcon=exports.HamburgerIcon=exports.HamburgerIconWrapper=exports.CloseIconWrapper=exports.IconWrapper=void 0;var _reactFontawesome=require("@fortawesome/react-fontawesome"),_navigation=require("components/navigation/navigation.styles"),_theme=_interopRequireDefault(require("components/theme")),_styledComponents=_interopRequireDefault(require("styled-components"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _templateObject10(){var e=_taggedTemplateLiteral(["\n    padding: 0.3rem 0.55rem;\n  "]);return _templateObject10=function(){return e},e}function _templateObject9(){var e=_taggedTemplateLiteral(["\n  font-size: 0.85rem;\n  padding: 0.5rem 0.75rem;\n  margin: 0 0 0 1.5rem;\n  border: 2px solid ",";\n\n  &:hover {\n    color: ",";\n    border: 2px solid ",";\n  }\n\n  ","\n"]);return _templateObject9=function(){return e},e}function _templateObject8(){var e=_taggedTemplateLiteral(["\n    display: flex;\n  "]);return _templateObject8=function(){return e},e}function _templateObject7(){var e=_taggedTemplateLiteral(["\n  display: none;\n\n  ","\n\n  li {\n    .active {\n      border: 2px solid ",";\n    }\n  }\n"]);return _templateObject7=function(){return e},e}function _templateObject6(){var e=_taggedTemplateLiteral(["\n  z-index: 1000;\n  position: absolute;\n  color: ",";\n  transition: all 0.3s ease-in-out;\n  top: 15px;\n  right: 80px;\n  opacity: ",";\n\n  &:hover {\n    color: ",";\n  }\n"]);return _templateObject6=function(){return e},e}function _templateObject5(){var e=_taggedTemplateLiteral(["\n  z-index: 1011;\n  opacity: ",";\n"]);return _templateObject5=function(){return e},e}function _templateObject4(){var e=_taggedTemplateLiteral(["\n    display: block !important;\n  "]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral(["\n  display: none !important;\n  ","\n"]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral(["\n  color: ",";\n  display: ",";\n"]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral(["\n  color: ",";\n  display: none;\n  font-size: 2rem;\n  cursor: pointer;\n  margin-left: 1.5rem;\n"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t=t||e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var IconWrapper=_styledComponents.default.li(_templateObject(),function(e){return e.theme.main.primary});exports.IconWrapper=IconWrapper;var CloseIconWrapper=(0,_styledComponents.default)(IconWrapper)(_templateObject2(),function(e){return e.theme.main.body},function(e){return e.isMobileNavActive?"block":"none"});exports.CloseIconWrapper=CloseIconWrapper;var HamburgerIconWrapper=(0,_styledComponents.default)(IconWrapper)(_templateObject3(),(0,_theme.default)().lg(_templateObject4()));exports.HamburgerIconWrapper=HamburgerIconWrapper;var HamburgerIcon=(0,_styledComponents.default)(_reactFontawesome.FontAwesomeIcon)(_templateObject5(),function(e){return e.isMobileNavActive?0:1});exports.HamburgerIcon=HamburgerIcon;var CloseIcon=(0,_styledComponents.default)(HamburgerIcon)(_templateObject6(),function(e){return e.theme.main.body},function(e){return e.isMobileNavActive?1:0},function(e){return e.theme.main.text});exports.CloseIcon=CloseIcon;var MobileNavLinkContainer=_styledComponents.default.div(_templateObject7(),(0,_theme.default)().lg(_templateObject8()),function(e){return e.theme.main.text});exports.MobileNavLinkContainer=MobileNavLinkContainer;var MobileNavLink=(0,_styledComponents.default)(_navigation.NavLink)(_templateObject9(),function(e){return e.theme.main.primary},function(e){return e.theme.main.text},function(e){return e.theme.main.text},(0,_theme.default)().md(_templateObject10()));exports.MobileNavLink=MobileNavLink;