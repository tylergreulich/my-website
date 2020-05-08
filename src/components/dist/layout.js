"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./layout.css");
var navigation_1 = require("./navigation/navigation");
var Layout = function (_a) {
    var children = _a.children;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(navigation_1.Navigation, null),
        react_1["default"].createElement("div", { style: {
                margin: "0 auto",
                maxWidth: 960,
                padding: "0 1.0875rem 1.45rem"
            } },
            react_1["default"].createElement("main", null, children),
            react_1["default"].createElement("footer", null,
                "\u00A9 ",
                new Date().getFullYear(),
                ", Built with", " ",
                react_1["default"].createElement("a", { href: "https://www.gatsbyjs.org" }, "Gatsby")))));
};
exports["default"] = Layout;
