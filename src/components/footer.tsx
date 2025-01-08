import React,{ useContext } from "react";
import UserContext from "./utils/userContext";

const Footer: React.FC = () =>{
    const {user} = useContext(UserContext);
    return(
        <div> This Site is developed by{user.name} </div>
    );
};

export default Footer;