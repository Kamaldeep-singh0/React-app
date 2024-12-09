import React from "react";
import ReactDOM from "react-dom/client";
import Body from "/components/body";
import Header from "./components/header"
import { useState } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));



const Page = ()=>{
return (
    <>
    <Header/>
    <Body/>

    </>
);
}


root.render(<Page/>);