import React from "react"
import {
  BlogButton,
  ButtonWrapper,
  ContentArea,
  PortfolioButton,
  Profile,
  ProfileSection
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
          <h2>Web Developer</h2>
          <p>
            My name is Tyler Greulich and I'm a Full-Stack Developer that
            creates websites with a focus on UI / UX while writing clean,
            elegant, maintainable code. I prefer using React and Node but will
            quickly learn whatever technology the project requires.
          </p>
          <ButtonWrapper>
            <PortfolioButton
              to="my-work"
              offset={-75}
              smooth={true}
              duration={500}
            >
              My Work
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
