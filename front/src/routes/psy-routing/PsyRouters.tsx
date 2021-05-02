import React from "react";
import { Route, Switch } from "react-router-dom";
import { Psychologist } from "../../pages";
import { Admin } from "../../pages/admin/Admin";

export const PsyRouters = () => {
  return (
    <Switch>
      <Route path="/" component={Psychologist} />
      <Route path="/admin" component={Admin} />
    </Switch>
  );
};
