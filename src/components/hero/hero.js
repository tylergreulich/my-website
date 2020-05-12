import React from "react"
import { Link as ScrollLink } from "react-scroll"
import {
  BlogButton,
  ButtonWrapper,
  ContentArea,
  PortfolioButton,
  Profile,
  ProfileSection,
} from "./hero.styles"

const Hero = () => {
  return (
    <ContentArea>
      <ProfileSection>
        <Profile>
          <h1>
            Tyler
            <br /> <span>Greulich</span>
          </h1>
          <h5>Web Developer</h5>
          <p>
            My name is Tyler Greulich and I'm a Full-Stack Web Developer that
            enjoys creating applications with a focus on UI / UX while writing
            robust, elegant code. I'm also language agnostic and can pick up and
            learn anything you throw at me. Contact me
            <ScrollLink to="/contact"> here.</ScrollLink>
          </p>
          <ButtonWrapper>
            <PortfolioButton
              to="portfolio"
              offset={-75}
              smooth={true}
              duration={500}
            >
              Portfolio
            </PortfolioButton>
            <BlogButton to="blog" offset={-75} smooth={true} duration={500}>
              Blog
            </BlogButton>
          </ButtonWrapper>
        </Profile>
      </ProfileSection>
    </ContentArea>
  )
}

export default Hero
