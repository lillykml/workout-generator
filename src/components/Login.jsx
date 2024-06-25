import { useState } from "react"


const Login = ({ loginHandler }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = (event) => {
        event.preventDefault()
        loginHandler({username, password})
        setUsername('')
        setPassword('')
    }

    return(
        <div>
            <form onSubmit={login}>
                <div>
                    <label>Username: </label>
                    <input className='input-custom'type="text" name="username" value={username} onChange={(event) => setUsername(event.target.value)}></input>
                </div>
                <div>
                    <label>Password: </label>
                    <input className='input-custom' type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)}></input>
                </div>
                <button className="btn-custom" type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login