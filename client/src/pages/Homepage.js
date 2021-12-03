import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card } from 'react-bootstrap';
import ControlledCarousel from '../components/Carousel'

// import Auth from '../utils/auth';
import logo from '../logo.svg';

import '../App.css';

function Homepage() {
    return (
      <div className="mainContainer" >
      <Container >     
          <Card id="carouselCard">
            <ControlledCarousel />
          </Card>
      </Container>
      </div>
    );
  }
  
  export default Homepage;