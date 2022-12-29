import "./assets/custom.scss";
import "./App.css";
import RoutesMain from "./Routes";
import { AuthContext, AuthContextData } from "./AuthContext";
import { useState } from "react";

function App() {
  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false,
  });

  return (
    <AuthContext.Provider value={{ authContextData, setAuthContextData }}>
      <RoutesMain />
    </AuthContext.Provider>
  );
}

export default App;
