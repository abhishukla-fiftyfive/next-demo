import MovieCard from "@/app/components/MovieCard";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://next-demo-109lu7x47-abhisheks-projects-54851530.vercel.app"
    : "http://localhost:3000";

export default async function Movie({ params }) {
  const moviesResp = await fetch(`${BASE_URL}/api/movies/${params.id}`);
  const movie = await moviesResp.json();
  return (
    <div className="container mx-auto h-screen flex items-center justify-center">
      <MovieCard movie={movie} />
    </div>
  );
}
