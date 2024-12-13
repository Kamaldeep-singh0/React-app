import { useState } from "react";
import { Link } from "react-router-dom";
import { IMG_LOGO } from "./utils/link";
import useOnline from "./utils/useOnline";

const Header = ()=>{

    return (
      <div className="head">
        <a href="/" ><img  src={IMG_LOGO}/> </a>
        <ul >
            {(useOnline())? ( <li>🟢 Online</li>) :(<li>🔴 Offline</li>)}
         
            <li><Link to="/">Home</Link></li>
            <li><Link to="/offer" >Offers</Link></li>
            <li><Link to="/cart">Cart</Link></li>
        </ul>
        <Btn/>
      </div>
    );
};

const Btn = ()=>{
  const [log,setLog] = useState("Login")
  return (<button onClick={()=> 
    { log=="Login"? (setLog("Loggout") ) :(setLog("Login"))} }>
    {log}
  </button>
  );
}

export default Header;