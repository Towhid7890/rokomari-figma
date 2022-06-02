import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../../Images/count1.jpeg";
import img2 from "../../Images/count2.jpeg";
import img3 from "../../Images/count3.jpeg";
import img4 from "../../Images/count4.jpeg";
const Counter = () => {
    const imgStyle={
        width:'70px',
        height:'70px'
    }
  return (
    <div className="py-5">
      <Container>
        <Row>
          <Col className="text-center">
            <img style={imgStyle} src={img1} alt="" />
            <h2 style={{marginBottom:'0'}}  className="mt-4">3568</h2>
            <p>
              <small>Project Complete</small>
            </p>
          </Col>
          <Col className="text-center">
            <img style={imgStyle} src={img2} alt="" />
            <h2 style={{marginBottom:'0'}}  className="mt-4">3568</h2>
            <p>
              <small>Satisfied Clients</small>
            </p>
          </Col>
          <Col className="text-center">
            <img style={imgStyle} src={img3} alt="" />
            <h2 style={{marginBottom:'0'}}  className="mt-4">3568</h2>
            <p>
              <small>International Awards</small>
            </p>
          </Col>
          <Col className="text-center">
            <img style={imgStyle} src={img4} alt="" />
            <h2 style={{marginBottom:'0'}} className="mt-4">3568</h2>
            <p>
              <small style={{marginTop:'0'}}>Expert Team Members</small>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Counter;
