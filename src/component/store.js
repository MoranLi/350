import React from 'react';
import Header from './partials/header.js';
import Footer from './partials/footer.js';
import db from '../firebase.conf';
import Async from 'react-promise'
import './home.css'
import {Col, Grid, Image, Row, Thumbnail, Button} from 'react-bootstrap';

var itemList = [];
function loadItems() {
    return new Promise(function(resolve, reject){

        var itemsDB = db.db.ref('/items/-L8JYXtY-oqUdTc8U9p_');
        console.log("start load item");
        itemsDB.once('value').then(function(dataSnapshot){
            var data = dataSnapshot.val();
            Object.keys(data).forEach(function(f){
                var sub = data[f];
                itemList.push(sub)
            });
            console.log("success load item");
            resolve(itemList)
        }).catch(function(err){
            console.log("fail load item");
            reject(err)
        })
    })
}

/*
function addToCart(item){
    if(user.getuser() === ""){
        alert("Can not add to chart, not login yet")
    }
    else{
        db.db.ref('/users/'+user.getuser()).set(item)
    }
}
*/

let listing =  new Promise(function(responce, reject){
	  const usersElements = [];
	  loadItems().then(function(data){
	      data.forEach(function(dd) {
              dd.forEach(function (item) {
                  usersElements.push(
                      <Col sm={3} md={2} xs={4}>
                          <Thumbnail className='test'>
                              <Image src={item.itemImageSrc} width="100" height="100"/>
                              <h4>{item.itemDescription}</h4>
                              <p>Price: {item.itemPrice}</p>
                              <Button bsStyle="default" >Add to Cart</Button>
                          </Thumbnail>
                      </Col>
                  )
              });
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
