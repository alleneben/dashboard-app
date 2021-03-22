import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
    let history  = useHistory()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    function goToPage(path){
        history.push(path)
    }
    function updateUsername(e){
        setUsername(e.target.value)
    }
    function updatePassword(e){
        setPassword(e.target.value)
    }

    function submit(e){
        e.preventDefault();

        if(username == 'allen' && password == 'test'){
            // implement go to dashboard here
            goToPage('/dashboard')
        } else {
            // stay on login page
            setMessage("wrong username or password")
        }

    }

    return (
        <form>
            {message && <h1 style={{color:"red"}}>{message}</h1>}
            <div className="form-group">
                <label>Username</label>
                <input type="text" onChange={updateUsername} className="form-control"/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" onChange={updatePassword} className="form-control"/>
            </div>
            <button onClick={submit}>Submit</button>
            <button onClick={() => goToPage('/signup')}> Signup</button>         
        </form>
    )
}


export default Login; 