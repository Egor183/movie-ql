export let movies = [
  {
    name: "The Shawshank Redemption",
    score: 9.2,
    id: 1,
  },
  {
    name: "The Godfather",
    score: 9.2,
    id: 2,
  },
  {
    name: "The Dark Knight",
    score: 9.0,
    id: 3,
  },
  {
    name: "The Godfather: Part II",
    score: 9.2,
    id: 4,
  },
  {
    name: "12 Angry Men",
    score: 8.9,
    id: 5,
  },
  {
    name: "Schindler's Listn",
    score: 8.9,
    id: 6,
  },
];

export const setMovies = (newMovies) => {
  movies = newMovies;
};
