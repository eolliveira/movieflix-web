import { Redirect, Route } from "react-router-dom";
import { isAuthenticated } from "../../http/requests";
import { Role } from "../../types/Role";

type Props = {
  path: string;
  children: React.ReactNode;
  roles?: Role[];
};

const PrivateRoute = ({ path, children, roles = [] }: Props) => {
  return (
    <Route
      path={path}
      render={({ location }) =>
        !isAuthenticated() ? (
          <Redirect
            to={{
              pathname: '/admin/auth/login',
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
