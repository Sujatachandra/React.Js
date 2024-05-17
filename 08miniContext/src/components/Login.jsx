import React, {useState, useContext} from 'react'
// for fetching the values from the userContext we will use the hook called usecontext 
import UserContext from '../context/UserContext'

function Login(){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // using the useContext hook
    const {setUser} = useContext(UserContext)

    // write the handlesubmit code 
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password})
    }
    return(
        <div>
            <h2>Login</h2>

            <input type='text'
             value={username}
             onChange={(e) => setUsername(e.target.value)}
             placeholder='username' />

            {"  "}    
            <input type='text'
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             placeholder='password' />
            <button onClick={handleSubmit}>Submit</button>
        </div>

    )
}
export default Login