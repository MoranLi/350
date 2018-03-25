import React from 'react';
import './login.css'
import Header from './partials/header.js';
import Footer from './partials/footer.js';
import firebaseService from '../firebase.conf.js'
import user from '../user.js'
/*
class Loginmessage extends React.Component {

  constructor(props) {
    super(props);
    this.changemode = this.props.changemode
  }

  signout(){
    alert("start sign out")
    firebaseService.authService.signOut().then(function(){
      alert("sign out success")
      this.props.changemode(false)
    }).catch(function(err){
      alert(err)
    })
  }

  render(){
    return (
      <div>
        <p> Welcome, {this.getName()} </p>
        <button onClick={()=> this.signout()} > Signout </button>
      </div>
    )
  }
}

class Logininput extends React.Component {

  signin(){
    var new_username = document.getElementById("username").value;
    var new_password = document.getElementById("password").value;
    if(new_username === undefined || new_password === undefined){
      alert("please enter both email and password");
    }
    else{
      firebaseService.authService.signInWithEmailAndPassword(new_username,new_password).then(function(){
        alert('signin success')
        this.props.changemode(true)
      }).catch(function(err){
        alert(err);
      })
    }
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
*/
export default class Login extends React.Component {

  state = {
    isSignin: ""
  }

  changeState(state){
    this.setState({
      isSignin : state
    })
  }

  signout(){
    var self = this
    alert("start sign out")
    firebaseService.authService.signOut().then(function(){
      alert("sign out success")
      user.setuser("")
      console.log(user.getuser())
      self.changeState("")
      /*
      document.getElementById("login_div").innerHTML = `
        <div className="login" >Login</div>
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
      */
    }).catch(function(err){
      alert(err)
    })
  }

  signin(){
    var self = this
    var new_username = document.getElementById("username").value;
    var new_password = document.getElementById("password").value;
    if(new_username === undefined || new_password === undefined){
      alert("please enter both email and password");
    }
    else{
      firebaseService.authService.signInWithEmailAndPassword(new_username,new_password).then(function(){
        alert('signin success')
        user.setuser(new_username)
        console.log(user.getuser())
        self.changeState(new_username)
      }).catch(function(err){
        alert(err);
      })
    }
  }


  render(){

    var mode = this.state.isSignin!=="" ? (
        <div>
          <p> Welcome, ${this.state.isSignin} </p>
          <button onClick={()=> this.signout()} > Signout </button>
        </div>
    ) : (
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
    );


    return (
      <div id="page-wrap">
        <Header/>
          {mode}
        <Footer/>
      </div>
    )
  }
}