import { useNavigate } from "react-router-dom"

export default function Signup() {
    const navigate = useNavigate()

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const formData = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        navigate('/')
    }

    return (
        <div className="container">
            <h2>Sign Up Here!</h2>
            <form action="submit" onSubmit={handleFormSubmit}>
                <label htmlFor="email"><span>Email:</span>
                    <input type="email" name="email" />
                </label>
                <br />
                <label htmlFor="password"><span>Password:</span>
                    <input type="password" name="password" />
                </label>
                <br />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}