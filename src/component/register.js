import React from 'react';
import './register.css'
import Header from './partials/header.js';
import Footer from './partials/footer.js';
import firebaseService from '../firebase.conf.js'

export default class Regsister extends React.Component {

  Register(){
    var new_username = document.getElementById("newusername").value;
    var new_password = document.getElementById("newpassword").value;
    if(new_username === undefined || new_password === undefined){
      alert("please enter both email and password");
    }
    else{
      firebaseService.authService.createUserWithEmailAndPassword(new_username,new_password).catch(function(err){
        alert(err);
      })
    }
  }

  render(){
    return (
      <div id="page-wrap">
        <Header/>
          <div>
            <div className="login">Register</div>
            <input type="text" id="newusername" placeholder="email"/>
            <br/>
            <input type="password" id="newpassword" placeholder="password"/>
            <div className="login">
              <button onClick={() => this.Register()}> Submit </button>
            </div>
            <div className="login">
              <a href="/login"> Login </a>
            </div>
          </div>
        <Footer/>
      </div>
    )
  }
}