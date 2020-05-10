/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const createPaginatedPages = require("gatsby-paginate")

const path = require("path")
const componentWithMDXScope = require("gatsby-plugin-mdx/component-with-mdx-scope")
const { resolve } = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}

const makePostsFromMdx = async (graphql, actions) => {
  const { createPage } = actions

  const response = await graphql(`
    query Posts {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        pageInfo {
          currentPage
          hasNextPage
          hasPreviousPage
        }
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              path
              title
              date
              featuredImg {
                childImageSharp {
                  fluid {
                    sizes
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `).catch(error => console.error({ ERR: error }))

  if (response) {
    response.data.allMdx.edges.forEach(({ node }) => {
      createPage({
        path: `/posts${node.frontmatter.path}`,
        component: node.fileAbsolutePath,
        context: {
          pagePath: node.frontmatter.path,
        },
      })
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  await Promise.all([
    makePostsFromMdx(graphql, actions),
    // paginate(graphql, actions),
  ])
}
