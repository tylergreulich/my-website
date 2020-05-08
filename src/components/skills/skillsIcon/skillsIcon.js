import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { LogoContainer } from "./skillsIcon.styles"

export const SkillsIcon = ({ color, icon, text }) => {
  return (
    <>
      <LogoContainer color={color}>
        <FontAwesomeIcon icon={icon} />
        <p>{text}</p>
      </LogoContainer>
    </>
  )
}
