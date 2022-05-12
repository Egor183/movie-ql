import { movies, setMovies } from "./db";

export const getMovieById = (movieId) =>
  movies.find(({ id }) => movieId === id);

export const deleteMovie = (movieId) => {
  const prevMovies = [...movies];
  const newMovies = movies.filter(({ id }) => movieId !== id);
  setMovies(newMovies);

  return prevMovies.length > newMovies.length;
};

export const addMovie = (name, score) => {
  const newMovie = { name, score, id: movies.length + 1 };
  movies.push(newMovie);

  return newMovie;
};
