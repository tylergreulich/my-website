import { Navigation } from "components/navigation/navigation"
import { darkTheme, lightTheme } from "components/theme"
import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { Footer } from "./footer/footer"
import "./layout.css"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.main.lightGrey};
  }
`

const Layout = ({ children }) => {
  const stored = localStorage.getItem("isDarkMode")

  const [isDarkMode, setIsDarkMode] = React.useState(
    stored === "true" ? true : false
  )

  React.useEffect(() => {}, [isDarkMode])

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle theme={isDarkMode ? darkTheme : lightTheme} />
      <Navigation setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
