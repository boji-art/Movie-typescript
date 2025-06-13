import { config } from "./config";

export const getSeeMoreMovies = async (categoryName: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/${categoryName}language=en-US&page=1`,
      config
    );

    const movies = await response.json();
    console.log(movies);
    return movies;
  } catch (error) {
    console.log(error);
  }
};
