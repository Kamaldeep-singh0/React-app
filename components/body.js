import { restro } from "../config";
import React, { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";

function filterfn(searchTxt, restroList){
    return restroList.filter( (restroList)=> restroList.info.name.toLowerCase()?.includes(searchTxt.toLowerCase()));
}

   async function callApi(setAllRestroList,setRestroList){
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data?.json();
      console.log(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setRestroList(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setAllRestroList(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   }

  


const Body = ()=>{
    let [searchTxt , setSearchTxt] = useState();
    let [allrestroList,setAllRestroList] = useState([]);
    let [restroList , setRestroList] = useState([]);
    let [searchBol , setSearchBol] = useState(false);

     useEffect(()=>{
         callApi(setAllRestroList,setRestroList);
     },[]);

    return(  <>


        <input type ="text" className="search" placeholder="Search" value={searchTxt} onChange={(e)=>{
            setSearchTxt(e.target.value);
        }}></input>


        <button onClick={()=>{
           const data = filterfn(searchTxt,allrestroList);
            setRestroList(data);
            setSearchBol(true);
          }}>Search</button>


        { restroList.length === 0 ? ( searchBol ? (<div> Not found </div> ) : ( <Shimmer/> ) 
        ) : ( 
           <div className="body">
            {
            restroList.map((restaurant)=>{
                return <Link to={"/restaurant/" + restaurant.info.id} >< Restaurant_card{...restaurant.info} key={restaurant.info.id}/></Link>
            }) } 
            </div>)}

            </>
    );
};

const Restaurant_card = ({name,avgRating,cuisines,cloudinaryImageId})=>{
    return(<>
        <div className="card">
           <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines.join(",")}</h3>
            <h3>{avgRating} stars</h3>       
        </div>
        </>
    )
}

export default Body;