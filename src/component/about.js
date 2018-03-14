import React from 'react';
import './about.css'
import aboutheader from '../images/Banners/header-banner-about.jpg';
import aboutfooter from '../images/Banners/footer-banner-about.jpg';
import Header from './partials/header.js';
import Footer from './partials/footer.js';

export default class About extends React.Component {
    render() {
        return (
        <div id="page-wrap">
			<Header />
				<div className="header-banner"  style={{backgroundImage: "url(" + aboutheader + ")"}}>
	      		  <div class="banner-text-heading">Learn a bit about us.</div>
	   		</div> 
	   		<div class="feature">
	   			<div class="feature-text">Appropriately revolutionize robust scenarios without dynamic strategic theme areas. Objectively
	   			orchestrate ethical convergance after out-of-the-box niches.</div>
	   			<div class="feature-container">
	   				<div class="feature-box" >
	   					<img src="./images/Icons/icon_teach.png" alt="teach"/>
	   					<div class="feature-box-model"><p>Teach</p></div>
	   					<div class="feature-box-text" style={{height: '17%' }} ><p>Dynamically synergize long-term high-impact processes.</p></div>
	   				</div>
					<div class="feature-box" >
	   					<img src="./images/Icons/icon_learn.png" alt="learn"/>
	   					<div class="feature-box-model"><p>Learn</p></div>
	   					<div class="feature-box-text" style={{height: '17%' }} ><p>Interactively myocardinate wireless web-readiness.</p></div>
	   				</div>
	   				<div class="feature-box">
	   					<img src="./images/Icons/icon_create.png" alt="create"/>
	   					<div class="feature-box-model"><p>Create</p></div>
	   					<div class="feature-box-text" style={{height: '17%' }} > Conveniently implement seamless users.</div>
	   				</div>
	   			</div> 
	   			<div class="clearboth"></div>
	   			<div class="feature-title">What does the future hold?</div>
	   			<div class="feature-text-bottom"><p>Collaboratively maximize cross-media channels after unique vortals. Professionally enable standardized testing procedures after excellent
	   				alignments. Continually reconceptualize fully tested e-commerce rather than e-business e-markets. Conveniently engage focused
	   				markets for standardized channels. Dynamically parallel task equity invested functionalities with ubiquitous networks. Enthusiastically
	   				whiteboard granular manufactured products rather than.</p></div>
	   		</div> 
		   	<div class="footer-banner" style={{backgroundImage: "url(" + aboutfooter + ")"}}>
		   		<div class="footer-banner-text-heading">Let's get you started.</div>
		      		<div class="footer-banner-text">Start shopping for your Strawberry Pi now.</div>
		   	</div> 
	   		<Footer />
		</div> 
            
       );
  }
}

            