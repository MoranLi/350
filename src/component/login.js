import React from 'react';
import './login.css'
import Header from './partials/header.js';
import Footer from './partials/footer.js';

export default class Login extends React.Component {
  render(){
    return (
      <div id="page-wrap">
        <Header/>
          <div>
            <div className="login">Login</div>
            <input type="text" name="username" placeholder="username"/>
            <br/>
            <input type="password" name="password" placeholder="password"/>
            <div className="login">
              <button> Submit </button>
            </div>
            <div className="login">
              <a href="/register"> Register </a>
            </div>
          </div>
        <Footer/>
      </div>
    )
  }
}