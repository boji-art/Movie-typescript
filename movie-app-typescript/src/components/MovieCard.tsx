import { Movie } from "@/types";
import { Star } from "lucide-react";
import Link from "next/link";

type MovieCardProps = {
  movie: Movie;
};

export const MovieCard = ({ movie }: MovieCardProps) => {
  const imgUrl = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}/original/${movie?.backdrop_path}`;

  return (
    <div className="w-fit p-3">
      <Link href={`/details/${movie.id}`}>
        <img
          src={imgUrl}
          className="h-[234px] w-[158px] rounded-t-lg md:h-[340px] md:w-[240px] object-cover "
        ></img>
      </Link>
      <div className="w-[158px] bg-gray-300 rounded-b-lg  md:w-[240px]">
        <div className="flex p-2 items-center text-sm text-gray-900 dark:text-white">
          <Star className="text-yellow-400 fill-yellow-400 " />
          <p className="w-[36] h-[16] pl-6px">
            {movie?.vote_average.toFixed(1)}
          </p>

          <p className="text-gray-500">/10</p>
        </div>
        <div>
          <h2 className=" h-[40px] text-md font-medium pl-2">{movie?.title}</h2>
        </div>
      </div>
    </div>
  );
};
