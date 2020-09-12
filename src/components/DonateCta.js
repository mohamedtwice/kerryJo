import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

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

export default function DonateCta() {
    //   const data = useStaticQuery(graphql`
    //   query HeaderQuery {
    //     wp {
    //       themeGeneralSettings {
    //         homeSlider {
    //           slides {
    //             text
    //             title
    //             background {
    //               uri
    //               sourceUrl
    //               srcSet
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // `)

    // console.log(data.wp.themeGeneralSettings.homeSlider)
    // console.log(data)
    return (
        <section id="threeboxes" className="ps-section t-burger">
            <div className="donation-amount-row purple-gradient">
                <div className="donation-amount-container container">
                    <div className="donation-headline">
                        {/*<h3>You can make this dream a reality for so many</h3>*/}
                        <span className="donate-cta-caption">Donate</span>
                        {/*<p className="donate-cta-p">Your support will ensure</p>*/}

                    </div>
                    <div className="donation-amounts">
                    <div className="donation-1">
                        <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=G3JQZQ2ZBFHEU&amp;source=url"
                           target="_blank" rel="noopener noreferrer">
                            {/*<p className="donate-cta-top">Donate</p>*/}
                            <p className="donate-cta-bottom"><span className="dollar-sign">$</span>500</p>
                        </a>
                    </div>
                    <div className="donation-2">
                        <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=6PCQMAGJGTA3C&amp;source=url"
                           target="_blank" rel="noopener noreferrer">
                            {/*<p className="donate-cta-top">Donate</p>*/}
                            <p className="donate-cta-bottom"><span className="dollar-sign">$</span>1000</p>
                        </a>
                    </div>
                    <div className="donation-3">
                        <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=YGE9LTX7E44SY&amp;source=url"
                           target="_blank" rel="noopener noreferrer">
                            {/*<p className="donate-cta-top">Donate</p>*/}
                            <p className="donate-cta-bottom"><span className="dollar-sign">$</span>2500</p>
                        </a>
                    </div>
                    <div className="donation-4">
                        <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=NG7ETQFJ9K42L&amp;source=url"
                           target="_blank" rel="noopener noreferrer">
                            {/*<p><span className="donate-cta-top">Donate</span></p>*/}
                            <p className="other-amount-p"><span className="donate-cta-top"
                                     style={{ color: "#ffffff", lineHeight: "1",}}>Another amount</span></p>
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}
