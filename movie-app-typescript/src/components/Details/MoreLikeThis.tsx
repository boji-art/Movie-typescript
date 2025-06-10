"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MovieCartLoading } from "../MovieCardLoading";
import { MovieCard } from "../MovieCard";
import { getMoreLikeThis } from "@/utils/getMoreLikeThis";
import { Movie } from "@/types";

export const MoreLikeThis = ({ movieId}:{movieId:string}) => {
  const [moreLikeThis, setMoreLikeThis] = useState<Movie[]>([]);
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMoreLike = async () => {
      
        if (!movieId) return;
      const response = await getMoreLikeThis(movieId);

      setMoreLikeThis(response?.results);
    };
    getMoreLike();
    setLoading(false);
  }, [movieId]);
  console.log("similiar", movieId);

  
  return (
    <div className="px-1">
      <div className="flex justify-between  h-[36px] w-full">
        <h4 className="text-2xl font-semibold pl-1">More Like This</h4>
        <Link href={`/morelikethis/${movieId}`}>
          <button className="flex py-2 px-4 gap-1 text-sm font-medium ">
            See More <ArrowRight className="h-[16px] w-[16px]  " />
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5">
        {loading && moreLikeThis?.slice(0, 5).map((movie) => {
          return <MovieCartLoading key={movie.id}  />;
        })}
        {!loading && moreLikeThis?.slice(0, 5).map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};
