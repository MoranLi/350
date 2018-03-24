import React from 'react';
import './home.css'
import Header from './partials/header.js';
import Footer from './partials/footer.js';
import {Carousel} from 'react-bootstrap';

export default class Home extends React.Component {
    render() {
        return (
            <div id="page-wrap">
        	    <Header />
                <Carousel>
                    <Carousel.Item className='slide1'>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='slide2'>
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='slide3'>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
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