import React from 'react';
import Header from './partials/header.js';
import Footer from './partials/footer.js';
import db from '../firebase.conf';
import Async from 'react-promise';
import {Col, Grid, Image, Row, Thumbnail, Button} from 'react-bootstrap';
import './home.css'
import axios from 'axios';

var itemList = [];
function loadItems() {
    return new Promise(function(resolve, reject){
       axios.get("http://server350.herokuapp.com",{
        headers: {
          'Access-Control-Allow-Origin': '*'
        }})
        .then(function (reponse){
        	resolve(reponse)
        }).catch(function(err){
        	reject(err)
        })
    })
}

function hash(str) {
    var hash = 5381,
        i    = str.length
    while(i) {
      hash = (hash * 33) ^ str.charCodeAt(--i);
    }
    return hash >>> 0
}

function addToCart(item){
    if(db.authService.currentUser) {
        var hashusername = hash(db.authService.currentUser.email)
        db.db.ref('/users/'+hashusername.toString()).push().set(item).then(function(){
            alert("add item successfully")
        }).catch(function(err){
            alert(err)
            console.log(err)
        })
    } else {
        alert("Not login !")
    }  
}

let listing =  new Promise(function(responce, reject){
	  const usersElements = [];
	  loadItems().then(function(data){
	      data.data.forEach(function(item) {   
            usersElements.push(
                <Col sm={3} md={2} xs={4}>
                    <Thumbnail className='test'>
                        <Image src={item.itemImageSrc} width="100" height="100"/>
                        <h4>{item.itemDescription}</h4>
                        <p>Price: {item.itemPrice}</p>
                        {console.log(item)}
                        <Button bsStyle="default" onClick={() => addToCart(item)}>Add to Cart</Button>
                    </Thumbnail>
                </Col>
            ) 
          });
          responce(usersElements);
	  }).catch(function(err){
		reject(err)
	  })
	});


export default class Store extends React.Component {
	render() {
		return (
			<div id="page-wrap">
				<Header />
				<br/><br/><br/><br/>
					<Async promise={listing} then={val =><Grid> <Row>{val}</Row></Grid>} />
			</div>
		)
	}
}
