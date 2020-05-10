import { Navigation } from "components/navigation/navigation"
import { theme } from "components/theme"
import React from "react"
import { ThemeProvider } from "styled-components"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </ThemeProvider>
  )
}

export default Layout
