// Configuration for TMDB
// To se the latest configuration fetch it from https://api.themoviedb.org/3/configuration?api_key=019e8f375549e0bbd4a4191862ebc88f
// Read more about the API here: https://developers.themoviedb.org/

// const TELUGU_URL = `${API_URL}movie/popular?api_key=${API_KEY}&sort_by=primary_release_date.desc&include_adult=false&include_video=false&with_original_language=te`

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '786a78e66dcaccdb80970bbd43084004';
const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';


const SEARCH_URL = `${API_URL}search/movie?api_key=${API_KEY}&query=`
const POPULAR_URL = `${API_URL}movie/popular?api_key=${API_KEY}`
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w500';

export { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE, SEARCH_URL, POPULAR_URL };
