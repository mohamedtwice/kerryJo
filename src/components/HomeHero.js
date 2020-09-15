import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const Wrapper = styled.div`
  &&& {
    max-width: 1140px;
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

const BackgroundSection = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        wpPage(slug: { eq: "home" }) {
          id
          homeHero {
            heroText
            buttons {
              buttonText
              buttonLink {
                target
                title
                url
              }
            }
            backgroundImage {
              remoteFile {
                childImageSharp {
                  fluid(quality: 90, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  console.log(data)
  // Set ImageData.
  const imageData =
    data.wpPage.homeHero.backgroundImage.remoteFile.childImageSharp.fluid

  return (
    <Wrapper>
      <BackgroundImage
        Tag="section"
        className={className}
        fluid={imageData}
        backgroundColor={`#040e18`}
      >
        {/* <h2>gatsby-background-image</h2> */}
      </BackgroundImage>
    </Wrapper>
  )
}

const HomeHero = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  min-height: 450px;
`

export default HomeHero
