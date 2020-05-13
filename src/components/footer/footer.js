import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { AltContact, FooterContainer, GithubWrapper } from "./footer.styles"

export const Footer = () => {
  return (
    <>
      <AltContact>
        Or you can shoot me a message at{" "}
        <a href="mailto:tyler@tylergreulich.com">tyler@tylergreulich.com</a>
      </AltContact>
      <FooterContainer>
        <GithubWrapper>
          <a
            href="https://github.com/tylergreulich"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </GithubWrapper>
        <span>
          © {new Date().getFullYear()}, Built with
          <a href="https://www.gatsbyjs.org" rel="noopener noreferrer">
            Gatsby
          </a>
        </span>
      </FooterContainer>
    </>
  )
}
