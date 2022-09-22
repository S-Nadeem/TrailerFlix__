import React,{ useState } from 'react';
import useHomeFetch from './hooks/useHomeFetch';
import {  IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE, POPULAR_URL, SEARCH_URL } from "../config";

import Spinner from "./elements/Spinner";
import Banner from "./elements/Banner";
import Grid from "./elements/Grid";
import LoadMoreBtn from "./elements/LoadMoreBtn";
import MovieThumbnail from "./elements/MovieThumbnail";
import SearchBar from "./elements/SearchBar";

import NoImage from "./images/no_image.jpg"

const Home = () => {
    const [search, setSearch] = useState('');
    const [{ state:{ movies, currentPage, totalPages, heroImage } 
        , loading , error}, fetchMovies] = useHomeFetch(search);

        // console.log(heroImage)

    const searchMovies = search =>{
        const endpoint = search ? SEARCH_URL + search : POPULAR_URL;

        setSearch(search);
        fetchMovies(endpoint);
    }

    const loadMoreMovies = ()=>{
        const searchEndPoint = `${SEARCH_URL}&query=${search}$page=${currentPage + 1}`
        const popularEndPoint = `${POPULAR_URL}&page=${currentPage + 1}`

        const endpoint = search ? searchEndPoint : popularEndPoint ;

        fetchMovies(endpoint);
    }

    if(error) return (<><div style={{textAlign:"center"}}>Error in connect to Internet. Check your Internet connection</div> <Spinner /> </>)
    if(!movies[0]) return <Spinner />; 

    return (
        <>
        {!search && (
            <Banner 
                image={heroImage.backdrop_path ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}` : NoImage}
                title={heroImage.title}
                text={heroImage.overview}
            />
        )}
            <SearchBar callback={searchMovies} />
            <Grid header={search ? 'Search result' : 'popular Movies'}>
                { movies.map( (movie) => (
                    <MovieThumbnail
                     key = {movie.id}
                     clickable
                     image = { movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage}
                     movieId = {movie.id}
                     movieName = {movie.title}
                     />
                ))}
            </Grid>
            {loading && <Spinner />}
            {currentPage < totalPages && !loading && (
                <LoadMoreBtn text="Load More" callback={loadMoreMovies} />
            )}
        </>
    )
}

export default Home
