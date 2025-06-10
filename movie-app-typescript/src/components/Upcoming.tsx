"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MovieCartLoading } from "./MovieCardLoading";
import { MovieCard } from "./MovieCard";
import { getUpcoming } from "@/utils/getUpcoming";
import { Movie } from "@/types";

export const Upcoming = () => {
  const [upComingMovies, setUpcomingMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUpcomingMovies = async () => {
      const response = await getUpcoming();

      if (!response) return;

      setUpcomingMovies(response.results);
    };
    getUpcomingMovies();
    setLoading(false);
  }, []);

  return (
    <div className="px-5">
      <div className="flex justify-between  h-[36px] w-full">
        <h3 className="text-2xl font-semibold pl-1">Upcoming</h3>
        <Link href={`/category/upcoming`}>
          <button className="flex py-2 px-4 gap-1 text-sm font-medium ">
            See More <ArrowRight className="h-[16px] w-[16px]" />
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5">
        {loading &&
          upComingMovies.slice(0, 10).map((movie) => {
            return <MovieCartLoading key={movie.id} />;
          })}
        {!loading &&
          upComingMovies.slice(0, 10).map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
      </div>
    </div>
  );
};
