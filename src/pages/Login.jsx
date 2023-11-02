import { useNavigate } from "react-router-dom"

export default function Login() {
    const navigate = useNavigate()

    const handleFormSubmit = (e) => {
        e.preventDefault()
        
        const formData = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        localStorage.setItem('myUser', JSON.stringify(formData)) //local storage only understands JSON data. 
        navigate('/')
    }

    return (
        <div className="container">
            <h2>Log In Here!</h2>
            <form action="submit" onSubmit={handleFormSubmit}>
                <label htmlFor="email"><span>Email:</span>
                    <input type="email" name="email" />
                </label>
                <br />
                <label htmlFor="password"><span>Password:</span>
                    <input type="password" name="password" />
                </label>
                <br />
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}