import {
  faCss3,
  faDocker,
  faHtml5,
  faJsSquare,
  faLaravel,
  faNodeJs,
  faPhp,
  faReact,
} from "@fortawesome/free-brands-svg-icons"
import {
  GraphQLLogo,
  MySQLLogo,
  ReduxLogo,
  TypeScriptLogo,
} from "assets/svg/svgIcons"
import React from "react"
import { Element } from "react-scroll"
import {
  BackendContainer,
  BackendGrid,
  BackendText,
  FrontendContainer,
  FrontendGrid,
  FrontendText,
  SkillsContainer,
  SkillsText,
} from "./skills.styles"
import { SkillsIcon } from "./skillsIcon/skillsIcon"
import { LogoContainer } from "./skillsIcon/skillsIcon.styles"

export const Skills = () => {
  return (
    <Element name="skills">
      <SkillsText>Some of the Tools I've Used</SkillsText>
      <SkillsContainer>
        <FrontendContainer>
          <FrontendText>Frontend</FrontendText>
          <FrontendGrid>
            <SkillsIcon color="primary" icon={faHtml5} text="HTML5" />
            <SkillsIcon color="primary" icon={faCss3} text="CSS3" />
            <SkillsIcon color="primary" icon={faJsSquare} text="JavaScript" />
            <SkillsIcon color="primary" icon={faReact} text="React" />
            <LogoContainer color="primary">
              <ReduxLogo />
              <p>Redux</p>
            </LogoContainer>
            <LogoContainer color="primary">
              <TypeScriptLogo />
              <p>TypeScript</p>
            </LogoContainer>
          </FrontendGrid>
        </FrontendContainer>
        <BackendContainer>
          <BackendText>Backend</BackendText>
          <BackendGrid>
            <SkillsIcon color="secondary" icon={faNodeJs} text="Node.js" />
            <SkillsIcon color="secondary" icon={faPhp} text="PHP" />
            <SkillsIcon color="secondary" icon={faLaravel} text="Laravel" />
            <LogoContainer color="secondary">
              <MySQLLogo />
              <p>MySQL</p>
            </LogoContainer>
            <LogoContainer color="secondary">
              <GraphQLLogo />
              <p>GraphQL</p>
            </LogoContainer>
            <SkillsIcon color="secondary" icon={faDocker} text="Docker" />
          </BackendGrid>
        </BackendContainer>
      </SkillsContainer>
    </Element>
  )
}
