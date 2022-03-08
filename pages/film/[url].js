import Head from "next/head";
import { useRouter } from "next/router";

import React from "react";

function FilmDetay({ movie }) {
  const router = useRouter();
  const { url } = router.query;

  return (
    <div className="movie">
      <Head>
        <title>{movie.title}</title>
      </Head>
      <div
        className="cover"
        style={{
          backgroundImage: `url(https://www.themoviedb.org/t/p/original/${movie.backdrop_path})`,
        }}
      ></div>
      <h3>{movie.title}</h3>
      <div className="summary">{movie.overview}</div>
    </div>
  );
}

export default FilmDetay;

export async function getServerSideProps({ params }) {
  const request = await fetch(
    `https://api.themoviedb.org/3/movie/${params.url}?api_key=3e79c3eea9af165067f427216d169899&language=en-US`
  );
  const movie = await request.json();

  return {
    props: {
      movie,
    },
  };
}
