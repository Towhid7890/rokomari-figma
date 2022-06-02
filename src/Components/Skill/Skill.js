import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import './Skill.css'

const Skill = () => {
  return (
    <div>
      <Container>
        <Row className="py-5">
          <Col>
            <div className="d-flex align-items-center">
              <div className="div-style"></div>
              <p
                style={{ color: "tomato", fontWeight: "bold" }}
                className="mt-3 ps-2"
              >
                Company Skills
              </p>
            </div>
            <h2 style={{ fontWeight: "bold", fontSize: "50px" }} className="">
              We Have Experience <br />
              for Business Planning
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quaerat non molestiae cupiditate similique dolor, consequuntur doloremque. Facere cumque temporibus illum iste illo earum optio quod, itaque autem quam nam explicabo vero </p>
            <button className="learn-btn mt-4"><span className="">Learn</span>
              <a className="about-inner"> now</a>
              </button>
          </Col>
          <Col>
          <div>
            <div className='d-flex'>
            <div class="circle-wrap">
        <div class="circle">
          <div class="mask full">
            <div class="fill"></div>
          </div>
          <div class="mask half">
            <div class="fill"></div>
          </div>
          <div class="inside-circle"> 75% </div>
        </div>
      </div>
      <div>
      <div class="circle-wrap">
        <div class="circle">
          <div class="mask full">
            <div class="fill"></div>
          </div>
          <div class="mask half">
            <div class="fill"></div>
          </div>
          <div class="inside-circle"> 75% </div>
        </div>
      </div>
      </div>
            </div>
            <div className='d-flex'>
            <div class="circle-wrap">
        <div class="circle">
          <div class="mask full">
            <div class="fill"></div>
          </div>
          <div class="mask half">
            <div class="fill"></div>
          </div>
          <div class="inside-circle"> 75% </div>
        </div>
      </div>
      <div>
      <div class="circle-wrap">
        <div class="circle">
          <div class="mask full">
            <div class="fill"></div>
          </div>
          <div class="mask half">
            <div class="fill"></div>
          </div>
          <div class="inside-circle"> 75% </div>
        </div>
      </div>
      </div>
            </div>
           </div>
           </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skill;
