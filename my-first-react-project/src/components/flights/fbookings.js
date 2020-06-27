import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "./fbookings.css"
import Cookies from "../../cookies";
import {reactLocalStorage} from 'reactjs-localstorage';
import { Button } from "react-bootstrap";
import moment from 'moment';
import { render } from 'react-dom';

const email= reactLocalStorage.get('email');

class Fbookings extends Component
{
   constructor(props){
       super(props);
       this.state = {
         bookingFrom:'',
         bookingTill: '',
         bookingFromSource: '',
         bookingFromDest: '',
         list:[]
        };

   }

componentDidMount() {

    this.getList();
    this.handleList();

}





getList = () => {

    var url='http://localhost:3000/customers/flights/' +email;
    fetch(url)
    .then(res => res.json())
    .then(list => this.setState({ list }))
         .catch(console.log);
}

handleList=() =>{
 const { list } = this.state;

     if(list != null){
     list.map(item => {
     alert(item.email);
       if(item.email == email)
       {
         if(item.bookingFrom==null)
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
                     You have a flight reservation from {item.bookingFromSource} to {item.bookingFromDest}<br/> on {moment(item.bookingFrom).format('DD MMM YY')} till {moment(item.bookingTill).format('DD MMM YY')}.
                     </div>

                   ))}
           </div>
           );
   }
}

export default Fbookings;

