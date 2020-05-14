import { portfolioItemsData } from "portfolioItemsData"
import React from "react"
import { Element } from "react-scroll"
import { PortfolioContainer, PortfolioText } from "./portfolio.styles"
import { PortfolioItem } from "./portfolioItem/portfolioItem"

export const Portfolio = () => {
  return (
    <Element name="portfolio">
      <PortfolioText>My Work</PortfolioText>

      <PortfolioContainer>
        {portfolioItemsData.map((item, index) => (
          <PortfolioItem key={index} {...item} />
          // <PortfolioItem last={true} />
        ))}
      </PortfolioContainer>
    </Element>
  )
}
