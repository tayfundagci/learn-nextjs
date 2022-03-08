import React from "react";
import Link from "next/link";

function Popular({ movies }) {
  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        {movies.results.map((movie, key) => (
          <Link href={`/film/${movie.id}`} key={key}>
            <a
              key={key}
              className="card bg-transparent text-center border border-dark p-3 m-3 carddd text-black "
              style={{
                width: "18rem",
                boxShadow: "5px 5px 5px rgb(100,100,100)",
                textDecoration: "none",
              }}
            >
              <div>
                <img
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">{movie.release_date}</p>
                  <p className="card-text">{movie.vote_average}</p>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Popular;
