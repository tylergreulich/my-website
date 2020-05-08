"use strict";
exports.__esModule = true;
var react_1 = require("react");
var navigation_theme_1 = require("./navigation.theme");
exports.Navigation = function () {
    return (react_1["default"].createElement(navigation_theme_1.Header, null,
        react_1["default"].createElement("div", null, "Logo"),
        react_1["default"].createElement(navigation_theme_1.NavLinks, null,
            react_1["default"].createElement(navigation_theme_1.NavLink, null, "Portfolio"),
            react_1["default"].createElement(navigation_theme_1.NavLink, null, "Skills"),
            react_1["default"].createElement(navigation_theme_1.NavLink, null, "Blog"),
            react_1["default"].createElement(navigation_theme_1.NavLink, null, "Contact"))));
};
