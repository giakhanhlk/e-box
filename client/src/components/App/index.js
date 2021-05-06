import { ConnectedRouter } from "connected-react-router/immutable";
import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "../../../config/routes";
import { history } from "../../redux/store";
import "./App.scss";

const App = () => {
  return (
    <ConnectedRouter history={history}>
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.isExact}
                component={route.main}
              />
            ))}
          </Switch>
        </Suspense>
      </>
    </ConnectedRouter>
  );
};

export default App;
