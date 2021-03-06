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

  let isSmallerDevice = false

  const itemsPerPage = isSmallerDevice ? 4 : 3

  const indexOfLastItem = currentPage * itemsPerPage

  const indexOfFirstItem = indexOfLastItem - itemsPerPage

  const lastPage = Math.ceil(allMdx.edges.length / itemsPerPage)

  let currentItems = allMdx.edges.slice(indexOfFirstItem, indexOfLastItem)

  if (typeof window !== `undefined`) {
    isSmallerDevice = window.innerWidth <= 1312
  }

  return (
    <Element name="blog">
      <BlogText>Blog</BlogText>
      <BlogContainer>
        {currentItems?.map(({ node }, index) => {
          const { path, title, date, featuredImg } = node.frontmatter

          if (featuredImg && featuredImg.childImageSharp) {
            return (
              <Post key={index}>
                <Link to={`/posts${path}`} id={`image-${title}`} alt={`${title} blog image`}>
                  <Img
                    fluid={featuredImg.childImageSharp.fluid}
                    alt="Featured Blog Image"
                  />
                </Link>
                <div>
                  <Link to={`/posts${path}`} alt={`${title} blog title`}>
                    <h2>{title}</h2>
                  </Link>
                  <PostDate>{date}</PostDate>
                  <Link to={`/posts${path}`} alt={`${node.excerpt}`}>
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
        <span>{currentPage}</span>
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
                fluid {
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
