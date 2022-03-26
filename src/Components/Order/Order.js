import React from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import "./Order.css";

const Order = ({item,orderBtn,removeBtn }) => {
    // 
   
    const {picture,name ,id} = item;
    // console.log(id)
    return (
       
        <div>
            
            <div className='summary'>
                <img src={picture} alt="" />
                <h3>{name}</h3>
                <span><AiTwotoneDelete /></span>
               
            </div>
            
             
        </div>
        
      
    );
};

export default Order;