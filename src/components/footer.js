import { useContext } from "react";
import UserContext from "./utils/userContext";

const Footer = ()=>{
    const {user} = useContext(UserContext);
    return(
        <h1>This Site is Developed by {user.name}</h1>
    );
}

export default Footer;