import React from "react"
import { Element } from "react-scroll"
import { PortfolioContainer, PortfolioText } from "./portfolio.styles"
import { PortfolioItem } from "./portfolioItem/portfolioItem"

export const Portfolio = () => {
  return (
    <Element name="portfolio">
      <PortfolioText>My Work</PortfolioText>
      <PortfolioContainer>
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem last={true} />
      </PortfolioContainer>
    </Element>
  )
}
