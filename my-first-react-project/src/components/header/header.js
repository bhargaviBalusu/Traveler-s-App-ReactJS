import React, {Component} from 'react';
import "./header.css";

class Header extends Component{
  render() {
    return (
      <header>
      <div id="header-wrapper">
      	<div id="header" class="container">
           <div id="menu">
               			<ul>
               				<li class="current_page_item"><a href="#" accesskey="1" title="">Homepage</a></li>
               				<li><a href="https://www.google.com/flights" accesskey="2" title="">Flights</a></li>
               				<li><a href="https://www.google.com/travel/hotels" accesskey="3" title="">Hotels</a></li>
               				<li><a href="#" accesskey="5" title="">Trip Maker</a></li>
               				<li><a href="#" accesskey="5" title="">Contact Us</a></li>
               			</ul>
           </div>
        </div>
      </div>


      </header>
    );
  }
 }

export default Header;
