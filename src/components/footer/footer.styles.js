import media from "components/theme"
import styled from "styled-components"

export const AltContact = styled.p`
  margin: 2.5rem 0;
  text-align: center;
  font-size: 1.15rem;
  color: ${({ theme }) => theme.main.text};

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.main.primary};
    cursor: pointer;
  }
`

export const GithubWrapper = styled.span`
  a {
    font-size: 2rem;

    ${media().md`
      font-size: 2.5rem;
    `}

    svg {
      color: ${({ theme }) => theme.main.body};
      transition: all 0.3s ease-in-out;
    }

    &:hover .fa-github {
      color: ${({ theme }) => theme.main.text};
    }
  }
`

export const FooterContainer = styled.footer`
  width: 100%;
  height: 14vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.main.secondary};
  color: ${({ theme }) => theme.main.body};
  font-family: Lato;

  a {
    color: ${({ theme }) => theme.main.body};
    margin-left: 0.25rem;
  }
`
