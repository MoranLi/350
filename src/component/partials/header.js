import React from 'react';
import {NavItem, Navbar, Nav, Glyphicon} from 'react-bootstrap';
import firebaseService from "../../firebase.conf";

export default class Header extends React.Component {
    // store and cart
    goTo(url){
        if(firebaseService.authService.currentUser) {
            window.location = url;
        } else {
            alert("Please sign in first");
            window.location = '/login'
        }
    }

    goLogin() {
        if(firebaseService.authService.currentUser) {
            alert("Already log in as: "+firebaseService.authService.currentUser.email);
        } else {
            window.location = '/login'
        }
    }

    goLogout(){
        if(firebaseService.authService.currentUser) {
            firebaseService.authService.signOut();
            alert(firebaseService.authService.currentUser.email+': Log out success');
            window.location = '/home'
        } else {
            alert('Log out fail');
        }
    }

    render() {
        return (
            <Navbar fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/home"><Glyphicon glyph="home"/>&nbsp;&nbsp;Home</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem eventKey={5} onClick={()=> this.goLogin()}><Glyphicon glyph="user"/>&nbsp;Login</NavItem>
                    <NavItem eventKey={5} onClick={()=> this.goLogout()}><Glyphicon glyph="user"/>&nbsp;Logout</NavItem>
                    <NavItem eventKey={4} onClick={()=> this.goTo('/store')}>Store</NavItem>
                    <NavItem eventKey={3} onClick={()=> this.goTo('/cart')}><Glyphicon glyph="shopping-cart"/>&nbsp;Cart</NavItem>
                    <NavItem eventKey={2} href="/about"><Glyphicon glyph="info-sign"/>&nbsp;About</NavItem>
                    <NavItem eventKey={1} href="/contact"><Glyphicon glyph="envelope"/>&nbsp;Contact</NavItem>
                </Nav>
            </Navbar>
        )
        
    }
}