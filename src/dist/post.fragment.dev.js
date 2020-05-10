"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postFragment = void 0;

var _gatsby = require("gatsby");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  fragment postFragment on Mdx {\n    frontmatter {\n      path\n      title\n      date(formatString: \"MMMM DD, YYYY\")\n      featuredImg {\n        childImageSharp {\n          fluid {\n            sizes(maxWidth: 1920) {\n              ...GatsbyImageSharpSizes\n            }\n          }\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var postFragment = (0, _gatsby.graphql)(_templateObject());
exports.postFragment = postFragment;