import React from "react";
import ReactDOM from "react-dom/client";
import Body from "/components/body";
import Header from "./components/header";
import Offer from "./components/offer";
import Error from "./components/error"
import { createBrowserRouter,useRouteError,RouterProvider, Outlet } from "react-router-dom";
import Cart from "./components/cart";


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
                element:<Offer/>,
            },
            {
                path:"/cart",
                element:<Cart/>,
            },
        ]
    },
 
])


root.render(<RouterProvider router={appRouter}/>);