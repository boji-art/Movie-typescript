"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MovieCartLoading } from "./MovieCardLoading";
import { MovieCard } from "./MovieCard";
import { getTopRatedMovies } from "@/utils/getTopRatedMovies";
import { Movie } from "@/types";

export const TopRated = () => {
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getTopRated = async () => {
      const response = await getTopRatedMovies();
      
      if(!response)return; 

      setTopRatedMovies(response.results);
    };
    getTopRated();
    setLoading(false);
  }, []);
  return (
    <div className="px-5">
      <div className="flex justify-between  h-[36px] w-full ">
        <h3 className="text-2xl font-semibold pl-1">Top Rated</h3>

        <Link href={"/category/top_rated"}>
          {" "}
          <button className="flex py-2 px-4 gap-1 text-sm font-medium">
            See More <ArrowRight className="h-[16px] w-[16px]  " />
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5">
        {loading &&
          topRatedMovies.slice(0, 10).map((movie) => {
            return <MovieCartLoading key={movie.id}  />;
          })}
        {!loading &&
          topRatedMovies.slice(0, 10).map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
      </div>
    </div>
  );
};
