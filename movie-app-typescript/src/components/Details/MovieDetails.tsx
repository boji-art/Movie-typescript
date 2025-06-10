"use client";

import { Genre } from "@/components/Details/Genre";
import { MoreLikeThis } from "@/components/Details/MoreLikeThis";
import { Top } from "@/components/Details/Top";
import { Movie } from "@/types";
import { useEffect, useState } from "react";
import { MovieTrailer } from "../MovieTrailer";
import { getWriter } from "@/utils/getWriter";
import { Writer } from "./Writer";
import { getDetails } from "@/utils/getDetails";
import { Trailer } from "./MovieTrailer";

type MovieDetailsProps = {
  movieId: number;
};

export const MovieDetails = ({ movieId }: MovieDetailsProps) => {
  const [movie, setMovie] = useState<Movie[]>([]);
  const [writerId, setWriterId] = useState("");

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
    const getWriterId = async () => {
      const response = await getWriter(movieId);
      setWriterId(response);
    };
    getWriterId();
  }, [movieId]);

  return (
    <div>
      <Top movie={movie} />
      <div className="  gap-2">
        <Trailer movie={movie} />
        {/* <Genre movie={movie} /> */}
        {/* <Writer movie={movie} writerId={writerId} /> */}
      </div>
      <MoreLikeThis movieId={movie.id} />
    </div>
  );
};
