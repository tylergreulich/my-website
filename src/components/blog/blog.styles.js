import styled from "styled-components"

export const BlogContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 10%;
  grid-template-rows: repeat(1, 600px);
  gap: 5rem;
`

export const BlogText = styled.h3`
  text-align: center;
  margin: 5rem 0;
  font-size: 2.5rem;
  font-family: Lato;
`

export const Post = styled.article`
  /* box-shadow: ${({ theme }) => theme.main.boxShadow}; */
  margin-bottom: 2rem 0;
  height: 100%;
  background-color: ${({ theme }) => theme.main.grey};

  div {
    padding: 7%;
  }

  .gatsby-image-wrapper {
    margin-bottom: 0.5rem;
  }

  @media (max-width: 600px) {
    text-align: center;
  }

  #image {
    height: 50%;
  }

  a {
    color: black;
    display: block;
    text-decoration: none;

    div {
      height: 100%;
    }
  }

  h2 {
    font-size: 1.5vw;
    margin-bottom: 0.2rem;
    color: ${props => props.theme.main.text};
    transition: color 0.2s ease-in-out;
    font-family: Lato;

    &:hover {
      color: ${props => props.theme.main.primary};
    }

    @media (max-width: 960px) {
      font-size: 2.2vw;
    }

    @media (max-width: 600px) {
      font-size: 2.3vw;
    }
  }

  p {
    color: ${props => props.theme.main.text};
    line-height: 1.2;
    font-family: Merriweather;
  }
`

export const PostDate = styled.p`
  font-size: 0.7rem;
  margin: 0.5rem 0 2rem;

  @media (max-width: 960px) {
    font-size: 0.8rem;
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`

export const PostExcerpt = styled.p`
  font-size: 1rem;
  line-height: 1.2;
`

export const PaginationComponent = styled.div`
  display: flex;
  justify-content: center;
  font-family: Lato;
  margin: 2.5rem 0;
  li {
    margin: 0 2rem;
    display: inline-flex;
    align-items: center;
  }
`

export const PreviousPage = styled.button`
  text-align: center;
  display: inline-block;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.25s ease-in-out;
  font-family: Lato;
  padding: 0.4rem 0.8rem;
  letter-spacing: 0.1rem;
  font-size: 0.65rem;
  background-color: transparent;
  border: 0.25rem solid
    ${({ theme, currentPage }) =>
      currentPage === 1 ? theme.main.darkGrey : theme.main.primary};

  &:hover {
    color: ${({ theme, currentPage }) =>
      currentPage === 1 ? theme.main.darkGrey : theme.main.body};
    background-color: ${({ theme, currentPage }) =>
      currentPage === 1 ? "none" : theme.main.primary};
  }

  color: ${({ theme, currentPage }) =>
    currentPage === 1 ? theme.main.darkGrey : theme.main.primary};

  &:disabled {
    cursor: not-allowed;
    pointer-events: all !important;
  }
`

export const NextPage = styled(PreviousPage)`
  text-align: center;
  display: inline-block;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.25s ease-in-out;
  font-family: Lato;
  padding: 0.4rem 0.8rem;
  letter-spacing: 0.1rem;
  font-size: 0.65rem;
  background-color: transparent;
  border: 0.25rem solid
    ${({ theme, currentPage, lastPage }) =>
      currentPage === lastPage ? theme.main.darkGrey : theme.main.secondary};

  &:hover {
    color: ${({ theme, currentPage, lastPage }) =>
      currentPage === lastPage ? theme.main.darkGrey : theme.main.body};
    background-color: ${({ theme, currentPage, lastPage }) =>
      currentPage === lastPage
        ? "transparent"
        : theme.main.secondary} !important;
  }

  color: ${({ theme, currentPage, lastPage }) =>
    currentPage === lastPage ? theme.main.darkGrey : theme.main.secondary};

  &:disabled {
    cursor: not-allowed;
    pointer-events: all !important;
  }
`
