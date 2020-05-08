import Hero from "components/hero/hero"
import Layout from "components/layout"
import { Portfolio } from "components/portfolio/portfolio"
import SEO from "components/seo"
import { Skills } from "components/skills/skills"
import { theme } from "components/theme"
import React from "react"
import { ThemeProvider } from "styled-components"

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Portfolio />
      <Skills />
    </Layout>
  </ThemeProvider>
)

export default IndexPage
