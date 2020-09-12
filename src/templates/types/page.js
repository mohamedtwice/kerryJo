import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import FeaturedMedia from "../../components/FeaturedMedia"
import Slider from "../../components/Slider"
import Stories from "../../components/Stories"
import ThreeBoxes from "../../components/ThreeBoxes"
import Challenge from "../../components/Challenge"
import PageHeader from "../../components/PageHeader"
// import homebanner from "../assets/images//pn-homebannerbg.png";
import { GatsbySeo } from "gatsby-plugin-next-seo"

export default ({ data }) => {
  const { page } = data
  const {
    isFrontPage,
    title,
    content,
    featuredImage,
    excerpt,
    databaseId,
    pageHeaderImages,
  } = page
  // console.log(isFrontPage)
  // console.log(imgURL)
  if (isFrontPage == true) {
    return (
      <>
        <GatsbySeo title={title} description={excerpt} />
        <Layout bodyClass="page-template-default page page-id-home wp-embed-responsive singular missing-post-thumbnail has-no-pagination not-showing-comments footer-top-visible customize-support">
          <article
            className="post-home post page type-page status-publish hentry"
            id="post-home"
          >
            {/* <Slider />
                <ThreeBoxes/>
                <Challenge/>*/}
            <div className="banner">
              <span
                className="background"
                style={{
                  color: "#FFF",
                }}
              ></span>
              <div className="container e40">
                {/* <h1>South Dallas Smiles</h1> */}
              </div>
            </div>
            {/* <Stories /> */}
            <div className="container e40">
              <ThreeBoxes />
            </div>
          </article>
        </Layout>
      </>
    )
  }

  return (
    <>
      <GatsbySeo title={title} description={excerpt} />
      <Layout
        bodyClass={`page-template-default page page-id-${databaseId} wp-embed-responsive singular missing-post-thumbnail has-no-pagination not-showing-comments footer-top-visible customize-support`}
      >
        {/*<Seo title={title} description={excerpt} />*/}

        <article
          className={
            `post-${databaseId} post page type-page status-publish hentry ` +
            (featuredImage !== null ? "featuredImage" : "nofeatured")
          }
          id={`post-${databaseId}`}
        >
          {/* {pageHeaderImages.pageheader_option !== "color" && (
            <PageHeader pageHeaderImages={pageHeaderImages} />
          )}
          {pageHeaderImages.pageheader_option !== "photos" && (
            <PageHeader pageHeaderImages={pageHeaderImages} />
          )} */}
          <header
            className={
              `entry-header has-text-align-center header-footer-group ` +
              (pageHeaderImages.primaryImage !== null
                ? "negmargin"
                : "nomargin")
            }
          >
            <div className="header-inner section-inner" style={{}}>
              <h1
                className={
                  `entry-title ` +
                  (pageHeaderImages.textColor !== null ? "textColor" : "")
                }
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </div>
          </header>

          {/*<header className="entry-header has-text-align-center header-footer-group" style={{ padding: "4erm 0",background: "#E5A342", display: "flex", flexDirection: "row", alignContent: "flex-start" }}>*/}
          {/*    <div className="entry-header-inner section-inner e40">*/}
          {/*        <h1 style={{ color: "#fff", display:"flex", justifyContent: "flex-start"}} dangerouslySetInnerHTML={{ __html: title }}*/}
          {/*            />*/}
          {/*    </div>*/}
          {/*</header>*/}

          <div className="post-inner thin pf">
            <div
              className="entry-content e40"
              dangerouslySetInnerHTML={{ __html: content }}
            />
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
