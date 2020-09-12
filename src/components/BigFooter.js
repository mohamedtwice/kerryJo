import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import HeroSlider from "hero-slider"
import { createLocalLink } from "../utils/local-link"
import logo from "../assets/images/sds-toothwhite.png"
import SocialMenu from "./SocialMenu"
import Mailchimp from "react-mailchimp-form"

// Components
// import HeroSlider, { Slide, SideNav } from "hero-slider"
// import { H2 } from "components/UI/Text"

// Assets
// import salta from "../assets/images/Salta - Argentina.jpg"
// import scharbeutz from "../VerticalSlider/backgrounds/Scharbeutz - Germany.jpg"
// import selvaDiValGardena from "../VerticalSlider/backgrounds/Selva Di Val Gardena - Italy.jpg"
// import seoraksanMountains from "../VerticalSlider/backgrounds/Seoraksan Mountains - South Korea.jpg"

const Wrapper = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: #23C7AA;
    text-align: center;
    H2,
    H3 {
      margin: 0 36px;
    }
  }
`

export default function BigFooter() {
  return (
    <Wrapper>
      <section id="bigFooter" className="ps-section t-burger">
        <div className="container e40">
          <div className="flex-container footer-flex">
            <div className="footerLeft">
              {/*<div className="footer-column footer-logo">*/}
              <img src={logo} alt="Footer Logo" className="logoFooter" />
              {/*</div>*/}
            </div>

            <div className="footerRight">
              <div className="footer-column footerSignupDiv">
                <h4 className="footerMenu">Sign up for Updates</h4>
                <Mailchimp
                  action="https://saintpaulpromiseneighborhood.us16.list-manage.com/subscribe/post?u=XXXXXXXXXXXXX&amp;id=XXXXXX"
                  //Adding multiple fields:
                  fields={[
                    {
                      name: "FNAME",
                      placeholder: "Name",
                      type: "text",
                      required: true,
                    },
                    {
                      name: "EMAIL",
                      placeholder: "Email",
                      type: "email",
                      required: true,
                    },
                  ]}
                  // Change predetermined language
                  messages={{
                    sending: "Sending...",
                    success: "Thank you for subscribing!",
                    error: "An unexpected internal error has occurred.",
                    empty: "You must write an e-mail.",
                    duplicate:
                      "Too many subscribe attempts for this email address",
                    button: "Subscribe!",
                  }}
                  // Add a personalized class
                  className="footerSignup"
                />
              </div>
              <div className="footer-column footerSocial">
                <h4 className="footerMenu">Follow Us</h4>
                <SocialMenu isExpanded />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  )
}
