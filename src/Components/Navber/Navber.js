import React from 'react';
import "./Navber.css";

const Navber = () => {
    return (
        <div className='header'>
            <div>
              <h1> <span className='sr'>SR</span> Product Shop</h1>
            </div>
            <div>
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/oreder-reveiw">Order Review</a>
                <a href="/about">About</a>
            </div>
        </div>
    );
};

export default Navber;