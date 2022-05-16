import { getMovie, getMovies, getSuggestions } from "./db";

const resolvers = {
  Query: {
    movie: (_, { id }) => getMovie(id),
    movies: (_, { limit, minimumRating }) => getMovies(limit, minimumRating),
    suggestions: (_, { id }) => getSuggestions(id),
  },
};

export default resolvers;
