import React from "react";
import ReactDOM from "react-dom/client";
import Body from "/components/body";
import Header from "./components/header";
import Offer from "./components/offer";
import Error from "./components/error"
import { createBrowserRouter,useRouteError,RouterProvider } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));



const Page = ()=>{
return (
    <>
    <Header/>
    <Body/>

    </>
);
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Page/>,
        errorElement: <Error/>,
    },
    {
        path:"/offer",
        element:<Offer/>,
    },
])


root.render(<RouterProvider router={appRouter}/>);