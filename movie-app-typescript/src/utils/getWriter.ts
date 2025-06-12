import { CreditsType } from "@/types";
import { config } from "./config";

export const getCredits = async (movieId: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/${movieId}/credits?language=en-US`,
      config
    );
    const data = await response.json();

    return data as CreditsType;
  } catch (error) {
    console.log(error);
  }
};
