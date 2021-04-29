import React from  'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Psychologist} from "../../pages";

export const PsyRouters = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/home" component={Psychologist} />
            </Switch>
        </BrowserRouter>
    )
}