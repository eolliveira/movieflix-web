import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import MovieCatalog from "./pages/MovieCatalog";
import PrivateRoute from "./components/PrivateRoute";
import MovieDetails from "./pages/MovieDetails";

const Routes = () => {
  return (
    //<Router history={history}>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>

        <PrivateRoute path="/movies" exact >
          <MovieCatalog />
        </PrivateRoute>

        <PrivateRoute path="/movies/:movieId">
          <MovieDetails />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
    //</Router>
  );
};

export default Routes;
