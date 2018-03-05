import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './index.css'
import About from './component/about.js';
import Home from './component/home.js';
import Contact from './component/contact.js';
import Store from './component/store.js';
import Login from './component/login.js'
import Register from './component/register.js'

ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route path= "/home" component= {Home}/>
            <Route path= "/about" component= {About}/>
            <Route path= "/contact" component= {Contact}/>
            <Route path= "/store" component= {Store}/>
            <Route path= "/login" component= {Login}/>
            <Route path= "/register" component= {Register}/>
        </div>
    </BrowserRouter>
), document.getElementById('root'));