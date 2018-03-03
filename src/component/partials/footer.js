import React from 'react';
import './footer.css';

export default class Footer extends React.Component {
    render(){
        return (
            <div class="footer"> 
           		<ul class="footer-list">
        			<li id="follow">Follow Us:</li>
        			<li class="social"><a href="#facebook"><img src="images/Icons/icon_facebook.png" alt="facebook"/></a></li>
        			<li class="social"><a href="#twitter"><img src="images/Icons/icon_twitter.png" alt="twitter"/></a></li>
        			<li class="social"><a href="#google"><img src="images/Icons/icon_google.png" alt="google"/></a></li>
        			<li class="footer-menu-item"><a href="#contact">Contact</a></li>
        			<li class="footer-menu-item"><a href="#store">Store</a></li>
        			<li class="footer-menu-item"><a href="#about">About</a></li>
        		</ul>
        		<p>&#x40; 2016 Atom Ltd. All Rights Reserved.</p>
           	</div>
        )
    }
}