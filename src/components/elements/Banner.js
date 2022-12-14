import React from 'react'
import { StyledHeroImage } from "../styles/StyledHeroImage"

const Banner = ( {image, title, text}) => {
    return (
        <StyledHeroImage image={image}>
            <div className="heroimage-content">
                <div className="heroimage-text">
                    <h1>{title}</h1>
                    <p>{text}</p>
                </div>
            </div>
        </StyledHeroImage>
    )
}

export default Banner
