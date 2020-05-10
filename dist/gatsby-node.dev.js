"use strict";

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// You can delete this file if you're not using it
var createPaginatedPages = require("gatsby-paginate");

var path = require("path");

var componentWithMDXScope = require("gatsby-plugin-mdx/component-with-mdx-scope");

var _require = require("path"),
    resolve = _require.resolve;

var _require2 = require("gatsby-source-filesystem"),
    createFilePath = _require2.createFilePath;

exports.onCreateWebpackConfig = function (_ref) {
  var stage = _ref.stage,
      actions = _ref.actions;
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"]
    }
  });
};

var makePostsFromMdx = function makePostsFromMdx(graphql, actions) {
  var createPage, response;
  return regeneratorRuntime.async(function makePostsFromMdx$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          createPage = actions.createPage;
          _context.next = 3;
          return regeneratorRuntime.awrap(graphql("\n    query Posts {\n      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {\n        pageInfo {\n          currentPage\n          hasNextPage\n          hasPreviousPage\n        }\n        edges {\n          node {\n            fileAbsolutePath\n            frontmatter {\n              path\n              title\n              date\n              featuredImg {\n                childImageSharp {\n                  fluid {\n                    sizes\n                    src\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  ")["catch"](function (error) {
            return console.error({
              ERR: error
            });
          }));

        case 3:
          response = _context.sent;

          if (response) {
            response.data.allMdx.edges.forEach(function (_ref2) {
              var node = _ref2.node;
              createPage({
                path: "/posts".concat(node.frontmatter.path),
                component: node.fileAbsolutePath,
                context: {
                  pagePath: node.frontmatter.path
                }
              });
            });
          }

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.createPages = function _callee(_ref3) {
  var graphql, actions;
  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          graphql = _ref3.graphql, actions = _ref3.actions;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Promise.all([makePostsFromMdx(graphql, actions) // paginate(graphql, actions),
          ]));

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
};