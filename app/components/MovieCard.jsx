import Image from "next/image";

const MovieCard = ({ movie }) => {
  return (
    <div
      className="bg-blue-100 shadow-lg p-2 rounded-md flex items-center gap-4"
      key={movie.id}
    >
      <Image
        src={`https://avatar.iran.liara.run/username?username=${movie.movie}`}
        height={100}
        width={100}
        alt={movie.movie}
      />
      <div className="flex flex-col gap-3">
        <h2 className="text-yellow-600 font-bold">Rating: {movie.rating}</h2>
        <h3 className="text-lg font-bold">Movie: {movie.movie}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
