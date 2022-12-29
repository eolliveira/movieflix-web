import Button from "../../components/BasicButton";
import ReviewCard from "../../components/ReviewCard";
import { useEffect, useState } from "react";
import { Review } from "../../types/Review";

import { requestBackend } from "../../http/requests";
import { AxiosRequestConfig } from "axios";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import { hasAnyHole } from "../../util/Auth";

import "./styles.css";
import Loading from "../../components/Loading";

type urlParams = {
  movieId: string;
};

type FormData = {
  text: string;
  movieId: number;
};

const MovieDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  const { movieId } = useParams<urlParams>();
  const [isLoading, setIsLoading] = useState(false);
  const [saveReviewLoading, setSaveReviewLoading] = useState(false);
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    setIsLoading(true);
    const params: AxiosRequestConfig = {
      method: "GET",
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };

    requestBackend(params)
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleSaveReview = (formData: FormData) => {
    setSaveReviewLoading(true);

    const params: AxiosRequestConfig = {
      method: "POST",
      url: `/reviews`,
      withCredentials: true,
      data: {
        text: formData.text,
        movieId,
      },
    };

    requestBackend(params)
      .then((response) => {
        const clone = [...reviews];
        clone.push(response.data);
        setReviews(clone);
        setValue("text", "");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setSaveReviewLoading(false);
      });
  };

  return (
    <div className="moviedetails-container">
      <h1>Tela detalhes do filme id: {movieId}</h1>

      {hasAnyHole(["ROLE_MEMBER"]) && (
        <div className="moviedetails-toEvaluation base-card mt-4">
          <form onSubmit={handleSubmit(handleSaveReview)}>
            <div className="mb-4">
              <input
                {...register("text", {
                  required: "Campo requerido!",
                })}
                type="text"
                className={`form-control input-style ${
                  errors.text ? "is-invalid" : ""
                }`}
                placeholder="Deixe sua avaliação aqui"
                name="text"
              />
              {
                <div className="invalid-feedback d-block">
                  {errors.text?.message}
                </div>
              }
            </div>

            {saveReviewLoading ? (
              <Loading />
            ) : (
              <button>
                <Button text="Salvar avaliação" />
              </button>
            )}
          </form>
        </div>
      )}

      {isLoading ? (
        <Loading />
      ) : (
        <div className="moviedetails-assessments base-card mt-4">
          {reviews?.map((review) => (
            <ReviewCard review={review} key={review.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
