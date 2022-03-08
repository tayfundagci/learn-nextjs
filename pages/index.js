import Head from "next/head";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Popular from "../components/popular";

export default function Home({ movies }) {
  return (
    <>
      <Head>
        <title>Popular Films</title>
        <link rel="icon" href="/favicon.ico" />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        ></link>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
          integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
          integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
          crossorigin="anonymous"
        ></script>
      </Head>

      <h3 style={{ textAlign: "center", fontSize: "30px", marginTop: "20px" }}>
        Popular Films
      </h3>

      <Popular movies={movies} />
      <br />
    </>
  );
}

// fetching

export async function getServerSideProps() {
  const request =
    await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=3e79c3eea9af165067f427216d169899&language=en-US&page=1
  `);
  const movies = await request.json();
  return {
    props: {
      movies,
    },
  };
}
