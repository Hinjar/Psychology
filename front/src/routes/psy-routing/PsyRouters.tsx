import React from "react";
import { Route, Switch } from "react-router-dom";
import { Psychologist } from "../../pages";
import { Admin } from "../../pages/admin/Admin";
import "./PsyRouters.css";

export const PsyRouters = () => {
  return (
    <Switch>
      <Route exact path="/" component={Psychologist} />
      <Route path="/:date" component={Psychologist} />
      <Route path="/admin" component={Admin} />
    </Switch>
  );
};
