"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Genre, } from "@/types";

import { getGenre } from "@/utils/getGenre";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Genre1 = ({ genreId }: { genreId: string }) => {
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
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="outline">
            <ChevronDown className="mr-2" />
            <p className="  hidden font-bold">Genres</p>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="ml-5 w-25">
          {genres.map((genre) => (
            <Link href={`/turul/${genre.id}`}>
              <DropdownMenuItem key={genre.id}>{genre?.name}</DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <h2 className="text-lg font-semibold mb-4">
        See lists of movies by genre
      </h2>
    </div>
  );
};
