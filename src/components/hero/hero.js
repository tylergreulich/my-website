import React from "react"
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
            clean, elegant, maintainable code. Currently I'm looking to get
            hired at a company that'll constantly challenge me to get outside of
            my comfort zone and learn new technologies.
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
