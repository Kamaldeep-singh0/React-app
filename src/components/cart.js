
import React from "react";
import { useSelector } from "react-redux";


// class component

const Cart = ()=>{
    const cartItem = useSelector((store)=>store.cart.items);
       return (<>
           <div className="flex justify-center m-4 text-2xl">Cart</div>
           <div>{cartItem}</div>
           </>
       );
};

export default Cart;