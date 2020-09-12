import React from "react"
import NonStretchedImage from "../utils/non-stretched-img"
import PageHeaderMedia from "./PageHeaderMedia";

 const PageHeader = ({ pageHeaderImages }) => {
     if (!pageHeaderImages.primaryImage || !pageHeaderImages.secondaryImage) return null

     console.log(pageHeaderImages)
     const primaryImg = pageHeaderImages.primaryImage
     const secondaryImage = pageHeaderImages.secondaryImage
     console.log(primaryImg)

     return (
        <header className="topHeader">
            <div className="entry-header-inner section-inner medium flexl heroImgdiv"
                 style={{ maxWidth: "1070px"}}>
        <div className="hero-content">
            <div className="hero-left">
            {/*    <NonStretchedImage*/}
            {/*    className="attachment-post-thumbnail size-post-thumbnail wp-post-image full-width-img"*/}
            {/*    fluid={primaryImg.localFile.childImageSharp}*/}

            {/*/>*/}
                <img src={primaryImg.remoteFile.childImageSharp.fluid.srcWebp}
                     alt={primaryImg.alt} />
                {/*<img src="https://www.w3schools.com/css/paris.jpg" alst="" className="hero-img" />*/}
            </div>
            <div className="hero-right">
                <img src={secondaryImage.remoteFile.childImageSharp.fluid.srcWebp}
                     alt={secondaryImage.alt} />
                {/*<NonStretchedImage*/}
                {/*    className="attachment-post-thumbnail size-post-thumbnail wp-post-image full-width-img"*/}
                {/*    fluid={primaryImg.localFile.childImageSharp}*/}

                {/*/>                /!*<img src="https://www.w3schools.com/css/paris.jpg" alt="" className="hero-img" />*!/*/}
            </div>
        </div>
            </div>
     </header>
    )
}

export default PageHeader
