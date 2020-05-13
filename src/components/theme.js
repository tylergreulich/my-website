import { css } from "styled-components"

export const lightTheme = {
  main: {
    primary: "#7500ff",
    secondary: "#d50d68",
    text: "rgba(0, 0, 0, 0.84)",
    body: "#fff",
    lightGrey: "#fafafa",
    grey: "#f5f5f5",
    darkGrey: "#acacac",
    boxShadow: "0 9px 54px -4px rgba(224, 224, 224, 1)",
    greyAlt: "#eee",
    errorText: "#cc0000",
  },
}

export const darkTheme = {
  main: {
    body: "#363c48",
    text: "hsla(0,0%,100%,0.88)",
    primary: "#d6b3ff",
    secondary: "#ffa7c4",
    secondaryLight: "#fbc5d7",
    grey: "#2f2f2f",
    lightGrey: "#363c48",
    darkGrey: "#fafafa",
    greyAlt: "#3a3c3c",
    errorText: "#ff7790",
    inputBgColor: "rgb(232, 240, 254)",
    inputColor: "rgba(0, 0, 0, 0.84)",
  },
}

const sizes = {
  xl: 82,
  lg: 62,
  md: 43,
}

export default () =>
  Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${sizes[label]}em) {
        ${css(...args)};
      }
    `
    return acc
  }, {})
