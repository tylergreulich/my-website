import React from "react"
import styled from "styled-components"

const StyledBlockQuote = styled.blockquote`
  margin: 2rem 0 !important;
`

const PageQuoteText = ({ children }) => {
  return <StyledBlockQuote>{children}</StyledBlockQuote>
}

export default PageQuoteText
