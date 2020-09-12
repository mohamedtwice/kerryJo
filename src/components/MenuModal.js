import React, { useState } from "react"
import CloseIcon from "../assets/svg/close.inline.svg"
import { graphql, useStaticQuery } from "gatsby"
import stopPropagation from "../utils/stop-propagation"
// import OpenSubnav from "../utils/open-subnav"
import { normalizePath } from "../utils/normalize-path"
import UniversalLink from "./UniversalLink"
import SocialMenu from "./SocialMenu"


const openSubnav = (e) => {
  let el = document.querySelector('.sub-menu-toggle');
  let dd = document.querySelector('.sub-menu');

  console.log(dd)
  console.log(el)

  el.onclick = function () {
    el.classList.toggle('active');
    };

  return console.log('HI!')
};


const MenuModal = ({ isActive, toggleBackdrop }) => {

  const [visible, setVisible] = useState(false) // true is the initial state


  const { wpMenu } = useStaticQuery(graphql`
    {
      wpMenu(slug: { eq: "primary" }) {
        name
        menuItems {
          nodes {
            label
            url
            menuItemId
            connectedObject {
              ... on WpContentNode {
                uri
              }
            }
            childItems {
              nodes {
                label
                url
                menuItemId
                connectedObject {
                  ... on WpContentNode {
                  uri
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  if (!wpMenu?.menuItems?.nodes || wpMenu.menuItems.nodes === 0) return null

  return (
    <div
      className={
        "menu-modal cover-modal header-footer-group show-modal" +
        (isActive ? " active" : "")
      }
      data-modal-target-string=".menu-modal"
      onClick={(e) => toggleBackdrop(e, false)}
    >
      <div onClick={stopPropagation} className="menu-modal-inner modal-inner">
        <div className="menu-wrapper section-inner">
          <div className="menu-top">
            <button
              className="toggle close-nav-toggle fill-children-current-color"
              data-toggle-target=".menu-modal"
              data-toggle-body-class="showing-menu-modal"
              aria-expanded="false"
              data-set-focus=".menu-modal"
              onClick={(e) => toggleBackdrop(e, false)}
            >
              <span className="toggle-text">Close Menu</span>
              <CloseIcon />
            </button>

            <nav
              className="expanded-menu"
              aria-label="Expanded"
              role="navigation"
            >
              <ul className="modal-menu reset-list-style">
                {wpMenu.menuItems.nodes.map((menuItem, i) => {
                  const path = normalizePath(
                    menuItem?.connectedObject?.uri ?? menuItem.url
                  )
                  const itemId = "modal-menu-item-" + menuItem.menuItemId

                  return (
                    <li
                        key={itemId}
                        id={itemId}
                      className={
                        "menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home " +
                        itemId
                      }
                    >
                      <div className="ancestor-wrapper">
                        <UniversalLink
                          to={path}
                          activeClassName={
                            "current-menu-item current_page_item"
                          }
                        >
                          {menuItem.label}
                        </UniversalLink>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </nav>

            <nav className="mobile-menu" aria-label="Mobile" role="navigation">
              <ul className="modal-menu reset-list-style">
                {wpMenu.menuItems.nodes.map((menuItem, i) => {
                  const path = normalizePath(
                      menuItem?.connectedObject?.uri ?? menuItem.url
                  )
                  const itemId = "modal-mobile-menu-item-" + menuItem.menuItemId
                  const hasChildren = menuItem.childItems.nodes.length > 0;
                  const hasDiv = 'menu-item-has-children';



                  return (
                      <li
                          key={itemId}
                          id={itemId}
                          className={
                            `menu-item menu-item-type-custom menu-item-object-custom menu-item-home${hasChildren ? ' menu-item-has-children ' : ''}`+
                            itemId
                          }
                      >
                        <div className="ancestor-wrapper">
                          <UniversalLink
                              to={path}
                              activeClassName={
                                "current-menu-item current_page_item"
                              }
                          >
                            {menuItem.label}
                          </UniversalLink>
                          {hasChildren &&
                          <button onClick={(e) => setVisible(!visible)}>
                          {/*<button id="sub-menu-toggle-id" className="toggle sub-menu-toggle fill-children-current-color">*/}
                            {/*<a className="mobile-dropdown-arrow sub-menu-toggle" href="#!">*/}
                            <span className="screen-reader-text">Show sub menu</span>
                            <svg className="svg-icon" aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12">
                              <polygon fill="" fillRule="evenodd"
                                       points="1319.899 365.778 1327.678 358 1329.799 360.121 1319.899 370.021 1310 360.121 1312.121 358"
                                       transform="translate(-1310 -358)"></polygon>
                            </svg>
                            {/*</a>*/}
                          </button>
                          }
                        </div>

                        {hasChildren !== 0 && (
                            <ul className={visible ? "active" : "hidden-class"}>
                            {/*<ul className="sub-menu">*/}
                              {menuItem.childItems.nodes.map((childItem, i) => {
                                const path = normalizePath(
                                    childItem?.connectedObject?.uri ?? childItem.url
                                )
                                const childId = "modal-menu-item-" + childItem.menuItemId

                                return (
                                    <li
                                        key={childId}
                                        id={childId}
                                        className={
                                          "menu-item menu-item-type-post_type menu-item-object-page mobile-child-menu-item " +
                                          childId
                                        }
                                    >
                                      <div className="ancestor-wrapper">
                                        <UniversalLink
                                            to={path}
                                            className="mobile-child-link"
                                            activeClassName={
                                              "current-menu-item current_page_item"
                                            }
                                        >
                                          {childItem.label}
                                        </UniversalLink>
                                      </div>
                                    </li>
                                )
                              })}
                            </ul>
                        )}
                      </li>
                  )
                })}
              </ul>
            </nav>
          </div>

          <div className="menu-middle">
            <div className="headerdonatediv2">
              <a className="headerdonatebtn2" href="/donate/">Donate</a>
            </div>
          </div>

          <div className="menu-bottom">
            <SocialMenu isExpanded />
          </div>
        </div>
      </div>
    </div>
  )
};

export default MenuModal
