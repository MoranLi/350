import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Home extends React.Component {
    render() {
        return (
            <div id="page-wrap">
        		<nav>
        			<ul>
          				<li id="icon"><a href="home.html"><img src="./images/atom-logo.png" alt="logo"/></a></li>
          				<a href="checkout.html"><li id="cart"><img src="./images/Icons/icon_cart.png" alt="cart"/></li></a>
          				<li class="menu-item"><a href="#contact">Contact</a></li>
          				<li class="menu-item"><a href="#store">Store</a></li>
          				<li class="menu-item"><a href="about.html">About</a></li>
          				<li id="underline"></li>
        			</ul>
        		</nav>
        	
        		<div class="header-banner">
              		  <div class="banner-text-heading">New fall devices have arrived.</div>
        		      <div class="banner-text"> Teach, learn, and create with Strawberry Pi.</div>
              		  <button type="button">Start Shopping</button>
           		</div> 
           		<div class="feature">
           		  <div class="feature-text">Most Popular Products</div>
        		  <script src="./scripts/containerBuilder.js"></script> 
          		</div>
        		<div class="clearboth"></div>
        
         		<div class="footer-banner">
           			<div class="banner-text-heading">You could say it's our jam.</div>
              			<div class="banner-text"> <p>Learn more about why we do what we do. </p> </div>	
           		</div>
           		
           		<div class="footer"> 
           			<ul class="footer-list">
        				<li id="follow">Follow Us:</li>
        				<li class="social"><a href="#facebook"><img src="./images/Icons/icon_facebook.png" alt="facebook"/></a></li>
        				<li class="social"><a href="#twitter"><img src="./Images/Icons/icon_twitter.png" alt="twitter"/></a></li>
        				<li class="social"><a href="#google"><img src="./Images/Icons/icon_google.png" alt="google"/></a></li>
        				<li class="footer-menu-item"><a href="#contact">Contact</a></li>
        				<li class="footer-menu-item"><a href="#store">Store</a></li>
        				<li class="footer-menu-item"><a href="#about">About</a></li>
        			</ul>
        			<p>&#x40; 2016 Atom Ltd. All Rights Reserved.</p>
           		
           		</div>
        	
        	</div>
        );
  }
}


ReactDOM.render(<Home />, document.getElementById('root'));

