import React from "react"
import {
  PortfolioAdCopy,
  PortfolioImage,
  PortfolioItemButton,
  PortfolioItemButtonWrapper,
  PortfolioItemWrapper,
  Tech,
  TechList,
} from "./portfolioItem.styles"

export const PortfolioItem = ({ last = false }) => {
  return (
    <PortfolioItemWrapper last={last}>
      <PortfolioImage />
      <PortfolioAdCopy>
        <div>
          <h4>Kiyoshi's Teriyaki and Sushi</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sem
            purus, porttitor sit amet volutpat a, pharetra id purus. Nam lacinia
            dui ut sem scelerisque eleifend. Nunc neque dui, gravida quis quam
            a, iaculis suscipit mauris. Aliquam tempor odio magna, in commodo
            nunc tincidunt nec. Phasellus non lorem rutrum, eleifend sem vel,
            sollicitudin elit. In a purus elementum, euismod quam vel,
            sollicitudin ex.
          </p>
        </div>
        <div>
          <Tech>Tech</Tech>
          <TechList>React, TypeScript, Laravel, MySQL</TechList>
        </div>
        <PortfolioItemButtonWrapper>
          <PortfolioItemButton href="/">Live Site</PortfolioItemButton>
          <PortfolioItemButton
            href="https://github.com/url/kiyoshi-restaurant"
            target="_blank"
          >
            View Code
          </PortfolioItemButton>
        </PortfolioItemButtonWrapper>
      </PortfolioAdCopy>
    </PortfolioItemWrapper>
  )
}
