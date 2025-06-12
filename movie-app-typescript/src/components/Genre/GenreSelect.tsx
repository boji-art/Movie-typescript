import { Button } from "@/components/ui/button";
import { Genre } from "@/types";
import { getGenre } from "@/utils/getGenre";
import Link from "next/link";
import { useEffect, useState } from "react";

export const GenreSelect = ({ genreId }:{genreId:string}) => {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    const genress = async () => {
      const response = await getGenre();

      setGenres(response?.genres);
    };
    genress();
  }, [genreId]);

  return (
    <div className="h-[200px] w-[400px] p-2 flex flex-wrap gap-2">
      {genres.map((genre) => (
        <Link key={genre?.id} href={`/turul/${genre?.id}`}>
          <Button
            key={genre.id}
            variant={genreId === String(genre?.id) ? "default" : "outline"}
          >
            {genre?.name}{" "}
          </Button>
        </Link>
      ))}
    </div>
  );
};
