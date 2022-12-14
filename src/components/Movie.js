import React from 'react'
import Navigation from "./elements/Navigation"
import MovieInfo from "./elements/MovieInfo"
import Actor from "./elements/Actor"
import MovieInfoBar from "./elements/MovieInfoBar"
import Grid from "./elements/Grid"
import Spinner from "./elements/Spinner"

import { useMovieFetch } from "./hooks/useMovieFetch"


const Movie = ( { movieId}) => {
    const [movie, loading, error ] = useMovieFetch(movieId); 
    // console.log(movie)

    if(error) return <div> Error in getting movies</div>
    if(loading) return  <Spinner />
    return (
        <>
            <Navigation movie={movie.title}/>
            <MovieInfo movie={movie} />
            <MovieInfoBar 
                time={movie.runtime}
                budget={movie.budget}
                revenue={movie.revenue}
            />
            <Grid header="Actors">
                {movie.actors.map(actor => (
                    <Actor key={actor.credit_id} actor={actor} />
                ))}
            </Grid> 
        </>
    )
}

export default Movie
