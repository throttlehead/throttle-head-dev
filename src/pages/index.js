import * as React from "react"
import Head from "../components/Head";

const IndexPage = () => {
  return (
    <main className="main d-flex align-items-center justify-content-center bg-light">
      <Head pageUrl="/" pageTitle="Home"/>
      <div className="text-center">
        <h1>ThrottleHead</h1>
        <h3>Coming soon</h3>
      </div>
    </main>
  )
}

export default IndexPage
