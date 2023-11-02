import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Header(){
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(()=> {
        const userLS = localStorage.getItem('myUser')

        if(userLS){
            setLoggedIn(true)
        }
    },[])

    const navigate = useNavigate()

    const handleLogOut = () => {
        localStorage.clear()
        navigate('/login')
    }

    return(
        <header>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>

                    <li><a href="/contact">Contact</a></li>

                    {!loggedIn && <> 
                        <li><a href="/signup">Signup</a></li>
                        <li><a href="/login">Log In</a></li>
                    </>}

                    {loggedIn && <>
                    <li><a onClick={handleLogOut}>Log Out</a></li>
                    </>}

                </ul>
            </nav>
        </header>
    )
}