import { createContext } from "react";

interface User {
  name: string;
  mail: string;
}

interface userContextType {
    user : User;
}

const UserContext =createContext<userContextType>({
    user:{name : "Dummy",
        mail : "Dummy@gmail.com",
    },
})


export default UserContext;