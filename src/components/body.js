
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

        <div className="flex justify-center items-center">
            <h1 className="font-serif">What on mind.....</h1>
        <input type ="text" className="m-5 p-1 mx-5 bg-red-100 rounded-md " placeholder="Search" value={searchTxt} onChange={(e)=>{
            setSearchTxt(e.target.value);
        }}></input>


        <button className="m-3 p-2 rounded-md bg-violet-200" onClick={()=>{
           const data = filterfn(searchTxt,allRestroList);
            setRestroList(data);
            setSearchBol(true);
          }}>Search</button>
         </div>

        <input type ="text" className="m-5 mx-5 bg-red-100 rounded-md " value={user.name} onChange={(e)=>{
            setUser({
                name : e.target.value,
                mail: "dummy@gmail.com"
            });
        }}></input>


        { restroList.length === 0 ? ( searchBol ? (<div> Not found </div> ) : ( <Shimmer/> ) 
        ) : ( 
           <div className="flex flex-wrap mx-36">
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
        <div className="w-64 m-4 bg-gray-400 shadow-2xl ">
           <img className="shadow-xl" src={IMG_CDN_RESTRO+cloudinaryImageId} />
            <h2 className="text-center font-serif text-red-800 font-bold text-lg"> {name}</h2>
            <h3 className="text-center font-serif">{cuisines.join(",")}</h3>
            <h3 className="text-center font-serif">{avgRating} stars</h3>
            <h3 className="text-center font-serif">{user.name}</h3>   
            <h3 className="text-center font-serif">{user.mail}</h3>    
        </div>
        </>
    )
}

export default Body;