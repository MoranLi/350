import React from 'react';
import './checkout.css';
import Header from './partials/header.js';
import Footer from './partials/footer.js';
import db from '../firebase.conf';
import Async from 'react-promise';
import {Col, Grid, Image, Row, Thumbnail, Button} from 'react-bootstrap';

var itemList = [];

function hash(str) {
  var hash = 5381,
      i    = str.length
  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }
  return hash >>> 0
}

function loadItems() {
    return new Promise(function(resolve, reject){
      db.authService.onAuthStateChanged(function(user) {
        if (user) {
          var hashusername = hash(db.authService.currentUser.email)
          db.db.ref('/users/'+hashusername.toString()).once('value').then(function(dataSnapshot){
            var data = dataSnapshot.val();
            console.log(data)
            Object.keys(data).forEach(function(f){
                var sub = data[f];
                sub["key"] = f;
                itemList.push(sub)
            });
            console.log("success load item");
            resolve(itemList)
          }).catch(function(err){
            reject(err)
          })
        } else {
          reject("Not login !")
        }
      });
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

function removeFromCart(item){
  if(db.authService.currentUser) {
    var hashusername = hash(db.authService.currentUser.email)
    db.db.ref('/users/'+hashusername.toString()+"/"+item["key"]).remove().then(function(){
      alert("remove item successfully")
      document.getElementById(item["key"]).remove()
    }).catch(function(err){
        alert(err)
        console.log(err)
    })
  } else {
      alert("Not login !")
  } 
}

function clearCart(){
  if(db.authService.currentUser) {
    var hashusername = hash(db.authService.currentUser.email)
    db.db.ref('/users/'+hashusername.toString()).remove().then(function(){
      alert("cart cleared")
      document.getElementById("cart").innerHTML=""
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
      data.forEach(function(item) {
        usersElements.push(
            <Col sm={3} md={2} xs={4}>
                <Thumbnail id={item["key"]} className='test'>
                    <Image src={item.itemImageSrc} width="100" height="100"/>
                    <h4>{item.itemDescription}</h4>
                    <p>Price: {item.itemPrice}</p>
                    {console.log(item)}
                    <Button bsStyle="default" onClick = { () => removeFromCart(item) }>Add to Cart</Button>
                </Thumbnail>
            </Col>
        )
      });
       responce(usersElements);
  }).catch(function(err){
  reject(err)
  })
});

export default class Checkout extends React.Component {
  render() {
      return (
        <div id="page-wrap">
          <Header/>
          <div id="cart">
            <Async promise={listing} then={val =><Grid> <Row>{val}</Row></Grid>} />
          </div>
          <button onclick={() => clearCart()}> Clear Chart </button>
          <Footer/>
        </div>
      )
    }
}