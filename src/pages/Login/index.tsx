import Button from "../../components/Button";
import ImgLogin from "../../assets/img/login-img.svg";

import "./styles.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-content mt-4">
        <h1>Avalie Filmes</h1>
        <p>Diga o que você achou do seu filme favorito</p>
        <div className="login-img">
          <img src={ImgLogin} alt="Imagem Login" />
        </div>
      </div>
      <div className="login-auth base-card">
        <h1 className="mb-5 mt-5">LOGIN</h1>

        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control login-input"
              placeholder="Email"
              name="username"
            />
          </div>

          <div className="mb-5">
            <input
              type="password"
              className="form-control login-input"
              placeholder="Senha"
              name="password"
            />
          </div>

          <div className="login-btn">
            <Button text={"fazer login"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
