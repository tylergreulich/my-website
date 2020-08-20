import media from "components/theme"
import styled from "styled-components"

export const PortfolioItemWrapper = styled.div`
  margin-bottom: ${({ last }) => (last ? 0 : "3.5rem")};
  display: flex;
  background-color: ${({ theme }) => theme.main.grey};
  height: 600px;

  ${media().lg`
    height: auto;
    padding: 0;
  `}

  ${media().lg`
    flex-direction: column;
  `}
`

export const ImageWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 2rem;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.main.primary};

  h2 {
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.main.body};
    font-size: 2rem;
    text-transform: uppercase;
  }

  div {
    margin: 0.5rem 0;
    a {
      color: ${({ theme }) => theme.main.lightGrey};
    }
  }

  span {
    color: ${({ theme }) => theme.main.body};
  }

  ${media().lg`
    height: 50%;
    width: 100%;
  `}
`

export const PortfolioImage = styled.div`
  width: 100%;
  height: 100%;
`

export const PortfolioAdCopy = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 2rem;

  h2 {
    text-align: center;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.main.secondary};
  }

  ul {
    padding: 0 2.5rem;
    margin: 0;

    li {
      color: ${({ theme }) => theme.main.secondary};
      &:nth-of-type(2) {
        margin: 1rem 0;
      }


      span {
        color: ${({ theme }) => theme.main.text};
        font-size: 1rem;
      }
    }
  }

  ${media().lg`
    padding: 0;
    width: 100%;
    height: 50%;

    #projectInfo {
      padding: 2rem;
      grid-row-end: 3;
      grid-row-start: 1;

      ul {
        padding: 0 3.5rem;

        li {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  `}

  h4 {
    color: ${({ theme }) => theme.main.primary};
    text-transform: uppercase;
    font-size: 1.3vw;

    @media (max-width: 1400px) {
      font-size: 1.6vw;
    }

    @media (max-width: 1300px) {
      font-size: 1.8vw;
    }

    ${media().lg`
      font-size: 2.4vw;
    `}

    ${media().md`
      margin-bottom: 1rem;
      font-size: 2.7vw;
    `}
  }

  p {
    color: ${({ theme }) => theme.main.text};
    font-size: 0.85vw;

    @media (max-width: 1400px) {
      font-size: 1vw;
    }

    @media (max-width: 1300px) {
      font-size: 1.3vw;
    }

    ${media().lg`
      font-size: 1.75vw;
    `}

    ${media().md`
      font-size: 2vw;
    `}
  }
`

export const TechContainer = styled.div`
  ${media().lg`
    background-color: ${({ theme }) => theme.main.greyAlt};
    padding: 1.5rem;
  `}
`

export const Tech = styled.div`
  color: ${({ theme }) => theme.main.secondary};
  text-transform: uppercase;
  font-family: Lato;
  font-weight: 600;
  font-size: 1rem;

  ${media().lg`
    background-color: ${({ theme }) => theme.main.greyAlt};
    font-size: 2.35vw;
  `}
`

export const TechList = styled.span`
  color: ${({ theme }) => theme.main.text};

  ${media().lg`
    font-size: 1.75vw;
  `}

  ${media().md`
    font-size: 1.5vw;
  `}
`

export const PortfolioItemButton = styled.a`
  border-radius: 3rem;
  text-align: center;
  display: inline-block;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  margin-right: 1.5rem;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  font-family: Lato;
  padding: 0.4rem 0.8rem;
  letter-spacing: 0.1rem;
  font-size: 0.65rem;
  border: 0.25rem solid ${({ theme }) => theme.main.secondary};
  color: ${({ theme }) => theme.main.secondary};

  &:hover {
    color: ${({ theme }) => theme.main.body};
    background-color: ${({ theme }) => theme.main.secondary};
  }

  ${media().lg`
    background-color: ${({ theme }) => theme.main.greyAlt};
    font-size: 0.5rem;
  `}

  ${media().md`
    padding: 0.2rem 0.6rem;
    font-size: 0.4rem;
  `}
`

export const PortfolioItemButtonWrapper = styled.div`
  ${media().lg`
    padding: 1.5rem;
    background-color: ${({ theme }) => theme.main.greyAlt};
    grid-column-start: 2;
    grid-column-end: 3;
  `}
`
