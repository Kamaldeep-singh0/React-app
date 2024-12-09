import { restro } from "../config";
import React, { useState } from "react";

function filterfn(searchTxt, restroList){
    return restroList.filter( (restroList)=> restroList.info.name.includes(searchTxt));
}


const Body = ()=>{
    let [searchTxt , setSearchTxt] = useState();
    let [allrestroList] = useState(restro);
    let [restroList , setRestroList] = useState(restro);
    return(  <>
        <input type ="text" className="search" placeholder="Search" value={searchTxt} onChange={(e)=>{
            setSearchTxt(e.target.value);
        }}></input>
        <button onClick={()=>{
          const data = filterfn(searchTxt,allrestroList);
          setRestroList(data);
        }}>Search</button>
          <div className="body">
            {
            restroList.map((restaurant)=>{
                return < Restaurant_card{...restaurant.info}/>
            }) } 
            </div>
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