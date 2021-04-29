import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AdminPanel, Psychology } from "../../pages";

export const PsychologyRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Psychology} />
        <Route path="/admin" component={AdminPanel} />
      </Switch>
    </BrowserRouter>
  );
};
