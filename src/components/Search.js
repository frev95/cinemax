import React from "react";

const Search = ({ search, setSearch, searchMovies }) => {
  // paramétrage de la fonction handleSubmit pour récupérer la valeur
  const handleSubmit = (e) => {
    e.preventDefault(); // la valeur est récupérée
    searchMovies(search); // la valeur est passée en argument à la fonction de recherche
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Quel film recherchez-vous ?"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Rechercher</button>
      </form>
    </div>
  );
};

export default Search;
