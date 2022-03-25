import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import "./Shop.css";

const Shop = () => {
    const [products , setProducts] = useState([]);
    useEffect(()=>{
        fetch("data.json")
        .then(res=> res.json()).then(data => setProducts(data));
    },[])
    return (
        <div className='container'>
            {
                products.map((product)=>(<Card
                
                product={product}
                key={product.id}
                >
                    
                </Card>))  
            }
        </div>
    );
};

export default Shop;