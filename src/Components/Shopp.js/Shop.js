import React, { useEffect, useState } from 'react';
import { createRenderer } from 'react-dom/test-utils';
import Card from '../Card/Card';
import Order from '../Order/Order';
// import Modal from 'react-modal';
import "./Shop.css";
const Shop = () => {
    const [products , setProducts] = useState([]);
    const [card , setCard] = useState([]);
    
    const handleAddToCard = (product)=>{
        const newCard = [...card , product];
        setCard( newCard);
    }

    useEffect(()=>{
        fetch("data.json")
        .then(res=> res.json()).then(data => setProducts(data));
    },[])
    return (

        <div className='shop-container'>
        
        <div className='container'>
            {
                products.map((product)=>(<Card
                product={product}
                key={product.id}
                handleAddToCard={handleAddToCard} 
                >
                </Card>))  
            }
      
        </div>
        <div className='container-1'>
        <h3>Order Summary</h3>
            {
        
                card.map((item=>(<Order 
                    
                  item={item}
                  key={item.id}
                />)))
            }
          
      </div>
        </div>
    );
};

export default Shop;