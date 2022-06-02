import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import card1 from "../../Images/card1.png";
import card2 from "../../Images/card2.png";
import card3 from "../../Images/card3.png";
import "./Cart.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Cart = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="d-flex align-items-center">
            <div className="div-style"></div>
            <p
              style={{ color: "tomato", fontWeight: "bold" }}
              className="mt-3 ps-2"
            >
              Important Articles
            </p>
          </div>
          <h2 style={{ fontWeight: "bold", fontSize: "50px" }} className="">
            Something Know Our <br /> Latest News & Blog
          </h2>
        </Col>
        <Col>
       <div style={{float: "right"}}>
       <button style={{ backgroundColor:'#FF4917',width:'180px',border:'none',borderRadius:'15px',padding:'10px'}} className=" mt-4 mx-4"><span className="">SubsCribe</span>
              <a className="about-inner"> now</a>
              </button>
       </div>
        </Col>
      </Row>
      <Row className="py-5">
        <Col>
          <Card style={{ width: "350px" }}>
            <Card.Img variant="top" src={card1} />
            <Card.Body>
              <Card.Title>
                How Performance Visiblety with GitLab CI and Hood
              </Card.Title>
              <Card.Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry Ipsum has been
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link className="text-decoration-none text-dark " href="#">
                Learn More
                <FontAwesomeIcon className='ps-2' icon={faArrowRight} />
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "350px" }}>
            <Card.Img variant="top" src={card2} />
            <Card.Body>
              <Card.Title>
                How Performance Visiblety with GitLab CI and Hood
              </Card.Title>
              <Card.Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry Ipsum has been
              </Card.Text>
            </Card.Body>
            <Card.Body>
            <Card.Link className="text-decoration-none text-dark " href="#">
                Learn More
                <FontAwesomeIcon className='ps-2' icon={faArrowRight} />
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "350px" }}>
            <Card.Img variant="top" src={card3} />
            <Card.Body>
              <Card.Title>
                How Performance Visiblety with GitLab CI and Hood
              </Card.Title>
              <Card.Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry Ipsum has been
              </Card.Text>
            </Card.Body>
            <Card.Body>
            <Card.Link className="text-decoration-none text-dark " href="#">
                Learn More
                <FontAwesomeIcon className='ps-2' icon={faArrowRight} />
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
