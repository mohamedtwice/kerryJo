import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { normalizePath } from "../utils/normalize-path"
import UniversalLink from "./UniversalLink"

const Menu = () => {
  const { wpMenu } = useStaticQuery(graphql`
    {
      wpMenu(slug: { eq: "primary" }) {
        name
        menuItems {
          nodes {
            label
            url
            menuItemId
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
            connectedObject {
              ... on WpContentNode {
                uri
              }
            }
          }
        }
      }
    }
  `)

  if (!wpMenu?.menuItems?.nodes || wpMenu.menuItems.nodes === 0) return null

  return (
      <nav
          className="primary-menu-wrapper"
          aria-label="Horizontal"
          role="navigation"
      >
        <ul className="primary-menu reset-list-style">
          {wpMenu.menuItems.nodes.map((menuItem, i) => {
            const path = normalizePath(
                menuItem?.connectedObject?.uri ?? menuItem.url
            )
            const itemId = "menu-item-" + menuItem.menuItemId
            const hasChildren = menuItem.childItems.nodes.length > 0;
            const hasDiv = 'menu-item-has-children';

            return (
                <li
                    id={itemId}
                    key={i + menuItem.url}
                    className={
                      `menu-item menu-item-type-custom menu-item-object-custom menu-item-home${hasChildren ? ' menu-item-has-children ' : ''}`+
                      itemId
                    }
                >
                  <UniversalLink
                      to={path}
                      activeClassName={"current-menu-item current_page_item"}
                  >
                    {menuItem.label}
                  </UniversalLink>
                    {hasChildren &&
                    <span className="icon"></span>
                    }
                  {hasChildren &&
                  <ul className="top-child-menu reset-list-style" style={{zIndex:"1000"}}>
                    {menuItem.childItems.nodes.map((childItem, i) => {
                      const path = normalizePath(
                          childItem?.connectedObject?.uri ?? childItem.url
                      )
                      const childId = "modal-menu-item-" + childItem.menuItemId

                      return (
                          <li
                              id={childId}
                              key={i + menuItem.url}
                              className={
                                "menu-item menu-item-type-custom menu-item-object-custom menu-item-home " +
                                itemId
                              }
                              className={
                                "menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home child-menu-item " +
                                childId
                              }
                          >
                            <div className="ancestor-wrapper child-ancestor">
                              <UniversalLink
                                  to={path}
                                  className="child-link"
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
                  }
                </li>
            )
          })}
        </ul>
      </nav>
  )
};

export default Menu
