import React from 'react';
import{BsCartCheck} from 'react-icons/bs';
import "./Card.css";

const Card = ({product , handleAddToCard}) => {
    // console.log(props);
    const {id,name,picture,price} = product;

    
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
                   <button onClick={()=>handleAddToCard(product)} className='btn'>
                       Add To Cart <BsCartCheck className='icons' />
                   </button>
               </div>

           </div>
            </div>
        </div>
    );
};

export default Card;