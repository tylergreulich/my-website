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
