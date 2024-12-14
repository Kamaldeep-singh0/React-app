import { createContext } from "react";

const UserContext =createContext({
    user:{name : "Dummy",
        mail : "Dummy@gmail.com",
    },
})


export default UserContext;