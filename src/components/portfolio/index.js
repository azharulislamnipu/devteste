import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { Component } from 'react';
import Slider from "react-slick";
import work1 from '../../img/work/1.jpg';
import work2 from '../../img/work/2.jpg';
import Title from '../../../src/ui/title';

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{ display: "block", background: "#0de7f5",top:'50%',right:'5px',left:'auto',zIndex:'1',opacity:0 }}
      onClick={onClick}
    >
    <i className="fa fa-angle-right" style={{fontSize:'20px', color:'#ffffff'}}></i>
        </div>
  );
}

function SamplePrevArrow(props) {
  const { className,  onClick } = props;
  return (
    <div
      className={className}
      style={{ display: "block", background: "#0de7f5", top:'50%',left:'5px',right:'auto',zIndex:'1',opacity:0 }}
      onClick={onClick}
    >
        <i className="fa fa-angle-left" style={{fontSize:'20px', color:'#ffffff'}}></i>
        </div>
  );
}

function GridNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{ display: "none", background: "rgb(255, 96, 98)",bottom:'0',right:'auto',left:'45%',zIndex:'1',top:'auto' }}
      onClick={onClick}
    >
    <i className="fa fa-angle-down" style={{fontSize:'20px', color:'#ffffff'}}></i>
        </div>
  );
}

function GridPrevArrow(props) {
  const { className,  onClick } = props;
  return (
    <div
      className={className}
      style={{ display: "block", background: "rgb(255, 96, 98)", top:'0',left:'45%',right:'auto',zIndex:'1',bottom:'auto' }}
      onClick={onClick}
    >
        <i className="fa fa-angle-up" style={{fontSize:'20px', color:'#ffffff'}}></i>
        </div>
  );
}

function GridContentNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{ display: "block", background: "rgb(255, 96, 98)",bottom:'auto',right:'0',left:'auto',zIndex:'1',top:'3%',borderRadius:0 }}
      onClick={onClick}
    >
    <i className="fa fa-angle-right" style={{fontSize:'20px', color:'#ffffff'}}></i>
        </div>
  );
}

function GridContentPrevArrow(props) {
  const { className,  onClick } = props;
  return (
    <div
      className={className}
      style={{ display: "block", background: "rgb(255, 96, 98)", top:'3%',left:'auto',right:'4%',zIndex:'1',bottom:'auto',borderRadius:0 }}
      onClick={onClick}
    >
        <i className="fa fa-angle-left" style={{fontSize:'20px', color:'#ffffff'}}></i>
        </div>
  );
}


class Portfolios extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {

    const settings = {
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      swipeToSlide: true,
      infinite: true,
      speed: 400,
      autoplaySpeed: 3000,
      cssEase: "linear",
      dragable:false,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    const gridsettings = {
      speed: 400,
      autoplaySpeed: 3000,
      cssEase: "linear",
      draggable :false,
      nextArrow: <GridNextArrow />,
      prevArrow: <GridPrevArrow />
    };

    const gridcontentsettings = {
      speed: 400,
      autoplaySpeed: 3000,
      cssEase: "linear",
      draggable :false,
      nextArrow: <GridContentNextArrow/>,
      prevArrow: <GridContentPrevArrow/>
    };

    return (
      <section className="portfolios-area">
               <Container className='mb-5'>
            {<Title title='Works' headline='My Portfolio' align='text-right' position='justify-content-end' style={{ headingcolor: '#1f2235', titlecolor: 'rgb(110, 69, 225)' }} />}
            </Container>
        <div className="container-fluid p-0 grrider" id='portfolio'>
          <Row className="no-gutters align-items-center align-content-center">
            <Col lg={3} md={4} sm={12}>

              <Slider
                asNavFor={this.state.nav1}
                ref={slider => (this.slider2 = slider)}
                slidesToShow={2}
                swipeToSlide={true}
                focusOnSelect={true}
                vertical={true}
                verticalSwiping={true}
                {...gridsettings}
              >

                <div>
                  <Row>
                    <Col lg={12} md={12} sm={12} >
                      <div id="gridder" className="gridder-grid fix hover-style2" data-griddercontent="#project-1">
                        <div className="gridder-list percent-25">
                          <div className="single-portfolio overlay dark-1">
                            <img src={work1} />
                            <div className="project-title">
                              <h3 className="white-color">Notepad Mockup</h3>
                              <h6 className="white-color">Mockup Free</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>

                <div>
                  <Row>
                    <Col lg={12} >
                      <div id="gridder" className="gridder-grid fix hover-style2" data-griddercontent="#project-1">
                        <div className="gridder-list percent-25">
                          <div className="single-portfolio overlay dark-1">
                            <img src={work2} />
                            <div className="project-title">
                              <h3 className="white-color">Notepad Mockup</h3>
                              <h6 className="white-color">Mockup Free</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>


                <div>
                  <Row>
                    <Col lg={12} >
                      <div id="gridder" className="gridder-grid fix hover-style2" data-griddercontent="#project-1">
                        <div className="gridder-list percent-25">
                          <div className="single-portfolio overlay dark-1">
                            <img src={work1} />
                            <div className="project-title">
                              <h3 className="white-color">Notepad Mockup</h3>
                              <h6 className="white-color">Mockup Free</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>


              </Slider>

            </Col>



            <Col lg={9} md={8} sm={12}>

              <Slider
                asNavFor={this.state.nav2}
                ref={slider => (this.slider1 = slider)}
                {...gridcontentsettings}
              >

                <div>
                <div className="gridder-content">
                    <div className="container-fluid \">
                        <div className="row">
                        <Col lg={8} md={12} sm={12} >
                          
                                <div className="gridderGallery">
                                    <div id="gallery02" className="carousel slide" data-interval="3000" data-ride="carousel">
                                  
                                          <Slider {...settings}>
                                            <div className="item active">
                                                <img src={work1}/>
                                            </div>
                                            <div className="item">
                                                <img src={work2}/>
                                            </div>
                                            <div className="item">
                                                <img src={work1}/>
                                            </div>
                                            </Slider>
                        
                                  
                                    </div>
                                </div>
                           
                        </Col>
                        <Col lg={4} md={12} sm={12} >
                                <div className="project-details pt-65 pl-35">
                                    <h2>Paper Cup Hot</h2>
                                    <p>At vero eos et accusamus et ius dignimo ducimus qui blanditiis prvoluptat deleniti atque
                                        corru quos dolore mole excepturi sint occaecati cuitate non prodent, silique sunt in
                                        culpa</p>
                                    <div className="project-info mt-50">
                                        <ul>
                                            <li>
                                                <h5>Client</h5>
                                                <p>Themeforest</p>
                                            </li>
                                            <li>
                                                <h5>Created</h5>
                                                <p>Romiz Raza</p>
                                            </li>
                                            <li>
                                                <h5>Completed</h5>
                                                <p>24 April 2018</p>
                                            </li>
                                            <li>
                                                <h5>Skill</h5>
                                                <p>Photoshop, UI/UX</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <a className="btn sm-btn" href="#">view project</a>
                                </div>
                                </Col>
                        </div>
                    </div>
                </div>
                </div>


                <div>
                <div className="gridder-content">
                    <div className="container-fluid \">
                        <div className="row">
                        <Col lg={8} md={12} sm={12} >
                                <div className="gridderGallery">
                                    <div id="gallery02" className="carousel slide" data-interval="3000" data-ride="carousel">
                                  
                                          <Slider {...settings}>
                                            <div className="item active">
                                                <img src={work1}/>
                                            </div>
                                            <div className="item">
                                                <img src={work2}/>
                                            </div>
                                            <div className="item">
                                                <img src={work1}/>
                                            </div>
                                            </Slider>
                        
                                  
                                    </div>
                                </div>
                                </Col>
                        <Col lg={4} md={12} sm={12} >
                                <div className="project-details pt-65 pl-35">
                                    <h2>Paper Cup Hot</h2>
                                    <p>At vero eos et accusamus et ius dignimo ducimus qui blanditiis prvoluptat deleniti atque
                                        corru quos dolore mole excepturi sint occaecati cuitate non prodent, silique sunt in
                                        culpa</p>
                                    <div className="project-info mt-50">
                                        <ul>
                                            <li>
                                                <h5>Client</h5>
                                                <p>Themeforest</p>
                                            </li>
                                            <li>
                                                <h5>Created</h5>
                                                <p>Romiz Raza</p>
                                            </li>
                                            <li>
                                                <h5>Completed</h5>
                                                <p>24 April 2018</p>
                                            </li>
                                            <li>
                                                <h5>Skill</h5>
                                                <p>Photoshop, UI/UX</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <a className="btn sm-btn" href="#">view project</a>
                                </div>
                                </Col>
                        </div>
                    </div>
                </div>
                </div>


                <div>
                <div className="gridder-content">
                    <div className="container-fluid \">
                        <div className="row">
                        <Col lg={8} md={12} sm={12} >
                                <div className="gridderGallery">
                                    <div id="gallery02" className="carousel slide" data-interval="3000" data-ride="carousel">
                                  
                                          <Slider {...settings}>
                                            <div className="item active">
                                                <img src={work2}/>
                                            </div>
                                            <div className="item">
                                                <img src={work2}/>
                                            </div>
                                            <div className="item">
                                                <img src={work2}/>
                                            </div>
                                            </Slider>
                        
                                  
                                    </div>
                                </div>
                                </Col>
                        <Col lg={4} md={12} sm={12} >
                                <div className="project-details pt-65 pl-35">
                                    <h2>Paper Cup Hot</h2>
                                    <p>At vero eos et accusamus et ius dignimo ducimus qui blanditiis prvoluptat deleniti atque
                                        corru quos dolore mole excepturi sint occaecati cuitate non prodent, silique sunt in
                                        culpa</p>
                                    <div className="project-info mt-50">
                                        <ul>
                                            <li>
                                                <h5>Client</h5>
                                                <p>Themeforest</p>
                                            </li>
                                            <li>
                                                <h5>Created</h5>
                                                <p>Romiz Raza</p>
                                            </li>
                                            <li>
                                                <h5>Completed</h5>
                                                <p>24 April 2018</p>
                                            </li>
                                            <li>
                                                <h5>Skill</h5>
                                                <p>Photoshop, UI/UX</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <a className="btn sm-btn" href="#">view project</a>
                                </div>
                                </Col>
                        </div>
                    </div>
                </div>
                </div>

              </Slider>

            </Col>
          </Row>

        </div>
      </section>
    )
  }
}



export default Portfolios;
