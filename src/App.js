import "./styles.css";
import { useEffect, useState } from "react";
import cinemaxLogo from "./assets/cinemax-lg.png";
import Search from "./components/Search"; // import du composant
import Movies from "./components/Movies"; // import du composant

export default function App() {
  // lien avec l'API OMDb
  const API = "https://www.omdbapi.com/?apikey=ec5aa5fc";

  // états (states)
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  // fonction de recherche
  const searchMovies = async (searchValue) => {
    const response = await fetch(`${API}&s=${searchValue}`); // fetch dans l'API
    const data = await response.json();
    if (data.Search) {
      setMovies(data.Search);
    } // tableau mis à jour si l'API retourne des données

    console.log(data.Search); ///// visualisation des données retournées par l'API
  };

  // lancement de la recherche
  useEffect(() => {
    searchMovies("Hunger Games");
  }, []);

  return (
    <div className="App">
      <header>
        <img src={cinemaxLogo} className="logo" alt="logo cinemax" />
        {/* interpolation du logo */}
        <Search
          search={search}
          setSearch={setSearch}
          searchMovies={searchMovies}
        />
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}
