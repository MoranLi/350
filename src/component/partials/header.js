import React from 'react';
import firebase from 'firebase';
import {NavItem, Navbar, MenuItem, NavDropdown, Nav, Glyphicon} from 'react-bootstrap';

export default class Header extends React.Component {
    getUser() {
        var user = firebase.auth().currentUser;
        var name;
        if (user != null)
            name = user.displayName;
        return name;
    }

    render() {
        return (
            <Navbar fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/home"><Glyphicon glyph="home"/>&nbsp;&nbsp;Home</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Text>
                    Signed in as: <Navbar.Link href="#">{this.getUser()}</Navbar.Link>
                </Navbar.Text>
                <Nav pullRight>
                    <NavItem eventKey={2} href="/store">Store</NavItem>
                    <NavItem eventKey={4} href="/login"><Glyphicon glyph="user"/>&nbsp;Login</NavItem>
                    <NavItem eventKey={4} href="/login"><Glyphicon glyph="shopping-cart"/>&nbsp;Cart</NavItem>
                    <NavItem eventKey={3} href="/about"><Glyphicon glyph="info-sign"/>&nbsp;About</NavItem>
                    <NavItem eventKey={1} href="/contact"><Glyphicon glyph="envelope"/>&nbsp;Contact</NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.4}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
        )
        
    }
}