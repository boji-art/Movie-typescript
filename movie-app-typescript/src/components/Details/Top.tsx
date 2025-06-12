import { Movie } from "@/types";
import { StarIcon } from "lucide-react";
type MovieCardProps = {
  movie: Movie;
};

export const Top = ({ movie }: MovieCardProps) => {
  console.log(movie);
  return (
    <div className="md: pl-4 ">
      <h3 className="font-bold text-3xl text-gray-900">{movie?.title}</h3>
      <div className="flex  items-center  justify-between">
        <div className="flex gap-2">
          <p>{movie?.release_date} *</p>
          <p>PG*</p>
          <p>
            {Math.floor(movie?.runtime / 60)}h {movie?.runtime % 60}m
          </p>
        </div>
        <div className="flex flex-col gap-1 items-center text-right">
          <p className=" hidden md:text-normal md: text-gray-900 ">Rating</p>
          <div className="flex items-center gap-3 ">
            <StarIcon className="text-yellow-400 fill-yellow-400 " />

            <div className="text-gray-900 text-sm dark:text-gray-300 flex flex-col">
              <div className="flex items-center gap-1">
              <p className="w-[36] h-[16] text-md">
                {movie?.vote_average?.toFixed(1)}
              </p>
              <p className="text-gray-500 text-md">/10</p></div>
              <div className="md:flex md:flex-col md:items-center ">
               
              </div>
              <p className="text-gray-600 text-md  ">{movie?.vote_count?.toFixed(1)}votes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
