import { Link } from "react-router-dom";
import "./styles.css";

const MovieCatalog = () => {
  return (
    <div className="movies-list">
      <h1>Tela listagem de filmes</h1>

      <Link className="mt-2" to={`/movies/${1}`}>
        Acessar /movies/1
      </Link>

      <Link className="mt-2" to={`/movies/${2}`}>
        Acessar /movies/2
      </Link>
    </div>
  );
};

export default MovieCatalog;
