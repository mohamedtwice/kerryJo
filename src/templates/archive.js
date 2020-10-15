import React from "react"
import { graphql } from "gatsby"
// import PostEntry from "../../components/post-entry"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
// import SEO from "../../components/seo"
// import NextIcon from "../../components/icons/next"
// import PreviousIcon from "../../components/icons/previous"
import PostPreview from "../components/PostPreview"
import ArchivePagination from "../components/ArchivePagination"
import { GatsbySeo } from "gatsby-plugin-next-seo"

const Archive = (props) => {
  const {
    data: {
      allWpPost: { nodes, pageInfo },
    },
    pageContext: { archiveType, archivePath },
  } = props

  return (
    <Layout bodyClass="home blog wp-embed-responsive has-no-pagination showing-comments hide-avatars footer-top-visible customize-support">
        <GatsbySeo title="Latest From KerryJo"
                   description="Latest news and important updates from KerryJo Felder 4 Minneapolis School Board campaign."
                   titleTemplate={`%s | KerryJo Felder 4 Minneapolis School Board: District 2`} />

                   <div className="post-inner thin" style={{ padding: "0", margin: "0 auto"}}>

            <header className="has-text-align-center header-footer-group blog-post-header archiveheader">
                <div
                    className="entry-header-inner section-inner medium flexl"
                    style={{ }}
                >
                    <h2
                        className="entry-title"
                        style={{ textAlign: "left", fontSize: "1.5em" }}
                        dangerouslySetInnerHTML={{ __html: "Latest News" }}
                    />
                </div>
            </header>


            <div className="post-inner thin pf">

                <div className=" row blog-list">
      {/*<div className="newsContainer">*/}
      {nodes &&
        nodes.map((post, index) => {
          return (
              // <div className="newsBox">
            <PostPreview
              key={index}
              post={post}
              isLast={index === nodes.length - 1}
            />
              // </div>
          )
        })}
      {/*</div>*/}
</div>
      </div>
        </div>
      <ArchivePagination {...pageInfo} archivePath={archivePath} />
    </Layout>
  )
}

export const query = graphql`
  query ArchivePage(
    $offset: Int!
    $perPage: Int!
    $userDatabaseId: Int
    $categoryDatabaseId: Int
  ) {
    allWpPost(
      limit: $perPage
      skip: $offset
      filter: {
        author: { databaseId: { eq: $userDatabaseId } }
        categories: {
          nodes: { elemMatch: { databaseId: { eq: $categoryDatabaseId } } }
        }
      }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        ...PostPreviewContent
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        currentPage
        pageCount
      }
    }
  }
`

export default Archive
