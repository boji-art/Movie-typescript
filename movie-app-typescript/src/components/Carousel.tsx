"use client";
import { getNowPlayingMovies } from "@/utils/getNowPlayingMovies";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { HomePageLoading } from "./HomePageLoading";
import { MovieCarouselItem } from "./MovieCarouselItem";

export const MovieCarousel = () => {
  const [nowPlaying, setNowPlayingMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const getMovies = async () => {
      const response = await getNowPlayingMovies();

      setNowPlayingMovie(response.results);
      setLoading(false);
    };
    getMovies();
  }, []);

  return (
    <Carousel
      className="relative w-full mx-auto max-w-[1280px] over-flown"
      plugins={
        [
          // Autoplay({
          //   delay: 5000,
          // }),
        ]
      }
    >
      <CarouselContent>
        {/* {loading && <HomePageLoading />} */}
        {nowPlaying?.slice(0, 5).map((movie, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <MovieCarouselItem movie={movie} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" md:left-5" />
      <CarouselNext className="md:right-5" />
    </Carousel>
  );
};
