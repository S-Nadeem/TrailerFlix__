import React from 'react'
import FontAwesome from "react-fontawesome"
import { calcTime} from "../../helpers"

import { StyledMovieInfoBar } from "../styles/StyledMovieInfoBar"

const MovieInfoBar = ({ time, budget, revenue }) => {
    return (
        <StyledMovieInfoBar>
            <div className="movieinfobar-content">
                <div className="movieinfobar-content-col">
                    <FontAwesome className="fa-time" name="clock-o" size="2x" />     
                    <span className="movieinfobar-info">
                        Run Time : {calcTime(time)}
                    </span>
                </div>
            </div>            
        </StyledMovieInfoBar>
    )
}

export default MovieInfoBar
