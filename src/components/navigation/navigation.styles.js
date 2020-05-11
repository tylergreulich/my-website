import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import media from "components/theme"
import { Link } from "react-scroll"
import styled from "styled-components"

export const Header = styled.header`
  position: fixed;
  background-color: ${({ newBgColor, theme }) =>
    newBgColor ? theme.main.body : "transparent"};
  width: 100vw;
  height: 7vh;
  position: fixed;
  padding: 0 10%;
  display: flex;
  justify-content: space-between;
  font-family: Lato;
  max-width: 100%;
  opacity: ${({ newBgColor }) => (newBgColor ? "0.9" : 1)};
  z-index: 100;
`

export const LogoWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    svg {
      rect {
        stroke: ${({ theme }) => theme.main.text};
      }

      text {
        fill: ${({ theme }) => theme.main.text};
      }
    }
  }
`

export const ThemeToggleWrapper = styled.li`
  cursor: pointer;
  padding: 10px;

  ${media().lg`
    padding: 0;
    font-size: 1.25rem;
  `}
`

export const ThemeToggle = styled(FontAwesomeIcon)`
  cursor: pointer;
`

export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
  list-style: none;
  color: ${({ theme }) => theme.main.primary};

  li {
    .active {
      color: ${({ theme }) => theme.main.text};
    }
  }
`

export const MainNav = styled.div`
  display: flex;

  ${media().lg`
    display: none;
  `}
`

export const NavLink = styled(Link)`
  font-weight: 500;
  margin: 0 0 0 1rem;
  padding: 1rem 0.75rem;
  cursor: pointer;
  transition: all 0.25s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.main.text};
  }
`
