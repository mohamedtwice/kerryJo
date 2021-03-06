import React from "react"
import NonStretchedImage from "../utils/non-stretched-img"

const FeaturedMedia = ({ image }) => {
    if (!image?.remoteFile?.childImageSharp?.fluid) return null

    return (
        <div className="featured-media" style={{ marginBottom: "0em", zIndex: "-1" }}>
            <div className="featured-media-inner">  {/* section-inner*/}
                <NonStretchedImage
                    className="attachment-post-thumbnail size-post-thumbnail wp-post-image full-width-img"
                    fluid={image.remoteFile.childImageSharp.fluid}

                />
            </div>
        </div>
    )
}

export default FeaturedMedia