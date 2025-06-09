import { config } from "./config";

export const getMovieTrailer = async (movieId) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/${movieId}/videos?language=en-US`,
      config
    );
    const movies = await response.json();

    return movies;
  } catch (error) {
    console.log(error);
  }
};
