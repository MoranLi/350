import React from 'react';
import './checkout.css';
import Header from './partials/header.js';
import Footer from './partials/footer.js';

export default class Checkout extends React.Component {
  render() {
      return (
        <div id="page-wrap">
          <Header/>
          <Footer/>
        </div>
      )
    }
}