import React from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import backgroundImage from '../assets/images/movie-posters-wallpapers.jpg'
import "../styles/Home.css"

const Home = () => {
    return (
        
        <div className="landing-page">

        <img src={backgroundImage} alt="Background" className="background-image" />
           
          <Container className="text-center text-white text-content">
            <Row className="justify-content-center align-items-center">
              <Col>
                <h1 className="display-4 mb-4">Your streaming guide for movies & TV shows</h1>
                <p className="lead mb-5">Discover and watch your favorite movies and TV shows</p>
                <Button color="primary" size="lg">Get Started</Button>
              </Col>
            </Row>
            {/* <Row className="mt-5">
              <Col>
                <h2 className="mb-4">Popular Movies</h2>
                { Add code to display random movies here }
              </Col>
            </Row> */}
          </Container>
          
        </div>
      );
    };
  
  export default Home;