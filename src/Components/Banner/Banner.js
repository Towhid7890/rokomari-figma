import React from "react";
import { Carousel, Nav } from "react-bootstrap";
import slider from "../../Images/benner.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <Carousel>
      <Carousel.Item>
          <img className=" w-100" src={slider} alt="Third slide" />

          <Carousel.Caption className='caption'>
          <p>Business & Consulting</p>
            <h3 style={{fontWeight: 'bold',fontSize: '50px'}}>Making Difference <br /> Growth Your Business <br /> With Modern Ideas</h3>
            
            <button style={{ backgroundColor:'#FF4917',width:'190px',border:'none',borderRadius:'15px',padding:'10px'}} className=" mt-4 mx-4"><span className="">Get Started</span>
              <a className="about-inner"> now</a>
              </button>
              <button style={{ backgroundColor:'#FFFFFF',width:'190px',border:'none',borderRadius:'15px',padding:'10px'}} className=""><span className="">Get Started</span>
              <a className="about-inner"> now</a>
              </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className=" w-100" src={slider} alt="Third slide" />

          <Carousel.Caption className='caption'>
          <p>Business & Consulting</p>
            <h3 style={{fontWeight: 'bold',fontSize: '50px'}}>Making Difference <br /> Growth Your Business <br /> With Modern Ideas</h3>
            
            <button style={{ backgroundColor:'#FF4917',width:'190px',border:'none',borderRadius:'15px',padding:'10px'}} className=" mt-4 mx-4"><span className="">Get Started</span>
              <a className="about-inner"> now</a>
              </button>
              <button style={{ backgroundColor:'#FFFFFF',width:'190px',border:'none',borderRadius:'15px',padding:'10px'}} className=""><span className="">Get Started</span>
              <a className="about-inner"> now</a>
              </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
