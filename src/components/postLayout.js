import Img from "gatsby-image"
import * as React from "react"
import Layout from "./layout"
import {
  BlogContainer,
  BlogContent,
  BlogDate,
  BlogImage,
  BlogTitle,
} from "./postLayout.styles"

const PostLayout = ({ data, ...props }) => {
  if (data) {
    console.log(data)
    const { title, date, featuredImg } = data.mdx.frontmatter
    const { location, children } = props
    return (
      <Layout location={location}>
        <BlogContainer>
          <BlogTitle>{title}</BlogTitle>
          <BlogDate>{date}</BlogDate>
          <BlogImage>
            <Img fluid={featuredImg.childImageSharp.fluid} />
          </BlogImage>
          <BlogContent>{children}</BlogContent>
        </BlogContainer>
      </Layout>
    )
  }

  return <div>No Post Data</div>
}

export default PostLayout
