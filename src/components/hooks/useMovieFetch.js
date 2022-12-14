import { useEffect, useState, useCallback } from "react";
import { API_URL, API_KEY } from "../../config";

export const fetchData1 = async (movieId) => {
  try {
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    const result = await fetch(endpoint);
    return result;
  } catch (error) {
    return null;
  }
};

export const useMovieFetch = (movieId) => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    setError(false);
    setLoading(true);

    try {
      const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
      const result = await (await fetch(endpoint)).json();
      const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
      const creditResult = await (await fetch(creditsEndpoint)).json();
      const directors = creditResult.crew.filter(
        (member) => member.job === "Director"
      );
      setState({
        ...result,
        actors: creditResult.cast,
        directors,
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  }, [movieId]);

  useEffect(() => {
    if (localStorage[movieId]) {
      setState(JSON.parse(localStorage[movieId]));
      setLoading(false);
    } else {
      fetchData();
    }
  }, [fetchData, movieId]);

  useEffect(() => {
    localStorage.setItem(movieId, JSON.stringify(state));
  }, [movieId, state]);

  return [state, loading, error];
};
