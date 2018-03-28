import React from 'react';
import Header from './partials/header.js';
import Footer from './partials/footer.js';
import firebaseService from '../firebase.conf';
import './post.css'
import './home.css'
import db from '../firebase.conf';
import Async from 'react-promise';
import {Col, Grid, Image, Row, Thumbnail, Button} from 'react-bootstrap';
import axios from 'axios';

function loadItems() {
    return new Promise(function(resolve, reject){

        axios.get("https://server350.herokuapp.com",{
            headers:{
            'Access-Control-Allow-Origin':'*'
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
                        <p>Id: {item.index} </p>
                        {console.log(item)}
                    </Thumbnail>
                </Col>
            ) 
          });
          responce(usersElements);
      }).catch(function(err){
        reject(err)
      })
    });

export default class Post extends React.Component {
    Insert(){
        const name = document.getElementById('text').value;
        const price = document.getElementById('number').value;
        const image = document.getElementById('file').files[0];
        var formData = new FormData()
        console.log(image)
        formData.append('images',image)
        formData.append('description',name)
        formData.append('price',price)
        axios.post('https://server350.herokuapp.com',formData).then((data)=>{
            console.log(data)
            alert(data.data)
        })
    }

    Update(){
        
        const id = document.getElementById('number1').value;
        const name = document.getElementById('text').value;
        const price = document.getElementById('number').value;
        const image = document.getElementById('file').files[0];
        var formData = new FormData()
        console.log(image)
        formData.append('images',image)
        formData.append('description',name)
        formData.append('price',price)
        axios.post('https://server350.herokuapp.com/'+id,formData).then((data)=>{
            alert(data.data)
        })
    }

    Delete(){
        const id = document.getElementById('number1').value;

        axios.delete('https://server350.herokuapp.com/'+id).then((data)=>{
            console.log(data)
            alert(data.data)
        })    }

    render(){
        const mode =
            <div>
              <div style={{display: 'flex', justifyContent: 'initial'}}>
                  <input id="file" type="file" placeholder="image"/>
              </div>

              <div style={{display: 'flex', justifyContent: 'initial'}}>
                  <input id="text" type="text" placeholder="name"/>
              </div>

              <div style={{display: 'flex', justifyContent: 'initial'}}>
                  <input id="number" type="number" placeholder="price"/>
              </div>

              <div style={{display: 'flex', justifyContent: 'initial'}}>
                  <input id="number1" type="number" placeholder="id"/>
              </div>
              
              <div style={{display: 'flex', justifyContent: 'initial'}}>
                <Button onClick={()=> this.Insert()}>Insert</Button>
                <Button onClick={()=> this.Update()}>Update</Button>
                <Button onClick={()=> this.Delete()}>Delete</Button>
              </div>
            
            </div>;

            
        return (

            <div id="page-wrap">
                <Header/>
                <br/><br/><br/>
                {mode}

                <div id="page-wrap">
                <br/><br/><br/><br/>
                <Async promise={listing} then={val =><Grid> <Row>{val}</Row></Grid>}/>
                </div>

                <Footer/>

               
            </div>



        )
    }
}