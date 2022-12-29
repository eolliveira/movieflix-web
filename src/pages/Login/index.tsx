import ImgLogin from "../../assets/img/login-img.svg";

import "./styles.css";
import BasicButton from "../../components/BasicButton";
import { useForm } from "react-hook-form";
import { requestBackendLogin } from "../../http/requests";
import { useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import { saveAuthData } from "../../util/storage";
import { AuthContext } from "../../AuthContext";
import { getTokenData } from "../../util/Auth";
import Loading from "../../components/Loading";

type FormData = {
  username: string;
  password: string;
};

const Login = () => {
  const { setAuthContextData } = useContext(AuthContext);

  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {

    setIsLoading(true);

    requestBackendLogin(formData)
      .then((response) => {
        setError(false);
        saveAuthData(response.data);

        setAuthContextData({
          authenticated: true,
          tokenData: getTokenData(),
        });

        history.push("/movies");
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      })
      .finally(() => {
        setIsLoading(false)
      });
  };

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
        {error && (
          <div className="alert alert-danger">
            Falha ao efetuar o Login, verifique suas credênciais!
          </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="invalid-feedback d-block">
            {errors.username?.message}
          </div>
          <div className="mb-3">
            <input
              {...register("username", {
                required: "campo requerido!",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email inválido",
                },
              })}
              type="text"
              className={`form-control input-style ${
                errors.username ? "is-invalid" : ""
              }`}
              placeholder="Email"
              name="username"
            />
          </div>

          <div className="invalid-feedback d-block">
            {errors.password?.message}
          </div>
          <div className="mb-5">
            <input
              {...register("password", {
                required: "campo requerido!",
              })}
              type="password"
              className="form-control input-style"
              placeholder="Senha"
              name="password"
            />
          </div>

          {isLoading ? (
            <Loading />
          ) : (
            <button className="login-btn" type="submit">
              <BasicButton text={"fazer login"} />
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
