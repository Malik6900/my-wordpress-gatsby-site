import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"

import Hamburger from "./Hamburger/Hamburger"
import OverlayMenu from "./OverlayMenu/OverlayMenu"
import Header from "./header/Header"
import Footer from "./Footer/Footer"

const Layout = ({ isHomePage, children }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleOverlayMenu = () => setMenuOpen(prev => !prev)

  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <>
    <Hamburger handleOverlayMenu={handleOverlayMenu} />
    <OverlayMenu menuOpen={menuOpen} callback={handleOverlayMenu} />
    <Header />
    
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <header className="global-header">
        {isHomePage ? (
          <h1 className="main-heading">
            <Link to="/">{parse(title)}</Link>
          </h1>
        ) : (
          <Link className="header-link-home" to="/">
            {title}
          </Link>
        )}
      </header>

      <main>{children}</main>

  
    </div>

    <Footer />
    </>  
  )
}

export default Layout
