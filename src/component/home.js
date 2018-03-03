import React from 'react';
import './home.css';
import Header from './partials/header.js';
import Footer from './partials/footer.js';


export default class Home extends React.Component {
    render() {
        return (
            <div id="page-wrap">
        	    <Header />
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
           		<Footer />
        	</div>
        );
  }
}