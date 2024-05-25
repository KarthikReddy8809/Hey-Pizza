import React from 'react';
import Menu from './Menu';
import "./index.css";
function Pizza(props) {
    return ( 
        <div class="pizzawrap shadow p-3 mb-5 bg-white rounded">
            <h2>{props.name}</h2>
            <img src={props.image} alt="pizza img"/><br/><br/>
            <h5>Price: {props.prices}</h5><br/>
            <button>Add to Cart</button>
    
            
        </div>
     );
}

export default Pizza;