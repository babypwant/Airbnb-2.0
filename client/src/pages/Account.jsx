import { useContext, useState } from "react"
import { UserContext } from "../UserContext"
import {Link, Navigate, useParams} from 'react-router-dom'
import axios from "axios"
import PlacesPage from "./PlacesPage"
import AccountNav from "../AccountNav"

export default function AccountPage() {
    const {ready, user, setUser} = useContext(UserContext)
    const[redirect, setRedirect] = useState(null)
    let { subpage } = useParams()

    if (subpage === undefined) {
        subpage = 'profile'
    }
    
    if(!ready) {
        return 'Loading...'
    }

    if(ready && !user && !redirect) {
        return(<Navigate to={'/login'} />)
    }

    async function logout() {
        await axios.post('/logout')
        setRedirect('/')
        setUser(null)
    }




    if(redirect) {
        return <Navigate to={redirect} />
    }

    return (
    <div>
        <AccountNav />
        {subpage === 'profile' && (
            <div className="text-center max-w-lg mx-auto">
                Logged in as {user.name} ({user.email}) <br />
                <button className="primary max-w-sm mt-2" onClick={logout}>Logout</button>
            </div>
        )}
        {
            subpage === 'places' && (
                <div>
                    <PlacesPage />
                </div>
            )
        }
    </div>
    )
}
