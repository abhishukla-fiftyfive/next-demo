import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const resp = await fetch(`https://dummyapi.online/api/movies/${params.id}`);
  const movie = await resp.json();
  return NextResponse.json(movie);
};
