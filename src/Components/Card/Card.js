import React from 'react';
import "./Card.css";

const Card = (props) => {
    console.log(props);
    const {id,name,picture,price} = props.product;
    return (
        <div className='container'>
            <div className='card'>
                <div className='img-box'>
                     <img  src={picture} alt="" /> 
                </div>
           <div className="content">
               <div className="product-name">
                   <h1>{name}</h1>
               </div>
               <div className="price">
                   <h2>Price : ${price}</h2>
               </div>
               <div>

               </div>
               <div>
                   <button className='btn'>
                       Add To Cart
                   </button>
               </div>

           </div>
            </div>
        </div>
    );
};

export default Card;