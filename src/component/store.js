import React from 'react';
import Header from './partials/header.js';
import Footer from './partials/footer.js';
import {DB_CONFIG} from '../firebase.conf';
import firebase from 'firebase';

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
export default class Store extends React.Component {

	constructor(){
		super();
		this.app = firebase.initializeApp(DB_CONFIG);
		this.database= this.app.database().ref().child('speed');
		this.state={
			speed:10
		};
		// loadItems().then(function(daat){itemList.forEach(function(element) {
         //    console.log(element)})});
        // loadItems().then(function(data){this.setState({val:itemList})});

	}

	componentDidMount() {
		this.database.on('value', snap => {
			this.setState({
				speed:snap.val()
			})
		});
	}


    render() {
		var usersElements = [];
		<div>
        // console.log(itemList);
        // console.log(this.state.val);
		// for (let item of this.state.val[0]) {
		// 	console.log(item);
		// 	usersElements.push(
		// 		/*<Col sm={3} md={2} xs={4}>
		// 			<Thumbnail src='https://firebasestorage.googleapis.com/v0/b/project-407f3.appspot.com/o/image%2FBanners%2Fheader-banner-about.jpg?alt=media&token=782cf45d-acd9-4013-95bb-294a4f552252' >
		// 				<h4>{item.username}</h4>
		// 				<p>Age: {item.age}</p>
		// 				<Button bsStyle="default">Add to Cart</Button>
		// 			</Thumbnail>
		// 		</Col>*/
		// 		<Col sm={3} md={2} xs={4}>
		// 			<Thumbnail src={item.itemImageSrc} >
		// 				<h4>{item.itemDescription}</h4>
		// 				<p>Age: {item.itemPrice}</p>
		// 				<Button bsStyle="default">Add to Cart</Button>
		// 			</Thumbnail>
		// 		</Col>
		// 	)
		// }
		return (
			<div id="page-wrap">
				<Header />
				<br/><br/><br/><br/>
				<Grid>
					<Row className="show-grid">
						{usersElements}
					</Row>
				</Grid>

				<Footer />
			</div>
		)
  }
}
