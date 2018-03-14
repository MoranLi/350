import React from 'react';
import './login.css'
import Header from './partials/header.js';
import Footer from './partials/footer.js';
import firebaseService from '../firebase.conf.js'

class loginMessage extends React.Component {

  getName(){
    return this.props.name
  }

  getFunction(){
    return this.props.function
  }

  render(){
    return (
      <div>
        <p> Welcome, {this.getName()} </p>
        <button onClick={()=> this.getFunction()} > Signout </button>
      </div>
    )
  }
}

class login extends React.Component {

  getName(){
    return this.props.name
  }

  getFunction(){
    return this.props.function
  }

  render(){
    return (
      <div id="login_div">
        <div className="login" >Login</div>
        <input type="text" id="username" placeholder="email"/>
        <br/>
        <input type="password" id="password" placeholder="password"/>
        <div className="login">
          <button onClick={()=> this.signin()}> Submit </button>
        </div>
        <div className="login">
          <a href="/register"> Register </a>
        </div>
      </div>
    )
  }
}

export default class Login extends React.Component {

  signout(){
    alert("start sin out")
    firebaseService.authService.signOut().then(function(){
      alert("sign out success")
      document.getElementById("login_div").innerHTML=`
        <div className='login' >Login</div>
        <input type="text" id="username" placeholder="email"/>
        <br/>
        <input type="password" id="password" placeholder="password"/>
        <div className="login">
          <button onClick=${()=> this.signin()}> Submit </button>
        </div>
        <div className="login">
          <a href="/register"> Register </a>
        </div>
      `
    }).catch(function(err){
      alert(err)
    })
  }

  signin(){
    var new_username = document.getElementById("username").value;
    var new_password = document.getElementById("password").value;
    if(new_username === undefined || new_password === undefined){
      alert("please enter both email and password");
    }
    else{
      firebaseService.authService.signInWithEmailAndPassword(new_username,new_password).then(function(){
        document.getElementById("login_div").innerHTML = 
      }).catch(function(err){
        alert(err);
      })
    }
  }


  render(){
    return (
      <div id="page-wrap">
        <Header/>
          
        <Footer/>
      </div>
    )
  }
}