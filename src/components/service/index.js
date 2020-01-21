import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Title from '../../../src/ui/title';
import IconGenerate from '../../ui';
import Particles from 'react-particles-js';
class Services extends Component {

   render() {
      return (
         <section className="service-area" id='service-area'>
            <Particles className='particles-js' 
                params={{
               
                     "particles": {
                       "number": {
                         "value": 88,
                         "density": {
                           "enable": true,
                           "value_area": 700
                         }
                       },
                       "color": {
                         "value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
                       },
                       "shape": {
                         "type": "circle",
                         "stroke": {
                           "width": 0,
                           "color": "#000000"
                         },
                         "polygon": {
                           "nb_sides": 15
                         }
                       },
                       "opacity": {
                         "value": 0.5,
                         "random": false,
                         "anim": {
                           "enable": false,
                           "speed": 1.5,
                           "opacity_min": 0.15,
                           "sync": false
                         }
                       },
                       "size": {
                         "value": 2.5,
                         "random": false,
                         "anim": {
                           "enable": true,
                           "speed": 2,
                           "size_min": 0.15,
                           "sync": false
                         }
                       },
                       "line_linked": {
                         "enable": true,
                         "distance": 110,
                         "color": "#33b1f8",
                         "opacity": 0.25,
                         "width": 1
                       },
                       "move": {
                         "enable": true,
                         "speed": 1.6,
                         "direction": "none",
                         "random": false,
                         "straight": false,
                         "out_mode": "out",
                         "bounce": false,
                         "attract": {
                           "enable": false,
                           "rotateX": 600,
                           "rotateY": 1200
                         }
                       }
                     },
                     "interactivity": {
                       "detect_on": "canvas",
                       "events": {
                         "onhover": {
                           "enable": false,
                           "mode": "repulse"
                         },
                         "onclick": {
                           "enable": false,
                           "mode": "push"
                         },
                         "resize": true
                       },
                       "modes": {
                         "grab": {
                           "distance": 400,
                           "line_linked": {
                             "opacity": 1
                           }
                         },
                         "bubble": {
                           "distance": 400,
                           "size": 40,
                           "duration": 2,
                           "opacity": 8,
                           "speed": 3
                         },
                         "repulse": {
                           "distance": 200,
                           "duration": 0.4
                         },
                         "push": {
                           "particles_nb": 4
                         },
                         "remove": {
                           "particles_nb": 2
                         }
                       }
                     },
                     "retina_detect": true
                   }
              }  />
                
            <Container>
               <Title title='I provide' headline='Best Service For You' align='text-left' position='justify-content-start' style={{ headingcolor: '#ffffff', titlecolor: 'rgb(250, 128, 114)' }} />

               <Row className='align-items-center'>
                  <Col lg={4} md={6} sm={12}>
                     <div className="service-box">
                        <div className="service-icon">
                           <IconGenerate className='fa-recycle' />
                        </div>
                        <div className="service-box-content">
                           <h4 className="service-title">Business Strategy</h4>
                           <div className="service-content">
                              <p>Strategy develop customer in organisational knowledge and market perspectives that inform and provoke.</p>

                           </div>
                        </div>
                     </div>
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                     <div className="service-box">
                        <div className="service-icon">
                           <IconGenerate className='fa-github' />
                        </div>
                        <div className="service-box-content">
                           <h4 className="service-title">Business Strategy</h4>
                           <div className="service-content">
                              <p>Strategy develop customer in organisational knowledge and market perspectives that inform and provoke.</p>

                           </div>
                        </div>
                     </div>
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                     <div className="service-box">
                        <div className="service-icon">
                           <IconGenerate className='fa-chain-broken' />
                        </div>
                        <div className="service-box-content">
                           <h4 className="service-title">Business Strategy</h4>
                           <div className="service-content">
                              <p>Strategy develop customer in organisational knowledge and market perspectives that inform and provoke.</p>

                           </div>
                        </div>
                     </div>
                  </Col>

                  <Col lg={4} md={6} sm={12}>
                     <div className="service-box">
                        <div className="service-icon">
                           <IconGenerate className='fa-gratipay' />
                        </div>
                        <div className="service-box-content">
                           <h4 className="service-title">Business Strategy</h4>
                           <div className="service-content">
                              <p>Strategy develop customer in organisational knowledge and market perspectives that inform and provoke.</p>

                           </div>
                        </div>
                     </div>
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                     <div className="service-box">
                        <div className="service-icon">
                           <IconGenerate className='fa-qrcode' />
                        </div>
                        <div className="service-box-content">
                           <h4 className="service-title">Business Strategy</h4>
                           <div className="service-content">
                              <p>Strategy develop customer in organisational knowledge and market perspectives that inform and provoke.</p>

                           </div>
                        </div>
                     </div>
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                     <div className="service-box">
                        <div className="service-icon">
                           <IconGenerate className='fa-eye' />
                        </div>
                        <div className="service-box-content">
                           <h4 className="service-title">Business Strategy</h4>
                           <div className="service-content">
                              <p>Strategy develop customer in organisational knowledge and market perspectives that inform and provoke.</p>

                           </div>
                        </div>
                     </div>
                  </Col>

               </Row>
            </Container>
         </section>
      )
   }
}



export default Services;
