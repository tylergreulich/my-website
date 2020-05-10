/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import { MDXProvider } from "@mdx-js/react"
import React from "react"

require("prismjs/themes/prism-tomorrow.css")
require("typeface-lato")
require("typeface-merriweather")

const components = {
  wrapper: ({ children }) => <>{children}</>,
}
export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
