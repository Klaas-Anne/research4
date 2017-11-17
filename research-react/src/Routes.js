import React from "react";
import {Route, Switch} from "react-router-dom";
import App from "./App"
import Currentdate from "./Currentdate"

export default () =>
    <Switch>
        <Route path="/" exact component={App}/>
        <Route path="/currentdate" exact component={Currentdate}/>
    </Switch>;