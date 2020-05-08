"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
exports.Header = styled_components_1["default"].header(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  width: 100vw;\n  height: 7vh;\n  position: absolute;\n  padding: 0 10%;\n  display: flex;\n  justify-content: space-between;\n"], ["\n  background-color: ", ";\n  width: 100vw;\n  height: 7vh;\n  position: absolute;\n  padding: 0 10%;\n  display: flex;\n  justify-content: space-between;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.main.primary;
});
exports.NavLinks = styled_components_1["default"].ul(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  height: 100%;\n  list-style: none;\n  color: ", ";\n"], ["\n  display: flex;\n  align-items: center;\n  height: 100%;\n  list-style: none;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.main.white;
});
exports.NavLink = styled_components_1["default"].li(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin: 0 0 0 3rem;\n"], ["\n  margin: 0 0 0 3rem;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
