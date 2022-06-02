import React from "react";
import Special from "../Special/Special";
import "./Specialist.css";
import serv1 from "../../Images/serv1.jpeg";
import serv2 from "../../Images/serv2.jpeg";
import serv3 from "../../Images/serv3.jpeg";
import serv4 from "../../Images/serv4.jpeg";
import serv5 from "../../Images/serv5.jpeg";
import serv6 from "../../Images/serv6.jpeg";
import { Container } from "react-bootstrap";
const Specialist = () => {
  const specialists = [
    {
      id: 1,
      name: "Free Consulting",
      comment: "Join us for consultatoins",
      img: serv1,
    },
    {
      id: 2,
      name: "Free Consulting",
      comment: "Join us for consultatoins",
      img: serv2,
    },
    {
      id: 3,
      name: "Free Consulting",
      comment: "Join us for consultatoins",
      img: serv3,
    },
    {
      id: 4,
      name: "Free Consulting",
      comment: "Join us for consultatoins",
      img: serv4,
    },
    {
      id: 5,
      name: "Free Consulting",
      comment: "Join us for consultatoins",
      img: serv5,
    },
    {
      id: 6,
      name: "Free Consulting",
      comment: "Join us for consultatoins",
      img: serv6,
    },
  ];
  return (
    <div className="mt-5">
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
              Our Core Features
            </p>
            <div className="div-style ml"></div>
          </div>
        </div>
        <h1 style={{fontWeight: 'bold',fontSize: '50px'}} className="text-center ">
          We are Specialist for Many <br /> Business Solutions
        </h1>
        <div className="special-container mt-5">
          {specialists.map((specialist) => (
            <Special key={specialist.id} specialist={specialist}></Special>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Specialist;
