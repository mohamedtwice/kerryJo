import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
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

export default function Challenge() {
  const data = useStaticQuery(graphql`
    query CommitmentQuery {
      wpPage(slug: { eq: "home" }) {
        id
        title
        homeCommitment {
          introStatement
          commitmentTitle
          titleText
          stats {
            number
            subtext
          }
        }
      }
    }
  `)

  // console.log(data.wp.themeGeneralSettings.homeSlider)
  // console.log(data)
  return (
    <section id="challenge" className="ps-section t-burger">
      <div className="container e40">
        <div className="row">
          <div className="col-lg-12">
            <div className="homeintrobox">
              <h2 className="introh2">
                {data.wpPage.homeCommitment.introStatement}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
