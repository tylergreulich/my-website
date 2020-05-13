import React from "react"
import {
  PortfolioAdCopy,
  PortfolioImage,
  PortfolioItemButton,
  PortfolioItemButtonWrapper,
  PortfolioItemWrapper,
  Tech,
  TechContainer,
  TechList,
} from "./portfolioItem.styles"

export const PortfolioItem = ({
  last = false,
  title,
  description,
  tech,
  githubUrl,
  liveUrl,
  imgUrl,
}) => {
  return (
    <PortfolioItemWrapper last={last}>
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          height: "50%",
        }}
      >
        <PortfolioImage imgUrl={imgUrl} />
      </a>
      <PortfolioAdCopy>
        <div id="projectInfo">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <TechContainer>
          <Tech>Tech</Tech>
          <TechList>{tech}</TechList>
        </TechContainer>
        <PortfolioItemButtonWrapper>
          <PortfolioItemButton href={liveUrl}>Live Site</PortfolioItemButton>
          <PortfolioItemButton
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: "1rem",
            }}
          >
            View Code
          </PortfolioItemButton>
        </PortfolioItemButtonWrapper>
      </PortfolioAdCopy>
    </PortfolioItemWrapper>
  )
}
