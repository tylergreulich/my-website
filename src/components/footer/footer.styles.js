import styled from "styled-components"

export const FooterContainer = styled.footer`
  width: 100%;
  height: 14vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.main.secondary};
  color: ${({ theme }) => theme.main.body};
  font-family: Lato;

  a {
    color: ${({ theme }) => theme.main.body};
    margin-left: 0.25rem;
  }
`
