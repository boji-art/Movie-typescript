"use client";

import { Genre } from "@/components/Details/Genre";
import { MoreLikeThis } from "@/components/Details/MoreLikeThis";
import { Top } from "@/components/Details/Top";
import { CreditsType, Movie } from "@/types";
import { useEffect, useState } from "react";

import { getCredits } from "@/utils/getWriter";
import { Credits } from "./Credits";
import { getDetails } from "@/utils/getDetails";
import { Trailer } from "./MovieTrailer";

type MovieDetailsProps = {
  movieId: number;
};

export const MovieDetails = ({ movieId }: MovieDetailsProps) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [credits, setCredits] = useState<CreditsType | null>(null);

  useEffect(() => {
    if (!movieId) return;
    const getDetailPage = async () => {
      const response = await getDetails(movieId);
      setMovie(response);
    };
    getDetailPage();
  }, [movieId]);

  useEffect(() => {
    if (!movieId) return;
    const fetchCredits = async () => {
      const response = await getCredits(movieId);
      if (!response) return;

      setCredits(response);
    };
    fetchCredits();
  }, [movieId]);

  if (!movie || !credits) return <p>loading</p>;

  return (
    <div>
      <Top movie={movie} />
      <div className="space-y-2 gap-2 md:gap-4 md:space-y-4">
        <Trailer movie={movie} />
        <Genre movie={movie} />
        <Credits credits={credits} />
      </div> 
      <div className="mt-8 md:mt-12">
      <MoreLikeThis movieId={movie.id} />
      </div>
    </div>
  );
};
