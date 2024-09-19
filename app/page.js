import dynamic from "next/dynamic";
import Link from "next/link";

const MovieCard = dynamic(() => import("./components/MovieCard"), {
  ssr: false,
});

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://next-demo-109lu7x47-abhisheks-projects-54851530.vercel.app"
    : "http://localhost:3000";

async function fetchData() {
  const moviesResp = await fetch(`${BASE_URL}/api/movies`);
  if (!moviesResp.ok) {
    return [];
  }
  const movies = await moviesResp.json();
  return movies;
}

export default async function Home() {
  const movies = await fetchData();

  return (
    <div className="container mx-auto p-2">
      <div className="grid grid-cols-3 gap-4">
        {movies.map((movie) => (
          <Link href={`/movie/${movie.id}`} key={movie.id}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
}
