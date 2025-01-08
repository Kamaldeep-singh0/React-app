import { useEffect, useState } from "react"

const useOnline : React.FC = ()=>{
    const [isOnline, setIsOnline]= useState(true);

    useEffect(()=>{
        const handleOffline : ()=> void = () => setIsOnline(false);
        const handleOnline : ()=> void = () => setIsOnline(true);
      window.addEventListener("offline",handleOffline);
      window.addEventListener("online",handleOnline);

      return () => {
        window.removeEventListener("offline", handleOffline);
        window.removeEventListener("online", handleOnline);
       };
    },[]);

    
   return isOnline;
}

export default useOnline;