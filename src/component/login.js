import React from 'react';
import Header from './partials/header.js';
import Footer from './partials/footer.js';
import firebaseService from '../firebase.conf';
import './login.css'
import {Button} from 'react-bootstrap'

export default class Login extends React.Component {
    signin(){
        const email = document.getElementById('txtEmail').value;
        const pass = document.getElementById('txtPassword').value;
        const auth = firebaseService.authService;
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.then(function(){
            alert('Log in as: ' + email);
            window.location='/home';
        });
        promise.catch(e => console.log('log in fail'));
    }

    signup(){
        const email = document.getElementById('txtEmail').value;
        const pass = document.getElementById('txtPassword').value;
        const auth = firebaseService.authService;
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message))
    }

    render(){
        const mode =
            <div>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                  <input id="txtEmail" type="text" placeholder="Email"/>

              </div>
                <br/>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                  <input id="txtPassword" type="password" placeholder="Password"/>

              </div>
                <br/>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <Button onClick={()=> this.signin()}>Log In</Button>
                <Button onClick={()=> this.signup()}>Sign Up</Button>
              </div>
            </div>;


            /*<div className="center-block">
                <input id="txtEmail" type="email" placeholder="Email"/>
                <input id="txtPassword" type="password" placeholder="Password"/><br/>
                <button onClick={()=> this.signin()}>Submit</button>
                <button onClick={()=> this.signup()}>Signup</button>
            </div>;*/
        return (

            <div id="page-wrap">
                <Header/>
                <br/><br/><br/>
                {mode}
                <Footer/>
            </div>
        )
    }
}