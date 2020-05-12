import media from "components/theme"
import { Link } from "react-scroll"
import styled from "styled-components"

export const ContentArea = styled.section`
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    margin: 0 auto;
    width: 100%;
  }

  background-color: ${({ theme }) => theme.main.lightGrey};
`

export const ProfileSection = styled.div`
  max-width: 35rem;
`

export const Profile = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 3.8rem;
    font-weight: 500;
    line-height: 1.2;
    font-family: Lato;
    margin: 0 0 1rem;
    color: ${({ theme }) => theme.main.text};

    span {
      color: ${({ theme }) => theme.main.primary};
      font-family: Lato;
    }
  }

  h5 {
    font-size: 2rem;
    font-family: Lato;
    margin: 0 0 3rem;
    color: ${({ theme }) => theme.main.text};
  }

  p {
    color: ${({ theme }) => theme.main.text};
    font-size: 0.9rem;
    line-height: 1.5;
    font-weight: 400;
    margin: 0 0 3rem;
    font-family: Merriweather;

    @media (max-width: 760px) {
      font-size: 1rem;
    }

    a {
      color: ${({ theme }) => theme.main.primary};
    }
  }
`

export const ButtonWrapper = styled.div`
  @media (max-width: 760px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const PortfolioButton = styled(Link)`
  background-color: ${({ theme }) => theme.main.primary};
  border-radius: 3rem;
  text-align: center;
  color: ${({ theme }) => theme.main.body};
  padding: 0.8rem 1.6rem;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  margin-right: 1.5rem;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  font-family: Lato;

  &:hover {
    background-color: ${({ theme }) => theme.main.text};
  }
`

export const BlogButton = styled(PortfolioButton)`
  border: 0.3rem solid ${({ theme }) => theme.main.primary};
  background-color: ${({ theme }) => theme.main.body};
  color: ${({ theme }) => theme.main.primary};
  padding: 0.5rem 1.44rem;

  &:hover {
    color: ${({ theme }) => theme.main.text};
    border-color: ${({ theme }) => theme.main.text};
    background-color: ${({ theme }) => theme.main.body};
  }
`

export const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-top: 44%; */
  cursor: pointer;
  transform: translateY(15vh);

  ${media().xl`
    transform: translateY(10vh);
  
  `}

  .arrow {
    box-sizing: border-box;
    height: 1.75rem;
    width: 1.75rem;
    border-style: solid;
    border-color: ${({ theme }) => theme.main.secondary};
    border-width: 0px 5px 5px 0px;
    transform: rotate(45deg);
    transition: border-width 150ms ease-in-out;

    ${media().xl`
      height: 2rem;
      width: 2rem;
    `}

    ${media().md`
      height: 2.3rem;
      width: 2.3rem;
    `}
  }

  .arrow:hover {
    border-bottom-width: 3px;
    border-right-width: 3px;
  }
`
