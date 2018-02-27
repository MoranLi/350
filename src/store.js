import React from 'react';
import ReactDOM from 'react-dom';
import './store.css';

class Store extends React.Component {
    render() {
        return (
        <div id="page-wrap">
		<nav>
			<ul>
  				<li id="icon"><a href="home.html"><img src="./images/atom-logo.png" alt="logo"/></a></li>
  				<a href="checkout.html"><li id="cart"><img src="./images/Icons/icon_cart.png" alt="cart"/></li></a>
  				<li class="menu-item"><a href="contact.html">Contact</a></li>
  				<li class="menu-item"><a href="store.html">Store</a></li>
  				<li class="menu-item"><a href="about.html">About</a></li>
  				<li id="underline"></li>
			</ul>
		</nav>
	
		<div class="header-banner">
      		  <div class="banner-text-heading">New fall devices have arrived.</div>
   		</div> 
   		<div class="feature">
   		  <p class="feature-main-text">Appropriately revolutionize robust scenarios without dynamic strategic theme areas. Objectively orchestrate ethical convergence after out-of-the-box niches</p>
		  <script src="./scripts/Strawberry_Pi.js"></script>
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

ReactDOM.render(<Store />, document.getElementById('root'));