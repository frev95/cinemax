import React from "react";

const Movies = ({ movies }) => {
  const imdb = "https://imdb.com/title/";

  return (
    <div className="movies">
      {movies.map((movie) => {
        <div className="movie" key={movie.imdbID}>
          <div className="movie-info">
            <img
              src={
                movie.poster !== "N/A"
                  ? movie.poster // affiche du film si elle existe
                  : "https://placehold.co/300x450/000000/FFF?text=affiche+non+disponible" // placeholder sinon
              }
              alt={movie.Title}
            />
            <h3>{movie.Title}</h3>
            <p>
              Voir les détails{" "}
              <a href={imdb + movie.imdbID} target="_blank">
                IMDB
              </a>
            </p>
          </div>
        </div>;
      })}
    </div>
  );
};

export default Movies;
