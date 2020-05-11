import styled from "styled-components"

export const LogoContainer = styled.div`
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  svg {
    font-size: 6rem;
    color: ${({ theme, color }) =>
      color === "primary" ? theme.main.primary : theme.main.secondary};
    margin-bottom: 1rem;
    height: 50%;
  }

  p {
    font-size: 1.5rem;
    font-family: Lato;
    margin: 0;
    color: ${({ theme }) => theme.main.text};
  }
`
