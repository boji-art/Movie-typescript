import { Button } from "@/components/ui/button";
import { Genre } from "@/types";
import { getGenre } from "@/utils/getGenre";
import Link from "next/link";
import { useEffect, useState } from "react";

type GenreSelectProps = {
  genreId: number | null;
};

export const GenreSelect = ({ genreId }: GenreSelectProps) => {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    const genress = async () => {
      const response = await getGenre();

      if (!response) return;

      setGenres(response?.genres);
    };
    genress();
  }, [genreId]);

  return (
    <div className="h-[200px] w-[400px] p-2 flex flex-wrap gap-2">
      {genres?.map((genre) => (
        <Link key={genre?.id} href={`/turul/${genre?.id}`}>
          <Button
            key={genre.id}
            variant={genreId === genre?.id ? "default" : "outline"}
          >
            {genre?.name}
          </Button>
        </Link>
      ))}
    </div>
  );
};
