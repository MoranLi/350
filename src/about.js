import React from 'react';
import ReactDOM from 'react-dom';
import './about.css';

class About extends React.Component {
    render() {
        return (
        <div id="page-wrap">
		<nav>
			<ul>
  				<li id="icon"><a href="home.html"><img src="images/atom-logo.png" alt="logo"/></a></li>
  				<a href="checkout.html"><li id="cart"><img src="images/Icons/icon_cart.png" alt="cart"/></li></a>
  				<li class="menu-item"><a href="contact.html">Contact</a></li>
  				<li class="menu-item"><a href="store.html">Store</a></li>
  				<li class="menu-item"><a href="about.html">About</a></li>
  				<li id="underline"></li>
			</ul>
		</nav>
	
		<div class="header-banner">
      		  <div class="banner-text-heading">Learn a bit about us.</div>
   		</div> 
   		
   		<div class="feature">
   			<div class="feature-text">Appropriately revolutionize robust scenarios without dynamic strategic theme areas. Objectively
   			orchestrate ethical convergance after out-of-the-box niches.</div>
   			<div class="feature-container">
   				<div class="feature-box">
   					<img src="./images/Icons/icon_teach.png" alt="teach"/>
   					<div class="feature-box-model"><p>Teach</p></div>
   					<div class="feature-box-text"><p>Dynamically synergize long-term high-impact processes.</p></div>
   				</div>
				<div class="feature-box">
   					<img src="./images/Icons/icon_learn.png" alt="learn"/>
   					<div class="feature-box-model"><p>Learn</p></div>
   					<div class="feature-box-text"><p>Interactively myocardinate wireless web-readiness.</p></div>
   				</div>
   				<div class="feature-box">
   					<img src="./images/Icons/icon_create.png" alt="create"/>
   					<div class="feature-box-model"><p>Create</p></div>
   					<div class="feature-box-text"> Conveniently implement seamless users.</div>
   				</div>
   			</div> 
   			
   			<div class="feature-title">What does the future hold?</div>
   			<div class="feature-text-bottom"><p></p>Collaboratively maximize cross-media channels after unique vortals. Professionally enable standardized testing procedures after excellent
   				alignments. Continually reconceptualize fully tested e-commerce rather than e-business e-markets. Conveniently engage focused
   				markets for standardized channels. Dynamically parallel task equity invested functionalities with ubiquitous networks. Enthusiastically
   				whiteboard granular manufactured products rather than.</div>
   		</div> 
   		
   		<div class="footer-banner">
   			<div class="footer-banner-text-heading">Let's get you started.</div>
      			<div class="footer-banner-text">Start shopping for your Strawberry Pi now.</div>
   		</div> 
   		
   		<div class="footer"> 
   			<ul class="footer-list">
				<li id="follow">Follow Us:</li>
				<li class="social"><a href="#facebook"><img src="images/Icons/icon_facebook.png" alt="facebook"/></a></li>
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

ReactDOM.render(<About />, document.getElementById('root'));
            