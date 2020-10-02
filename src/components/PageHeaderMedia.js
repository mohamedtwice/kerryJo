import React from "react"
import NonStretchedImage from "../utils/non-stretched-img"

const PageHeaderMedia = ({ primaryImg }) => {
    if (!primaryImg?.localFile?.childImageSharp?.fluid) return null

    return (
        <div className="blog-media" style={{ marginBottom: "0em", zIndex: "-1" }}>
            <div className="blogw-media-inner">  {/* section-inner*/}
                <NonStretchedImage
                    className="attachment-post-thumbnail size-post-thumbnail wp-post-image full-width-img"
                    fluid={primaryImg.localFile.childImageSharp.fluid}

                />
            </div>
        </div>
    )
}

export default PageHeaderMedia