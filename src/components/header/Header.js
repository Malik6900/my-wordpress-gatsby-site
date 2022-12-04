import React from "react"
import { Link } from "gatsby"
import Navigation from "../Navigation/Navigation"
import Logo from "../../images/logo.svg"
import { useMenuQuery } from "../hooks/useMenuQuery"
import { Wrapper, Content } from "./Header.styles"

const Header = () => {
    const { menu } = useMenuQuery()
    console.log(menu)

    return (
        <Wrapper>
            <Content>
                <Link to="/">
                    <img src={Logo} alt="logo" />
                </Link>
                <Navigation menu={menu.menuItems.nodes} />
            </Content>
        </Wrapper>
    )
}

export default Header;