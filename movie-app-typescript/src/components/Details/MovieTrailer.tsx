import { Movie } from "@/types";
import { MovieTrailer } from "../MovieTrailer";

type TrailerProps = {
  movie: Movie;
};

export const Trailer = ({ movie }: TrailerProps) => {
  return (
    <div className="flex  flex-col-reverse  md:flex-row md:gap-3 gap-2">
      <img
        src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
        className="hidden md:block w-[100px] h-[148px] md:w-[330px] md:h-[530px] rounded-lg object-cover  "
      />
      <div className="relative ">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          className="md:h-[530px]  md:w-[1300px]  rounded-lg object-cover"
        />
        <div className="absolute bottom-5 left-5">
          <MovieTrailer movieId={movie.id} />
        </div>
      </div>
    </div>
  );
};
