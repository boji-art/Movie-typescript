import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { Button } from "./ui/button";
import YouTube from "react-youtube";
import { useEffect, useState } from "react";
import { getMovieTrailer } from "@/utils/getMovieTrailer";
import { MovieTrailerType } from "@/types";

type MovieTrailerProps = { movieId: number };

export const MovieTrailer = ({ movieId }: MovieTrailerProps) => {
  const [trailer, setTrailer] = useState<MovieTrailerType[]>([]);

  useEffect(() => {
    const getMovieTrailerById = async () => {
      if (!movieId) return;
      try {
        console.log("end movie bna");
        const data = await getMovieTrailer(movieId);
        console.log("this is data", data);

        setTrailer(data?.results);
      } catch (error) {
        console.error("Failed to fetch movie trailer", error);
      }
    };
    getMovieTrailerById();
  }, [movieId]);

  const movieTrailer = trailer?.find(
    (video) => video.name === "Official Trailer"
  );

  // console.log(trailer);

  // console.log(movieTrailer);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Watch Trailer</Button>
      </DialogTrigger>
      <DialogContent className="max-w-fit! bg-black border-black p-0 overflow-hidden">
        <DialogTitle></DialogTitle>
        <div className=" w-[300px] h-[300px] md:w-[1000px] md:h-[800px]">
          <YouTube
            className="h-full w-full"
            videoId={movieTrailer?.key}
            opts={{
              width: "100%",
              height: "100%",
              playerVars: {
                autoplay: 1,
              },
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
