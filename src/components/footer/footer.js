import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useLocation } from "@reach/router"
import React from "react"
import { AltContact, FooterContainer, GithubWrapper } from "./footer.styles"

export const Footer = () => {

  const location = useLocation()

  const isBlogPost = location.pathname.includes('posts')

  return (
    <>
      {isBlogPost ? null : (
        <AltContact>
          Or you can shoot me a message at{" "}
          <a href="mailto:tyler@tylergreulich.com">tyler@tylergreulich.com</a>
        </AltContact>
      )}
      <FooterContainer>
        <GithubWrapper>
          <a
            href="https://github.com/tylergreulich"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="A link to my Github"
          >
            <FontAwesomeIcon icon={faGithub} alt="Github icon" />
          </a>
        </GithubWrapper>
        <span>
          © {new Date().getFullYear()}, Built with
          <a href="https://www.gatsbyjs.org" rel="noopener noreferrer" aria-label="A link to Gatsby.js">
            Gatsby
          </a>
        </span>
      </FooterContainer>
    </>
  )
}
