import { useEffect, useState } from "react";


const useRestroData = ()=>{
     let [restroList,setRestroList] = useState([]);

     useEffect(()=>{
        callApi(setRestroList);
    },[]);
    
    async function callApi(setRestroList){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data?.json();
          setRestroList(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     }

     return [restroList,setRestroList];

}

export default useRestroData;