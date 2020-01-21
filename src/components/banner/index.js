import React, { Component } from 'react';
import intelligence from '../../img/intelligence.png';
import ellipse from '../../img/svg/ellipse.svg';
import playbutton from '../../img/svg/play-button.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AnchorLink from 'react-anchor-link-smooth-scroll'
export default class Banner extends Component {
    render() {
        return (
            <section className='hero-bannner' id='home'>
                <div className="hero-inner-wrraper cliping-mask bg-primary">
                <Container>
                <Row> 
                        <Col lg={7} md={7} sm={12}>  
                                <div className="info-header table-cell">
            
                                    <h1><span>Hey There!</span>  <br/> <span>I'm</span> Azharul Islam<br/> <span>Based In Bangladesh</span></h1>
                                    
                                    <ul className="banner-meta">
                                        <li>Full Stack Developer</li>  
                                        <li>UI/UX Designer</li>
                                    </ul>

                                
                                    <div className="banner-btn">   
                                        <a href="#" className="btn rounded">My Portfolio</a>      
                                    </div>
                                 
                                </div>
                                </Col>
                                <Col lg={5} md={5} sm={12}>         
               
                            <img src={intelligence} alt=""/>
                        
                        </Col>
                        </Row> 
                        <Row className="pt-2 pb-2"> 
                  
                        <Col>

                        <AnchorLink href='#about' offset='100' className="down">
                        <span className="down-one"></span>
                                        <span className="down-two">About Me</span>
                                        <span className="down-three"></span>
                        </AnchorLink>

                       </Col>       
                    
                    </Row>

                    </Container>
                </div>
            
               <img src={ellipse}  alt="image" className="icon-shape-1"/>
              <img src={playbutton} alt="image" className="icon-shape-2"/>
            </section>
        )
    }
}
