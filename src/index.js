import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/body";
import Header from "./components/header";
// import Offer from "./components/offer";
import Error from "./components/error"
import { createBrowserRouter,useRouteError,RouterProvider, Outlet } from "react-router-dom";
import Cart from "./components/cart";
import RestaurantMenu from "./components/restaurantMenu"
import NextCart from "./components/procced_cart"
import Shimmer from "./components/shimmer";

const Offer = lazy(()=>{import("./components/offer")});

const root = ReactDOM.createRoot(document.getElementById("root"));



const Page = ()=>{
return (
    <>
    <Header/>
    <Outlet/>

    </>
);
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Page/>,
        errorElement: <Error/>,
        children: [
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/offer",
                element:(<Suspense fallback={<Shimmer/>}><Offer/></Suspense>),
            },
            {
                path:"/cart",
                element:<Cart/>,
                children :[
                    {
                        path:"next",
                        element:<NextCart/>,
                    },
                ]
            },
            {
               path:"/restaurant/:id",
               element:<RestaurantMenu/>,
            },
        ]
    },
 
])


root.render(<RouterProvider router={appRouter}/>);