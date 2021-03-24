import React from "react"
import {
  ImageWrapper,
  PortfolioAdCopy,



  PortfolioItemWrapper
} from "./portfolioItem.styles"

export const PortfolioItem = ({
  last = false,
  jobTitle,
  company,
  companyUrl,
  tech,
  liveUrl,
  responsibilities,
  date,
  imgUrl = null,
}) => {
  return console.log(jobTitle) || (
    <PortfolioItemWrapper last={last}>
      <ImageWrapper>
        <h2>{jobTitle}</h2>
        <div>
          <a href={companyUrl} target="_blank" rel="noreferrer" >
            @{company}
          </a>
        </div>
        <span>{date}</span>
      </ImageWrapper>
      <PortfolioAdCopy>
        <div id="projectInfo">
          <h2>Responsibilites</h2>
          <ul>
            {responsibilities.map(responsibility => (
              <React.Fragment key={responsibility}>
                <li>
                  <span>
                    {responsibility}
                  </span>
                </li>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </PortfolioAdCopy>
    </PortfolioItemWrapper>
  )
}
