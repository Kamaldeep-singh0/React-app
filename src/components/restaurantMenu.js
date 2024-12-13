import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./shimmer";
import useMenuData from "./utils/useMenuData";

  

const RestaurantMenu=()=>{
  const {id} = useParams();
  const restaurant = useMenuData(id);
   
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