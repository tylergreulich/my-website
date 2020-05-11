import styled from "styled-components"

export const PortfolioText = styled.h3`
  text-align: center;
  margin: 5rem 0;
  font-size: 2.5rem;
  background-color: ${({ theme }) => theme.main.lightGrey};
  color: ${({ theme }) => theme.main.text};
`

export const PortfolioContainer = styled.section`
  padding: 0 10%;
  background-color: ${({ theme }) => theme.main.lightGrey};
`
