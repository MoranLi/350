import React from 'react';
import ReactDOM from 'react-dom';
import './store.css';
import Header from './component/header.js';
import Footer from './component/footer.js';

class Store extends React.Component {
    render() {
        return (
	        <div id="page-wrap">
				<Header />
				<div class="header-banner">
		      		  <div class="banner-text-heading">New fall devices have arrived.</div>
		   		</div> 
		   		<div class="feature">
		   		  <p class="feature-main-text">Appropriately revolutionize robust scenarios without dynamic strategic theme areas. Objectively orchestrate ethical convergence after out-of-the-box niches</p>
				  <script src="./scripts/Strawberry_Pi.js"></script>
		  		</div> 
		   		<Footer />
			</div> 
    	);
  }
}

ReactDOM.render(<Store />, document.getElementById('root'));