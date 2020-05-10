import styled from "styled-components"

export const BlogImage = styled.div`
  .gatsby-image-wrapper {
    > div {
      padding: 0 !important;
    }

    > picture {
      img {
        position: static !important;
        height: 72.5vh !important;

        @media (max-width: 940px) {
          height: 60vh !important;
        }

        @media (max-width: 720px) {
          height: 50vh !important;
        }

        @media (max-width: 600px) {
          height: 40vh !important;
        }

        @media (max-width: 480px) {
          height: 30vh !important;
        }
      }
    }
  }
`

export const BlogContainer = styled.div`
  padding: 7rem 0 0;
  width: 55%;
  margin: 0 auto;

  @media (max-width: 940px) {
    padding: 3rem 0;
  }
`

export const BlogTitle = styled.h1`
  font-family: Lato;
  font-weight: bold;
  margin: 0;
  text-align: center;

  @media (max-width: 940px) {
    font-size: 2.5rem;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`

export const BlogDate = styled.p`
  font-weight: normal;
  font-size: 1rem;
  color: #999;
  text-align: center;
  font-size: 1rem;
  margin-bottom: 3.6rem;

  @media (max-width: 940px) {
    font-size: 0.9rem;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`

export const BlogContent = styled.div`
  font-family: Merriweather;
  line-height: 1.5;

  blockquote {
    margin: 3.6rem 0 !important;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.main.primary};
  }

  h1 {
    line-height: 1.5;
    font-style: italic;
    font-weight: lighter;
    font-size: 1.5rem;
    font-family: Lato !important;

    @media (max-width: 720px) {
      font-size: 1.25rem;
    }

    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }

  h2 {
    font-size: 2vw;
    margin: 3.6rem 0;
    font-family: Lato !important;

    @media (max-width: 720px) {
      font-size: 3vw;
    }

    @media (max-width: 600px) {
      font-size: 3.5vw;
    }
  }

  p {
    font-size: 1.35vw;
    line-height: 1.5;
    margin-bottom: 3.6rem;

    @media (max-width: 800px) {
      font-size: 2.25vw;
    }

    @media (max-width: 720px) {
      font-size: 2.5vw;
    }

    @media (max-width: 600px) {
      font-size: 3.5vw;
    }
  }

  div > .gatsby-highlight {
    margin-bottom: 2rem;

    pre {
      font-size: 1rem;
    }
  }
`
