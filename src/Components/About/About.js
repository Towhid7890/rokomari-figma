import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import about from "../../Images/about.jpeg";
import './About.css'


const About = () => {
  return (
    <div>
      <Container>
        <Row className='mt-5'>
          <Col className="about-container">
          <img src={about} alt="" />
          </Col>
          <Col className="about-body">
          <div className='d-flex align-items-center'>
            <div className='div-style'></div>
            <p style={{color: 'tomato',fontWeight: 'bold'}} className='mt-3 ps-2'>About us</p>
          </div>
          <h1 style={{fontWeight: 'bold',fontSize: '50px'}}>Professional Business <br /> Guidance Agency</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
          <p>Unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <li><span className="text-dark">Business & Consulting Agency</span></li>
          <li><span className="text-dark">Business & Consulting Agency</span></li>
          <button className="learn-btn mt-4"><span className="">Learn</span>
              <a href="#" className="about-inner"> now</a>
              </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
