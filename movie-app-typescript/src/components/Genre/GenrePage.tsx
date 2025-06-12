"use client";
import { PagePagination } from "@/component /Detail-movie/Pagination";
import { MovieCard } from "@/components/MovieCard";
import { MovieCartLoading } from "@/components/MovieCardLoading";
import { getSelectedMovieGenre } from "@/utils/getSelectedMovieGenre";
import { parseAsInteger, useQueryState, useQueryStates } from "nuqs";
import { useEffect, useState } from "react";
import { GenreSelect } from "./GenreSelect";
import { MoviesResponse } from "@/types";

export const GenrePage = () => {
 
  const [movieGenre, setMovieGenre] = useQueryState([]);

  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const totalPages = 10;
     const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!genreId) return;
    const getSelectedMovies = async () => {
      const response = await getSelectedMovieGenre(genreId, page);
      setMovieGenre(response?.results);
    };
    getSelectedMovies();
    setLoading(false);
  }, [genreId, page]);

  return (
    <div>
    
      <div className="flex ">
        <GenreSelect genreId={genreId} />
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5">
          {loading && movieGenre?.map((movie) => {
            return <MovieCartLoading movie={movie} key={movie.id} />;
          })}
          {!loading && movieGenre?.map((movie) => {
            return <MovieCard movie={movie} key={movie.id} />;
          })}
        </div>
      </div>
      <PagePagination page={page} setPage={setPage} totalPages={totalPages} />
     
    </div>
  );
};
export default GenrePage;
