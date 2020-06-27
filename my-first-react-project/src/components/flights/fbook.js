import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "./fbookings.css"
import Cookies from "../../cookies";
import {reactLocalStorage} from 'reactjs-localstorage';


const username= reactLocalStorage.get('username');
const list=[1, 2, 3, 4];




 function Fbooking()
{

  var url='http://localhost:3000/customers/username/' +username;
      fetch(url)
      .then(res => res.json())
      .then(list => this.setState({ list }))
           .catch(console.log);


 return(

          <div className="bcontainer">

           {list.map(item => {
                 return(
                     <div id ="fontContent" >
                     <ul>
                     <li>
                       <h3>I m a User</h3>

                     </li>
                     </ul>
                     </div>
                 )
                   })}
           </div>


           );

}

const rootElement= document.getElementById("root");
ReactDOM.render(<Fbooking />, rootElement);
export default Fbooking;