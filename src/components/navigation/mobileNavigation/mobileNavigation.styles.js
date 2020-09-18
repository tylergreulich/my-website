import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "components/navigation/navigation.styles"
import media from "components/theme"
import styled from "styled-components"

export const IconWrapper = styled.li`
  color: ${({ theme }) => theme.main.primary};
  display: block;
  font-size: 2rem;
  cursor: pointer;
  margin-left: 1.5rem;
`

export const CloseIconWrapper = styled(IconWrapper)`
  color: ${({ theme }) => theme.main.body};
  display: ${({ isMobileNavActive }) => (isMobileNavActive ? "block" : "none")};

  ul {
    display : none;

  }
`

export const HamburgerIconContainer = styled.ul`
  display: none;
  ${media().lg`
      display: block !important;
  `}
`

export const HamburgerIconWrapper = styled(IconWrapper)`
`

export const HamburgerIcon = styled(FontAwesomeIcon)`
  z-index: 1011;
  opacity: ${({ isMobileNavActive }) => (isMobileNavActive ? 0 : 1)};
`

export const CloseIcon = styled(HamburgerIcon)`
  z-index: 1000;
  position: absolute;
  color: ${({ theme }) => theme.main.body};
  transition: all 0.3s ease-in-out;
  top: 15px;
  right: 80px;
  opacity: ${({ isMobileNavActive }) => (isMobileNavActive ? 1 : 0)};

  &:hover {
    color: ${({ theme }) => theme.main.text};
  }
`

export const MobileNavLinkContainer = styled.ul`
  display: none;
  list-style: none;
  color: ${({ theme }) => theme.main.primary};

  ${media().lg`
    display: flex;
    align-items: center;
    margin-bottom: 0;
  `}

  li {
    .active {
      border: 2px solid ${({ theme }) => theme.main.text};
    }
  }
`

export const MobileNavLink = styled(NavLink)`
  font-size: 0.85rem;
  padding: 0.5rem 0.75rem;
  margin: 0 0 0 1.5rem;
  border: 2px solid ${({ theme }) => theme.main.primary};

  &:hover {
    color: ${({ theme }) => theme.main.text};
    border: 2px solid ${({ theme }) => theme.main.text};
  }

  ${media().md`
    padding: 0.3rem 0.55rem;
  `}
`
