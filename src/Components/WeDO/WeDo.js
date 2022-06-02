import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import cart1 from "../../Images/Screenshot_1.png";
import './WeDo.css'

const WeDo = () => {
  return (
    <div className='do-container mt-5'>
      <Container>
        <Row className='py-5'>
          <Col>
            <img className="mt-5" src={cart1} alt="" />
          </Col>
          <Col>
          <div className='d-flex align-items-center'>
            <div className='div-style'></div>
            <p style={{color: 'tomato',fontWeight: 'bold'}} className='mt-3 ps-2'>What We do</p>
          </div>
            <h2 style={{fontWeight: 'bold',fontSize: '50px'}} className="text-light">Why Choose Our <br /> Business Agency</h2>
            <p className="text-light">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since.
            </p>
            <li className="text-light">Business & Consulting Agency</li>
            <li className="text-light">Business & Consulting Agency</li>
            <li className="text-light">Business & Consulting Agency</li>
            <li >Business & Consulting Agency</li>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WeDo;
