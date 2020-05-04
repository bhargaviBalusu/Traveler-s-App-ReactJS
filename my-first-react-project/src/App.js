import React from 'react';
/*import logo from './logo.svg';*/
/*import './App.css';*/
/*import './css/default.css';*/
/*import './login.js';*/
import Login from "./components/login/login.js"
import Accounts from "./components/pages/accounts.js"
import Header from "./components/header/header.js"
import Footer from "./components/footer/footer.js"


function App() {
  return (
    <div className="App">
        <Header/>
            <Login/>


        <Footer/>

    </div>
  );
}

export default App;
