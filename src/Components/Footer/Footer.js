import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './Footer.css'
import footer1 from "../../Images/footer1.jpeg";
import footer2 from "../../Images/footer2.jpeg";
import footer3 from "../../Images/footer3.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
  return (
    <div style={{backgroundColor:'#14212A', height:'650px'}}>
      <Container>
        <Row >
          <Col className="mt-5 mb-5">
            <h2 className="text-light" style={{ fontWeight: "bold", fontSize: "50px" }}>Company</h2>
            <p className="text-light">
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
          </Col>
          <Col className="mt-5">
          <h2 className="text-light" style={{ fontWeight: "bold", fontSize: "30px" }}>Subscribe Our Newsletters</h2>
          <div>
              <input className="input-style" type="email" placeholder="Enter Your Email" />
              <button style={{ backgroundColor:'#FF4917',width:'180px',border:'none',borderRadius:'15px',padding:'10px'}} className=" mt-4 mx-4"><span className="">SubsCribe</span>
              <a className="about-inner"> now</a>
              </button>
          </div>
          </Col>
        </Row>
        <Row className="text-white footer-link mt-5">
            <Col>
            <h4>Quick Links</h4>
            <a href="">Company History</a> <br />
            <a href="">Latest News & Blog</a> <br />
            <a href="">Popular Services</a> <br />
            <a href="">Business & Consulting</a> <br />
            <a href="">Financial Planning</a>
            </Col>
            <Col>
            <h4>Company</h4>
            <a href="">About Company</a>
            <a href="">Word Wide Clients</a>
            <a href="">Happy People’s</a>
            <a href="">Winning Awards</a>
            <a href="">Company Statics</a>
            </Col>
            <Col>
            <h4>Contact Us</h4>
            <a href="">Call: +8801917 009887</a>
            <a href="">Email: support@gmail.com</a>
            <a href="">Address: 123/A Broklyn Stree, 
                    New York, USA</a>
            </Col>
            <Col>
            <h4>Follow Instagram</h4>
            <div className='d-flex'>
                <div><img src={footer1} alt="" /></div>
                <div><img src={footer2} alt="" /></div>
                <div><img src={footer3} alt="" /></div>
            </div>
            <div className='d-flex'>
                <div><img src={footer1} alt="" /></div>
                <div><img src={footer2} alt="" /></div>
                <div><img src={footer3} alt="" /></div>
            </div>
            </Col>
        </Row>
      
        <Row className="mt-5">
        <div className='d-flex align-items-center'>
                <div className='footer-div'></div>
                <div><FontAwesomeIcon icon={faAngleUp} /></div>
                <div className='footer-div'></div>
            </div>
            <Col>
            <p className='text-light'>© 2012-2022 <span style={{color: '#FF4917'}}>Company</span></p></Col>
            <Col></Col>
            <Col>
            <p className='text-light'>Terms · Privacy · Program Policies</p></Col>
            
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
