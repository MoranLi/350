import React from 'react';
import Header from './partials/header.js';
import Footer from './partials/footer.js';
import db from '../firebase.conf';
import Async from 'react-promise';
import {Row, Col, Image, Button} from 'react-bootstrap';

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

function checkCard() {
    var txt;
    var person = prompt("Please enter your credit card number:", "must be 16 digit");
    if (person == null || person == "" || person.length != 16) {
        alert ("Your Credit Card number is invalid")
    }
    else if (validate_creditcardnumber(person)==false){
        alert ("Your Credit Card number is invalid")
    }
    else {
        alert ("Payment Success")
    }
}

function validate_creditcardnumber(number)
    {
      var re16digit=/^\d{16}$/
      if (number.search(re16digit)==-1){
      return false;  
      }
      else{
        return true
      }
    }


let listing =  new Promise(function(responce, reject){
  const usersElements = [];
  loadItems().then(function(data){
      data.forEach(function(item) {
        usersElements.push(
            <Row className="media" id={item["key"]}>
                <Col className="media-left media-top">
                    <Image width="100" height="100" src={item.itemImageSrc}/>
                </Col>
                <Col className="media-body">
                  <h4 className="media-heading">{item.itemDescription}</h4>
                  <p>Price: ${item.itemPrice}</p>
                </Col>
                <Col className="media-left media-top">
                    <Button bsSize="medium" onClick={() => removeFromCart(item)}>remove</Button>
                </Col>
            </Row>
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
``
            <Button className="pull-right" bsStyle="success" onClick={()=>checkCard()
}>Check Out</Button>&nbsp;&nbsp;
            
            <Button bsStyle="danger" onClick={() => clearCart()}> Clear Chart </Button>

          {/*<Footer/>*/}
        </div>
      )
    }
    
}

