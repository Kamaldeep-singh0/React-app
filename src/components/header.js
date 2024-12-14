import { useState } from "react";
import { Link } from "react-router-dom";
import { IMG_LOGO } from "./utils/link";
import useOnline from "./utils/useOnline";

const Header = ()=>{

    return (
      <div className=" flex p-2 m-2 justify-between bg-violet-200 rounded-md shadow-lg">
        <a href="/" ><img className=" size-20 rounded-md hover:shadow-xl " src={IMG_LOGO}/> </a>
        <ul className=" flex place-items-center " >
            {(useOnline())? ( <li className="m-3 p-3 rounded-md bg-red-200" >🟢 Online</li>) :(<li className="m-3 p-3 rounded-md bg-pink-300" >🔴 Offline</li>)}
         
            <li className="m-3 p-3 rounded-md hover:bg-pink-300"><Link to="/">Home</Link></li>
            <li className="m-3 p-3 rounded-md hover:bg-pink-300"><Link to="/offer" >Offers</Link></li>
            <li className="m-3 p-3 rounded-md hover:bg-pink-300"><Link to="/cart">Cart</Link></li>
            <li className="m-3 p-3 rounded-md hover:bg-pink-300"><Link to="/aboutUs">About us</Link></li>
        </ul>
        <Btn/>
      </div>
    );
};

const Btn = ()=>{
  const [log,setLog] = useState("Login")
  return (<button className= "m-3 p-3 rounded-md bg-gray-600 text-white hover:shadow-xl" onClick={()=> 
    { log=="Login"? (setLog("Loggout") ) :(setLog("Login"))} }>
    {log}
  </button>
  );
}

export default Header;