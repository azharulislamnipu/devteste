import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import about from '../../../src/img/about.jpg';
import Tag from '../../../src/ui/icon' ;
export default class About extends Component {
    render() {
        return (
            <section id='about' className='about-area ptb-100'>
                <Container>
                   <Row>
                       <Col lg={6} md={5} sm={12}>
                          <div className="about-img">
                            <div className="box-img">
                                <img src={about} alt="About-me"/>
                            </div>
                            </div>
                       </Col>
                       <Col  lg={6} md={7} sm={12}>

                       <div className="info-about">
                   
                    <div className="section-title-left">
                        <h2>I'm Nour Eldin</h2>
                        <h3>I'm Creative UI/UX Designer <br/> And Developer Based In New york</h3>
                    </div>
                    
                    <p className="mb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                    
                    <p className="mb-30">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna.</p>
                    
                    <div className="profile">
                    <Row>
                            <Col lg={6} md={6} sm={12}>
                                <p>Name: <span>Nour Eldin</span></p>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                <p>Age: <span>25</span></p>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                <p>Phone: <span>+011 499 123 18</span></p>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                <p>Address: <span>New York, USA</span></p>
                                </Col>
                            
                                <Col lg={6} md={6} sm={12}>
                                <p>Freelance: <span>Available</span></p>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                <p>Nationality: <span>American</span></p>
                                </Col>
                                 
                      </Row> 
                    
                    </div>
                    
                    
                    <div className="follow-me">
                        <p>Follow Me : </p>
                        <ul className="social-media-about">
                           <li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
                           <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                           <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                           <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                           <li><a href="#"><i className="fa fa-behance"></i></a></li>
                           <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                        </ul>
                   

                    </div>
            </div>
                       </Col>
                    </Row> 
                </Container>
            </section>
        )
    }
}
