import React, {Component} from 'react';

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import "./header.css";
import SideBar from './sidebar.js';
import Login from "../../components/login/login.js";
import "./sidebar.css";
import { Button } from "react-bootstrap";
import history from "../../history.js"

class Header extends Component{
  constructor(props){
      super(props);

      }



   render(){
   return (
      <header>
      <div id="header-wrapper">
        <SideBar />
      	<div id="header" class="container">
           <div id="menu">

               			<ul>
               				<li class="current_page_item"><a href="/Home" accessKey="1" title="">Homepage</a></li>
               				<li><a href="/Flight">Flights</a></li>
               				<li><a href="/Hotel" accessKey="3" title="">Hotels</a></li>
               				<li><a href="/ComingSoon" title="">Trip Maker</a></li>
               				<li class="current_pge_item"><a href="/Login" y="5" title="">Login/SignUp</a></li>
               			</ul>
           </div>
        </div>
        </div>


         </header>





    );
  }
}

export default Header;

