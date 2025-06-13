import { MoviesResponse } from "@/types";
import { config } from "./config";

export const getSelectedMovieGenre = async (genreId: number, page: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}discover/movie?language=en&with_genres=${genreId}&page=${page}`,
      config
    );

    const data = await response.json();

    return data as MoviesResponse;
  } catch (error) {
    console.log(error);
  }
};
