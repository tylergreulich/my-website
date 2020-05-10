import StockImg from "assets/img/stock-img.jpg"
import styled from "styled-components"

export const PortfolioItemWrapper = styled.div`
  margin-bottom: ${({ last }) => (last ? 0 : "3.5rem")};
  display: flex;
  background-color: ${({ theme }) => theme.main.grey};
  height: 500px;
  /* box-shadow: 0 9px 54px -4px rgba(224, 224, 224, 1); */
`

export const PortfolioImage = styled.div`
  width: 50%;

  background: url(${StockImg}) no-repeat center center;
  background-size: cover;
`

export const PortfolioAdCopy = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 4%;

  h4 {
    color: ${({ theme }) => theme.main.primary};
    text-transform: uppercase;
  }

  p {
    color: ${({ theme }) => theme.main.text};
  }
`

export const Tech = styled.div`
  color: ${({ theme }) => theme.main.secondary};
  text-transform: uppercase;
  font-family: Lato;
  font-weight: 600;
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
  background-color: transparent;
  border: 0.25rem solid ${({ theme }) => theme.main.secondary};
  color: ${({ theme }) => theme.main.secondary};

  &:hover {
    color: ${({ theme }) => theme.main.body};
    background-color: ${({ theme }) => theme.main.secondary};
  }
`
