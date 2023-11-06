import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {
    const [loggedIn, setLoggedIn] = useState(false)
    const navigate = useNavigate()

    const handleLogOut = () => {
        localStorage.clear()
        navigate('/login')
    }

    useEffect(() => {
        const userLS = localStorage.getItem('myUser')
        if (userLS) {
            setLoggedIn(true)
        }

    }, [])

    return (
        <>
            <h2>Welcome to my page!</h2>
            {loggedIn && <button onClick={handleLogOut}>Log Out</button>}
        </>
    )
}