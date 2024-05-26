import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./index.css";
function Pizza(props) {
    const navigate = useNavigate("");
    function handleButtonclick(){
        navigate("/order");
    }
    return ( 
        <div class="pizzawrap shadow p-3 mb-5 bg-white rounded">
            <h2>{props.name}</h2>
            <img src={props.image} alt="pizza img"/><br/><br/>
            <h5>Price: {props.prices}</h5><br/>
            <button onClick={handleButtonclick}>Order</button>
    
            <br></br>
            <br></br>
            <br></br>
        </div>
     );
}

export default Pizza;