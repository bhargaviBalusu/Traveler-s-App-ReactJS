import React, { useState } from 'react';
import { Component } from 'react';
import {reactLocalStorage} from 'reactjs-localstorage';
import history from "../../history.js";
import DatePicker from 'react-date-picker';
import "./css/bootstrap.min.css";
import "./css/style.css";


const email= reactLocalStorage.get('email');
const username= reactLocalStorage.get('username');

class Hotel extends Component
{

       constructor(props){
              super(props);
              this.state = {
                    checkIn: '',
                    checkOut: '',
                    hotelName:'',
                    userAuth:false,
                    bookingDest: ''

                  };
              this.handleReservation=this.handleReservation.bind(this);

          }




pushList= () =>{
 var ID=10;
 const requestOptions = {
                  method: "POST",
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                                        checkIn: this.checkIn.value,
                                        checkOut: this.checkOut.value,
                                        hotelName: this.hotelName.value,
                                        ID:++ID })
              }


          var url='http://localhost:3000/customers/hotels/' + username;
          fetch(url, requestOptions)
           .then(response => response.json())
             .then(response => { console.log(response);
             }).catch(err => { console.log(err); });

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

handleReservation = event => {
 event.preventDefault();
  this.pushList();
  alert('You have sucessfully booked a ticket');
  history.push("/Welcome");
 }


       render(){

        return (
           <hotel>
           <div id="booking" class="section">
           		<div class="section-center">
           			<div class="container">
           				<div class="row">
           					<div class="col-md-7 col-md-push-5">
           						<div class="booking-cta">
           							<h1>Make your reservation</h1>

           						</div>
           					</div>
           					<div class="col-md-4 col-md-pull-7">
           						<div class="booking-form">
           							<form onSubmit={this.handleReservation}>
           								<div class="form-group">
           									<span class="form-label">Your Destination</span>
           									<input class="form-control" type="text" placeholder="Enter a destination or hotel name" ref={(hotelName) => this.hotelName = hotelName}/>
           								</div>
           								<div class="row">
           									<div class="col-sm-6">
           										<div class="form-group">
           											<span class="form-label">Check In</span>
           											<input class="form-control" type="date" required ref={(checkIn) => this.checkIn = checkIn}/>
           										</div>
           									</div>
           									<div class="col-sm-6">
           										<div class="form-group">
           											<span class="form-label">Check out</span>
           											<input class="form-control" type="date" required ref={(checkOut) => this.checkOut = checkOut}/>
           										</div>
           									</div>
           								</div>
           								<div class="row">
           									<div class="col-sm-4">
           										<div class="form-group">
           											<span class="form-label">Rooms</span>
           											<select class="form-control">
           												<option>1</option>
           												<option>2</option>
           												<option>3</option>
           											</select>
           											<span class="select-arrow"></span>
           										</div>
           									</div>
           									<div class="col-sm-4">
           										<div class="form-group">
           											<span class="form-label">Adults</span>
           											<select class="form-control">
           												<option>1</option>
           												<option>2</option>
           												<option>3</option>
           											</select>
           											<span class="select-arrow"></span>
           										</div>
           									</div>
           									<div class="col-sm-4">
           										<div class="form-group">
           											<span class="form-label">Children</span>
           											<select class="form-control">
           												<option>0</option>
           												<option>1</option>
           												<option>2</option>
           											</select>
           											<span class="select-arrow"></span>
           										</div>
           									</div>
           								</div>
           								<div class="form-btn">
           									<button class="submit-btn"  >Book Now</button>
           								</div>
           							</form>
           						</div>
           					</div>
           				</div>
           			</div>
           		</div>
           	</div>
           </hotel>
        );

       }
}
export default Hotel;
