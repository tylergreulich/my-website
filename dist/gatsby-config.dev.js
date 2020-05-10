"use strict";

module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter",
    description: "Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",
    author: "@gatsbyjs"
  },
  plugins: ["gatsby-plugin-react-helmet", {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "images",
      path: "".concat(__dirname, "/src/images")
    }
  }, "gatsby-transformer-sharp", "gatsby-plugin-sharp", {
    resolve: "gatsby-plugin-manifest",
    options: {
      name: "gatsby-starter-default",
      short_name: "starter",
      start_url: "/",
      background_color: "#663399",
      theme_color: "#663399",
      display: "minimal-ui",
      icon: "src/assets/svg/my-logo-large.png" // This path is relative to the root of the site.

    }
  }, {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "posts",
      path: "".concat(__dirname, "/src/posts")
    }
  }, {
    resolve: "gatsby-plugin-mdx",
    options: {
      decks: [],
      defaultLayouts: {
        // posts: require.resolve('./src/pages/index.tsx'),
        "default": require.resolve("".concat(__dirname, "/src/components/postLayout.js"))
      },
      extensions: [".mdx", ".md"],
      gatsbyRemarkPlugins: [{
        resolve: "gatsby-remark-prismjs",
        options: {
          classPrefix: "language-",
          inlineCodeMarker: {
            tsx: "tsx",
            ts: "ts",
            typescript: "typescript",
            golang: "go",
            powershell: "powershell",
            bash: "bash",
            js: "js"
          },
          aliases: {}
        }
      }]
    }
  }]
};