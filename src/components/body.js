
import React, { useContext, useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import filterfn from "./utils/helper(body)";
import useRestroData from "./utils/userRestroData";
import { IMG_CDN_RESTRO } from "./utils/link";
import UserContext from "./utils/userContext";
  


const Body = ()=>{
    let [searchTxt , setSearchTxt] = useState("");
    let [searchBol , setSearchBol] = useState(false);
    const [restroList,setRestroList] = useRestroData();
     const allRestroList = useRestroData()[0];
     const {user,setUser} = useContext(UserContext);
     
    return(  <>


        <input type ="text" className="m-5 mx-5 bg-red-100 rounded-md " placeholder="Search" value={searchTxt} onChange={(e)=>{
            setSearchTxt(e.target.value);
        }}></input>


        <button className="m-3 p-2 rounded-md bg-violet-200" onClick={()=>{
           const data = filterfn(searchTxt,allRestroList);
            setRestroList(data);
            setSearchBol(true);
          }}>Search</button>


        <input type ="text" className="m-5 mx-5 bg-red-100 rounded-md " value={user.name} onChange={(e)=>{
            setUser({
                name : e.target.value,
                mail: "dummy@gmail.com"
            });
        }}></input>


        { restroList.length === 0 ? ( searchBol ? (<div> Not found </div> ) : ( <Shimmer/> ) 
        ) : ( 
           <div className="flex flex-wrap">
            {
            restroList.map((restaurant)=>{
                return <Link to={"/restaurant/" + restaurant.info.id} >< Restaurant_card{...restaurant.info} key={restaurant.info.id}/></Link>
            }) } 
            </div>)}

            </>
    );
};

const Restaurant_card = ({name,avgRating,cuisines,cloudinaryImageId})=>{
    const {user} = useContext(UserContext);
    return(<>
        <div className="w-64 m-4 bg-gray-400 shadow-xl">
           <img src={IMG_CDN_RESTRO+cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines.join(",")}</h3>
            <h3>{avgRating} stars</h3>
            <h3>{user.name}</h3>   
            <h3>{user.mail}</h3>    
        </div>
        </>
    )
}

export default Body;