import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import NavBar from "../components/NavBar";
import Login from "../pages/Login";
import MovieDetails from "../pages/MovieDetails";
import Movies from "../pages/Movies";

const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>

        <Route path="/movies" exact>
          <Movies />
        </Route>

        <Route path="/movies/:movieId/reviews">
          <MovieDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
