import * as React from "react"
import Head from "../components/Head";
import { Link } from "gatsby"

// markup
const NotFoundPage = () => {
  return (
    <main className="main d-flex align-items-center justify-content-center bg-light">
      <Head pageUrl="/404" pageTitle="Not Found"/>
      <div className="text-center">
        <h1>404</h1>
        <h3>Not Found</h3>
        <Link to="/" className="btn-link">Go home</Link>
      </div>
    </main>
  )
}

export default NotFoundPage
