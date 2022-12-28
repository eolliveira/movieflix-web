import ImgLogin from "../../assets/img/login-img.svg";

import "./styles.css";
import BasicButton from "../../components/BasicButton";
import { useForm } from "react-hook-form";
import { requestBackendLogin, saveAuthData } from "../../http/requests";
import { useHistory } from "react-router-dom";

type LocationState = {
  from: string;
};

type FormData = {
  username: string;
  password: string;
};


const Login = () => {

  //const location = useLocation<LocationState>();
  //const { from } = location.state || { from: { pathname: '/movies' } };

  const history = useHistory();

  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((response) => {
        console.log(response.data);
        saveAuthData(response.data)
        history.push('/movies');
        //history.replace(from);
      })
      .catch((error) => {
        console.log(error);
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

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <input
              {...register("username")}
              type="text"
              className="form-control input-style"
              placeholder="Email"
              name="username"
            />
          </div>

          <div className="mb-5">
            <input
              {...register("password")}
              type="password"
              className="form-control input-style"
              placeholder="Senha"
              name="password"
            />
          </div>

          <button className="login-btn" type="submit">
            <BasicButton text={"fazer login"} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
