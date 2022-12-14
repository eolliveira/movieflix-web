import "./styles.css";


type Props = {
  text: String;
};

const BasicButton = ({ text }: Props) => {
  return (
    <div className="btn-container btn-primary btn">
      <h2>{text}</h2>
    </div>
  );
};

export default BasicButton;
