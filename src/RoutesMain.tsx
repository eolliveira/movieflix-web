import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Login from "./pages/Login";
import history from "./util/history";
import MovieCatalog from "./pages/MovieCatalog";

const RoutesMain = () => {
  return (
    //<Router history={history}>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>

        <Route path="/movies">
          <MovieCatalog />
        </Route>

        
      </Switch>
      </BrowserRouter>
    //</Router>
  );
};

export default RoutesMain;
