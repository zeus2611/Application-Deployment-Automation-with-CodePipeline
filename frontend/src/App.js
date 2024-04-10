import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { renderRoutes } from "./config/routes";
import "./common.scss";
import Cookie from "js-cookie";

let userData = Cookie.get("college_data");
if (userData) userData = JSON.parse(userData);

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Switch>
            {renderRoutes.map(([key, route]) => (
              <Route
                key={key}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
