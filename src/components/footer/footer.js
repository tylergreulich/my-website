import React from "react"
import { FooterContainer } from "./footer.styles"

export const Footer = () => {
  return (
    <FooterContainer>
      © {new Date().getFullYear()}, Built with
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </FooterContainer>
  )
}
