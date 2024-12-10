import { useState } from "react";


const Header = ()=>{

    return (
      <div className="head">
        <a href="/" ><img  src="https://yt3.googleusercontent.com/ytc/AIdro_naJ5pFQzX0oakS9ECVgd4fs3GG4uwIGJUNTu14gqz8Mg=s900-c-k-c0x00ffffff-no-rj"/> </a>
        <ul >
            <li>  </li>
            <li>Home</li>
            <li>Offers</li>
            <li>Cart</li>
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