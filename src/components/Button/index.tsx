import "./styles.css";

type Props = {
  text: String;
};

//desestrutura text do obj Props
const Button = ({ text }: Props) => {
  return (
    <div className="btn-container btn-primary btn">
      <h2>{text}</h2>
    </div>
  );
};

export default Button;
