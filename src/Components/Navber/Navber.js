import React from 'react';
import "./Navber.css";

const Navber = ({openModal}) => {
    console.log(openModal)
    return (
        <div className='header'>
            <div>
              <h1> <span className='sr'>SR</span> Product Shop</h1>
            </div>
            <div>
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <button onClick={openModal}>Open Modal</button>
            </div>
        </div>
    );
};

export default Navber;