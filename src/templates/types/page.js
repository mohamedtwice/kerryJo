import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
// import FeaturedMedia from "../../components/FeaturedMedia"
import ThreeBoxes from "../../components/ThreeBoxes"
// import homebanner from "../assets/images//pn-homebannerbg.png";
import { GatsbySeo } from "gatsby-plugin-next-seo"
import HomeHero from "../../components/HomeHero"
import VolunteerForm from "../../components/VolunteerForm"
import { Link } from "gatsby"

export default ({ data }) => {
  const { page } = data
  const {
    isFrontPage,
    title,
    content,
    featuredImage,
    excerpt,
    databaseId,
  } = page
  // console.log(isFrontPage)
  // console.log(imgURL)
  if (isFrontPage == true) {
    return (
      <>
        <GatsbySeo title={title} description={excerpt} titleTemplate: `%s | KerryJo Felder for Minneapolis School Board` />
        <Layout bodyClass="page-template-default page page-id-home wp-embed-responsive singular missing-post-thumbnail has-no-pagination not-showing-comments footer-top-visible customize-support">
          <article
            className="post-home post page type-page status-publish hentry"
            id="post-home"
          >

            <HomeHero />
            <div className="post-inner thin pf">
              <div
                  className="entry-content"
                  dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
            <ThreeBoxes />
          </article>
        </Layout>
      </>
    )
  }

  return (
    <>
      <GatsbySeo title={title} description={excerpt} />
      <Layout
        bodyClass={`page-template-default page page-id-home page-id-${databaseId} wp-embed-responsive singular missing-post-thumbnail has-no-pagination not-showing-comments footer-top-visible customize-support`}
      >
        <article
          className={
            `post-${databaseId} post page type-page status-publish hentry ` +
            (featuredImage !== null ? "featuredImage" : "nofeatured")
          }
          id={`post-${databaseId}`}
        >
          <header className="has-text-align-center header-footer-group blog-post-header">
            <div
                className="entry-header-inner section-inner medium flexl"
                style={{ maxWidth: "1140px" }}
            >
              <h2
                  className="entry-title"
                  style={{ textAlign: "left", fontSize: "1.5em" }}
                  dangerouslySetInnerHTML={{ __html: title }}
              />
            </div>
          </header>

          <div className="post-inner thin pf">

          <div>
            <div
              className="entry-content"
              dangerouslySetInnerHTML={{ __html: content }}
            />
            
            </div>

          <div className="page-sidebar">
            {title === 'Get Involved' &&
            <>
              <VolunteerForm />
            </>
            }
            {title !== 'Get Involved' &&
              <div className="allside">
                <h4 className="signuph4">Get Involved</h4>
                <Link className="btn btn-lar donatebtn" to="/donate/">Donate</Link>
                <Link className="btn btn-lar volunteerbtn" to="/get-involved/">Volunteer</Link>
              </div>
            }
          </div>

          </div>



        </article>
      </Layout>
    </>
  )
}

// }

export const query = graphql`
  query page($id: String!, $nextPage: String, $previousPage: String) {
    page: wpPage(id: { eq: $id }) {
      ...PageContent
      isFrontPage
    }
    nextPage: wpPage(id: { eq: $nextPage }) {
      title
      uri
    }
    previousPage: wpPage(id: { eq: $previousPage }) {
      title
      uri
    }
  }
`
