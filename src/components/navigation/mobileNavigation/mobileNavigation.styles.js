import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "components/navigation/navigation.styles"
import media from "components/theme"
import styled from "styled-components"

export const IconWrapper = styled.li`
  color: ${({ theme }) => theme.main.primary};
  display: none;
  font-size: 2rem;
  cursor: pointer;
  margin-left: 1.5rem;

  ${media().lg`
    display: block;
  `}
`

export const HamburgerIcon = styled(FontAwesomeIcon)`
  z-index: 1011;
`

export const CloseIcon = styled(HamburgerIcon)`
  z-index: 1000;
  position: absolute;
  color: ${({ theme }) => theme.main.body};
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.main.text};
  }
`

export const MobileNavLinkContainer = styled.div`
  display: none;

  ${media().lg`
    display: flex;
  `}
`

export const MobileNavLink = styled(NavLink)`
  font-size: 1rem;
  padding: 0.5rem 0.75rem;
  margin: 0 0 0 2rem;
  border: 2px solid ${({ theme }) => theme.main.primary};
`
