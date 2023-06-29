import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

export const UserContext = React.createContext({});

// eslint-disable-next-line react/prop-types
export function UserContextProvider({children}) {
    const [user, setUser] = useState(null);
    const [ready, setReady] = useState(false)


    useEffect(() => {
        if (!user) {
            axios.get('/profile').then(({data}) => {
                setUser(data)
                setReady(true)
            })
        }

    }, [user]);
    return(
        <UserContext.Provider value={{user, setUser, ready}}>
            {children}
        </UserContext.Provider>
    )
}