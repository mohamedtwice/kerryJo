import React from "react"
import Layout from "../components/Layout"
import {GatsbySeo} from "gatsby-plugin-next-seo";
import { Link } from "gatsby"

export default () => (
    <>
        <GatsbySeo
            title="Page Not Found"
            titleTemplate={`%s | KerryJo Felder 4 Minneapolis School Board: District 2`}
        />
        <Layout bodyClass="page-template-default page page-id-home wp-embed-responsive singular missing-post-thumbnail has-no-pagination not-showing-comments footer-top-visible customize-support">
            <article
                className="post-home post page type-page status-publish hentry"
                id="post-home"
            >

                <div className="post-inner thin pf">
                    <h1>Oops, that's a 404</h1>
                    <h5><Link to="/">Click here to go back to the homepage</Link></h5>
                </div>
            </article>
        </Layout>
        </>
)
