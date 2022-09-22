import { useState, useEffect } from "react";
import { POPULAR_URL } from "../../config";

export const fetchMoviesForTest = async () => {
  try {
    const res = await fetch(
      `${POPULAR_URL}&language=en-US&sort_by=release_date.desc&include_adult=false`
    );
    return res;
  } catch (e) {
    return null;
  }
};
const useHomeFetch = (search) => {
  const [state, setState] = useState({ movies: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchMovies = async (endpoint) => {
    setError(false);
    setLoading(true);

    const isLoadMore = endpoint.search("page");

    try {
      const result = await (await fetch(endpoint)).json();
      setState((prev) => ({
        ...prev,
        movies:
          isLoadMore !== -1
            ? [...prev.movies, ...result.results]
            : [...result.results],
        heroImage:
          prev.heroImage ||
          result.results[Math.floor(Math.random() * result.results.length)],
        currentPage: result.page,
        totalPages: result.total_pages,
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    // if (sessionStorage.homeState) {
    //     setState(JSON.parse(sessionStorage.homeState));
    //     setLoading(false)
    // } else {
    fetchMovies(
      `${POPULAR_URL}&language=en-US&sort_by=release_date.desc&include_adult=false`
    );
    // }
  }, []);

  useEffect(() => {
    if (!search) {
      sessionStorage.setItem("homeState", JSON.stringify(state));
    }
  }, [search, state]);

  return [{ state, loading, error }, fetchMovies];
};

export default useHomeFetch;
