import MovieCard from "@/app/components/MovieCard";
import { Suspense } from "react";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://next-demo-eight-olive.vercel.app"
    : "http://localhost:3000";

async function fetchData(id) {
  const movieResp = await fetch(`${BASE_URL}/api/movies/${id}`);
  if (!movieResp.ok) {
    return {};
  }
  const movie = await movieResp.json();
  return movie;
}

export default async function Movie({ params }) {
  const movie = await fetchData(params.id);
  return (
    <div className="container mx-auto h-screen flex items-center justify-center">
      <Suspense fallback="Loading...">
        <MovieCard movie={movie} />
      </Suspense>
    </div>
  );
}
