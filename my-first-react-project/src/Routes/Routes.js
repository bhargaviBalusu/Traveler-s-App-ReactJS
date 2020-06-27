import React, { Component, useEffect,useState } from "react";
import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import Flight from "../components/flights/flights";
import Fbooking from "../components/flights/fbookings.js";
import Hbooking from "../components/hotels/hbookings.js";
import Hotel from "../components/hotels/hotels";
import Welcome from "../components/login/welcome.js";
import ComingSoon from "../components/TripMaker/cS.js";
import WelcomeRegister from "../components/login/welcomeRegister.js";
import Login from "../components/login/login.js";
import Home from "../components/Home/home.js";
import history from "../history";
import getSessionCookie from "../cookies";
import App from "../App.js";



export default class Routes extends Component {




    render() {
        return (
            // <SessionContext.Provider value={session}>
             <Router history={history}>
          <Switch>
                <Route path="/Flight" component={Flight} />
                <Route path="/Home" component={Home} />
                <Route path="/Welcome" component={Welcome} />
                 <Route path="/ComingSoon" component={ComingSoon} />
                <Route path="/WelcomeRegister" component={WelcomeRegister} />
                 <Route path ="/Fbooking" component={Fbooking} />
                 <Route path ="/Hbooking" component={Hbooking} />
                <Route path ="/Login" component={Login} />
                <Route path="/Hotel" component={Hotel}/>

              </Switch>
            </Router>
         //</SessionContext.Provider>

        )
    }
}