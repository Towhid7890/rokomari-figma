import React from 'react';
import { Container } from 'react-bootstrap';
import './Service.css'

const Service = ({service}) => {
    const{name, img, desc}=service;
    return (
        <div>
          <Container>
          <div className="service-container">
            <img src={img} alt=""/>
            <h4 className="mt-4">{name}</h4>
            <p>{desc}</p>
        </div>
          </Container>
        </div>
    );
};

export default Service;