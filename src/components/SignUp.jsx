import { useState } from "react"

const SignUp = ({ signup }) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const signupHandler = (event) => {
        event.preventDefault()
        signup(name, username, password)
        setUsername('')
        setPassword('')
        setName('')
    }

    return(
        <div>
            <form onSubmit={signupHandler}>
                <div>
                    <label>Name: </label>
                    <input className='input-custom'type="text" name="name" value={name} onChange={(event) => setName(event.target.value)}></input>
                </div>
                <div>
                    <label>Username: </label>
                    <input className='input-custom'type="text" name="username" value={username} onChange={(event) => setUsername(event.target.value)}></input>
                </div>
                <div>
                    <label>Password: </label>
                    <input className='input-custom' type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)}></input>
                </div>
                <button className="btn-custom my-4" type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp