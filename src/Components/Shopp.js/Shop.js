import React, { useEffect, useState } from 'react';
import { createRenderer } from 'react-dom/test-utils';
import Card from '../Card/Card';
import Order from '../Order/Order';
// import Modal from 'react-modal';
import "./Shop.css";
const Shop = () => {
    const [products , setProducts] = useState([]);
    const [card , setCard] = useState([]);
    const [item , setItem] = useState([]);
    // const [items , setItems]=useState([]);

    const removeBtn=()=>{
        // console.log(card);
        setCard([]);
        setItem([]);
    }

    const orderBtn=()=>{
        const newItem = Math.floor(Math.random()* card.length);
        // console.log(newItem);
        // setItem(newItem);
        setItem(card[newItem]);
    };
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
                  orderBtn={orderBtn} 
                  removeBtn={removeBtn}
                  item={item}
                  key={item.id}
                />)))
            }
            
            <button onClick={()=>orderBtn()} key={card.id}>chose 1 for me</button>
            <button onClick={()=>removeBtn()}>chose again</button>
            {
                <div className='btn-img'>
                <h2>{item.name}</h2>
                <img  src={item.picture} alt="" />
                </div>
            }

      </div>
        </div>
    );
};

export default Shop;