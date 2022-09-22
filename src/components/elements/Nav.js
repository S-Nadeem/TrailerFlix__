import React from 'react'
import { Link } from '@reach/router'
import TitleLogo from "../images/TrailerFlix_logo.png"
import sideLogo from "../images/baby.png"
import { StyledHeader, StyledRMDBLogo,StyledTMDBLogo } from "../styles/StyledHeader";

const Nav = () => {
    return (
        <StyledHeader>
            <div className="header-content">
            <Link to="/">
                <StyledRMDBLogo src={ TitleLogo } alt="logo" />
            </Link>
                <StyledTMDBLogo src={ sideLogo } alt="logo" />
            </div>
        </StyledHeader>
    )
}

export default Nav
