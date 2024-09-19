import { NextResponse } from "next/server";

export const GET = async () => {
  const resp = await fetch("https://dummyapi.online/api/movies");
  const movies = await resp.json();
  return NextResponse.json(movies);
};
