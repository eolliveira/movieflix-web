import Button from "../../components/BasicButton";
import ReviewCard from "../../components/ReviewCard";

import "./styles.css";

const MovieDetails = () => {
  return (
    <div className="moviedetails-container">
      <h1>Tela detalhes do filme id: 1</h1>

      <div className="moviedetails-toEvaluation base-card mt-4">
        <form>
          <div className="mb-4">
            <input
              type="text"
              className="form-control input-style"
              placeholder="Deixe sua avaliação aqui"
              name="review"
            />
          </div>

          <Button text="Salvar avaliação" />
        </form>
      </div>

      <div className="moviedetails-assessments base-card mt-4">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
};

export default MovieDetails;
