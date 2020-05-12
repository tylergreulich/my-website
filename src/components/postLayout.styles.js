import media from "components/theme"
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
  width: 100%;
  max-width: 800px;
  padding: 20px 40px 40px;
  margin: 0 auto;

  h1 {
    font-size: 2.7vw;
    color: ${({ theme }) => theme.main.primary};
  }

  @media (max-width: 940px) {
    padding: 3rem 0;
  }

  @media (max-width: 850px) {
    padding: 3rem 3.25rem;
  }
`

export const BlogTitle = styled.h1`
  margin: 5rem 0 0 0;
  font-family: Lato;
  font-weight: bold;
  text-align: center;
`

export const BlogDate = styled.p`
  font-weight: normal;
  font-size: 1rem;
  color: ${({ theme }) => theme.main.text};
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
  color: ${({ theme }) => theme.main.text};

  strong {
    font-weight: 800;
  }

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
    color: ${({ theme }) => theme.main.primary};

    @media (max-width: 720px) {
      font-size: 1.25rem;
    }

    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }

  h2 {
    margin: 3.6rem 0;
    font-family: Lato !important;
    color: ${({ theme }) => theme.main.primary};

    @media (max-width: 720px) {
      font-size: 3.5vw;
    }

    @media (max-width: 600px) {
      font-size: 3.75vw;
    }
  }

  p {
    line-height: 1.5;
    margin: 3.6rem 0;
    font-size: 1vw;
    font-family: Lato;

    @media (max-width: 1500px) {
      font-size: 1.5vw;
    }

    ${media().lg`
      font-size: 2vw;
    `}

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
