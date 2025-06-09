import { config } from "./config";

export const getNowPlayingMovies = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/now_playing?language=en-US&page=1`,
      config
    );

    const movies = await response.json();

    return movies;
  } catch (error) {
    console.log(error);
  }
};
