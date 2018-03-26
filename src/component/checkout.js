import React from 'react';
import './checkout.css';
import Header from './partials/header.js';
import Footer from './partials/footer.js';
import db from '../firebase.conf';
import Async from 'react-promise';
import {ButtonGroup,Image, Row, Col, Grid, Button} from 'react-bootstrap';

let itemList = [];

function hash(str) {
  let hash = 5381,
      i    = str.length;
  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }
  return hash >>> 0
}

function loadItems() {
    return new Promise(function(resolve, reject){
      db.authService.onAuthStateChanged(function(user) {
        if (user) {
          const hashusername = hash(db.authService.currentUser.email);
          db.db.ref('/users/'+hashusername.toString()).once('value').then(function(dataSnapshot){
            const data = dataSnapshot.val();
            console.log(data);
            if(data === null) {
                reject("Cart is empty")
            }
            Object.keys(data).forEach(function(f){
                let sub = data[f];
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

function removeFromCart(item){
  if(db.authService.currentUser) {
    const hashusername = hash(db.authService.currentUser.email);
    db.db.ref('/users/'+hashusername.toString()+"/"+item["key"]).remove().then(function(){
      alert("remove item successfully");
        // window.location = '/checkout';
      document.getElementById(item["key"]).remove()
    }).catch(function(err){
        alert(err);
        console.log(err);
    })
  } else {
      alert("Not login !")
  } 
}

function clearCart(){
  if(db.authService.currentUser) {
    const hashusername = hash(db.authService.currentUser.email);
    db.db.ref('/users/'+hashusername.toString()).remove().then(function(){
      alert("cart cleared");
      document.getElementById("cart").innerHTML=""
    }).catch(function(err){
        alert(err);
        console.log(err);
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
            <div className="media" id={item["key"]}>
                <div className="media-left media-top">
                    <Image width="100" height="100" src={item.itemImageSrc}/>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">{item.itemDescription}</h4>
                  <p>Price: ${item.itemPrice}</p>
                </div>
                <div className="media-left media-top">
                    <Button bsSize="small" onClick={() => removeFromCart(item)}>remove</Button>
                </div>
            </div>
        )});
       responce(usersElements);
  }).catch(function(err){
    console.log(err);
  })
});

export default class Checkout extends React.Component {
  render() {
      return (
        <div id="page-wrap">
          <Header/>
            <br/><br/><br/>
            <Async promise={listing} then={val =><div id="cart">{val}</div>} />
            <div >
                <Button className="pull-right" bsStyle="success" onClick={alert("check out page")> Check Out </Button>&nbsp;&nbsp;
                <Button bsStyle="danger" onClick={() => clearCart()}> Clear Chart </Button>
            </div>
          {/*<Footer/>*/}
        </div>
      )
    }
}