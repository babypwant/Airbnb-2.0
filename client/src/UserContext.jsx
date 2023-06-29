import React from "react";
import { useState } from "react";

export const UserContext = React.createContext({});

export function UserContextProvider({children}) {
    const [user, setUser] = useState(null);
    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}