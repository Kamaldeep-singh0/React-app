import { restro } from "../config";



const Body = ()=>{
    return(  <div className="body">
            {
            restro.map((restaurant)=>{
                return < Restaurant_card{...restaurant.info}/>
            }) } 
            </div>
    );
};

const Restaurant_card = ({name,avgRating,cuisines,cloudinaryImageId})=>{
    return(
        <div className="card">
           <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines.join(",")}</h3>
            <h3>{avgRating} stars</h3>       
        </div>
    )
}

export default Body;