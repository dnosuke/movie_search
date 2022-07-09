import React from "react";
import * as C from "./styles"

const Footer = () => {
    return (
        <C.Footer>
                <img class="img-footer" src="logo.svg" alt="The Movie Database (TMDB)" width="160" height="25" />
                <p>Source: The Movie Database. Made with &#128155 by Alain Delon</p>
        </C.Footer>
    )
}

export default Footer;