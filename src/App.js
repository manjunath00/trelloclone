import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Lists from "./components/Lists";
import CardModal from "./components/CardModal";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Dashboard} />
        <Route exact={true} path="/b/:id/:name" component={Lists} />
        <Route exact={false} path="/c/:id/:name" component={CardModal} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
