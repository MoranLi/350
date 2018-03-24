import React from 'react';
import Header from './partials/header.js';
import Footer from './partials/footer.js';
import db from '../firebase.conf';
import firebase from 'firebase';
import Async from 'react-promise'

import {Col, Grid, Row, Thumbnail, Button} from 'react-bootstrap';

const users = [
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tomy', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tomy', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Lucy', age: 20, gender: 'female' }
];

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

let listing =  new Promise(function(responce, reject){
	  var divlist = []
	  loadItems().then(function(data){
		divlist.push(<div class="feature-text"> Strawberry Pi </div>)
		divlist.push(
			<div class="feature-container">
				{data[0].forEach(function(f){
					divlist.push(
						<div class="feature-box">
							<img src={f.itemImageSrc} alt={f.itemImageAlt}/>
							<div class="feature-box-model">
								{f.itemDescription}
							</div>
							<div class="feature-box-price">
								{f.itemPrice}
							</div>
						</div>
					)
				})}
			</div>
		)
		divlist.push(<div class="feature-text"> Strawberry Pi </div>)
		divlist.push(
			<div class="feature-container">
				{data[1].forEach(function(f){
					divlist.push(
						<div class="feature-box">
							<img src={f.itemImageSrc} alt={f.itemImageAlt}/>
							<div class="feature-box-model">
								{f.itemDescription}
							</div>
							<div class="feature-box-price">
								{f.itemPrice}
							</div>
						</div>
					)
				})}
			</div>
		)
		divlist.push(<div class="feature-text"> Strawberry Pi </div>)
		divlist.push(
			<div class="feature-container">
				{data[2].forEach(function(f){
					divlist.push(
						<div class="feature-box">
							<img src={f.itemImageSrc} alt={f.itemImageAlt}/>
							<div class="feature-box-model">
								{f.itemDescription}
							</div>
							<div class="feature-box-price">
								{f.itemPrice}
							</div>
						</div>
					)
				})}
			</div>
		)
		console.log(divlist)
		responce(divlist)
	  }).catch(function(err){
		reject(err)
	  })
	})

const ExampleWithAsync = props => (
	<Async promise={listing} then={val =><div> {val}</div>} />
)

export default class Store extends React.Component {

    render() {
		var usersElements = [];
		return (
			<div id="page-wrap">
				<Header />
				<Async promise={listing} then={val =><div> {val}</div>} />
				<Footer />
			</div>
		)
  }
}
