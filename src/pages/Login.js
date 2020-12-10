import React from 'react';
import logo from '../music-logo.jpg'
import { Card, Container, Button } from 'react-bootstrap';



function Login() {

  return (
    <Container>
        <Card style={{color:"white"}} className="card mt-5 justify-content-center">
            <Card.Header><h3>Welcome to Music Ratings</h3></Card.Header>
            <Card.Body>
                <Card.Img height="300px" width="300px" variant="top" src={logo} />
                <Card.Title className="mt-3">To Begin please Sign In</Card.Title>
                <Card.Text>
                In this page you will be abble to live your comments about your favourite artists
                </Card.Text>
                <Button href= {`https://connect.deezer.com/oauth/auth.php?response_type=token&app_id=${process.env.REACT_APP_APP_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&perms=basic_access,email`} size="lg" variant="outline-primary">Sign In</Button>
            </Card.Body>
        </Card>
    </Container>
  );
}

export default Login;