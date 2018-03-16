import React from 'react';
import './home.css'
import homeheader from '../images/Banners/header-banner-home.jpg';
import homefooter from '../images/Banners/footer-banner-home.jpg';
import Header from './partials/header.js';
import Footer from './partials/footer.js';

export default class Home extends React.Component {
    render() {
        return (
            <div id="page-wrap">
        	    <Header />
					<div className="header-banner" style={{backgroundImage: "url(" + "https://firebasestorage.googleapis.com/v0/b/project-407f3.appspot.com/o/image%2FBanners%2Fheader-banner-home.jpg?alt=media&token=a41dd0e4-6db6-45f5-a9cf-fdf13d62105e" + ")"}}>
              		  <div className="banner-text-heading">New fall devices have arrived.</div>
        		      <div className="banner-text"> Teach, learn, and create with Strawberry Pi.</div>
              		  <button type="button">Start Shopping</button>
           		</div> 
           		<div class="feature">
           		  <div class="feature-text">Most Popular Products</div>
        		  <script src="./scripts/containerBuilder.js"></script> 
          		</div>
        		<div class="clearboth"></div>
        
         		<div class="footer-banner" style={{backgroundImage: "url(" + "https://firebasestorage.googleapis.com/v0/b/project-407f3.appspot.com/o/image%2FBanners%2Ffooter-banner-home.jpg?alt=media&token=db67f19c-9b93-4f1c-892e-59a58feda0f6" + ")"}}>
           			<div class="banner-text-heading">You could say it's our jam.</div>
              			<div class="banner-text"> <p>Learn more about why we do what we do. </p> </div>	
           		</div>
           		<Footer />
           		
           		
           		<a href="http://www.facebook.com/sharer.php?u=https://simplesharebuttons.com" target="_blank">
                <img src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" />
                </a>
                
                <a href="https://plus.google.com/share?url=https://simplesharebuttons.com" target="_blank">
                <img src="https://simplesharebuttons.com/images/somacro/google.png" alt="Google" />
                </a>
            
                <a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=https://simplesharebuttons.com" target="_blank">
                <img src="https://simplesharebuttons.com/images/somacro/linkedin.png" alt="LinkedIn" />
                </a>
        	</div>
        );
  }
}