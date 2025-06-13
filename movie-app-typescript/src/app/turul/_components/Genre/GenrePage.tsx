"use client";

import { MovieCard } from "@/components/MovieCard";
import { MovieCartLoading } from "@/components/MovieCardLoading";
import { getSelectedMovieGenre } from "@/utils/getSelectedMovieGenre";
import { parseAsInteger, useQueryState } from "nuqs";
import { useEffect, useState } from "react";
import { GenreSelect } from "./GenreSelect";
import { Genre, Movie } from "@/types";
import { PagePagination } from "../../../../components/Details/Paginations";
import { getGenre } from "@/utils/getGenre";

type GenrePageProps = {
  genreId: string;
};

export const GenrePage = ({ genreId }: GenrePageProps) => {
  const [moviesGenre, setMoviesGenre] = useState<Movie[]>([]);

  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const totalPages = 10;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSelectedMovies = async () => {
      if (!genreId) return;

      const response = await getSelectedMovieGenre(Number(genreId), page);

      if (!response) return;
      setMoviesGenre(response?.results);
    };
    getSelectedMovies();
    setLoading(false);
  }, []);

  return (
    <div>
      <div className="flex ">
        <GenreSelect genreId={Number(genreId)} />
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5">
          {loading &&
            moviesGenre?.map((movie) => {
              return <MovieCartLoading key={movie.id} />;
            })}
          {!loading &&
            moviesGenre?.map((movie) => {
              return <MovieCard movie={movie} key={movie.id} />;
            })}
        </div>
      </div>
      <PagePagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};
export default GenrePage;
