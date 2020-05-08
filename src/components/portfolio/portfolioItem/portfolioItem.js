import React from "react"
import {
  PortfolioAdCopy,
  PortfolioImage,
  PortfolioItemButton,
  PortfolioItemWrapper,
  Tech,
} from "./portfolioItem.styles"

export const PortfolioItem = ({ last = false }) => {
  return (
    <PortfolioItemWrapper last={last}>
      <PortfolioImage />
      <PortfolioAdCopy>
        <div>
          <h4>Kiyoshi's Teriyaki and Sushi</h4>
          <p>
            When I noticed that one of the highest rated Japanese restaurants in
            Arizona didn't have a website, I reached out to them to begin
            solving that problem. Ultimately I created a clean, performant UI
            and a custom CMS for the employees to update the items on the menu,
            and Kiyoshi's received an increase in sales by 15%.
          </p>
        </div>
        <div>
          <Tech>Tech</Tech>
          <span>React, TypeScript, Laravel, MySQL</span>
        </div>
        <div>
          <PortfolioItemButton href="/">Live Site</PortfolioItemButton>
          <PortfolioItemButton href="https://github.com/tylergreulich/kiyoshi-restaurant">
            View Code
          </PortfolioItemButton>
        </div>
      </PortfolioAdCopy>
    </PortfolioItemWrapper>
  )
}
