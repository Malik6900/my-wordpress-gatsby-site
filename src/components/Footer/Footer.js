import React from "react";
import { Wrapper } from "./Footer.styles";

const Footer = () => (
    <Wrapper>
        <footer>
        Malik6900 © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        {` `}
        And <a href="https://wordpress.org/">WordPress</a>
      </footer>
    </Wrapper>
)

export default Footer;