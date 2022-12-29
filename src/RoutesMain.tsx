import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Login from "./pages/Login";
import history from "./util/history";
import MovieCatalog from "./pages/MovieCatalog";
import PrivateRoute from "./components/PrivateRoute";

const RoutesMain = () => {
  return (
    //<Router history={history}>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>

        <PrivateRoute path="/movies">
          <MovieCatalog />
        </PrivateRoute>

        
      </Switch>
      </BrowserRouter>
    //</Router>
  );
};

export default RoutesMain;
