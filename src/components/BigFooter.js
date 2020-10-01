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
  &&& {
    padding: 0 2rem;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.33);
    @media (min-width: 768px) {
      max-width: 1140px;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      text-align: center;
      H2,
      H3 {
        margin: 0 36px;
      }
    }
  }
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 4rem 0;
  }
  .item {
    width: initial;

    @media (min-width: 768px) {
      width: 48%;
      margin: 2%;
    }
  }
`

const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 0;
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0rem 0;
  }
`

const FooterLeft = styled.div`
  padding: 1rem;
  @media (min-width: 768px) {
    padding: 3rem;
  }
`

export default function BigFooter() {
  return (
    <Wrapper>
      <Div>
        <div className="item smItem">
          <h5>Vote KerryJo Felder for Minneapolis School Board</h5>
          <p style={{ fontSize: "1.75rem", textAlign: "left" }}>
            Kerry Jo is a MPS parent who believes the district belongs to its
            parents and students. She will work hard to lift your voice in
            creating solutions that address local disparities and make schools
            you are proud to call your own.
          </p>
          <Link
            to="/about/"
            style={{
              fontSize: "1.5rem",
              background: "#333",
              padding: "10px 15px",
              float: "left",
              marginTop: "-5px",
              scrollSnapMarginBottom: "10px",
            }}
          >
            Learn more about KerryJo &rarr;
          </Link>
        </div>
        <div className="item">
          <div className="footer-column footerSignupDiv">
            <h5>Sign up for Updates</h5>
            <p style={{ fontSize: "1.75rem", textAlign: "left" }}>
              Sign up to receive the latest news and important updates from our
              campaign.
            </p>
            <Mailchimp
              action="https://app.us20.list-manage.com/subscribe/post?u=f254cf789f0adfef8bc2b1023&id=dddd180a9b"
              //Adding multiple fields:
              fields={[
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
                duplicate: "Too many subscribe attempts for this email address",
                button: "Subscribe",
              }}
              // Add a personalized class
              className="footerSignup"
            />
          </div>
        </div>
      </Div>
      <Div2>
        <span
          style={{
            border: "1px solid #333",
            fontSize: "1.25rem",
            padding: "1rem 2rem",
            marginBottom: "3rem",
            textAlign: "center",
          }}
        >
          Prepared and paid for by the KerryJo 4 School Board Campaign
        </span>
      </Div2>
    </Wrapper>
  )
}
