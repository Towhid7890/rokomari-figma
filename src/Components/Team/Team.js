import React from "react";
import {Container} from "react-bootstrap";
import './Team.css'
import team1 from '../../Images/team1.jpeg';
import team2 from '../../Images/team2.jpeg';
import team3 from '../../Images/team3.jpeg';
import team4 from '../../Images/team4.jpeg';
const Team = () => {
  return (
    <div>
      <Container>
        <div>
          <div
            style={{ justifyContent: "center" }}
            className="d-flex align-items-center"
          >
            <div className="div-style"></div>
            <p
              style={{ color: "tomato", fontWeight: "bold" }}
              className="mt-3 ps-2 pe-2"
            >
              Meet Our Advisors
            </p>
            <div className="div-style ml"></div>
          </div>
        </div>
        <h1
          style={{ fontWeight: "bold", fontSize: "50px" }}
          className="text-center "
        >
          We have an Exclusive <br /> Team Member
        </h1>

        <div className='team-container mt-5'>
            <div className='text-center team-img'>
            <img src={team1} alt="" />
            <h4 style={{marginBottom:'0px', marginTop:'10px'}}>User Name</h4>
            <p>Business Developer</p>
            </div>
            <div className='text-center'>
            <img src={team2} alt="" />
            <h4 style={{marginBottom:'0px', marginTop:'10px'}}>User Name</h4>
            <p>Business Developer</p>
            </div>
            <div className='text-center'>
            <img src={team3} alt="" />
            <h4 style={{marginBottom:'0px', marginTop:'10px'}}>User Name</h4>
            <p>Business Developer</p>
            </div>
            <div className='text-center'>
            <img src={team4} alt="" />
            <h4 style={{marginBottom:'0px', marginTop:'10px'}}>User Name</h4>
            <p>Business Developer</p>
            </div>
        </div>
      </Container>
    </div>
  );
};

export default Team;
