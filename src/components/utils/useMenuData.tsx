import { useEffect,useState } from "react"

const useMenuData : React.FC =(id )=>{
    const [restaurant, setRestaurant] = useState([]);
    

    useEffect(()=>{
        fnCall(setRestaurant, id);
       },[])

       async function fnCall(setRestaurant: any,id :any): Promise <void>{
        const res = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7333148&lng=76.7794179&restaurantId="+ id);
        const data = await res.json();
        const final : any = Object.values(data);
        setRestaurant(final[1]?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
      }

      return restaurant;
}
export default useMenuData;