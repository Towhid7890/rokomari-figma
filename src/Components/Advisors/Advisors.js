import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import member from '../../Images/adviser.png'
import member2 from '../../Images/member2.jpeg'
import member3 from '../../Images/member3.jpeg'

const Advisors = () => {
  return (
    <div style={{backgroundColor: '#F5F5F5'}}>
      <Container>
        <Row className="py-5">
          <Col>
          <img style={{ height:'300px'}} src={member}alt="" />
          <div className='d-flex'>
              <div>
              
              <img style={{ height:'200px',marginTop:'-50px',marginLeft:'100px'}} className='rounded-circle'  src={member2}alt="" />
         </div>
          <div>
          <img style={{ height:'150px',marginTop:'-50px',marginLeft:'-320px',border:'5px solid  white' }} className='rounded-circle' src={member3}alt="" />
          </div>
          </div>
          </Col>
          <Col>
            <div className="d-flex align-items-center">
              <div className="div-style"></div>
              <p
                style={{ color: "tomato", fontWeight: "bold" }}
                className="mt-3 ps-2"
              >
                Meet Our Advisors
              </p>
            </div>
            <h2
              style={{ fontWeight: "bold", fontSize: "50px" }}
              
            >
              We Have an Experience <br />
              Team Member
            </h2>
            
            <p>
            <span style={{color:'#FF4917',fontSize:'50px'}}>"</span> Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since. 
            </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos nostrum fuga nemo mollitia libero corrupti similique laboriosam odio aperiam repudiandae? </p>
            <p style={{marginTop:'-30px'}} className='text-light' >dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd<span style={{color:'#FF4917',fontSize:'50px'}}>"</span></p>

            <div className='d-flex'>
                <div><img style={{height:'40px'}} src={member3} alt="" /></div>
                <div className='ps-4'>Richard E. Harrisona <br />
<small>CEO & Founder</small></div>
            </div>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Advisors;
