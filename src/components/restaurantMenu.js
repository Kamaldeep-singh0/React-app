import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./shimmer";

  async function fnCall(setRestaurant,id){
    const res = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7333148&lng=76.7794179&restaurantId="+ id);
    const data = await res.json();
    const final = Object.values(data);
    setRestaurant(final[1]?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
  }

const RestaurantMenu=()=>{
      const [restaurant, setRestaurant] = useState([]);
      const {id} = useParams();   
    useEffect(()=>{
     fnCall(setRestaurant, id);
    },[])
   
     return(
        <>
        <h1>Restaurant id ={id}</h1>
        {  ( restaurant.length === 0) ? (<Shimmer/>) :
        (<div>
           { restaurant.map((eachRestro)=>{
              return <Restro {...eachRestro.card.info}/>
            } )}
        </div>)}
        </>
    );
}

const Restro=({name , description,defaultPrice})=>{
    return (
        <>
         <div><h2>{name}</h2>
              <h3> Description = {description}</h3>
              <h3>Price = {defaultPrice /100}</h3>
         </div>
        </>
    )
} 

export default RestaurantMenu;