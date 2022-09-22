import React, { useState } from "react";
import NoImage from "../images/no_image.jpg";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

import MovieThumbnail from "./MovieThumbnail";
import { StyledMovieInfo } from "../styles/StyledMovieInfo";

import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const MovieInfo = ({ movie }) => {
  const [trialerurl, setTrailerUrl] = useState("");
  const [playButton, setPlayButton] = useState("Play Trailer");

  const opts = {
    height: "450rem",
    width: "97%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trialerurl) {
      setTrailerUrl("");
      setPlayButton("Play Trailer");
    } else {
      // console.log(movie)
      movieTrailer(movie?.original_name || movie?.name || movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
          setPlayButton("Stop Trailer");
        })
        .catch((error) => {
          setPlayButton("No Trailer Available");
        });
    }
  };

  return (
    <StyledMovieInfo backdrop={movie?.backdrop_path}>
      <div className="movieinfo-content">
        <div className="movieinfo-thumb">
          <MovieThumbnail
            image={
              movie?.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            // clickable
            // onClick={()=> handleClick(movie)}
          />
        </div>
        <div className="movieinfo-text">
          <h1>{movie?.title ?? ""}</h1>
          <h3>Plot</h3>
          <p>{movie?.overview ?? ""}</p>

          <div className="rating-director">
            <div>
              <h3>Rating</h3>
              <div className="score">{movie?.vote_average}</div>
            </div>
            <div className="director">
              <h3>DIRECTOR{movie?.directors?.length > 1 ? "S" : ""}</h3>
              {movie?.directors?.map((director) => (
                <p key={director?.credit_id}>{director?.name}</p>
              ))}
            </div>
          </div>
        </div>
        <button
          className="play-stop-button"
          data-testid={!trialerurl ? "button-up" : "button-down"}
          onClick={() => handleClick(movie)}
        >
          {playButton}
        </button>
        {trialerurl && <YouTube videoId={trialerurl} opts={opts} />}
      </div>
    </StyledMovieInfo>
  );
};

export default MovieInfo;
