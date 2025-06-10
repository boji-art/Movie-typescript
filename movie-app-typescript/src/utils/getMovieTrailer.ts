import { config } from "./config";

export const getMovieTrailer = async (movieId: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/${movieId}/videos?language=en-US`,
      config
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
 