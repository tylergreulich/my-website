import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { Element } from "react-scroll"
import {
  BlogContainer,
  BlogText,
  NextPage,
  PaginationComponent,
  Post,
  PostDate,
  PostExcerpt,
  PreviousPage,
} from "./blog.styles"

export const Blog = React.memo(({ pageInfo, ...props }) => {
  const [currentPage, setCurrentPage] = React.useState(1)

  const { allMdx } = useStaticQuery(LISTING_QUERY)

  const isSmallerDevice = window.innerWidth <= 1312

  const itemsPerPage = isSmallerDevice ? 4 : 3

  const indexOfLastItem = currentPage * itemsPerPage

  const indexOfFirstItem = indexOfLastItem - itemsPerPage

  const lastPage = Math.ceil(allMdx.edges.length / itemsPerPage)

  let currentItems = allMdx.edges.slice(indexOfFirstItem, indexOfLastItem)

  return (
    <Element name="blog">
      <BlogText>Blog</BlogText>
      <BlogContainer>
        {currentItems?.map(({ node }, index) => {
          const { path, title, date, featuredImg } = node.frontmatter

          if (featuredImg && featuredImg.childImageSharp) {
            return (
              <Post key={index}>
                <Link to={`/posts${path}`} id="image">
                  <Img
                    fluid={featuredImg.childImageSharp.fluid}
                    alt="Featured Blog Image"
                  />
                </Link>
                <div>
                  <Link to={`/posts${path}`}>
                    <h2>{title}</h2>
                  </Link>
                  <PostDate>{date}</PostDate>
                  <Link to={`/posts${path}`}>
                    <PostExcerpt>{node.excerpt}</PostExcerpt>
                  </Link>
                </div>
              </Post>
            )
          }
        })}
      </BlogContainer>
      <PaginationComponent>
        <PreviousPage
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1)
            }
          }}
          currentPage={currentPage}
          disabled={currentPage === 1}
        >
          Previous Page
        </PreviousPage>
        <li>{currentPage}</li>
        <NextPage
          onClick={() => {
            if (currentPage < lastPage) {
              setCurrentPage(currentPage + 1)
            }
          }}
          currentPage={currentPage}
          lastPage={lastPage}
          disabled={currentPage === lastPage}
        >
          Next Page
        </NextPage>
      </PaginationComponent>
    </Element>
  )
})

export const LISTING_QUERY = graphql`
  query {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
      totalCount
      pageInfo {
        currentPage
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          excerpt
          frontmatter {
            path
            title
            date(formatString: "MMMM DD, YYYY")
            featuredImg {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
