import { Movie } from "@/types";
import { Link, StarIcon } from "lucide-react";
import { MovieTrailer } from "./MovieTrailer";
type MovieCardProps = {
  movie: Movie;
};
export const MovieCarouselItem = ({ movie }: MovieCardProps) => {
  console.log("aaaaaaaa", movie);

  return (
    <div className="w-full ">
      <div className=" md:flex md:relative max-w-[1280px]">
        <Link href={`/details/${movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            className="h-[246px]  md:h-[600px] w-full object-cover lg:[1500px ]"
          />
        </Link>
        <div className="w-[375px] h-[264px] p-2 md:absolute  md:w-[404px] md:h-[264px]  md:py-[140px] md:px-[60px]">
          <div className="flex justify-between p-2 md:flex-col">
            <div className="md:text-white">
              <p className="text-sm ">Now Playing:</p>
              <h3 className="text-2xl font-bold">{movie.title}</h3>
            </div>
            <div className="flex">
              <StarIcon className="text-yellow-300 fill-yellow-300 " />
              <p className="w-[36] h-[16] pl-6px text-lg md:text-white">
                {" "}
                {movie?.vote_average.toFixed(1)}
              </p>
              <p className="text-gray-500 text-md">/10</p>
            </div>
          </div>
          <div className="md:text-white md:w-[302px] md:h-[80px] md:text-sm md:">
            <p className="py-2">{movie.overview}</p>
            <MovieTrailer movieId={movie.id} />
          </div>
        </div>
      </div>
    </div>
  );
};
