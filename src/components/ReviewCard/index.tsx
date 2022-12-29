import StarImg from "../../assets/img/star.svg";
import { Review } from "../../types/Review";

import "./styles.css";

type Props = {
  review: Review
}

const ReviewCard = ( { review } : Props ) => {
  return (
    <div className="review-container">
      <div className="review-user-container mt-4">
        <img src={StarImg} alt="star" />
        <h2>{review.user.name}</h2>
      </div>
      <p className="mt-2">
       {review.text}
      </p>
      <div className="review-assessments"></div>
    </div>
  );
};

export default ReviewCard;
