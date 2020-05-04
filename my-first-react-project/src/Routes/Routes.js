import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Accounts from "./components/pages/accounts.js";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>

                    <Route path="/Accounts" component={Accounts} />
                </Switch>
            </Router>
        )
    }
}