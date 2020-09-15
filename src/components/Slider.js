import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

// Components
import HeroSlider, { Slide, SideNav } from "hero-slider"
// import { H2 } from "components/UI/Text"

// Assets
import salta from "../assets/images/Salta - Argentina.jpg"
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

export default function Slider() {
  // const data = useStaticQuery(graphql`
  //   query HeaderQuery {
  //     wpPage(slug: {eq: "home"}) {
  //   id
  //   title
  //   homeSlider {
  //     slides {
  //       title
  //       text
  //       background {
  //         altText
  //         remoteFile {
  //           childImageSharp {
  //             fluid {
  //               base64
  //               tracedSVG
  //               srcWebp
  //               srcSetWebp
  //               originalImg
  //               originalName
  //             }
  //           }
  //         }
  //         localFile {
  //           absolutePath
  //           childImageSharp {
  //             fluid {
  //               base64
  //               tracedSVG
  //               srcWebp
  //               srcSetWebp
  //               originalImg
  //               originalName
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
  //   }
  // `)

  // console.log(data.wp.themeGeneralSettings.homeSlider)
  // console.log(data)

  return (
    <HeroSlider
      slidingAnimation="top_to_bottom"
      orientation="horizontal"
      initialSlide={1}
      onBeforeChange={(previousSlide, nextSlide) =>
        console.log("onBeforeChange", previousSlide, nextSlide)
      }
      onChange={(nextSlide) => console.log("onChange", nextSlide)}
      onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
      style={{
        color: "#FFF",
        zIndex: "",
        backgroundColor: "#000",
      }}
      settings={{
        slidingDuration: 600,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 5000,
        height: "550px",
      }}
    >
      {/*<HeroSlider*/}
      {/*    slidingAnimation="top_to_bottom"*/}
      {/*    orientation="horizontal"*/}
      {/*    initialSlide={1}*/}
      {/*    style={{*/}
      {/*        color: '#FFF',*/}
      {/*        zIndex: '-1',*/}
      {/*    }}*/}
      {/*    settings={{*/}
      {/*        slidingDuration: 600,*/}
      {/*        slidingDelay: 100,*/}
      {/*        shouldAutoplay: false,*/}
      {/*        shouldDisplayButtons: false,*/}
      {/*        autoplayDuration: 8000,*/}
      {/*        height: '60vh',*/}
      {/*    }}*/}
      {/*>*/}
      {data.wpPage.homeSlider.slides.map((slide, index) => {
        const image = slide.background.localFile.childImageSharp.fluid.srcWebp
        const imageUrl = "https://promiseneighborhood.netlify.app/" + image
        console.log(imageUrl)
        return (
          <Slide
            background={{
              backgroundImage: imageUrl,
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
            key={index}
          >
            <Wrapper>
              <h2 className="sliderh2"> {slide.title}</h2>
              <h6 className="sliderh6"> {slide.text}</h6>
            </Wrapper>
          </Slide>
        )
      })}

      <SideNav
        position={{
          top: 0,
          right: 0,
        }}
      />
    </HeroSlider>
  )
}
