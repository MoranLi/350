import React from 'react';
import './header.css';

export default class Header extends React.Component {
    render() {
        return (
            <nav>
        		<ul>
          			<li id="icon"><a href="/home"><img src="images/atom-logo.png" alt="logo"/></a></li>
          			<a href="/checkout"><li id="cart"><img src="images/Icons/icon_cart.png" alt="cart"/></li></a>
          			<li class="menu-item"><a href="/contact">Contact</a></li>
          			<li class="menu-item"><a href="/store">Store</a></li>
          			<li class="menu-item"><a href="/about">About</a></li>
					<li class="menu-item"><a href="/login">Login</a></li>
          			<li id="underline"></li>
        		</ul>
        	</nav>
        )
        
    }
}