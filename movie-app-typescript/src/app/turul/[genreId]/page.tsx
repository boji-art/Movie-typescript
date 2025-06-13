import { MovieDetails } from "@/components/Details/MovieDetails";
import GenrePage from "@/app/turul/_components/Genre/GenrePage";

const Page = async ({ params }: { params: Promise<{ genreId: string }> }) => {
  const { genreId } = await params;

  return (
    <div>
      <GenrePage genreId={genreId} />
    </div>
  );
};
export default Page;
