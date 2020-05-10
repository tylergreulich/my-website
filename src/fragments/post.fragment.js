import { graphql } from "gatsby"

const postFragment = graphql`
  fragment postFragment on Mdx {
    frontmatter {
      path
      title
      date(formatString: "MMMM DD, YYYY")
      featuredImg {
        childImageSharp {
          fluid {
            sizes(maxWidth: 1920) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`

export default postFragment
