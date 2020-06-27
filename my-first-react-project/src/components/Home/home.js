import React, { useState , Component } from 'react';
import { Button } from "react-bootstrap";
import Header from "../../components/header/header.js";
import "./home.css";
import Mid from "./mid.js"

class Home extends Component
{

 render(){
  return (

  <div >
    <Header/>
    <Mid/>
   </div>

  );
 }

}
export default Home;