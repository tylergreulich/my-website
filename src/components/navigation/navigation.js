import { navigate, useLocation } from "@reach/router"
import { MyLogo } from "assets/svg/myLogo"
import React from "react"
import { animateScroll as scroll } from "react-scroll"
import { Header, LogoWrapper, NavLink, NavLinks } from "./navigation.styles"

export const Navigation = () => {
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
        <li>
          <NavLink to="portfolio" smooth={true} duration={750} offset={-75}>
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="skills" smooth={true} duration={750} offset={-75}>
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="blog" smooth={true} duration={750} offset={-75}>
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="contact" smooth={true} duration={750} offset={-75}>
            Contact
          </NavLink>
        </li>
      </NavLinks>
    </Header>
  )
}
