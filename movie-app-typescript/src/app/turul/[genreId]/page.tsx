import { MovieDetails } from "@/components/Details/MovieDetails";
import GenrePage from "@/components/Genre/GenrePage";

const Page = async ({ params }: { params: Promise<{ movieId: string }> }) => {
  const { movieId } = await params;

  return (
    <div>
      <GenrePage movieId={Number(movieId)} />
    </div>
  );
};
export default Page;
