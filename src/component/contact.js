import React from 'react';
import './contact.css'
import contactheader from '../images/Banners/header-banner-contact.jpg';
import contactfooter from '../images/Banners/footer-banner-contact.jpg';
import Header from './partials/header.js';
import Footer from './partials/footer.js';

export default class Contact extends React.Component {
    render() {
        return (
            	<div id="page-wrap">
					<Header />
					<div class="header-banner" style={{backgroundImage: "url(" + "https://firebasestorage.googleapis.com/v0/b/project-407f3.appspot.com/o/image%2FBanners%2Fheader-banner-contact.jpg?alt=media&token=1e700f52-4417-47c7-bcba-6df9673004c4" + ")"}}>
			      		<div class="banner-text-heading">
			      			Let's get the conversation started.
			      		</div>
			   		</div> 
			   		<div class="feature">
			   			<div class="feature-text">
			   				Quickly revolutionize maintainable technologies through plug-and-play functionalities.
			   				Completely re-engineer excellent e-commerce rather.
			   			</div>
			   			<div class="feature-container">
			   				<div class="feature-box"  style={{ height: '320px' }}>
			   					<div class="feature-box-model">
			   						<p>Call Us</p>
			   					</div>
			   					<div class="feature-box-text">
			   						<p class="feature-box-text-adjust">123 (456) - 7890</p>
			   					</div>
			   				</div>
							<div class="feature-box"  style={{ height: '320px' }}>
			   					<div class="feature-box-model"><p>Visit Us</p></div>
			   					<div class="feature-box-text"><p>42 Wallaby Way</p>Saskatoon SK 12345</div>
			   				</div>
			   				<div class="feature-box"  style={{ height: '320px' }}>
			   					<div class="feature-box-model">
			   						<p>Follow Us</p>
			   					</div>
			   					<div class="feature-box-text">
			   						<p class="feature-box-text-adjust">
			   							<a href="#facebook">
			   								<img src="/images/Icons/icon_facebook.png" alt="facebook"/>
			   							</a>
			   							<a href="#facebook">
			   								<img src="/images/Icons/icon_twitter.png" alt="facebook"/>
			   							</a>
			   							<a href="#facebook">
			   								<img src="/images/Icons/icon_google.png" alt="facebook"/>
			   							</a>
			   						</p>
			   					</div>
			   				</div>
			   			</div> 
			   			<div class="clearboth"></div>
			   			<div class="feature-title">Send Us a Message</div>
			   		</div> 
			   		<form>			
						<div><label>Name *</label> <label id="email-label">Email Address *</label>
			  			<input type="text" style={{marginLeft: 0}}/> <input type="email"/></div>
			  			<div><label>Message </label>
			  			<textarea></textarea></div>
			  			<input type="submit" value="Send Message"></input>
					</form>
			   		
			   		<div class="footer-banner" style={{backgroundImage: "url(" + "https://firebasestorage.googleapis.com/v0/b/project-407f3.appspot.com/o/image%2FBanners%2Ffooter-banner-contact.jpg?alt=media&token=c9ca77d8-2f98-4f4c-9ccd-b8da8dc33598" + ")"}}>
			   			<div class="footer-banner-text-heading">Don't forget to follow us on social media.</div>
			      			<div class="footer-banner-text">It's ok, we encourage you to stalk us.</div>
			   		</div> 
					<Footer />
				</div> 
    );
  }
}
