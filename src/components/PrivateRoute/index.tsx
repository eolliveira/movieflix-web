import { Redirect, Route } from "react-router-dom";
import { isAuthenticated } from "../../util/Auth";

type Props = {
  path: string;
  children: React.ReactNode;
  exact?: boolean
};

const PrivateRoute = ({ path, children, exact }: Props) => {
  return (
    <Route
      path={path}
      render={({ location }) =>
        !isAuthenticated() ? (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        ) : (
          children
        )
      }
    />
  );
};

export default PrivateRoute;
