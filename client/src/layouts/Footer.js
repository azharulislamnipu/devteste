import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../img/header.png';
export class Footer extends Component {
    render() {
        return (
           <footer className="footer-area">
    
              <Container>
              <Row className='align-items-center pb-10 pt-40'>

                  <Col lg={4} md={4} sm={6} className='text-left footer-wedget'>
                  <a className="logo" href="#"> <img src={logo} alt="logo"/></a>
                  </Col>

                  <Col lg={4} md={4} sm={6} className='text-center footer-wedget'>
                  <h2 class="text-center">Let’s Talk?</h2>
                  </Col>

                  <Col lg={4} md={4} sm={6} className='text-right footer-wedget'>
            
                  <a class="btn" href="#">Let’s Chat</a>
                  </Col>
              </Row>
              <Row className='align-items-center pb-30 pt-30'>
                  <Col lg={12} md={12} sm={12} className='text-center'>
                   <p>   Copyright By@azhardevs - {new Date().getFullYear()} </p>
                  </Col>
                
                </Row>
              </Container>
           </footer>  
        )
    }
}



export default Footer;
