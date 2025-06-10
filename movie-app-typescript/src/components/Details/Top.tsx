import { Movie } from "@/types";
import { StarIcon } from "lucide-react";
type MovieCardProps = {
  movie: Movie;
};


export const Top = ({ movie }:MovieCardProps) => {
  return (
    <div className="md: pl-4 ">
      <h3 className="text-2xl font-bold">{movie?.title}</h3>
      <div className="flex  items-center ">
        <p>{movie?.release_date} · PG · 2h 40m</p>
        <div className="flex md:items-center ">
          <StarIcon className="text-yellow-300 fill-yellow-300 " />
          
          <div className="flex gap-1 md:flex-col">
            <p className="invisible md:visible ">rating</p>
            <div className="md:flex md:flex-row">
            <p className="w-[36] h-[16] pl-6px text-md">  {movie?.vote_average}</p>
            <div className="md:flex md:flex-col md:items-center ">
            <p className="text-gray-500 text-md">/10</p>
            </div>
            <p className="text-gray-500 text-md">{movie?.vote_count}</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};
