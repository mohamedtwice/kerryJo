import React from "react"
import { Link } from "gatsby"
import moment from "moment"

const Footer = ({}) => {
  return (
    <footer id="site-footer" role="contentinfo" className="header-footer-group">
      <div className="section-inner e40">
        <div className="footer-credits">
          <p className="footer-copyright">
            © {moment().format("YYYY")}{" "}
            <Link to={"/"}> South Dallas Smiles Dental</Link>
          </p>
          <p>
            <a
              className="powered-by-wordpress"
              href="http://www.bsmg.co"
              rel="noreferrer noopener"
            >
              Powered by BSMG Digital
            </a>
          </p>
        </div>

        <a className="to-the-top" href="#site-header">
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
        </a>
      </div>
    </footer>
  )
}

export default Footer
