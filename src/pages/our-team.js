import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import FeaturedMedia from "../components/FeaturedMedia"
import Slider from "../components/Slider"
import Stories from "../components/Stories"
import ThreeBoxes from "../components/ThreeBoxes"
import Challenge from "../components/Challenge"
import { GatsbySeo } from "gatsby-plugin-next-seo"
// import homebanner from "../assets/images//pn-homebannerbg.png";

const Team = ({ data }) => {
  // const team = data.allWpStaff.edges;
  // console.log(data);

  return (
    <>
      <GatsbySeo
        title="Our Team"
        description="Meet the team at the South Dallas Smiles Dental Clinic"
      />
      <Layout>
        {/*<Seo title='Our Team' description="Meet the team at the Saint Paul Promise Neighborhood" />*/}
        <article
          className={`post-team post page type-page status-publish hentry`}
          id={`post-team-id`}
          style={{ padding: "0" }}
        >
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
                dangerouslySetInnerHTML={{ __html: "Our Team" }}
              />
            </div>
          </header>

          <div
            className="post-inner thin"
            style={{ maxWidth: "1040px", margin: "0 auto" }}
          >
            {data.allWpStaff.nodes.map((teamMember) => {
              if (teamMember.featuredImage === null) {
                const image =
                  "https://dummyimage.com/600x600/2d98b6/ffffff&text=Promise+Neighborhood"
                return (
                  <div key={teamMember.title} className="container">
                    <div
                      className="row teamMember"
                      style={{ marginBottom: "2rem", marginTop: "2rem" }}
                    >
                      <div className="col-md-4">
                        <img style={{ marginBottom: "2rem" }} src={image} />
                      </div>

                      <div className="col-md-8">
                        <h4 style={{ marginTop: "0", marginBottom: "0" }}>
                          {teamMember.title}
                        </h4>
                        <p style={{ fontSize: "2.25rem" }}>
                          {teamMember.staffInfo.position}
                        </p>
                        {teamMember.staffInfo.phone && (
                          <p
                            style={{
                              fontSize: "1.95rem",
                              lineHeight: "2.5rem",
                              marginBottom: "0",
                            }}
                          >
                            {teamMember.staffInfo.phone}
                          </p>
                        )}
                        {teamMember.staffInfo.email && (
                          <p
                            style={{
                              fontSize: "1.95rem",
                              lineHeight: "2.5rem",
                            }}
                          >
                            {teamMember.staffInfo.email}
                          </p>
                        )}
                        {teamMember.staffInfo.quote && (
                          <div
                            style={{ fontSize: "1.75rem" }}
                            dangerouslySetInnerHTML={{
                              __html: teamMember.staffInfo.quote,
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                )
              } else {
                const image = teamMember.featuredImage.localFile.publicURL

                // const image = "https://sppn.netlify.app/static/b0241e8e106de989f76f3000008f9007/staff_600x600.png"
                // const image = teamMember.featuredImage.localFile.publicURL || bimg
                return (
                  <div key={teamMember.title} className="container">
                    <div
                      className="row teamMember"
                      style={{ marginBottom: "2rem", marginTop: "2rem" }}
                    >
                      <div className="col-md-4">
                        <img style={{ marginBottom: "2rem" }} src={image} />
                      </div>

                      <div className="col-md-8">
                        <h4 style={{ marginTop: "0", marginBottom: "0" }}>
                          {teamMember.title}
                        </h4>
                      </div>
                    </div>
                  </div>
                )
              }
            })}
          </div>
        </article>
      </Layout>
    </>
  )
}

export default Team

export const query = graphql`
  query TeamPageQuery {
    allWpStaff {
      nodes {
        content
        id
        databaseId
        link
        slug
        # staffInfo {
        #   email
        #   phone
        #   quote
        #   position
        # }
        title
        uri
        featuredImage {
          id
          link
          localFile {
            id
            publicURL
          }
        }
      }
    }
  }
`
