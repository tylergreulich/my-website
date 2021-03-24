import { Navigation } from "components/navigation/navigation"
import { darkTheme, lightTheme } from "components/theme"
import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { Footer } from "./footer/footer"
import "./layout.css"

const GlobalStyle = createGlobalStyle`
  body {
  transition: all 0.25s ease-in-out;
    background-color: ${({ theme }) => theme.main.lightGrey};
  }
`

const Layout = ({ children }) => {
  const [isMountedComponent, setIsMountedComponent] = React.useState(false)

  const stored =
    typeof window !== `undefined` ? localStorage.getItem("isDarkMode") : null

  const [isDarkMode, setIsDarkMode] = React.useState(
    stored === "true" ? true : false
  )

  React.useEffect(() => {
    setIsMountedComponent(true)
  }, [])

  React.useEffect(() => {}, [isDarkMode])

  if (!isMountedComponent) return <div />

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
