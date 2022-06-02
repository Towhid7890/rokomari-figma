import React from 'react';
import icon1 from "../../Images/icon1.jpeg";
import icon2 from "../../Images/icon2.jpeg";
import icon3 from "../../Images/icon3.jpeg";
import Service from '../Service/Service';
import './Services.css'


const Services = () => {

    const services =[
        {id:1, name: "Creative Idea", desc :"It is a long established fact that a reader will be distracted",img:icon1},
        {id:1, name: "Business Strategy", desc :"It is a long established fact that a reader will be distracted",img:icon2},
        {id:1, name: "Relationship Buildup", desc :"It is a long established fact that a reader will be distracted",img:icon3}
    ]
    return (
        <div style={{backgroundColor: '#F5F5F5',padding:'15px'}} className="mt-5">
            <div>
            <div style={{justifyContent:'center'}} className='d-flex align-items-center'>
            <div className='div-style'></div>
            <p style={{color: 'tomato',fontWeight: 'bold'}} className='mt-3 ps-2 pe-2'>Company Services</p>
            <div className='div-style ml'></div>
          </div>
            </div>
            <h1 style={{fontWeight: 'bold',fontSize: '50px'}} className="text-center">We Provide Most Exclusive <br /> Service for Business</h1>
            <div className="services-container mt-5">
            {
                services.map(service => <Service service={service} key={service.id}> </Service>)
            }
            </div>
        </div>
    );
};

export default Services;