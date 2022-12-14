import React from 'react'
import { Link } from "@reach/router"
import { StyledNavigation } from "../styles/StyledNavigation"

const Navigation = ({ movie }) => {
    return (
        <StyledNavigation>
            <div className="navigation-content">
                <Link to="/">
                    <p>Home</p>
                </Link>
                <p> | {movie}</p>
            </div>
        </StyledNavigation>
    )
}

export default Navigation
