import React, { useState , Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import "./demo.css";
import "./animate-custom.css";
import "./style.css";
import "./style2.css";
import "./style3.css";
import history from "../../history.js";
import setSessionCookie from "../../cookies.js";
import {reactLocalStorage} from 'reactjs-localstorage';
import Welcome from "./welcome.js"

const email= reactLocalStorage.get('email');


class Login extends Component {
  // Initialize the state
  constructor(props){
    super(props);

    this.state = {
      name: '',
      email: '',
      username: '',
      password: '',
      userAuth:false,
      list: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitLogin = this.handleSubmitLogin.bind(this);

  }


handleSubmitSignUp = event => {
 event.preventDefault();
 this.pushList();
 alert('Registration Successful');
 history.push("/WelcomeRegister");


}

handleChange(e) {
    this.setState({ userAuth: true });
  }



  componentDidMount() {
    if(email)
    {
       alert('User has been already logged');
       history.push("/Home");
    }
    else
    {
    this.getList();
    }
  }
  // Onclick Event
  handleSubmitLogin = () => {


    const { list } = this.state;
        if(list != null){
        list.map(item => {
             if(this.uusername.value== item.email && this.upassword.value== item.password)
             {
               alert('Login Succesful');
               history.push("/Welcome");
               this.userAuth=true;
               reactLocalStorage.set('email', item.email);
               reactLocalStorage.set('username', item.username);
              }
            }
           );

           if(this.userAuth!=true)
                       {
                         alert("Login Failure, Try Again");
                       }
        }

  }


  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('http://localhost:3000/customers')
    .then(res => res.json())
    .then(list => this.setState({ list }))
        .catch(console.log)

  }
pushList= () =>{

 var data = {
              username: this.name.value,
              email: this.email.value,
              password: this.password.value,
          }
const stringBody = "{\"username\":\""+this.name.value+"\",\"email\":\""+this.email.value+"\",\"password\":\""+this.password.value+"\"}";
 const requestOptions = {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: stringBody
              }

          console.log(data)
          fetch("http://localhost:3000/customers", requestOptions)
          .then(async response => {
                      const data = await response.json();

                      // check for error response
                      if (!response.ok) {
                          // get error message from body or default to response status
                          const error = (data && data.message) || response.status;
                          return Promise.reject(error);

                      }

                      this.setState({ postId: data.id })
                  })
                  .catch(error => {
                     this.setState({ errorMessage: error.toString() });
                      console.error('There was an error!', error);
                  });
}
  //assigning the list object to global variables
  render() {
     return (

        <div id="container_demo" >

                            <a class="hiddenanchor" id="toregister"></a>
                            <a class="hiddenanchor" id="tologin"></a>
                            <div id="wrapper">
                                <div id="login" class="animate form">
                                    <form  onSubmit={this.handleSubmitLogin} >
                                        <h1>Log in</h1>
                                        <p>
                                             <label for="username" class="uname" data-icon="u" > Your email </label>
                                           <input id="emailsignup" name="uemail" required="required" type="email" placeholder="mysupermail@mail.com"
                                            ref={(uusername) => this.uusername = uusername}/>
                                        </p>
                                        <p>
                                            <label for="password" class="youpasswd" data-icon="p"> Your password </label>
                                            <input id="password" name="upassword" required="required" type="password" placeholder="eg. X8df!90EO"
                                             ref={(upassword) => this.upassword = upassword}/>
                                        </p>
                                        <p class="keeplogin">
        									<input type="checkbox" name="loginkeeping" id="loginkeeping" value="loginkeeping" />
        									<label for="loginkeeping">Keep me logged in</label>
        								</p>
                                        <p class="login button">
                                            <input type="submit" onClick={this.handleChange} value="Login" />
        								</p>
                                        <p class="change_link">
        									Not a member yet ?
        									<a href="#toregister" class="to_register">Join us</a>
        								</p>
                                    </form>
                                </div>

                                <div id="register" class="animate form">
                                    <form  onSubmit={this.handleSubmitSignUp} method= "POST" autocomplete="on">
                                        <h1> Sign up </h1>
                                        <p>
                                            <label for="usernamesignup" class="uname" data-icon="u">Your username</label>
                                            <input id="usernamesignup" name="name"  required="required" type="text" placeholder="mysuperusername690"
                                             ref={(name) => this.name = name}/>
                                        </p>
                                        <p>
                                            <label for="emailsignup" class="youmail" data-icon="e" > Your email</label>
                                            <input id="emailsignup" name="email" required="required" type="email" placeholder="mysupermail@mail.com"
                                             ref={(email) => this.email = email}/>
                                        </p>
                                        <p>
                                            <label for="passwordsignup" class="youpasswd" data-icon="p">Your password </label>
                                            <input id="passwordsignup" name="password" required="required" type="password" placeholder="eg. X8df!90EO"
                                             ref={(password) => this.password = password}/>
                                        </p>
                                        <p>
                                            <label for="passwordsignup_confirm" class="youpasswd" data-icon="p">Please confirm your password </label>
                                            <input id="passwordsignup_confirm" name="cpassword" required="required" type="password" placeholder="eg. X8df!90EO"/>
                                        </p>
                                        <p class="signin button">
        									<input type="submit" value="Sign up" onClick={this.handleChange}/>
        								</p>
                                        <p class="change_link">
        									Already a member ?
        									<a href="#tologin" class="to_register"> Go and log in </a>
        								</p>
                                    </form>
                                </div>

                            </div>
                        </div>

      );
     }

}

export default Login;

