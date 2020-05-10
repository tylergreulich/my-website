import React from "react"
import styled from "styled-components"

const StyledBlockQuote = styled.blockquote`
  margin: 2rem 0 !important;
`

const Quote = styled.p`
  border-left: 0.45rem solid ${props => props.theme.main.primary};
  padding-left: 1rem;
`

const PageQuoteText = ({ children }) => {
  return (
    <StyledBlockQuote>
      <Quote>
        <em>{children}</em>
      </Quote>
    </StyledBlockQuote>
  )
}

export default PageQuoteText
