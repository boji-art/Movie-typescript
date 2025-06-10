import { MovieDetails } from "@/types";
import { MovieTrailer } from "../MovieTrailer";

export const Trailer = ({ movie }: { movie: MovieDetails }) => {
  console.log({ movie });
  return (
    <div className="flex  flex-col-reverse  md:flex-row md:gap-3 gap-2">
      <img
        src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
        className="hidden md:block w-[100px] h-[148px] md:h-[428px]  md:w-[290px] "
      />
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          className="md:h-[428px] md:[760px]"
        />
        <div className="absolute bottom-5 left-5">
          {/* <MovieTrailer movieId={movie.id} /> */}
        </div>
      </div>
    </div>
  );
};
