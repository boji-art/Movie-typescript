"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Genre, Movie, MovieDetails } from "@/types";

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
            <ChevronDown className="" />
            <p className="">Genres</p>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          {genres.map((genre) => (
            <Link href={`/turul/${genre.id}`}>
              <DropdownMenuItem key={genre.id}>{genre?.name}</DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
