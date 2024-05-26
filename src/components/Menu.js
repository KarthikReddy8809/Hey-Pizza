import React,{useState} from 'react';
import Pizza from '../components/Pizza';
import "./index.css";
import "../screens/Homescreen.css";
const allPizzas =[
    {
    id:1,
    name:"CHEESE BURGER",
    category:"burger",
    prices:"200/-",
    image:"https://media.istockphoto.com/id/1429334731/photo/chicken-tasty-burger-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=uJD9egHxixtBXy09LuE6gG_h9GBhBu1POyxX_O6Y3Uk="
    },
    {
    id:2,
    name:" CHICKEN BURGER",
    category:"burger",
    prices:"300/-",
    image:"https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
    id:3,
    name:"PEPSI",
    category:"drink",
    prices:"100/-",
    image:"https://media.istockphoto.com/id/530428650/photo/cola-glass-with-ice-cubes.jpg?s=612x612&w=0&k=20&c=keqH2KNWHO1sFxtsBfx5EZjyep1CRBHIqwe_ZwxszHc="
    },
    {
    id:4,
    name:"ITALIAN PIZZA",
    category:"pizza",
    prices:"350/-",
    image:"https://images.pexels.com/photos/1049620/pexels-photo-1049620.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
    id:5,
    name:"MARGHERITA PIZZA",
    category:"pizza",
    prices:"300/-",
    image:"https://img.freepik.com/free-photo/high-angle-arugula-pizza-with-tomatoes_23-2148574282.jpg?size=626&ext=jpg&ga=GA1.1.146814982.1711718235&semt=ais_user_b"
    },
    {
    id:6,
    name:"SICILIAN PIZZA",
    category:"pizza",
    prices:"350/-",
    image:"https://images.pexels.com/photos/20300403/pexels-photo-20300403/free-photo-of-pizza-served-in-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=600"
},
{
    id:7,
    name:"PANEER TIKKA PIZZA",
    category:"pizza",
    prices:"150/-",
    image:"https://preview.redd.it/paneer-tikka-pan-pizza-v0-nd76gtfuv3f81.png?auto=webp&s=e1565fab5b0a090f8f7b35a8f248d8f3421cfee2"
    },
    {
        id:8,
        name:"TANDORI CHICKEN PIZZA",
        category:"pizza",
        prices:"300/-",
        image:"https://images.pexels.com/photos/20300403/pexels-photo-20300403/free-photo-of-pizza-served-in-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            id:9,
            name:"MASALA PIZZA",
            category:"pizza",
            prices:"150/-",
            image:"https://tse4.mm.bing.net/th?id=OIP.ejbrSNfU1eSHiWHU6Z6O_wHaD4&pid=Api&P=0&h=180",

            },
            {
                id:10,
                name:"AUSSIE BURGER",
                category:"burger",
                prices:"300/-",
                image:"https://www.butter-n-thyme.com/wp-content/uploads/2023/04/Aussie-Burger.jpg",
    
                },
                {
                    id:11,
                    name:"AVOCADO BURGER",
                    category:"burger",
                    prices:"250/-",
                    image:"https://tse2.mm.bing.net/th?id=OIP.INrRuk_YT4tRxby0sDzFMwHaE8&pid=Api&P=0&h=180",
        
                    },
                    {
                        id:12,
                        name:"BIG MAC BURGER",
                        category:"burger",
                        prices:"300/-",
                        image:"https://tse1.mm.bing.net/th?id=OIP.BfjEXupkLRiCSsYAAlkwugHaE8&pid=Api&P=0&h=180",
            
                        },
                        {
                            id:13,
                            name:"BLUE CHEESE BURGER",
                            category:"burger",
                            prices:"200/-",
                            image:"https://www.butter-n-thyme.com/wp-content/uploads/2023/04/Blue-Cheese-Burger.jpg",
                
                            },
                            {
                                id:14,
                                name:"COCO-COLA",
                                category:"drink",
                                prices:"100/-",
                                image:"https://tse1.mm.bing.net/th?id=OIP.I95eDVfsVMH17yYXjq8eTAHaHa&pid=Api&rs=1&c=1&qlt=95&w=118&h=118",
                    
                                },
                                {
                                    id:15,
                                    name:"THUMSUP",
                                    category:"drink",
                                    prices:"100/-",
                                    image:"https://tse1.mm.bing.net/th?id=OIP.ch304rWuEWT9sCZ3UxHguAHaII&pid=Api&rs=1&c=1&qlt=95&w=112&h=123",
                        
                                    },]
             
function Menu() {
    const [selectedCategory,setSelectedCategory]=useState("all");
    const filterDishes=(category)=>{
        setSelectedCategory(category);
        console.log(selectedCategory);

    }
    return ( 
        <div>
            <section className="allButtons">
                <button onClick={()=>filterDishes("all")}>All</button>
                <button onClick={()=>filterDishes("pizza")}>Pizzas</button>
                <button onClick={()=>filterDishes("burger")}>Burgers</button>
                <button onClick={()=>filterDishes("drink")}>Drinks</button><br/><br/><br/>
            </section>
            <div className="wrapper">
            {allPizzas.map((dish)=> (selectedCategory==="all"||selectedCategory===dish.category)&& (

               <Pizza 
                name={dish.name} 
                image={dish.image} 
                prices={dish.prices} 
                description={dish.description} 
                />
            )
            )}
            
        </div>
            
        </div>
     );
}

export default Menu;