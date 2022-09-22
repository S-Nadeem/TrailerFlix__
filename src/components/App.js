import React from 'react'
import { Router } from "@reach/router"

import Home from "./Home"
import Nav from "./elements/Nav"
import Movie from "./Movie"
import NotFound from "./NotFound"

import { GlobalStyle } from "./styles/GlobalStyle"

const App = () => {
    return (
        <div>
            <Nav />
            <Router>
                <Home  path="/" />
                <Movie  path="/:movieId"/>
                <NotFound default/>
            </Router>
            <GlobalStyle />    
        </div>
    )
}

export default App
