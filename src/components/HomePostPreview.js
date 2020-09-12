import React from "react"
import { Link } from "gatsby"
import { normalizePath } from "../utils/normalize-path"
import PostMeta from "./PostMeta"
import PostCategories from "./PostCategories"
import FeaturedMedia from "./FeaturedMedia"

const HomePostPreview = ({ post, isLast }) => {
    return (
        <article className="col-sm-6">
        <div className="blog-card">
                <a
                    className="img-centered d-block"
                    href="javascript:;"
                    style={{
                        backgroundImage:
                            "url(${post.featuredImage.sourceUrl})",
                    }}
                >
                    {" "}
                </a>
                <div className="card">
                    <div className="card-body p-0">
                        <span className="entry-category">
                          <a href="javascript:;" rel="category tag">
<PostCategories categories={post.categories} />
</a>
                          <span className="blog-date"><PostMeta
                              date={post.date}
                          /></span>
                        </span>
                        <h3 className="entry-title mt-1">
                            <a href="javascript:;">
                                <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                            </a>
                        </h3>
                    </div>
                </div>
            </div>

            {!isLast && (
                <hr
                    key={post.postId + "-hr"}
                    className="post-separator styled-separator is-style-wide section-inner"
                    aria-hidden="true"
                />
            )}
        </article>
    )
}

export default HomePostPreview


