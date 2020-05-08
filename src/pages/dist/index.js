"use strict";
exports.__esModule = true;
var image_1 = require("components/image");
var layout_1 = require("components/layout");
var seo_1 = require("components/seo");
var theme_1 = require("components/theme");
var gatsby_1 = require("gatsby");
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var IndexPage = function () { return (react_1["default"].createElement(styled_components_1.ThemeProvider, { theme: theme_1.theme },
    react_1["default"].createElement(layout_1["default"], null,
        react_1["default"].createElement(seo_1["default"], { title: "Home" }),
        react_1["default"].createElement("h1", null, "Hi people"),
        react_1["default"].createElement("p", null, "Welcome to your new Gatsby site."),
        react_1["default"].createElement("p", null, "Now go build something great."),
        react_1["default"].createElement("div", { style: { maxWidth: "300px", marginBottom: "1.45rem" } },
            react_1["default"].createElement(image_1["default"], null)),
        react_1["default"].createElement(gatsby_1.Link, { to: "/page-2/" }, "Go to page 2")))); };
exports["default"] = IndexPage;
