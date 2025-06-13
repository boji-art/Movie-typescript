import { MovieCard } from "@/components/MovieCard";
import { MovieCartLoading } from "@/components/MovieCardLoading";
import { Movie } from "@/types";

import { getSeeMoreMovies } from "@/utils/ getSeeMoreMovies";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const [upComingMovies, setUpcomingMovies] = useState<Movie[] | null>(null);
  const categoryName = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!categoryName) return;
    const getUpComingMovies = async () => {
      const data = await getSeeMoreMovies(categoryName?.categoryName as string);

      setUpcomingMovies(data);
    };
    getUpComingMovies();
    setLoading(false);
  }, [categoryName]);

  return (
    <div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5">
        {loading &&
          upComingMovies?.map((movie) => <MovieCartLoading movie={movie} />)}
        {!loading &&
          upComingMovies?.map((movie) => <MovieCard movie={movie} />)}
      </div>
    </div>
  );
};

export default Page;
