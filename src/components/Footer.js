import React from "react"
import { Link } from "gatsby"
import moment from "moment"
import SocialMenu from "./SocialMenu"
import styled from "styled-components"

const Wrapper = styled.div`
    max-width: 1140px;
    margin: auto;
    padding: 0 2rem;
    display: flex;
    flex-flow: column-reverse;
    align-items: center;
    justify-content: center;
    @media (min-width: 990px) {
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    }
  }
`

const WrapDiv = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    @media (min-width: 990px) {
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    }
  }
`

const Footer = ({}) => {
  return (
    <footer id="site-footer" role="contentinfo" className="header-footer-group">
      <Wrapper>
        <WrapDiv>
          <p className="footer-copyright">
            © Copyright {moment().format("YYYY")}{" "}
            <Link to={"/"}> KerryJo Felder for Minneapolis School Board</Link>
          </p>
          <p style={{ margin: "0", fontWeight: "1.75rem !important" }}>
            <a
              className="powered-by-wordpress"
              href="http://www.bsmg.co"
              rel="noreferrer noopener"
            >
              Powered by BSMG Digital
            </a>
          </p>
        </WrapDiv>

        <div className="footer-column" style={{ marginBottom: "1.25rem" }}>
          {/* <h4 className="footerMenu">Follow Us</h4> */}
          <SocialMenu isExpanded />
        </div>

        {/* <a className="to-the-top" href="#site-header">
          <span className="to-the-top-long">
            To the top{" "}
            <span className="arrow" aria-hidden="true">
              ↑
            </span>
          </span>
          <span className="to-the-top-short">
            Up{" "}
            <span className="arrow" aria-hidden="true">
              ↑
            </span>
          </span>
        </a> */}
      </Wrapper>
    </footer>
  )
}

export default Footer
