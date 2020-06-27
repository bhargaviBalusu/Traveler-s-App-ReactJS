import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "./hbookings.css"
import Cookies from "../../cookies";
import {reactLocalStorage} from 'reactjs-localstorage';
import { Button } from "react-bootstrap";
import moment from 'moment';
import { render } from 'react-dom';

const username= reactLocalStorage.get('username');

class Hbookings extends Component
{
   constructor(props){
       super(props);
       this.state = {
         checkIn:'',
         checkOut: '',
         hotelName: '',
         list:[]
        };

   }

componentDidMount() {

    this.getList();

}


getList = () => {

    var url='http://localhost:3000/customers/hotels/' +username;
    fetch(url)
    .then(res => res.json())
    .then(list => this.setState({ list }))
         .catch(console.log);
}
handleList=() =>{
 const { list } = this.state;

     if(list != null){
     list.map(item => {
     alert(item.username);
       if(item.username == username)
       {
         if(item.checkIn==null)
         {
                     document.getElementById("fontContent").innerHTML =
                     "Your No Reservations";
         }
       }
     }
     );
   }
}



   render() {
   const { list } = this.state;
        return(

          <div className="bcontainer">

           {list.map((item, index) => (

                     <div id ="fontContent" key={index}>
                     You have a hotel reservation at {item.hotelName} <br/> from {moment(item.checkIn).format('DD MMM YY')} till {moment(item.checkOut).format('DD MMM YY')}.
                     </div>

                   ))}
           </div>
           );
   }
}

export default Hbookings;

