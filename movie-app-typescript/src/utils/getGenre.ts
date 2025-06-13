import { GenreResponse } from "@/types";
import { config } from "./config";

export const getGenre = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}genre/movie/list?language=en`,
      config
    );

    const genres = await response.json();

    return genres as GenreResponse;
  } catch (error) {
    console.log(error);
  }
};
