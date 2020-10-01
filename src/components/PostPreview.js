import React from "react"
import { Link } from "gatsby"
import { normalizePath } from "../utils/normalize-path"
import PostMeta from "./PostMeta"
import PostCategories from "./PostCategories"
import FeaturedMedia from "./FeaturedMedia"
import HomePostCategories from "./HomePostCategories";
import moment from "moment";
import BlogMedia from "./BlogMedia";

const PostPreview = ({ post, isLast }) => {
    console.log(post.categories)

    const imgURL =
        post.featuredImage ||
        "https://res.cloudinary.com/afrodeli/image/upload/v1598909776/sppn-videodocs-1536x864_qmhtpk.png"

    return (
      <>
      <article
          key={post.id}
          className={`post-${post.databaseId} post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized col-sm-6 col-md-4`}
          id={`post-${post.databaseId}`}
      >
        <div className="blog-card">
          {/*<Link*/}
          {/*    className="img-centered img-bg d-block"*/}
          {/*    to={normalizePath(post.uri)}*/}
          {/*>*/}
          {/*  /!*<img src={post.featuredImage} />*!/*/}
          {/*    <BlogMedia image={post.featuredImage} />*/}
          {/*</Link>*/}
          <div className={`card ${post.categories} `}>
            <div className="card-body p-0">
                        <span className="entry-category">
                          {/*<a href="javascript:;" rel="category tag">*/}
                          <HomePostCategories categories={post.categories} />
                          {/*</a>*/}
                          <span className="blog-date">{moment(post.date).format(`M.d.YYYY`)}</span>
                        </span>
              <h3 className="entry-title mt-1">
                <Link
                    to={normalizePath(post.uri)}>
                    {post.title}
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export default PostPreview
