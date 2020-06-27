import React, { useState } from 'react';
import { Component } from 'react';
import { Button } from "react-bootstrap";
import {reactLocalStorage} from 'reactjs-localstorage';
import history from "../../history.js";
import "./css/bootstrap.css";
import "./css/bootstrap.css.map";
import "./css/bootstrap.min.css";
import "./css/bootstrap-theme.css";
import "./css/bootstrap-theme.css.map";
import "./css/bootstrap-theme.min.css";
import "./css/fontAwesome.css";
import "./css/hero-slider.css";
import "./css/owl-carousel.css";
import "./css/tooplate-style.css";
import DatePicker from 'react-date-picker';


const email= reactLocalStorage.get('email');
const username= reactLocalStorage.get('username');


class Flight extends Component
{
   state = {
              startDate: new Date(),
              endDate: new Date(),
            }
   constructor(props){
       super(props);

       this.state = {
             bookingFrom: '',
             bookingTill: '',
             bookingFromSource: '',
             bookingFromDest:'',
             userAuth:false
           };
       this.handleOrderTicket=this.handleOrderTicket.bind(this);
       this.handleStartDateChange=this.handleStartDateChange.bind(this);
       this.handleEndDateChange=this.handleEndDateChange.bind(this);


   }



handleStartDateChange = startDate => this.setState({ startDate })
handleEndDateChange = endDate => this.setState({ endDate })


handleOrderTicket = event => {
 event.preventDefault();
 this.pushList();
 alert('You have sucessfully booked a ticket');
 history.push("/Welcome");
}

componentDidMount()
{
  if(email==null)
  {
    alert('Please login to continue');
    history.push("/Home");

  }
  else
  {this.setState({userAuth : true}); }
}



pushList= () =>{

var ID=10;
//const stringBody = "{\"bookingFrom\":\""+this.bookingFrom.value+"\",\"bookingTill\":\""+this.bookingTill.value+"\",\"bookingFromSource\":\""+this.bookingFromSource.value+"\",\"bookingFromDest\":\""+this.bookingFromDest.value+"\"}";
const stringBody = "{\"bookingFrom\":\""+"12-02-2020"+"\",\"bookingFromSource\":\""+"asdfg"+"\",\"bookingFromDest\":\""+"werewrt"+"\",\"bookingTill\":\""+"12-02-2020"+"\"}";
 const requestOptions = {
                  method: "POST",
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                                        bookingFrom: this.state.startDate,
                                        bookingFromSource: this.bookingFromSource.value,
                                        bookingFromDest: this.bookingFromDest.value,
                                        bookingTill:this.state.endDate,
                                        ID:++ID })
              }


          var url='http://localhost:3000/customers/flights/' + email;
          alert("Starting date:"+this.state.startDate + "Ending Date: " +this.state.endDate);
          fetch(url, requestOptions)
           .then(response => response.json())
             .then(response => { console.log(response);
             }).catch(err => { console.log(err); });

}


       render(){

        return (
           <flight>
           <section class="banner" id="top">
            <div class="container">
                        <div class="row">
                            <div class="col-md-5">
                                <div class="left-side">
                                    <div class="logo">

                                    </div>

                                </div>
                            </div>
                            <div class="col-md-5 col-md-offset-1">
                                <section id="first-tab-group" class="tabgroup">
                                    <div id="tab1">
                                        <div class="submit-form">
                                            <h4>Check availability for <em>direction</em>:</h4>
                                            <form  action="email1" id="form-submit" onSubmit={this.handleOrderTicket} method="post">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <fieldset>

                                                            <label for="from">From:</label>
                                                            <select required name='from' ref={(bookingFromSource) => this.bookingFromSource = bookingFromSource}>
                                                                <option value="">Select a location...</option>
                                                                <option value="Cambodia">Cambodia</option>
                                                                <option value="Hong Kong">Hong Kong</option>
                                                                <option value="India">India</option>
                                                                <option value="Japan">Japan</option>
                                                                <option value="Korea">Korea</option>
                                                                <option value="Laos">Laos</option>
                                                                <option value="Myanmar">Myanmar</option>
                                                                <option value="Singapore">Singapore</option>
                                                                <option value="Thailand">Thailand</option>
                                                                <option value="Vietnam">Vietnam</option>
                                                            </select>
                                                        </fieldset>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <fieldset>
                                                            <label for="to">To:</label>
                                                            <select required name='to' ref={(bookingFromDest) => this.bookingFromDest = bookingFromDest}>
                                                                <option value="">Select a location...</option>
                                                                <option value="Cambodia">Cambodia</option>
                                                                <option value="Hong Kong">Hong Kong</option>
                                                                <option value="India">India</option>
                                                                <option value="Japan">Japan</option>
                                                                <option value="Korea">Korea</option>
                                                                <option value="Laos">Laos</option>
                                                                <option value="Myanmar">Myanmar</option>
                                                                <option value="Singapore">Singapore</option>
                                                                <option value="Thailand">Thailand</option>
                                                                <option value="Vietnam">Vietnam</option>
                                                            </select>
                                                        </fieldset>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <fieldset>
                                                            <label for="departure">Departure date:</label>
                                                             <DatePicker
                                                                       onChange={this.handleStartDateChange}
                                                                       value={this.state.startDate}

                                                                       />
                                                        </fieldset>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <fieldset>
                                                           <label for="departure">Return date:</label>
                                                           <DatePicker
                                                                     onChange={this.handleEndDateChange}
                                                                     value={this.state.endDate}

                                                                   />
                                                        </fieldset>
                                                    </div>
                                                    <div class="col-md-6">
                                                                <div class="radio-select">
                                                                    <div class="row">
                                                                        <div class="col-md-6 col-sm-6 col-xs-6">
                                                                            <label for="round">Round</label>
                                                                            <input type="radio" name="trip" id="round" value="round" required="required" />
                                                                        </div>
                                                                        <div class="col-md-6 col-sm-6 col-xs-6">
                                                                            <label for="oneway">Oneway</label>
                                                                            <input type="radio" name="trip" id="oneway" value="one-way" required="required" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                    <div class="col-md-6">
                                                        <fieldset>
                                                            <button type="submit" id="form-submit" class="btn" >Order Ticket Now</button>
                                                        </fieldset>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>

            </section>

            </flight>
        );

       }
}
export default Flight;
