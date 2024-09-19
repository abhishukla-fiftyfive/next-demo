import MovieCard from "@/app/components/MovieCard";

const BASE_URL = "http://localhost:3000";

export default async function Movie({ params }) {
  const moviesResp = await fetch(`${BASE_URL}/api/movies/${params.id}`);
  const movie = await moviesResp.json();
  return (
    <div className="container mx-auto h-screen flex items-center justify-center">
      <MovieCard movie={movie} />
    </div>
  );
}
