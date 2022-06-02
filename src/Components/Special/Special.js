import React from 'react';
import './Special.css'
const Special = (props) => {
    const{img}=props.specialist;
    return (
        <div className='specialist'>
            
            <img src={img} alt="" />
            
        </div>
    );
};

export default Special;