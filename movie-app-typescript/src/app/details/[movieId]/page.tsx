import { MovieDetails } from "@/components/Details/MovieDetails";

const Page = async ({ params }: { params: Promise<{ movieId: string }> }) => {
  const { movieId } = await params;

  return (
    <div>
      <MovieDetails movieId={Number(movieId)} />
    </div>
  );
};
export default Page;
