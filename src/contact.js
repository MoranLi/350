import React from 'react';
import ReactDOM from 'react-dom';
import './contact.css';

class Contact extends React.Component {
    render() {
        return (
            	<div id="page-wrap">
		<nav>
			<ul>
  				<li id="icon"><a href="home.html"><img src="./images/atom-logo.png" alt="logo"/></a></li>
  				<a href="checkout.html"><li id="cart"><img src="./images//Iconsicon_cart.png" alt="cart"/></li></a>
  				<li class="menu-item"><a href="contact.html">Contact</a></li>
  				<li class="menu-item"><a href="store.html">Store</a></li>
  				<li class="menu-item"><a href="about.html">About</a></li>
  				<li id="underline"></li>
			</ul>
		</nav>
	
		<div class="header-banner">
      		  <div class="banner-text-heading">Let's get the conversation started.</div>
   		</div> 
   		
   		<div class="feature">
   			<div class="feature-text">Quickly revolutionize maintainable technologies through plug-and-play functionalities.
   			Completely re-engineer excellent e-commerce rather.</div>
   			<div class="feature-container">
   				<div class="feature-box">
   					<div class="feature-box-model"><p>Call Us</p></div>
   					<div class="feature-box-text"><p class="feature-box-text-adjust">123 (456) - 7890</p></div>
   				</div>
				<div class="feature-box">
   					<div class="feature-box-model"><p>Visit Us</p></div>
   					<div class="feature-box-text"><p>42 Wallaby Way</p>Saskatoon SK 12345</div>
   				</div>
   				<div class="feature-box">
   					<div class="feature-box-model"><p>Follow Us</p></div>
   					<div class="feature-box-text"><p class="feature-box-text-adjust"/>
   						<a href="#facebook"><img src="./images/Icons/icon_facebook.png" alt="facebook"/></a>
   						<a href="#facebook"><img src="./images/Icons/icon_twitter.png" alt="facebook"/></a>
   						<a href="#facebook"><img src="./images/Icons/icon_google.png" alt="facebook"/></a>
   						</div>
   				</div>
   			</div> 

   			<div class="feature-title">Send Us a Message</div>
   		</div> 
   		
   		<form>			
			<div><label>Name *</label> <label id="email-label">Email Address *</label>
  			<input type="text"/> <input type="email"/></div>
  			<div><label>Message </label>
  			<textarea></textarea></div>
  			<input type="submit" value="Send Message"></input>
		</form>
   		
   		<div class="footer-banner">
   			<div class="footer-banner-text-heading">Don't forget to follow us on social media.</div>
      			<div class="footer-banner-text">It's ok, we encourage you to stalk us.</div>
   		</div> 
   		
   		<div class="footer"> 
   			<ul class="footer-list">
				<li id="follow">Follow Us:</li>
				<li class="social"><a href="#facebook"><img src="./images/Icons/icon_facebook.png" alt="facebook"/></a></li>
				<li class="social"><a href="#twitter"><img src="./images/Icons/icon_twitter.png" alt="twitter"/></a></li>
				<li class="social"><a href="#google"><img src="./images/Icons/icon_google.png" alt="google"/></a></li>
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

ReactDOM.render(<Contact />, document.getElementById('root'));