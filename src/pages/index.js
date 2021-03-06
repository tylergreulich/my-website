import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import Hero from "components/hero/hero"
import Layout from "components/layout"
import { Portfolio } from "components/portfolio/portfolio"
import SEO from "components/seo"
import { Skills } from "components/skills/skills"
import React from "react"
import { Blog } from "../components/blog/blog"
import { Contact } from "../components/contact/contact"

config.autoAddCss = false

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Portfolio />
      <Skills />
      <Blog />
      <Contact />
    </Layout>
  )
}

export default IndexPage
