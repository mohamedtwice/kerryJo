import React from "react"
import { Link } from "gatsby"
import { normalizePath } from "../utils/normalize-path"
import styled from "styled-components"

const Wrapper = styled.div`
    max-width: 1140px;
    margin: auto;
    /* padding: 0 2rem; */
    display: flex;
    flex-flow: column-reverse;
    align-items: center;
    justify-content: center;
    @media (min-width: 990px) {
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    }
  }
`

const ContentTypePagination = ({ previousPage, nextPage, contentType }) => {
  return (
    <Wrapper>
      <nav
        className="pagination-single section-inner"
        aria-label={contentType}
        role="navigation"
      >
        {/* <hr className="styled-separator is-style-wide" aria-hidden="true" /> */}

        <div className="pagination-single-inner">
          {previousPage && (
            <Link
              className="previous-post"
              to={normalizePath(previousPage.uri)}
            >
              <span className="arrow" aria-hidden="true">
                ←
              </span>
              <span className="title">
                <span
                  className="title-inner"
                  dangerouslySetInnerHTML={{ __html: previousPage.title }}
                />
              </span>
            </Link>
          )}

          {nextPage && (
            <Link className="next-post" to={normalizePath(nextPage.uri)}>
              <span className="arrow" aria-hidden="true">
                →
              </span>
              <span className="title">
                <span
                  className="title-inner"
                  dangerouslySetInnerHTML={{ __html: nextPage.title }}
                />
              </span>
            </Link>
          )}
        </div>

        {/* <hr className="styled-separator is-style-wide" aria-hidden="true" /> */}
      </nav>
    </Wrapper>
  )
}

export default ContentTypePagination
