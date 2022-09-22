import React from 'react'
import { Link } from '@reach/router'

import { StyledMovieThumb } from "../styles/StyledMovieThumb"

const MovieThumbnail = ({ image, movieId, clickable, movieName}) => {
    return (
        <StyledMovieThumb>
        {
            clickable ?
             ( 
                 <Link to={`/${movieId}`}>
                 <img className="clickable" src={image} alt="Movie Thumbnail" />
                 </Link>)
             : ( <img src={image} alt="Movie Thumbnail" /> )
        }
        <>{movieName}</>
        </StyledMovieThumb>
    )
}

export default MovieThumbnail
