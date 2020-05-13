import React from "react"
import {
  ImageWrapper,
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
      <ImageWrapper href={liveUrl} target="_blank" rel="noopener noreferrer">
        <PortfolioImage imgUrl={imgUrl} />
      </ImageWrapper>
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
