import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
// import Seo from "../../components/Seo"
import Comments from "../../components/Comments"
import ContentTypePagination from "../../components/ContentTypePagination"
import AuthorBio from "../../components/AuthorBio"
import PostMeta from "../../components/PostMeta"
import PostCategories from "../../components/PostCategories"
import BlogMedia from "../../components/BlogMedia"
import {GatsbySeo} from "gatsby-plugin-next-seo";

export default ({ data }) => {
  const { nextPage, previousPage, page } = data
  const {
    title,
    content,
    featuredImage,
    categories,
    excerpt,
    databaseId,
    author,
    date,
  } = page

  const imgURL= featuredImage.remoteFile.publicURL || "https://res.cloudinary.com/afrodeli/image/upload/v1598909776/sppn-videodocs-1536x864_qmhtpk.png";


  return (
      <>
      <GatsbySeo
          title={title}
          description={excerpt}
      />
    <Layout
      bodyClass={`post-template-default single single-post postid-${databaseId} single-format-standard wp-embed-responsive singular has-post-thumbnail has-single-pagination showing-comments footer-top-visible customize-support`}
    >
      {/*<Seo title={title} description={excerpt} />*/}

      <article
        className={`post-${databaseId} post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized`}
        id={`post-${databaseId}`}
      >
        <header className="has-text-align-center header-footer-group blog-post-header">
          <div className="entry-header-inner section-inner medium flexl"
               style={{ maxWidth: "1040px"}}>
            <PostCategories categories={categories} />
            <h2
              className="entry-title"
              style={{ textAlign: "left",fontSize: "1.5em" }}
              dangerouslySetInnerHTML={{ __html: title }}
            />
            {/*<div*/}
            {/*  className="intro-text section-inner max-percentage small"*/}
            {/*  dangerouslySetInnerHTML={{ __html: excerpt }}*/}
            {/*/>*/}
            <PostMeta title={title} author={author} date={date} />
          </div>
        </header>

        <div className="post-inner thin">
          <div className="entry-content">
          <BlogMedia image={featuredImage} />
          </div>

          <div
            className="entry-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>

        <div className="section-inner">
          <AuthorBio author={author} />
          <ContentTypePagination
            previousPage={previousPage}
            nextPage={nextPage}
            contentType={"Post"}
          />
          <Comments />
        </div>
      </article>
    </Layout>
  </>
  )
}

export const query = graphql`
  query post($id: String!, $nextPage: String, $previousPage: String) {
    page: wpPost(id: { eq: $id }) {
      ...PostContent
    }
    nextPage: wpPost(id: { eq: $nextPage }) {
      title
      uri
    }
    previousPage: wpPost(id: { eq: $previousPage }) {
      title
      uri
    }
  }
`
