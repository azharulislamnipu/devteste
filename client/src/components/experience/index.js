import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Title from '../../../src/ui/title';
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        style={{ display: "block", background: "#0de7f5",top:'auto',bottom:'-55px' }}
        onClick={onClick}
      >
      <i className="fa fa-angle-down" style={{fontSize:'20px', color:'#ffffff'}}></i>
          </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className,  onClick } = props;
    return (
      <div
        className={className}
        style={{ display: "none", background: "#0de7f5", top:'-18px',bottom:'auto' }}
        onClick={onClick}
      >
          <i className="fa fa-angle-up" style={{fontSize:'20px', color:'#ffffff'}}></i>
          </div>
    );
  }
class Experience extends Component {

  
    render() {

        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            vertical: true,
            verticalSwiping: true,
            autoplay: true,
            speed: 200,
            autoplaySpeed: 2000,
            cssEase: "linear",
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <section className='experience-area'>
                <Container>
                    <Title title='Experience' headline='Education and Experience' align='text-left' position='justify-content-start' style={{headingcolor:'#ffffff',titlecolor:'#666ce0'}}/>
                    {/* <Title title='Experience' headline='Education and Experience' align='text-right' position='justify-content-end' /> */}

                    <Row className='align-items-center'>
                        <Col lg={6} md={6} sm={12}>
                            <div className="feature-box">
                                <div className="feature-icon"><i className="fa fa-google"></i></div>
                                <div className="box-content">
                                    <h4 className="feature-title">2000 - 2008 (UX Designer)</h4>
                                    <div className="feature-content"><p>Google Corporation.</p></div>
                                </div>
                            </div>

                            <div className="feature-box">
                                <div className="feature-icon"><i className="fa fa-google"></i></div>
                                <div className="box-content">
                                    <h4 className="feature-title">2000 - 2008 (UX Designer)</h4>
                                    <div className="feature-content"><p>Google Corporation.</p></div>
                                </div>
                            </div>
                            <div className="feature-box">
                                <div className="feature-icon"><i className="fa fa-google"></i></div>
                                <div className="box-content">
                                    <h4 className="feature-title">2000 - 2008 (UX Designer)</h4>
                                    <div className="feature-content"><p>Google Corporation.</p></div>
                                </div>
                            </div>
                            <div className="feature-box">
                                <div className="feature-icon"><i className="fa fa-google"></i></div>
                                <div className="box-content">
                                    <h4 className="feature-title">2000 - 2008 (UX Designer)</h4>
                                    <div className="feature-content"><p>Google Corporation.</p></div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>

                            <Slider {...settings} className='qualifi-box-area'>
                             
                                    <div className="qualifi-item"><div className="qualifi-box">
                                        <div className="qualifi-info">
                                            <div className="session">
                                                (2010-2014)</div>
                                            <div className="collage">BM College</div>
                                        </div>
                                        <div className="qualifi-content">
                                            <h4 className="title">Diploma In Computer</h4>
                                            <div className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                             sed do eiusmod tempor incididunt ut labore.
                                             </div>
                                        </div>
                                    </div>
                                    </div>
                              
                                    <div className="qualifi-item"><div className="qualifi-box">
                                        <div className="qualifi-info">
                                            <div className="session">
                                                (2010-2014)</div>
                                            <div className="collage">BM College</div>
                                        </div>
                                        <div className="qualifi-content">
                                            <h4 className="title">Diploma In Computer</h4>
                                            <div className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                             sed do eiusmod tempor incididunt ut labore.
                                             </div>
                                        </div>
                                    </div>
                                    </div>
                              
                               
                                    <div className="qualifi-item"><div className="qualifi-box">
                                        <div className="qualifi-info">
                                            <div className="session">
                                                (2010-2014)</div>
                                            <div className="collage">BM College</div>
                                        </div>
                                        <div className="qualifi-content">
                                            <h4 className="title">Diploma In Computer</h4>
                                            <div className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                             sed do eiusmod tempor incididunt ut labore.
                                             </div>
                                        </div>
                                    </div>
                                    </div>
                              
                               
                                    <div className="qualifi-item"><div className="qualifi-box">
                                        <div className="qualifi-info">
                                            <div className="session">
                                                (2010-2014)</div>
                                            <div className="collage">BM College</div>
                                        </div>
                                        <div className="qualifi-content">
                                            <h4 className="title">Diploma In Computer</h4>
                                            <div className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                             sed do eiusmod tempor incididunt ut labore.
                                             </div>
                                        </div>
                                    </div>
                                    </div>
                              
                               
                                    <div className="qualifi-item"><div className="qualifi-box">
                                        <div className="qualifi-info">
                                            <div className="session">
                                                (2010-2014)</div>
                                            <div className="collage">BM College</div>
                                        </div>
                                        <div className="qualifi-content">
                                            <h4 className="title">Diploma In Computer</h4>
                                            <div className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                             sed do eiusmod tempor incididunt ut labore.
                                             </div>
                                        </div>
                                    </div>
                                    </div>
                              
                               
                                    <div className="qualifi-item"><div className="qualifi-box">
                                        <div className="qualifi-info">
                                            <div className="session">
                                                (2010-2014)</div>
                                            <div className="collage">BM College</div>
                                        </div>
                                        <div className="qualifi-content">
                                            <h4 className="title">Diploma In Computer</h4>
                                            <div className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                             sed do eiusmod tempor incididunt ut labore.
                                             </div>
                                        </div>
                                    </div>
                                    </div>
                              
                               
                                    <div className="qualifi-item"><div className="qualifi-box">
                                        <div className="qualifi-info">
                                            <div className="session">
                                                (2010-2014)</div>
                                            <div className="collage">BM College</div>
                                        </div>
                                        <div className="qualifi-content">
                                            <h4 className="title">Diploma In Computer</h4>
                                            <div className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                             sed do eiusmod tempor incididunt ut labore.
                                             </div>
                                        </div>
                                    </div>
                                    </div>
                              
                               
                                    <div className="qualifi-item"><div className="qualifi-box">
                                        <div className="qualifi-info">
                                            <div className="session">
                                                (2010-2014)</div>
                                            <div className="collage">BM College</div>
                                        </div>
                                        <div className="qualifi-content">
                                            <h4 className="title">Diploma In Computer</h4>
                                            <div className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                             sed do eiusmod tempor incididunt ut labore.
                                             </div>
                                        </div>
                                    </div>
                                    </div>
                            </Slider>

                        </Col>
                    </Row>


                </Container>
            </section>
        )
    }
}

export default Experience;
