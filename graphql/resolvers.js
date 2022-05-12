import { movie, movies } from "./db";
import { addMovie, deleteMovie, getMovieById } from "./db.helpers";

const resolvers = {
  Query: {
    movie: (_, { id }) => getMovieById(id),
    movies: () => movies,
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id),
  },
};

export default resolvers;
