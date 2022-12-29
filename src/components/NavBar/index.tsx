import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthContext";
import { getTokenData, isAuthenticated } from "../../util/Auth";
import history from "../../util/history";
import { removeAuthData } from "../../util/storage";
import "./styles.css";

const NavBar = () => {
  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleLoginClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    history.replace("/");
  };

  const handleLogoutClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAuthContextData({
      authenticated: false,
    });
    removeAuthData();
    history.replace("/");
  };

  return (
    <div className="navbar-container">
      <h1>MovieFlix</h1>

      {authContextData.authenticated ? (
        <button onClick={handleLogoutClick} className="navbar-logout">
          <p>Sair</p>
        </button>
      ) : (
        <button onClick={handleLoginClick} className="navbar-logout">
          <p>Entrar</p>
        </button>
      )}
    </div>
  );
};

export default NavBar;
