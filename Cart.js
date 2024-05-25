import React from 'react';
import './index.css';

const Cart = ({ cartItems }) => {
    return (
        <div>
            <h1>Cart</h1>
            <div className="cards-container">
                {cartItems.map((item, index) => (
                    <div key={index} className="pizzawrap shadow p-3 mb-5 bg-white rounded">
                        <h2>{item.name}</h2>
                        <img src={item.image} alt="pizza img" className="pizza-image" /><br/><br/>
                        <h5>Price: {item.prices}</h5><br/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
