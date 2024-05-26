




/*import React,{useState} from 'react';
import Pizza from './Pizza';
import store from '../Store';
import { useSelector } from 'react-redux';
import Menu from './Menu';
import './index.css';

function Cart(){
    const [order,setOrder]=useState("Place Order")
    const item = useSelector((state) => state.items);
    var total=0;
    items.map((item)=>{
        let k=item.price;
        total=total+Number(k.slice(1));
    })
    if (item.length>0){
        return (
            <div>
                <h1>Cart items</h1>
                <div></div>
                {
                    items.map((item) => {
                        <Pizza 
                            key={item.id}
                            name={item.name}
                            image={item.image}
                            prices={item.prices}
                        />
                    })
                }
                <h1>Total Price</h1>
                <h1>${total}</h1>
                <button onClick={()=>{
                    alert("Your order placed")
                    setOrder("order placed")
                }}>{order}</button>
            </div>
        )
    }
    else{
        return(
            <>
            <h1>No items yet</h1></>
        )
    }
}
export default Cart;*/
