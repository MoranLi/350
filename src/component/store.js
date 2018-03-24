import React from 'react';
import Header from './partials/header.js';
import Footer from './partials/footer.js';

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


export default class Store extends React.Component {
    render() {
        const usersElements = [];
        for (let user of users) {
            usersElements.push(
                <Col sm={3} md={2} xs={4}>
                    <Thumbnail src="https://firebasestorage.googleapis.com/v0/b/project-407f3.appspot.com/o/image%2FBanners%2Ffooter-banner-about.jpg?alt=media&token=506d0c0f-a7e4-47f2-a1fb-fed7ecd854a7g" >
                        <h4>{user.username}</h4>
                        <p>Age: {user.age}</p>
						<Button bsStyle="default">Add to Cart</Button>
                    </Thumbnail>
				</Col>
            )
        }

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
