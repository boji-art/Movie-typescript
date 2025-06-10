import { config } from "./config";

export const getMoreLikeThis = async (movieId: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/${movieId}/similar?language=en-US&page=1`,
      config
    );

    const movies = await response.json();

    return movies;
  } catch (error) {
    console.log(error);
  }
};
