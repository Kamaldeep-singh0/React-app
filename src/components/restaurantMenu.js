import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./shimmer";
import useMenuData from "./utils/useMenuData";
import { useDispatch } from "react-redux";
import { addItem } from "./utils/cartSlice";

  

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
    const dispatch = useDispatch();
             const handleAddItem = ()=>{
                  dispatch(addItem(name))
             }
    return (
       
        <> 
         <div className="mx-80 p-4 bg-slate-200 my-4 rounded-xl shadow-lg">
             <div className="flex"><h2 className="font-serif text-red-800 font-bold text-lg">{name}</h2>
              <button className="mx-10 bg-fuchsia-400 p-2 rounded-lg" onClick={handleAddItem}> + Add</button>
             </div>
             <h3 className="font-bold">Price = {defaultPrice /100}</h3>
              <h3> Description = {description}</h3>
              
         </div>
        </>
    )
} 

export default RestaurantMenu;