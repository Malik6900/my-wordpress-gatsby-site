import React from "react"
import { Link } from "gatsby"
import Navigation from "../Navigation/Navigation"
import Logo from "../../images/Logo.svg"
import { useMenuQuery } from "../hooks/useMenuQuery"
import { Wrapper, Content } from "./Header.styles"

const Header = () => {
    const { site, wpMenu } = useMenuQuery()
    console.log(wpMenu)

    return (
        <Wrapper>
            <Content>
                <Link to="/">
                    <img src={Logo} alt="logo" />
                </Link>
                <Navigation menu={wpMenu.menuItems.nodes} />
            </Content>
        </Wrapper>
    )
}

export default Header;