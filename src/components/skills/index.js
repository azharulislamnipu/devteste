import React, { Component, Children } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Title from '../../../src/ui/title';
import ProgressBar from 'react-bootstrap/ProgressBar'
class Skills extends Component {

  render() {

    return (
      <section className="skills-area">
        <Container>
          {<Title title='Skills' headline='Technical Skills' align='text-right' position='justify-content-end' style={{ headingcolor: '#1f2235', titlecolor: '#666ce0' }} />}
          <Row className='skrill_row'>
            <Col lg={4} md={6} sm={12}>
              <h4 className="heding">Extra skills</h4>
              <ul className="extra_skills">
                <li>LOGO DESIGN</li>
                <li>PHOTOGRAPHY</li>
                <li>Application Development</li>
                <li>Software Development</li>
                <li>Illustrator</li>
                <li>USER EXPERIENCE</li>
                <li>AUDIO VIDEO EDITING</li>
              </ul>
            </Col>
            <Col lg={8} md={6} sm={12} className="skrill">

              <div className="single-skille">
                <h4>PHOTOSHOP</h4>

                <div className="progress-wrrap  fourtypercent">
                  <div className="progress-title">40%</div>
                  <ProgressBar now={40} />
                </div>
              </div>
              <div className="single-skille">
                <h4>HTML</h4>

                <div className="progress-wrrap  fiftypercent">
                  <div className="progress-title">50%</div>
                  <ProgressBar now={50} />
                </div>
              </div>

              <div className="single-skille">

                <h4>JAVASCRIPT</h4>

                <div className="progress-wrrap  ninetypercent">
                  <div className="progress-title">90%</div>
                  <ProgressBar now={90} />
                </div>
              </div>

              <div className="single-skille ">

                <h4>React JS</h4>

                <div className="progress-wrrap  ninetyfivepercent">
                  <div className="progress-title">95%</div>
                  <ProgressBar now={95} />
                </div>
              </div>
              <div className="single-skille ">

               <h4>Node JS</h4>

            <div className="progress-wrrap  hundreadpercent">
              <div className="progress-title">100%</div>
              <ProgressBar now={100} />
            </div>
            </div>
            </Col>
          </Row>
          <Row className='skrill_row2'>
            <Col lg={6} md={6} sm={12}>

              <h4 className="heding">Programming Skills</h4>

              <div className="single-skille">
                <h4>PHOTOSHOP</h4>

                <div className="progress-wrrap  fourtypercent">
                  <div className="progress-title">40%</div>
                  <ProgressBar now={40} />
                </div>
              </div>
              <div className="single-skille">
                <h4>HTML</h4>

                <div className="progress-wrrap  fiftypercent">
                  <div className="progress-title">50%</div>
                  <ProgressBar now={50} />
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>

              <h4 className="heding">language Skills</h4>

              <div className="single-skille">
                <h4>PHOTOSHOP</h4>

                <div className="progress-wrrap  fourtypercent">
                  <div className="progress-title">40%</div>
                  <ProgressBar now={40} />
                </div>
              </div>
              <div className="single-skille">
                <h4>HTML</h4>

                <div className="progress-wrrap  fiftypercent">
                  <div className="progress-title">50%</div>
                  <ProgressBar now={50} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}
export default Skills;