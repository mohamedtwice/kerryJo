import React from "react"
import Layout from "../components/Layout"
import {GatsbySeo} from "gatsby-plugin-next-seo";

export default () => (
    <>
        <GatsbySeo
            title="Page Not Found"
            titleTemplate={`%s | KerryJo Felder for Minneapolis School Board`}
        />
  <Layout>
    <div>
      <h1>Oops, that's a 404</h1>
    </div>
  </Layout>
        </>
)
