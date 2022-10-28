import "./assets/custom.scss";
import "./App.css";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import Movies from "./pages/Movies";

function App() {
  return (
    <>
      <NavBar />
      {/* <Login /> */}
      <Movies />
    </>
  );
}

export default App;
