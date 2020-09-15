import React from "react"
import { Link } from "gatsby"
import { normalizePath } from "../utils/normalize-path"

const HomePostCategories = ({ categories }) => {
  if (!categories?.nodes || categories.nodes === 0) return null

  return (
    <div className="" style={{ lineHeight: "1" }}>
      <span className="screen-reader-text">Categories</span>
      <div className="">
        {categories.nodes.map((category, index) => (
          <Link
            to={normalizePath(category.uri)}
            key={index}
            rel={"category tag " + category.slug}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HomePostCategories
