import React from 'react';
import './login.css'
import Header from './partials/header.js';
import Footer from './partials/footer.js';
import firebaseService from '../firebase.conf';


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
                <input id="txtEmail" type="email" placeholder="Email"/>
                <input id="txtPassword" type="password" placeholder="Password"/>
                <button onClick={()=> this.signin()}>Submit</button>
                <button onClick={()=> this.signup()}>Signup</button>
            </div>;
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