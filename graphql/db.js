import axios from "axios";

const BASE_URL = "https://yts.mx/api/v2";
const MOVIES_API_URL = `${BASE_URL}/list_movies.json`;
const MOVIE_DETAILS_API_URL = `${BASE_URL}/movie_details.json`;
const MOVIE_SUGGESTIONS_API_URL = `${BASE_URL}/movie_suggestions.json`;

export const handleRequest = async (url, params) => {
  try {
    const { data } = await axios(url, { params });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovies = async (limit, minimumRating) => {
  const {
    data: { movies },
  } = await handleRequest(MOVIES_API_URL, { limit, minimumRating });

  return movies;
};

export const getMovie = async (movie_id) => {
  const {
    data: { movie },
  } = await handleRequest(MOVIE_DETAILS_API_URL, { movie_id });

  return movie;
};

export const getSuggestions = async (movie_id) => {
  const {
    data: { movies },
  } = await handleRequest(MOVIE_SUGGESTIONS_API_URL, { movie_id });

  return movies;
};
