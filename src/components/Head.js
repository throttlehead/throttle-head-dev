import * as React from "react"
import {Helmet} from "react-helmet";

/* globals APP_URL */

// Scss
import "../scss/index.scss"

// Markup
const Head = (props) => {
  return (
    <>
      <Helmet>
          <meta charSet="utf-8" />
          <title>ThrottleHead - {props.pageTitle}</title>
          <link rel="canonical" href={APP_URL + props.pageUrl} />
      </Helmet>
    </>
  )
}

export default Head
