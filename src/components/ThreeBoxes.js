import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import HeroSlider from "hero-slider"
import { createLocalLink } from "../utils/local-link"

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
    max-width: 1140px;
    display: flex;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.33);
    text-align: center;
    H2,
    H3 {
      margin: 0 36px;
    }
  }
`

const Div = styled.div`
  box-sizing: border-box;
  width: 48%;
`

export default function ThreeBoxes() {
  const data = useStaticQuery(graphql`
    query ThreeBoxesQuery {
      wpPage(slug: { eq: "home" }) {
        id
        homeBoxes {
          homeBoxes {
            title
            subtitle
            buttonText
            link {
              title
              target
              url
            }
          }
        }
      }
    }
  `)

  // console.log(data.wp.themeGeneralSettings.homeBoxes)
  // console.log(data)
  return (
    <Wrapper>
      <div class="container-flex">
        {data.wpPage.homeBoxes.homeBoxes.map((box, index) => {
          return (
            <div className="hbox" key={index}>
              <Link to={createLocalLink(box.link.url)}>
                <div className="inner">
                  <h2>{box.title}</h2>
                  {box.subtitle !== null && <h5>{box.subtitle}</h5>}
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}
