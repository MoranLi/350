import React from 'react';
import './contact.css'
import contactheader from '../images/Banners/header-banner-contact.jpg';
import contactfooter from '../images/Banners/footer-banner-contact.jpg';
import Header from './partials/header.js';
import Footer from './partials/footer.js';
import db from '../firebase.conf.js'

export default class Contact extends React.Component {

	submitMessage(){
		var message = {
			name: document.getElementById("name").value,
			email: document.getElementById("email").value,
			message: document.getElementById("message").value
		}
		if(message.name === "" || message.email === ""){
			alert("name & email is required")
		}
		else{
			db.db.ref("/messgae").push().set(message).then(function(){
				alert("Submit message success")
			}).catch(function(err){
				alert(err)
			})
		}
	}
	

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
			   				<div class="feature-box"  style={{ height: '320px',width: '250px' }}>
			   					<div class="feature-box-model">
			   						<p>Call Us</p>
			   					</div>
			   					<div class="feature-box-text">
			   						<p class="feature-box-text-adjust">123 (456) - 7890</p>
			   					</div>
			   				</div>
							<div class="feature-box"  style={{ height: '320px' ,width: '250px' }}>
			   					<div class="feature-box-model"><p>Visit Us</p></div>
			   					<div class="feature-box-text"><p>42 Wallaby Way</p>Saskatoon SK 12345</div>
			   				</div>
			   				<div class="feature-box"  style={{ height: '320px',width: '250px'  }}>
			   					<div class="feature-box-model">
			   						<p>Follow Us</p>
			   					</div>
			   					<div class="feature-box-text">
			   						<p class="feature-box-text-adjust">
			   							<a href="#facebook">
			   								<img src="../images/Icons/icon_facebook.png" alt="facebook"/>
			   							</a>
			   							<a href="#facebook">
			   								<img src="../images/Icons/icon_twitter.png" alt="facebook"/>
			   							</a>
			   							<a href="#facebook">
			   								<img src="../images/Icons/icon_google.png" alt="facebook"/>
			   							</a>
			   						</p>
			   					</div>
			   				</div>
			   			</div> 
			   			<div class="clearboth"></div>
			   			<div class="feature-title">Send Us a Message</div>
			   		</div>
						<div style={{width: "1000px", marginLeft: '10%'}}> 			
							<div>
								<label>Name *</label>
								<input id="name" type="text" style={{width: "300px", marginLeft: 0}}/> 
							</div>
							<div>
								<label id="email-label" style={{ marginLeft: 0}}>Email Address *</label>
								<input id="email" type="email" style={{width: "300px", marginLeft: 0}}/>
							</div>
							<div>
								<div><label>Message </label>
								<textarea id="message"></textarea></div>
								<button onClick={()=>this.submitMessage()} >Submit message</button>
							</div>
			   		</div>
						 <br/>
			   		<div class="footer-banner" style={{backgroundImage: "url(" + "https://firebasestorage.googleapis.com/v0/b/project-407f3.appspot.com/o/image%2FBanners%2Ffooter-banner-contact.jpg?alt=media&token=c9ca77d8-2f98-4f4c-9ccd-b8da8dc33598" + ")"}}>
			   			<div class="footer-banner-text-heading">Don't forget to follow us on social media.</div>
			      			<div class="footer-banner-text">It's ok, we encourage you to stalk us.</div>
			   		</div> 
					<Footer />
				</div> 
    );
  }
}
