import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Archive from "../templates/archive"
import HomePostPreview from "./HomePostPreview"
import HomePostCategories from "./HomePostCategories"
import PostMeta from "./PostMeta"
import { getFormattedDate } from "../utils/get-date"
import moment from "moment/moment"
import { normalizePath } from "../utils/normalize-path"
import BlogMedia from "./BlogMedia"

// Components
// import HeroSlider, { Slide, SideNav } from "hero-slider"
// import { H2 } from "components/UI/Text"

// Assets
// import salta from "../assets/images/Salta - Argentina.jpg"
// import scharbeutz from "../VerticalSlider/backgrounds/Scharbeutz - Germany.jpg"
// import selvaDiValGardena from "../VerticalSlider/backgrounds/Selva Di Val Gardena - Italy.jpg"
// import seoraksanMountains from "../VerticalSlider/backgrounds/Seoraksan Mountains - South Korea.jpg"

const Wrapper = styled.div`
  &&& {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.33);
    text-align: center;
    H2,
    H3 {
      margin: 0 36px;
    }
  }
`

export default function Stories() {
  const data = useStaticQuery(graphql`
    query StoriesQuery {
      allWpPost(limit: 2, sort: { fields: date, order: DESC }) {
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
  `)

  const nodes = data.allWpPost.nodes
  console.log(nodes)
  // console.log(data)
  return (
    <section id="stories" className="ps-section t-burger">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="page-head mb-5">
              <span className="page-caption">Blog</span>
              <h2 className="mt-3">Read our stories</h2>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.
              </p>
              <a href="/news/" className="circle-icon right">
                Read More
                <img
                  src="https://res.cloudinary.com/afrodeli/image/upload/v1598541540/arrow-right_pjcegp.svg"
                  alt="arrow-right"
                />
              </a>
            </div>
          </div>

          <div className="col-lg-8">
            <div className=" row blog-list">
              {data.allWpPost.nodes.map((post, index) => {
                // console.log(post)
                return (
                  <article key={index} className="col-sm-6">
                    <div className="blog-card">
                      <Link
                        className="img-centered img-bg d-block"
                        to={normalizePath(post.uri)}
                      >
                        {/*<img src={post.featuredImage} />*/}
                        <BlogMedia image={post.featuredImage} />
                      </Link>
                      <div className="card">
                        <div className="card-body p-0">
                          <span className="entry-category">
                            {/*<a href="javascript:;" rel="category tag">*/}
                            <HomePostCategories categories={post.categories} />
                            {/*</a>*/}
                            <span className="blog-date">
                              {moment(post.date).format(`M.d.YYYY`)}
                            </span>
                          </span>
                          <h3 className="entry-title mt-1">
                            <Link to={normalizePath(post.uri)}>
                              {post.title}
                            </Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}

              {/*    <article className=" col-sm-6">*/}
              {/*        <div className="blog-card">*/}
              {/*            <a*/}
              {/*                className="img-centered d-block"*/}
              {/*                href="javascript:;"*/}
              {/*                style={{*/}
              {/*                    backgroundImage:*/}
              {/*                        "url(https://res.cloudinary.com/dxqbbhzb3/image/upload/v1590514929/myss%20svgs/blog_kb279q.png)",*/}
              {/*                }}*/}
              {/*            >*/}
              {/*                {" "}*/}
              {/*            </a>*/}
              {/*            <div className="card">*/}
              {/*                <div className="card-body p-0">*/}
              {/*<span className="entry-category">*/}
              {/*  <a href="javascript:;" rel="category tag">*/}
              {/*    Announcement*/}
              {/*  </a>*/}
              {/*  <span className="blog-date"> / 21.05.18</span>*/}
              {/*</span>*/}
              {/*                    <h3 className="entry-title mt-1">*/}
              {/*                        <a href="javascript:;">*/}
              {/*                            How to use Gestalt principles while desiging*/}
              {/*                            websites*/}
              {/*                        </a>*/}
              {/*                    </h3>*/}
              {/*                </div>*/}
              {/*            </div>*/}
              {/*        </div>*/}
              {/*    </article>*/}

              {/*    <article className=" col-sm-6">*/}
              {/*        <div className="blog-card">*/}
              {/*            <a*/}
              {/*                className="img-centered d-block"*/}
              {/*                href="javascript:;"*/}
              {/*                style={{*/}
              {/*                    backgroundImage:*/}
              {/*                        "url(https://res.cloudinary.com/dxqbbhzb3/image/upload/v1590514929/myss%20svgs/blog_kb279q.png)",*/}
              {/*                }}*/}
              {/*            >*/}
              {/*                {" "}*/}
              {/*            </a>*/}
              {/*            <div className="card">*/}
              {/*                <div className="card-body p-0">*/}
              {/*<span className="entry-category">*/}
              {/*  <a href="javascript:;" rel="category tag">*/}
              {/*    Announcement*/}
              {/*  </a>*/}
              {/*  <span className="blog-date"> / 21.05.18</span>*/}
              {/*</span>*/}
              {/*                    <h3 className="entry-title mt-1">*/}
              {/*                        <a href="javascript:;">*/}
              {/*                            How to use Gestalt principles while desiging*/}
              {/*                            websites*/}
              {/*                        </a>*/}
              {/*                    </h3>*/}
              {/*                </div>*/}
              {/*            </div>*/}
              {/*        </div>*/}
              {/*    </article>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
