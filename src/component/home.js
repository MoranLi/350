import React from 'react';
import './home.css'
import Header from './partials/header.js';
import Footer from './partials/footer.js';
import {Carousel} from 'react-bootstrap';
import about from './about.js';



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
           		<Footer/>
        	</div>
        );
  }
}