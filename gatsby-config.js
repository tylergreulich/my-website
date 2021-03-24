module.exports = {
  siteMetadata: {
    title: `Tyler Greulich | Software Engineer`,
    description: `I am a Fullstack Web Developer with a focus on delivering beautiful UIs with good UX. I mainly do development with React but am open to learning and using other technologies that would be more efficient to use to get the job done.`,
    author: `Tyler Greulich`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/svg/my-logo-large.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        decks: [],
        defaultLayouts: {
          // posts: require.resolve('./src/pages/index.tsx'),
          default: require.resolve(`${__dirname}/src/components/postLayout.js`),
        },
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: {
                tsx: "tsx",
                ts: "ts",
                typescript: "typescript",
                golang: "go",
                powershell: "powershell",
                bash: "bash",
                js: "js",
              },
              aliases: {},
            },
          },
        ],
      },
    },
  ],
}
