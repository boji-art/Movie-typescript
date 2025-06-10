import { MoviesResponse } from "@/types";
import { config } from "./config";

export const getUpcoming = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/upcoming?language=en-US&page=1`,
      config
    );

    const movies = await response.json();

    return movies as MoviesResponse;
  } catch (error) {
    console.log(error);
  }
};
