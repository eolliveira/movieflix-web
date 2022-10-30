import "./assets/custom.scss";
import "./App.css";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <>
      <NavBar />
      {/* <Login /> */}
      <MovieDetails />
    </>
  );
}

export default App;
