import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { navigate, useLocation } from "@reach/router"
import { MyLogo } from "assets/svg/myLogo"
import { Link } from "gatsby"
import React from "react"
import { animateScroll as scroll } from "react-scroll"
import { MobileNavigation } from "./mobileNavigation/mobileNavigation"
import {
  Header,
  LogoWrapper,
  MainNav,
  NavLink,
  NavLinks,
  ThemeToggle,
  ThemeToggleWrapper,
} from "./navigation.styles"

export const Navigation = ({ setIsDarkMode, isDarkMode }) => {
  const location = useLocation()

  const isBlogPost = location.pathname.includes("post")

  const handleClick = () => {
    if (isBlogPost) {
      navigate("/")
    }
    scroll.scrollToTop()
  }

  const [newBgColor, setNewBgColor] = React.useState(false)

  const handleScroll = () => {
    if (window.pageYOffset >= 978) {
      setNewBgColor(true)
    } else {
      setNewBgColor(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Header newBgColor={newBgColor}>
      <LogoWrapper onClick={() => handleClick()}>
        <MyLogo />
      </LogoWrapper>
      <NavLinks>
        {!isDarkMode ? (
          <ThemeToggleWrapper
            onClick={() => {
              setIsDarkMode(!isDarkMode)
              localStorage.setItem("isDarkMode", !isDarkMode)
            }}
          >
            <ThemeToggle icon={faSun} />
          </ThemeToggleWrapper>
        ) : (
          <ThemeToggleWrapper
            onClick={() => {
              setIsDarkMode(!isDarkMode)
              localStorage.setItem("isDarkMode", !isDarkMode)
            }}
          >
            <ThemeToggle icon={faMoon} />
          </ThemeToggleWrapper>
        )}
        {isBlogPost ? (
          <li>
            <Link to="/">Home</Link>
          </li>
        ) : (
          <>
            <MobileNavigation />
            <MainNav>
              <li>
                <NavLink
                  to="portfolio"
                  smooth={true}
                  duration={750}
                  offset={-75}
                  spy={true}
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="skills"
                  smooth={true}
                  duration={750}
                  offset={-75}
                  spy={true}
                >
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="blog"
                  smooth={true}
                  duration={750}
                  offset={-75}
                  spy={true}
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="contact"
                  smooth={true}
                  duration={750}
                  offset={-75}
                  spy={true}
                >
                  Contact
                </NavLink>
              </li>
            </MainNav>
          </>
        )}
      </NavLinks>
    </Header>
  )
}
