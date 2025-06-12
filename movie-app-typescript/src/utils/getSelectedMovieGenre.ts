import { config } from "./config";

export const getSelectedMovieGenre = async (genreId, page) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}discover/movie?language=en&with_genres=${genreId}&page=${page}`,
      config
    );

    const movies = await response.json();

    return movies;
  } catch (error) {
    console.log(error);
  }
};