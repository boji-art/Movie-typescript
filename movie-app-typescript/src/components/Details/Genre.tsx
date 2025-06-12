import Link from "next/link";
import { Button } from "../ui/button";
import { Movie, MovieDetails } from "@/types";

type MovieCardProps = {
  movie: Movie;
};
export const Genre = ({ movie }: MovieCardProps) => {
  console.log(movie);
  return (
    <div>
      <div className="flex items-center justify-between gap-2 ">
        <div className="flex flex-col gap-2  ">
          <div className="flex gap-4 md:flex md:flex-row md:gap-2 md:p-3">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
              className="md:hidden w-[100px] h-[148px]"
            />
            <div>
              {movie?.genres?.map((genre) => (
                <Link href={`/turul/${genre.id} `} key={genre.id}>
                  <Button key={genre.id} variant="outline">
                    {genre.name}
                  </Button>
                </Link>
              ))}
              <p> {movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
