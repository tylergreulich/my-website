import React from "react"
import styled from "styled-components"

const Svg = styled.svg`
  height: 75%;

  rect {
    transition: all 0.25s ease-in-out;
    stroke: ${({ theme }) => theme.main.primary};
    fill: none;
    stroke-miterlimit: 10;
    stroke-width: 9px;
  }

  text {
    transition: all 0.25s ease-in-out;
    font-size: 70px;
    font-family: Lato;
    fill: ${({ theme }) => theme.main.primary};
  }
`

export const MyLogo = () => (
  <Svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 145.5 145.5"
    height="150"
  >
    <defs />
    <title>my-logo-small</title>
    <rect x="2" y="2" width="141.5" height="141.5" />
    <text transform="translate(73 97)">G</text>
    <text transform="translate(26 97)">T</text>
  </Svg>
)
