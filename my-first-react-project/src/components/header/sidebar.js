import React, { useEffect, Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import Cookies from "../../cookies";
import history from "../../history.js";
import {reactLocalStorage} from 'reactjs-localstorage';


class Sidebar extends Component{

constructor(props){
    super(props);
    this.LogoutHandler = this.LogoutHandler.bind(this);
}

LogoutHandler = () => {
      Cookies.remove("session");
      reactLocalStorage.remove('email');
      reactLocalStorage.remove('username');
      history.push("/Home");
    }

render(){


  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/Fbooking" >
        Flight Bookings
      </a>

      <a className="menu-item" href="/Hbooking">
        Hotel Bookings
      </a>

      <a className="menu-item" href="/ComingSoon">
        Your Trips
      </a>

      <a className="menu-item" href="/Home" onClick={this.LogoutHandler}>
        SignOut
      </a>


    </Menu>
  );
}
}
export default Sidebar;