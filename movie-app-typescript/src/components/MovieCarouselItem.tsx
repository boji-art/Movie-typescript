import { StarIcon } from "lucide-react";
import Link from "next/link";

import { MovieTrailer } from "./MovieTrailer";
import { Movie } from "@/types";

type MovieCardProps = {
  movie: Movie;
};

export const MovieCarouselItem = ({ movie }: MovieCardProps) => {
  return (
    <div className=" md:flex md:relative  max-w-screen md:h-[600px]md:overflown-hidden ">
      <Link href={`/details/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          className="  md:h-[600px] object-cover rounded-lg w-[1500px]  md:rounded-lg md:object-cover md:shadow-lg md:shadow-black/50"
        />
      </Link>
      <div className="w-[375px] h-[264px] p-2 md:absolute  md:w-[404px] md:h-[264px]  md:py-[80px] md:px-[100px]">
        <div className="flex justify-between p-2 md:flex-col">
          <div className="text-black-200 md:text-white">
            <p className="text-lg md:text-xl font-light">Now Playing:</p>
            <h3 className=" text-3xl md:text-4xl lg:text-5xl font-bold">
              {movie.title}
            </h3>
          </div>
          <div className="flex items-center gap-2 text-lg">
            <StarIcon className="text-yellow-400 fill-yellow-400 " />
            <p className="w-[36] h-[16] pl-6px text-lg md:text-white">
              {" "}
              {movie?.vote_average.toFixed(1)}/10
            </p>
          </div>
        </div>
        <div className="md:text-white md:w-[302px] md:h-[80px] md:text-sm md:">
          <p className="text-sm md:text-base text-black-200 py-2">{movie.overview}</p>
          <MovieTrailer movieId={movie.id} />
        </div>
      </div>
    </div>
  );
};
