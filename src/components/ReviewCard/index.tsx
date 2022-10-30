import StarImg from "../../assets/img/star.svg";

import "./styles.css";

const ReviewCard = () => {
  return (
    <div className="review-container">
      <div className="review-user-container mt-4">
        <img src={StarImg} alt="star" />
        <h2>Maria Silva</h2>
      </div>
      <p className="mt-2">
        Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
      </p>
      <div className="review-assessments"></div>
    </div>
  );
};

export default ReviewCard;
