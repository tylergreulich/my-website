/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import { MDXProvider } from "@mdx-js/react"
import "prismjs/themes/prism-tomorrow.css"
import React from "react"
import "typeface-lato"
import "typeface-merriweather"

const components = {
  wrapper: ({ children }) => <>{children}</>,
}
export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
