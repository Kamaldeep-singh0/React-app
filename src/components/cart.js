
import React from "react";
import { Link, Outlet } from "react-router-dom";
import NextCart from "./procced_cart";

// class component

class Cart extends React.Component{
   render(){
    return (<>
         <div>
        <h1>Cart Page </h1>
        <h2>Here are your carted items </h2>
        <h3>Click on proced to Proccess your items</h3>
        <button><Link to="/cart/next">Procced</Link></button>
        </div>
        <div>
            <NextCart items={"Pizza"}/>
        </div>
        </>
    );
   }
}

export default Cart;